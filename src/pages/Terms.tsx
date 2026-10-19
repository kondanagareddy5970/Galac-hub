// src/pages/Terms.tsx — Stub
import OrbitalArc from '../components/brand/OrbitalArc'

export default function Terms() {
  return (
    <main id="main-content">
      <section
        data-theme="light"
        style={{
          position: 'relative',
          background: 'var(--cultured)',
          paddingTop: 140,
          paddingBottom: 120,
          paddingInline: 'var(--outer)',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        <OrbitalArc style={{ position: 'absolute', top: -80, right: -60 } as React.CSSProperties} size={500} opacity={0.06} animated={false} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 11, color: 'var(--azure)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace', marginBottom: 20 }}>
            Legal
          </p>
          <h1 className="text-display-2" style={{ color: 'var(--rich-black)', marginBottom: 32, fontWeight: 400 }}>
            Terms of Service
          </h1>
          <div data-placeholder="terms-content" style={{ borderStyle: 'none', minHeight: 400 }}>
            <p style={{ color: 'var(--text-muted-light)', lineHeight: 1.65 }}>
              Terms of service content to be provided by client.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
