// src/components/sections/OrchestrationPillarsSection.tsx
// Matching Reference Image 3: "Connect the systems you have. Orchestrate the work between them."

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Workflow, Bot, LayoutDashboard } from 'lucide-react'

interface PillarCard {
  id: string
  title: string
  body: string
  icon: React.ReactNode
  isFeatured?: boolean
}

const PILLARS: PillarCard[] = [
  {
    id: 'cross-platform',
    title: 'Cross-Platform',
    body: 'Unified data schema and execution context spanning SAP and Salesforce without duplicating models.',
    icon: <Layers size={22} color="#FFFFFF" strokeWidth={1.8} />,
  },
  {
    id: 'intelligent-automation',
    title: 'Intelligent Automation',
    body: 'Trigger actions, route decisions, and coordinate multi-step workflows across both systems.',
    icon: <Workflow size={22} color="#FFFFFF" strokeWidth={2} />,
    isFeatured: true,
  },
  {
    id: 'configurable-agents',
    title: 'Configurable AI agents',
    body: 'Deploy goal-oriented agents that respect enterprise authorization, audit logs, and compliance boundaries.',
    icon: <Bot size={22} color="#FFFFFF" strokeWidth={1.8} />,
  },
  {
    id: 'enterprise-visibility',
    title: 'Enterprise Visibility',
    body: 'End-to-end tracing and live telemetry for every cross-platform event, approval, and transaction.',
    icon: <LayoutDashboard size={22} color="#FFFFFF" strokeWidth={1.8} />,
  },
]

export default function OrchestrationPillarsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [activeCardId, setActiveCardId] = useState<string>('intelligent-automation')

  return (
    <section
      id="orchestration"
      ref={ref}
      data-theme="dark"
      aria-label="Orchestrate enterprise systems"
      style={{
        position: 'relative',
        background: '#040711',
        paddingTop: 120,
        paddingBottom: 120,
        paddingInline: 'var(--outer)',
        overflow: 'hidden',
      }}
    >
      {/* Background Graphic & Ambient Glow matching image */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/backgrounds/orbital-ribbon-4k.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.45,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 60% 40%, rgba(0, 112, 242, 0.22) 0%, rgba(4, 7, 17, 0.92) 75%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <p
            style={{
              fontSize: 11,
              color: '#00B4FF',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'Geist Mono, monospace',
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            Orchestration Layer
          </p>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.4vw, 62px)',
              fontWeight: 400,
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
              lineHeight: 1.05,
              maxWidth: '22ch',
            }}
          >
            Connect the systems you have.<br />
            Orchestrate the work between them.
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              color: 'rgba(255, 255, 255, 0.65)',
              maxWidth: '56ch',
              lineHeight: 1.65,
              marginTop: 18,
            }}
          >
            Galac.ai sits above SAP and Salesforce, bringing shared context, automation,
            and decision intelligence into the processes that move between both platforms.
          </p>
        </motion.div>

        {/* Section Underline Divider */}
        <div className="section-underline-dark" />

        {/* 4 Tall Cards Grid */}
        <div
          className="pillars-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
            alignItems: 'stretch',
          }}
        >
          {PILLARS.map((card, i) => {
            const isHighlighted = activeCardId === card.id

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.12 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActiveCardId(card.id)}
                whileHover={{ y: -8 }}
                style={{
                  position: 'relative',
                  borderRadius: 22,
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 380,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition:
                    'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
                  background: isHighlighted
                    ? 'linear-gradient(150deg, #1D63ED 0%, #1550C7 100%)'
                    : 'rgba(12, 18, 30, 0.85)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: isHighlighted
                    ? '1px solid rgba(255, 255, 255, 0.28)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isHighlighted
                    ? '0 24px 60px rgba(29, 99, 237, 0.45), inset 0 1px 1px rgba(255,255,255,0.3)'
                    : '0 12px 36px rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* Top: Icon Badge */}
                <div>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: isHighlighted
                        ? 'rgba(255, 255, 255, 0.22)'
                        : 'rgba(255, 255, 255, 0.06)',
                      border: isHighlighted
                        ? '1px solid rgba(255, 255, 255, 0.35)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    {card.icon}
                  </div>
                </div>

                {/* Bottom: Divider, Title, and Description */}
                <div>
                  <div
                    style={{
                      width: '100%',
                      height: 1,
                      background: isHighlighted
                        ? 'rgba(255, 255, 255, 0.28)'
                        : 'rgba(255, 255, 255, 0.1)',
                      marginBottom: 24,
                    }}
                  />

                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      letterSpacing: '-0.03em',
                      color: '#FFFFFF',
                      marginBottom: 12,
                      lineHeight: 1.25,
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 14,
                      color: isHighlighted
                        ? 'rgba(255, 255, 255, 0.92)'
                        : 'rgba(255, 255, 255, 0.55)',
                      lineHeight: 1.6,
                      letterSpacing: '-0.01em',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
