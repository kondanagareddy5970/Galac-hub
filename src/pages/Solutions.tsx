// src/pages/Solutions.tsx
import { useRef, lazy, Suspense } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SOLUTIONS } from '../content/copy'
import OrbitalArc from '../components/brand/OrbitalArc'

const Scene = lazy(() => import('../components/three/Scene'))

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <main id="main-content" aria-label="Galac.ai solutions">
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
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <OrbitalArc style={{ position: 'absolute', top: -80, right: -100 } as React.CSSProperties} size={600} opacity={0.08} animated={false} />

        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 11, color: 'var(--azure)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace', marginBottom: 20 }}>
                Solutions
              </p>
              <motion.h1
                className="text-display-1"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontWeight: 400, color: 'var(--rich-black)', marginBottom: 24 }}
              >
                {SOLUTIONS.hero.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontSize: 'clamp(16px,1.2vw,18px)', color: 'var(--text-muted-light)', lineHeight: 1.65, maxWidth: '48ch', letterSpacing: '-0.02em', marginBottom: 36 }}
              >
                {SOLUTIONS.hero.body}
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link to="/contact" className="btn btn-primary">
                  Get Started <ArrowRight size={14} style={{ marginLeft: 6 }} strokeWidth={1.5} />
                </Link>
              </motion.div>
            </div>

            {/* Animated flow diagram */}
            <div style={{ height: 380 }} aria-hidden="true">
              <Suspense fallback={null}>
                <Scene phase="orchestration" style={{ width: '100%', height: '100%' }} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Body text */}
      <section
        data-theme="light-alt"
        style={{ background: 'var(--platinum)', paddingBlock: 80, paddingInline: 'var(--outer)' }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(18px,2vw,26px)', fontWeight: 400, letterSpacing: '-0.03em', color: 'var(--rich-black)', lineHeight: 1.4 }}>
            {SOLUTIONS.body}
          </p>
        </div>
      </section>

      {/* Solution placeholder slots */}
      <section
        ref={ref}
        data-theme="light"
        style={{ background: 'var(--cultured)', paddingBlock: 'var(--section-y)', paddingInline: 'var(--outer)' }}
      >
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SOLUTIONS.placeholderSlots.map((slot, i) => (
              <motion.div
                key={slot.id}
                data-placeholder={`solution-category-${i + 1}`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '40px 32px',
                  background: 'var(--platinum)',
                  borderRadius: 20,
                  border: '1px dashed rgba(46,126,255,0.25)',
                  minHeight: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--azure-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--azure)', opacity: 0.6 }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--rich-black)' }}>
                  {slot.label}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted-light)' }}>
                  Solution description — to be provided by client.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
