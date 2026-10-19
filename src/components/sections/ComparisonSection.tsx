// src/components/sections/ComparisonSection.tsx
// Matching Reference Image 1: "Built for the space between enterprise systems."

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ComparisonRow {
  feature: string
  galac: string
  traditional: string
  generic: string
}

const ROWS: ComparisonRow[] = [
  {
    feature: 'Deployment',
    galac: 'Weeks',
    traditional: '12–18 months',
    generic: '3–6 months',
  },
  {
    feature: 'Platform context',
    galac: 'Partial',
    traditional: 'Partial',
    generic: 'Generic',
  },
  {
    feature: 'Cross-system intelligence',
    galac: 'Custom-built',
    traditional: 'Custom-built',
    generic: 'Limited',
  },
  {
    feature: 'Enterprise control',
    galac: 'Varies',
    traditional: 'Varies',
    generic: 'Basic',
  },
  {
    feature: 'Infrastructure approach',
    galac: 'Custom development',
    traditional: 'Custom development',
    generic: 'Disconnected from workflows',
  },
]

export default function ComparisonSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="comparison"
      ref={ref}
      data-theme="light"
      aria-label="Platform comparison matrix"
      style={{
        position: 'relative',
        background: '#F8F9FB',
        paddingTop: 120,
        paddingBottom: 130,
        paddingInline: 'var(--outer)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 68 }}
        >
          <p
            style={{
              fontSize: 11,
              color: 'var(--azure)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'Geist Mono, monospace',
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            The Difference
          </p>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.4vw, 62px)',
              fontWeight: 400,
              letterSpacing: '-0.04em',
              color: 'var(--rich-black)',
              lineHeight: 1.05,
              maxWidth: '22ch',
            }}
          >
            Built for the space between<br />
            enterprise systems.
          </h2>
        </motion.div>

        {/* Section Underline Divider */}
        <div className="section-underline-light" />

        {/* Comparison Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            overflowX: 'auto',
            paddingBottom: 8,
          }}
          className="comparison-scroll-container"
        >
          <div
            style={{
              minWidth: 780,
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
              position: 'relative',
            }}
          >
            {/* Elevated Galac.ai Dark Background Column spanning full height */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 'calc(1.2 / 4.2 * 100%)',
                width: 'calc(1 / 4.2 * 100%)',
                background: '#11161F',
                borderRadius: 20,
                boxShadow: '0 20px 50px rgba(0, 2, 15, 0.18)',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />

            {/* Table Header Row */}
            <div
              style={{
                display: 'contents',
              }}
            >
              {/* Col 1: Empty */}
              <div style={{ padding: '32px 24px 28px 0' }} />

              {/* Col 2: Galac.ai Header */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '36px 24px 28px',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                    color: '#FFFFFF',
                  }}
                >
                  Galac.ai
                </span>
              </div>

              {/* Col 3: Traditional SI Header */}
              <div
                style={{
                  padding: '36px 24px 28px',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    color: '#0A0D14',
                  }}
                >
                  Traditional SI
                </span>
              </div>

              {/* Col 4: Generic AI Header */}
              <div
                style={{
                  padding: '36px 24px 28px',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    color: '#0A0D14',
                  }}
                >
                  Generic AI
                </span>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row) => (
              <div
                key={row.feature}
                style={{
                  display: 'contents',
                }}
              >
                {/* Feature Label */}
                <div
                  style={{
                    padding: '28px 24px 28px 0',
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 16,
                    fontWeight: 500,
                    color: 'var(--rich-black)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {row.feature}
                </div>

                {/* Galac.ai Value */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '28px 24px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textAlign: 'center',
                  }}
                >
                  {row.galac}
                </div>

                {/* Traditional SI Value */}
                <div
                  style={{
                    padding: '28px 24px',
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    fontWeight: 400,
                    color: '#4B5563',
                    textAlign: 'center',
                  }}
                >
                  {row.traditional}
                </div>

                {/* Generic AI Value */}
                <div
                  style={{
                    padding: '28px 24px',
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    fontWeight: 400,
                    color: '#4B5563',
                    textAlign: 'center',
                  }}
                >
                  {row.generic}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
