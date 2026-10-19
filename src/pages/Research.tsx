// src/pages/Research.tsx
// Editorial shell — placeholder cards styled as final, no fabricated content

import { motion } from 'framer-motion'
import { RESEARCH } from '../content/copy'
import OrbitalArc from '../components/brand/OrbitalArc'

export default function Research() {
  return (
    <main id="main-content" aria-label="Galac.ai research">
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
        <OrbitalArc style={{ position: 'absolute', top: -60, right: -80 } as React.CSSProperties} size={500} opacity={0.08} animated={false} />

        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <p style={{ fontSize: 11, color: 'var(--azure)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace', marginBottom: 20 }}>
            Research
          </p>
          <motion.h1
            className="text-display-1"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontWeight: 400, color: 'var(--rich-black)', marginBottom: 20, maxWidth: '60%' }}
          >
            {RESEARCH.hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 'clamp(16px,1.2vw,18px)', color: 'var(--text-muted-light)', lineHeight: 1.65, maxWidth: '52ch', letterSpacing: '-0.02em' }}
          >
            {RESEARCH.hero.body}
          </motion.p>
        </div>
      </section>

      {/* Article grid — placeholder cards */}
      <section
        data-theme="light-alt"
        style={{ background: 'var(--platinum)', paddingBlock: 'var(--section-y)', paddingInline: 'var(--outer)' }}
      >
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          {/* Featured slot */}
          <div
            data-placeholder="research-articles"
            style={{
              marginBottom: 40,
              padding: '48px',
              background: 'var(--cultured)',
              borderRadius: 20,
              border: '1px dashed rgba(46,126,255,0.25)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
              minHeight: 280,
            }}
          >
            <div>
              <span style={{ fontSize: 11, color: 'var(--azure)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace' }}>
                Featured — Research
              </span>
              <h2 style={{ fontSize: 'clamp(22px,2.5vw,36px)', fontWeight: 400, letterSpacing: '-0.03em', color: 'var(--rich-black)', marginTop: 12, marginBottom: 16, lineHeight: 1.15 }}>
                Article title {/* data-placeholder="featured-article-title" */}
              </h2>
              <p style={{ fontSize: 15, color: 'var(--text-muted-light)', lineHeight: 1.6, maxWidth: '40ch' }}>
                Short excerpt from the featured article. {/* data-placeholder="featured-article-excerpt" */}
              </p>
              <p style={{ fontSize: 12, color: 'var(--text-muted-light)', marginTop: 20, fontFamily: 'Geist Mono, monospace' }}>
                — {/* data-placeholder="featured-article-date" */}
              </p>
            </div>
            <div
              style={{
                height: 200,
                background: 'linear-gradient(135deg, var(--azure-tint) 0%, var(--platinum) 100%)',
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-hidden="true"
            >
              <OrbitalArc size={180} opacity={0.3} animated={false} />
            </div>
          </div>

          {/* Article grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 24,
            }}
          >
            {RESEARCH.placeholders.map((article, i) => (
              <motion.article
                key={article.id}
                data-placeholder="research-article-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '32px',
                  background: 'var(--cultured)',
                  borderRadius: 20,
                  border: '1px dashed rgba(46,126,255,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 11, color: 'var(--azure)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace' }}>
                  {article.category}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--rich-black)', lineHeight: 1.25 }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted-light)', lineHeight: 1.55, flex: 1 }}>
                  {article.excerpt}
                </p>
                <p style={{ fontSize: 12, color: 'var(--text-muted-light)', fontFamily: 'Geist Mono, monospace', marginTop: 8 }}>
                  {article.date}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
