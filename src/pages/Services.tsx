// src/pages/Services.tsx
import { useRef, lazy, Suspense } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../content/copy'
import OrbitalArc from '../components/brand/OrbitalArc'

const Scene = lazy(() => import('../components/three/Scene'))

function OrbitGrid() {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.07 }}
      viewBox="0 0 1320 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {[220, 340, 480].map((rx, i) => (
        <ellipse key={i} cx="660" cy="300" rx={rx} ry={rx * 0.42} stroke="#2E7EFF" strokeWidth="0.6" strokeDasharray="4 10" transform={`rotate(${i * 9}, 660, 300)`} />
      ))}
    </svg>
  )
}

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <main id="main-content" aria-label="Galac.ai services">
      {/* Hero */}
      <section
        data-theme="light"
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, var(--cultured) 0%, var(--platinum) 100%)',
          paddingTop: 140,
          paddingBottom: 80,
          paddingInline: 'var(--outer)',
          overflow: 'hidden',
        }}
      >
        <OrbitGrid />
        <OrbitalArc
          style={{ position: 'absolute', top: -60, right: -80 } as React.CSSProperties}
          size={500}
          opacity={0.1}
          animated={false}
        />

        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 11, color: 'var(--azure)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace', marginBottom: 20 }}>
                Services
              </p>
              <motion.h1
                className="text-display-1"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontWeight: 400, color: 'var(--rich-black)', marginBottom: 24 }}
              >
                {SERVICES.hero.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontSize: 'clamp(16px,1.2vw,18px)', color: 'var(--text-muted-light)', lineHeight: 1.65, maxWidth: '48ch', letterSpacing: '-0.02em', marginBottom: 36 }}
              >
                {SERVICES.hero.body}
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link to="/contact" className="btn btn-primary">
                  {SERVICES.cta.label}
                </Link>
              </motion.div>
            </div>

            {/* Compact 3D scene */}
            <div style={{ height: 360 }} aria-hidden="true">
              <Suspense fallback={null}>
                <Scene phase="hero" style={{ width: '100%', height: '100%' }} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Services areas */}
      <section
        ref={ref}
        data-theme="light-alt"
        style={{
          position: 'relative',
          background: 'var(--platinum)',
          paddingBlock: 'var(--section-y-lg)',
          paddingInline: 'var(--outer)',
          overflow: 'hidden',
        }}
      >
        <OrbitGrid />
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {SERVICES.areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hairline" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, padding: '48px 0', alignItems: 'start' }}>
                <h2 style={{ fontSize: 'clamp(28px,3.5vw,52px)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--rich-black)' }}>
                  {area.headline}
                </h2>
                <div>
                  <p style={{ fontSize: 'clamp(16px,1.2vw,18px)', color: 'var(--text-muted-light)', lineHeight: 1.65, letterSpacing: '-0.02em', marginBottom: 24, maxWidth: '44ch' }}>
                    {area.body}
                  </p>
                  {/* Placeholder slot */}
                  <div
                    data-placeholder={area.placeholder}
                    style={{ padding: '24px', minHeight: 80, background: 'var(--cultured)', borderRadius: 12, border: '1px dashed rgba(46,126,255,0.2)' }}
                  >
                    <p style={{ fontSize: 13, color: 'var(--text-muted-light)' }}>
                      Detailed service description — to be provided by client.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="hairline" />
        </div>
      </section>

      {/* CTA */}
      <section
        data-theme="light"
        style={{
          background: 'var(--cultured)',
          paddingBlock: 'var(--section-y)',
          paddingInline: 'var(--outer)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px,3vw,44px)', fontWeight: 400, letterSpacing: '-0.04em', color: 'var(--rich-black)', marginBottom: 24 }}>
            Ready to connect your systems?
          </h2>
          <Link to="/contact" className="btn btn-primary" style={{ height: 56, paddingInline: 36, fontSize: 16 }}>
            {SERVICES.cta.label} <ArrowRight size={14} style={{ marginLeft: 6 }} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  )
}
