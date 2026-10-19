// src/components/sections/DigitalScreenShowcase.tsx
// 5.0 APPLICATIONS · DIGITAL SCREEN
// Exact recreation of the Brand Guidelines architectural billboard showcase
// Combines 4K architectural terminal environment with interactive high-clarity digital screen

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Maximize2, Sparkles, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../brand/Logo'

export default function DigitalScreenShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.25 })
  const [activeView, setActiveView] = useState<'architectural' | 'direct'>('architectural')

  return (
    <section
      ref={sectionRef}
      id="digital-screen-showcase"
      data-theme="dark"
      aria-label="Galac.ai in enterprise scale — 5.0 Applications Digital Screen"
      style={{
        position: 'relative',
        background: '#090C10',
        padding: 'clamp(80px, 10vw, 140px) var(--outer)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(46, 126, 255, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header Eyebrow & Title */}
        <div style={{ marginBottom: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--azure)',
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              <Sparkles size={12} strokeWidth={2} />
              <span>5.0 Applications · Digital Screen</span>
            </div>
            <h2
              style={{
                fontFamily: "'Geist Variable', 'Geist', sans-serif",
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                color: '#F7F7F7',
                lineHeight: 1.15,
                maxWidth: '24ch',
              }}
            >
              Where Enterprise Systems Think Together
            </h2>
          </div>

          {/* View Mode Switcher */}
          <div
            style={{
              display: 'inline-flex',
              padding: 4,
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              gap: 4,
            }}
          >
            <button
              onClick={() => setActiveView('architectural')}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: 'none',
                background: activeView === 'architectural' ? 'var(--azure)' : 'transparent',
                color: '#ffffff',
                fontSize: 12,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
            >
              Architectural Terminal
            </button>
            <button
              onClick={() => setActiveView('direct')}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: 'none',
                background: activeView === 'direct' ? 'var(--azure)' : 'transparent',
                color: '#ffffff',
                fontSize: 12,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
            >
              4K Screen Graphic
            </button>
          </div>
        </div>

        {/* 4K Presentation Billboard Frame */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            maxHeight: '740px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            background: '#040609',
          }}
        >
          {activeView === 'architectural' ? (
            /* View 1: 4K Architectural Escalator Terminal Environment */
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img
                src="/backgrounds/escalator-terminal-4k.jpg"
                alt="Galac.ai Enterprise Digital Screen Installation in Architectural Terminal"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="eager"
              />

              {/* Interactive Screen Overlay with Brand Typography */}
              <div
                style={{
                  position: 'absolute',
                  top: '38%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '23%',
                  height: '24%',
                  borderRadius: '3px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  pointerEvents: 'none',
                  background: 'rgba(0, 2, 5, 0.55)',
                  boxShadow: 'inset 0 0 16px rgba(46, 126, 255, 0.35)',
                }}
              >
                <div>
                  <span style={{ fontSize: 7, color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '0.05em' }}>
                    Explore More
                  </span>
                  <p
                    style={{
                      fontFamily: "'Geist Variable', 'Geist', sans-serif",
                      fontSize: 'clamp(8px, 0.8vw, 11px)',
                      color: '#ffffff',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      marginTop: 2,
                    }}
                  >
                    Where Enterprise Systems Think Together
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 6, color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '0.04em' }}>
                    Galac Intelligence
                  </span>
                  <span style={{ fontSize: 6, color: 'var(--azure)' }}>
                    galac.ai
                  </span>
                </div>
              </div>

              {/* Watermark badge top left */}
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  left: 28,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  background: 'rgba(9, 12, 16, 0.72)',
                  backdropFilter: 'blur(12px)',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Logo variant="mark" tone="white" height={16} />
                <span style={{ fontSize: 11, color: '#F7F7F7', letterSpacing: '0.02em', fontWeight: 500 }}>
                  Galac.ai · Enterprise Installation
                </span>
              </div>
            </div>
          ) : (
            /* View 2: Direct 4K Screen Graphic with Exact Brand Copy */
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/backgrounds/orbital-ribbon-4k.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(28px, 5vw, 64px)',
              }}
            >
              {/* Top Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textTransform: 'uppercase',
                  }}
                >
                  Explore More
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: 'var(--azure)',
                    fontFamily: 'monospace',
                    letterSpacing: '0.06em',
                  }}
                >
                  galac.ai
                </span>
              </div>

              {/* Center Content */}
              <div style={{ maxWidth: '620px', zIndex: 2 }}>
                <h3
                  style={{
                    fontFamily: "'Geist Variable', 'Geist', sans-serif",
                    fontSize: 'clamp(28px, 4.5vw, 56px)',
                    fontWeight: 400,
                    letterSpacing: '-0.035em',
                    lineHeight: 1.05,
                    color: '#ffffff',
                    marginBottom: 20,
                  }}
                >
                  Where Enterprise Systems Think Together
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(14px, 1.2vw, 17px)',
                    color: 'rgba(247, 247, 247, 0.85)',
                    lineHeight: 1.6,
                    letterSpacing: '-0.015em',
                    maxWidth: '48ch',
                  }}
                >
                  Most enterprise systems struggle because of disconnected workflows and fragmented data.
                  Galac.ai creates a unified intelligence layer that connects SAP and Salesforce, enabling
                  smarter automation, clearer insights, and more efficient operations.
                </p>
              </div>

              {/* Bottom Row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  paddingTop: 20,
                  zIndex: 2,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Logo variant="mark" tone="white" height={24} />
                  <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    Galac Intelligence
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="btn btn-azure"
                  style={{ height: 42, paddingInline: 24, fontSize: 13 }}
                >
                  Get Started <ArrowRight size={14} style={{ marginLeft: 6 }} />
                </Link>
              </div>
            </div>
          )}

          {/* Resolution Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 24,
              background: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(8px)',
              padding: '4px 10px',
              borderRadius: '6px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 11,
              color: 'rgba(255, 255, 255, 0.75)',
              fontFamily: 'monospace',
              pointerEvents: 'none',
              zIndex: 3,
            }}
          >
            <Maximize2 size={11} color="var(--azure)" />
            <span>4K UHD CLARITY</span>
          </div>
        </motion.div>

        {/* Caption beneath frame */}
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            fontSize: 12,
            color: 'var(--text-muted-dark)',
          }}
        >
          <p>
            Digital Screen application mockup as specified in Section 5.0 of the Galac.ai Brand Guidelines.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <span>Native 4K rendering</span>
            <span>·</span>
            <span>Geist typography</span>
            <span>·</span>
            <span>Luminous orbital curve</span>
          </div>
        </div>
      </div>
    </section>
  )
}
