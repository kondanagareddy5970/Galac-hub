import { Link } from 'react-router-dom'
import Logo from '../brand/Logo'
import { BRAND, NAV } from '../../content/copy'

export default function Footer() {
  return (
    <footer
      data-theme="dark"
      style={{
        position: 'relative',
        background: 'var(--bunker)',
        paddingBlock: '64px 40px',
        paddingInline: 'var(--outer)',
        overflow: 'hidden',
      }}
      aria-label="Site footer"
    >
      {/* Hairline top */}
      <div className="hairline hairline-dark" style={{ marginBottom: 48 }} />

      <div
        style={{
          maxWidth: 'var(--container)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
        }}
      >
        {/* Logo + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Logo variant="full" tone="white" height={28} />
          <p
            style={{
              fontSize: 13,
              color: 'var(--text-muted-dark)',
              maxWidth: '28ch',
              lineHeight: 1.5,
            }}
          >
            Enterprise AI orchestration for SAP and Salesforce.
          </p>
          <a
            href={`https://${BRAND.domain}`}
            style={{ fontSize: 13, color: 'var(--azure)', textDecoration: 'none', letterSpacing: '-0.01em' }}
          >
            {BRAND.domain}
          </a>
        </div>

        {/* Nav links */}
        <div>
          <p
            style={{
              fontSize: 11,
              color: 'var(--text-muted-dark)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Navigation
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {NAV.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="link-underline"
                style={{ fontSize: 14, color: 'var(--text-muted-dark)', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <p
            style={{
              fontSize: 11,
              color: 'var(--text-muted-dark)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Legal
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link
              to="/privacy"
              className="link-underline"
              style={{ fontSize: 14, color: 'var(--text-muted-dark)', textDecoration: 'none' }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="link-underline"
              style={{ fontSize: 14, color: 'var(--text-muted-dark)', textDecoration: 'none' }}
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Social */}
        <div>
          <p
            style={{
              fontSize: 11,
              color: 'var(--text-muted-dark)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Connect
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a
              href={`https://instagram.com/${BRAND.social.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Galac.ai on Instagram"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid var(--hairline-dark)',
                color: 'var(--text-muted-dark)',
                transition: 'color 200ms, border-color 200ms',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href={`https://x.com/${BRAND.social.x.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Galac.ai on X"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid var(--hairline-dark)',
                color: 'var(--text-muted-dark)',
                transition: 'color 200ms, border-color 200ms',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn placeholder — data-placeholder="linkedin-url" */}
            <a
              href="https://linkedin.com/company/galac-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Galac.ai on LinkedIn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid var(--hairline-dark)',
                color: 'var(--text-muted-dark)',
                transition: 'color 200ms, border-color 200ms',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-muted-dark)', marginTop: 12 }}>
            {BRAND.social.instagram} · {BRAND.social.x}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 'var(--container)',
          margin: '48px auto 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          borderTop: '1px solid var(--hairline-dark)',
          paddingTop: 24,
        }}
      >
        <p style={{ fontSize: 12, color: 'var(--text-muted-dark)' }}>
          {BRAND.copyright}
        </p>
        <p style={{ fontSize: 12, color: 'var(--text-muted-dark)' }}>
          Built for enterprise complexity.
        </p>
      </div>
    </footer>
  )
}
