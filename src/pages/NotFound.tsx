// src/pages/NotFound.tsx
import { Link } from 'react-router-dom'
import OrbitalArc from '../components/brand/OrbitalArc'
import Logo from '../components/brand/Logo'

export default function NotFound() {
  return (
    <main id="main-content">
      <section
        data-theme="light"
        style={{
          position: 'relative',
          background: 'var(--cultured)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          paddingInline: 'var(--outer)',
          overflow: 'hidden',
        }}
      >
        <OrbitalArc style={{ position: 'absolute', inset: 0, margin: 'auto' } as React.CSSProperties} size={600} opacity={0.09} animated={false} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Logo variant="mark" tone="color" height={56} />
          <p
            style={{
              fontSize: 120,
              fontWeight: 400,
              letterSpacing: '-0.06em',
              color: 'var(--platinum)',
              lineHeight: 1,
              margin: '24px 0 0',
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            404
          </p>
          <h1 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 400, letterSpacing: '-0.04em', color: 'var(--rich-black)', marginTop: 16, marginBottom: 16 }}>
            Page not found
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-muted-light)', marginBottom: 40 }}>
            The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn btn-primary">
            Return home
          </Link>
        </div>
      </section>
    </main>
  )
}
