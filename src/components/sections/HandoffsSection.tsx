// src/components/sections/HandoffsSection.tsx
// Matching Reference Image 2: "Your platforms work. The handoffs between them do not."

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Unlink, ArrowLeftRight, Clock, Sparkles } from 'lucide-react'

const CARDS = [
  {
    id: 'disconnected-data',
    title: 'Disconnected Data',
    body: 'Customer, financial, inventory, and operational information remains separated across systems limiting visibility and slowing decisions.',
    icon: <Unlink size={22} color="#0070F2" strokeWidth={1.8} />,
  },
  {
    id: 'manual-handoffs',
    title: 'Manual Handoffs',
    body: 'Teams re-enter information, chase approvals, reconcile records, and coordinate work that should move automatically.',
    icon: <ArrowLeftRight size={22} color="#0070F2" strokeWidth={1.8} />,
  },
  {
    id: 'slow-customization',
    title: 'Slow Customization',
    body: 'Small process changes become lengthy integration projects involving developers, consultants, and multiple system owners.',
    icon: <Clock size={22} color="#0070F2" strokeWidth={1.8} />,
  },
  {
    id: 'context-blind-ai',
    title: 'Context-Blind AI',
    body: 'Generic AI tools generate answers, but rarely understand the systems, rules, permissions, and workflows behind enterprise operations.',
    icon: <Sparkles size={22} color="#0070F2" strokeWidth={1.8} />,
  },
]

export default function HandoffsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="handoffs"
      ref={ref}
      data-theme="light"
      aria-label="Enterprise platform handoffs"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)',
        paddingTop: 110,
        paddingBottom: 110,
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
          style={{ marginBottom: 60 }}
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
            The Enterprise Challenge
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
            Your platforms work.<br />
            The handoffs between them do not.
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              color: 'var(--text-muted-light)',
              maxWidth: '56ch',
              lineHeight: 1.65,
              marginTop: 18,
            }}
          >
            SAP and Salesforce hold critical business context but the processes connecting
            them rely on manual work, fragmented data, and costly customization.
          </p>
        </motion.div>

        {/* Section Underline Divider */}
        <div className="section-underline-light" />

        {/* 4 Cards Grid */}
        <div
          className="handoffs-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: 0.12 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 48px rgba(0, 112, 242, 0.08)',
                borderColor: 'rgba(0, 112, 242, 0.3)',
              }}
              style={{
                background: '#FFFFFF',
                borderRadius: 20,
                border: '1px solid rgba(0, 0, 0, 0.08)',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              {/* Icon badge */}
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  background: 'rgba(0, 112, 242, 0.06)',
                  border: '1px solid rgba(0, 112, 242, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                }}
              >
                {card.icon}
              </div>

              {/* Thin divider line */}
              <div
                style={{
                  width: '100%',
                  height: 1,
                  background: 'rgba(0, 0, 0, 0.08)',
                  marginBottom: 22,
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontSize: 19,
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  color: 'var(--rich-black)',
                  marginBottom: 12,
                  lineHeight: 1.25,
                }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--text-muted-light)',
                  lineHeight: 1.65,
                  letterSpacing: '-0.01em',
                }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
