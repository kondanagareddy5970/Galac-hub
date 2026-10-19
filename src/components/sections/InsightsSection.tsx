// src/components/sections/InsightsSection.tsx
// Matching Reference Image 4: "Understand what intelligent orchestration changes."
// Replaces the old generic Research section.

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ArticleCard {
  tag: string
  title: string
  body: string
  isFeatured?: boolean
}

const ARTICLES: ArticleCard[] = [
  {
    tag: 'ARTICLE 01',
    title: 'What Is Enterprise AI Orchestration?',
    body: 'A clear introduction to the layer connecting systems, workflows, decisions, and AI agents.',
  },
  {
    tag: 'ARTICLE 02',
    title: 'Why SAP And Salesforce Workflows Break',
    body: 'The operational cost of disconnected data, manual handoffs, and inflexible integrations.',
  },
  {
    tag: 'ARTICLE 03',
    title: 'Integration Is Not Orchestration',
    body: 'Why connecting two systems is different from making them operate intelligently.',
  },
  {
    tag: 'ARTICLE 04',
    title: 'How To Choose Your First AI Workflow',
    body: 'A framework for identifying processes with clear rules, measurable friction, and meaningful business value.',
    isFeatured: true,
  },
]

export default function InsightsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="insights"
      ref={ref}
      data-theme="dark"
      aria-label="Enterprise AI insights and articles"
      style={{
        position: 'relative',
        background: '#050914',
        paddingTop: 120,
        paddingBottom: 120,
        paddingInline: 'var(--outer)',
        overflow: 'hidden',
      }}
    >
      {/* Blue Atmospheric Radial Gradient Glow on the right matching Image 4 */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '65vw',
          height: '75vh',
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(0, 112, 242, 0.28) 0%, rgba(0, 180, 255, 0.08) 45%, transparent 70%)',
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
            Insights &amp; Architecture
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
            Understand what intelligent<br />
            orchestration changes.
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

        {/* 4 Articles Grid */}
        <div
          className="articles-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
            alignItems: 'stretch',
          }}
        >
          {ARTICLES.map((article, i) => {
            const isFeatured = article.isFeatured

            return (
              <motion.article
                key={article.tag}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.12 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  boxShadow: isFeatured
                    ? '0 28px 70px rgba(0, 112, 242, 0.35), 0 0 40px rgba(0, 180, 255, 0.2)'
                    : '0 24px 60px rgba(0, 0, 0, 0.5), 0 0 24px rgba(0, 112, 242, 0.12)',
                  borderColor: isFeatured ? 'rgba(0, 200, 255, 0.6)' : 'rgba(255, 255, 255, 0.22)',
                }}
                style={{
                  position: 'relative',
                  borderRadius: 22,
                  padding: '38px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 340,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  background: isFeatured
                    ? 'linear-gradient(180deg, rgba(0, 112, 242, 0.2) 0%, rgba(10, 18, 36, 0.8) 100%)'
                    : 'rgba(255, 255, 255, 0.035)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: isFeatured
                    ? '1px solid rgba(0, 180, 255, 0.38)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isFeatured
                    ? '0 20px 60px rgba(0, 112, 242, 0.24), inset 0 1px 1px rgba(255, 255, 255, 0.2)'
                    : '0 12px 36px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Top Section: Tag and Divider Line */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontFamily: 'Geist Mono, monospace',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: isFeatured ? '#00E5FF' : 'rgba(255, 255, 255, 0.55)',
                        fontWeight: 600,
                      }}
                    >
                      {article.tag}
                    </span>
                    <ArrowUpRight
                      size={16}
                      color={isFeatured ? '#00E5FF' : 'rgba(255, 255, 255, 0.35)'}
                      style={{ opacity: 0.7 }}
                    />
                  </div>

                  {/* Horizontal Divider Line matching Image 4 */}
                  <div
                    style={{
                      width: '100%',
                      height: 1,
                      background: isFeatured
                        ? 'rgba(0, 180, 255, 0.35)'
                        : 'rgba(255, 255, 255, 0.12)',
                      margin: '36px 0 24px',
                    }}
                  />

                  {/* Article Title */}
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                      letterSpacing: '-0.03em',
                      color: '#FFFFFF',
                      lineHeight: 1.25,
                      marginBottom: 16,
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Article Excerpt */}
                  <p
                    style={{
                      fontSize: 14,
                      color: isFeatured
                        ? 'rgba(255, 255, 255, 0.88)'
                        : 'rgba(255, 255, 255, 0.55)',
                      lineHeight: 1.6,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {article.body}
                  </p>
                </div>

                {/* Subtle read cue */}
                <div style={{ marginTop: 28 }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: 'Geist Mono, monospace',
                      color: isFeatured ? '#00E5FF' : 'rgba(255, 255, 255, 0.4)',
                      letterSpacing: '0.04em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    Read article &rarr;
                  </span>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
