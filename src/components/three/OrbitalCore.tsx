// src/components/three/OrbitalCore.tsx
// The central 3D scene: two intersecting orbital rings with a four-pointed star core
// Materials: MeshPhysicalMaterial, satin brushed steel, frosted glass, matte Azure enamel
// No bloom, no neon — matte, satin, restrained lighting only

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface OrbitalCoreProps {
  scrollProgress?: number
  mouseX?: number
  mouseY?: number
  phase?: 'hero' | 'disconnect' | 'orchestration' | 'layer'
  introProgress?: number
}

// Helper: build a torus with angled rotation
function OrbitalRing({
  rotationX = 0,
  rotationZ = 0,
  color = '#D0D4DA',
  roughness = 0.35,
  metalness = 0.7,
  opacity = 1,
  segments = 128,
}: {
  rotationX?: number
  rotationZ?: number
  color?: string
  roughness?: number
  metalness?: number
  opacity?: number
  segments?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.06
    }
  })

  return (
    <mesh ref={meshRef} rotation={[rotationX, 0, rotationZ]}>
      <torusGeometry args={[1.8, 0.024, 24, segments]} />
      <meshPhysicalMaterial
        ref={matRef}
        color={color}
        roughness={roughness}
        metalness={metalness}
        clearcoat={0.8}
        clearcoatRoughness={0.2}
        transparent={opacity < 1}
        opacity={opacity}
        envMapIntensity={0.6}
      />
    </mesh>
  )
}

// Node sphere on the ring
function RingNode({ position }: { position: [number, number, number]; label?: string }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshPhysicalMaterial
          color="#2E7EFF"
          roughness={0.2}
          metalness={0.1}
          clearcoat={0.9}
        />
      </mesh>
    </group>
  )
}

// Four-pointed star
function StarCore({ brightness = 0.5 }: { brightness?: number }) {
  const points = useMemo(() => {
    const shape = new THREE.Shape()
    const s = 0.14
    const inner = 0.055

    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4
      const r = i % 2 === 0 ? s : inner
      const x = Math.cos(angle - Math.PI / 2) * r
      const y = Math.sin(angle - Math.PI / 2) * r
      if (i === 0) shape.moveTo(x, y)
      else shape.lineTo(x, y)
    }
    shape.closePath()
    return shape
  }, [])

  return (
    <group>
      {/* Front face */}
      <mesh rotation={[0, 0, Math.PI / 8]}>
        <extrudeGeometry
          args={[
            points,
            { depth: 0.04, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 4 },
          ]}
        />
        <meshPhysicalMaterial
          color="#2E7EFF"
          roughness={0.15}
          metalness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#1F5FD1"
          emissiveIntensity={brightness * 0.3}
        />
      </mesh>
    </group>
  )
}

// Data packet travelling along a ring
function DataPacket({ t, ring = 0 }: { t: number; ring?: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const speed = ring === 0 ? 0.3 : -0.22

  useFrame(() => {
    if (!ref.current) return
    const progress = (Date.now() * 0.0003 * speed + t) % 1
    const angle = progress * Math.PI * 2
    const rx = 1.8
    const ry = ring === 0 ? 0.65 : 0.55
    const tilt = ring === 0 ? -0.62 : 0.62

    const x = Math.cos(angle) * rx
    const y = Math.sin(angle) * ry
    const z = 0

    // Apply ring tilt
    ref.current.position.x = x
    ref.current.position.y = y * Math.cos(tilt) - z * Math.sin(tilt)
    ref.current.position.z = y * Math.sin(tilt) + z * Math.cos(tilt)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshPhysicalMaterial
        color="#2E7EFF"
        roughness={0.2}
        metalness={0.1}
        opacity={0.6}
        transparent
      />
    </mesh>
  )
}

export default function OrbitalCore({
  mouseX = 0,
  mouseY = 0,
  phase = 'hero',
  introProgress = 0,
}: OrbitalCoreProps) {
  const groupRef = useRef<THREE.Group>(null)
  const ring1Ref = useRef<THREE.Group>(null)
  const ring2Ref = useRef<THREE.Group>(null)

  // Phase-based ring separation for the disconnect section
  const ringOffset = phase === 'disconnect' ? 0.6 : 0
  const starBrightness = phase === 'orchestration' ? 0.9 : 0.4

  useFrame(() => {
    if (!groupRef.current) return

    // Pointer parallax (max 4 degrees = 0.07 rad)
    const targetRotX = mouseY * 0.07
    const targetRotY = mouseX * 0.07

    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05

    // Slow idle drift
    groupRef.current.rotation.y += 0.002

    // Intro scale
    const scale = 0.4 + introProgress * 0.6
    groupRef.current.scale.setScalar(scale)

    // Opacity driven by intro
    groupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhysicalMaterial) {
        child.material.opacity = Math.min(1, introProgress * 2)
        child.material.transparent = introProgress < 1
      }
    })
  })

  // Lighting
  return (
    <group ref={groupRef}>
      {/* Studio lighting — soft boxes, no colored lights */}
      <ambientLight intensity={0.4} color="#F7F7F7" />
      <directionalLight position={[4, 6, 3]} intensity={1.2} color="#ffffff" castShadow={false} />
      <directionalLight position={[-3, 2, -4]} intensity={0.5} color="#e8edf5" />
      <pointLight position={[0, 0, 3]} intensity={0.3} color="#F7F7F7" />

      {/* Ring 1 — tilted left */}
      <group ref={ring1Ref} position={[ringOffset, 0, 0]}>
        <OrbitalRing rotationX={Math.PI / 5} rotationZ={-0.3} color="#C8CDD5" roughness={0.35} metalness={0.75} />
        <RingNode position={[-1.8, 0, 0]} label="SAP" />
        {[0, 0.33, 0.66].map((t) => (
          <DataPacket key={t} t={t} ring={0} />
        ))}
      </group>

      {/* Ring 2 — tilted right */}
      <group ref={ring2Ref} position={[-ringOffset, 0, 0]}>
        <OrbitalRing rotationX={-Math.PI / 5} rotationZ={0.3} color="#BCC4CE" roughness={0.4} metalness={0.65} />
        <RingNode position={[1.8, 0, 0]} label="Salesforce" />
        {[0.16, 0.5, 0.83].map((t) => (
          <DataPacket key={t} t={t} ring={1} />
        ))}
      </group>

      {/* Star core — matte Azure enamel */}
      <group position={[0, 0, 0]}>
        <StarCore brightness={starBrightness} />
      </group>

      {/* Inner orbit track */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.36, 0.006, 8, 64]} />
        <meshPhysicalMaterial color="#2E7EFF" roughness={0.3} metalness={0.1} opacity={0.25} transparent />
      </mesh>
    </group>
  )
}
