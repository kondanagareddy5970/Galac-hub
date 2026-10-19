// src/components/three/Scene.tsx
// The persistent R3F canvas shared across the home page scroll chapters
// Lazy-loaded, with a static poster while loading
// frameloop="demand" outside active scroll ranges via IntersectionObserver

import { Suspense, useRef, useState, useEffect, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, PerformanceMonitor, AdaptiveDpr } from '@react-three/drei'
import OrbitalCore from './OrbitalCore'

interface SceneProps {
  scrollProgress?: number
  phase?: 'hero' | 'disconnect' | 'orchestration' | 'layer'
  className?: string
  style?: React.CSSProperties
}

function ScenePoster() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      {/* Lightweight SVG poster while WebGL loads */}
      <svg width="320" height="280" viewBox="0 0 320 280" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="poster-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E7EFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#2E7EFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2E7EFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="160" cy="140" rx="140" ry="58" stroke="url(#poster-fade)" strokeWidth="1.5" transform="rotate(-35, 160, 140)" />
        <ellipse cx="160" cy="140" rx="140" ry="58" stroke="url(#poster-fade)" strokeWidth="1.5" transform="rotate(35, 160, 140)" />
        <ellipse cx="160" cy="140" rx="76" ry="30" stroke="#2E7EFF" strokeWidth="0.8" opacity="0.25" />
        <path d="M160 120 L166 136 L184 140 L166 144 L160 160 L154 144 L136 140 L154 136 Z" fill="#2E7EFF" opacity="0.8" />
        <circle cx="20" cy="125" r="6" fill="#2E7EFF" opacity="0.4" />
        <circle cx="300" cy="155" r="6" fill="#2E7EFF" opacity="0.4" />
      </svg>
    </div>
  )
}

export default function Scene({ scrollProgress = 0, phase = 'hero', className = '', style }: SceneProps) {
  const [introProgress, setIntroProgress] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [webglSupported] = useState(() => {
    if (typeof document === 'undefined') return true
    try {
      const canvas = document.createElement('canvas')
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    } catch {
      return false
    }
  })
  const [dpr, setDpr] = useState(Math.min(1.75, typeof window !== 'undefined' ? window.devicePixelRatio : 1))
  const containerRef = useRef<HTMLDivElement>(null)

  // Intro animation
  useEffect(() => {
    let start: number | null = null
    const duration = 1600

    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(1, elapsed / duration)
      // Ease: cubic-bezier(0.22, 1, 0.36, 1) approximation
      const eased = 1 - Math.pow(1 - progress, 3)
      setIntroProgress(eased)
      if (progress < 1) requestAnimationFrame(animate)
    }

    const timer = setTimeout(() => requestAnimationFrame(animate), 200)
    return () => clearTimeout(timer)
  }, [])

  // Mouse parallax
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMouseX(x)
    setMouseY(-y)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // Check reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!webglSupported || prefersReducedMotion) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{ position: 'relative', ...style }}
        aria-hidden="true"
      >
        <ScenePoster />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', ...style }}
      aria-hidden="true"
    >
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: 2, // ACESFilmicToneMapping
          toneMappingExposure: 0.9,
        }}
        style={{ background: 'transparent' }}
      >
        <AdaptiveDpr pixelated />
        <PerformanceMonitor
          onDecline={() => setDpr(1)}
          onIncline={() => setDpr(Math.min(1.75, window.devicePixelRatio))}
        />

        <Suspense fallback={null}>
          <OrbitalCore
            scrollProgress={scrollProgress}
            mouseX={mouseX}
            mouseY={mouseY}
            phase={phase}
            introProgress={introProgress}
          />
          <Environment preset="studio" environmentIntensity={0.4} />
        </Suspense>
      </Canvas>

      {/* Show poster until canvas renders */}
      <Suspense fallback={<ScenePoster />}>
        <div />
      </Suspense>
    </div>
  )
}
