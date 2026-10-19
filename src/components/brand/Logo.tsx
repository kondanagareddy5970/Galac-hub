// src/components/brand/Logo.tsx
// Galac.ai official logo — uses the actual brand PNG image asset.
//   • full variant: renders the PNG wordmark+mark combo (user-logo-crop.png)
//   • mark variant: renders the SVG orbital mark only (for decorative watermark use)
//   • tone=white: CSS filter to lighten on dark backgrounds
//   • tone=color: normal rendering (PNG already has correct colors)

interface LogoProps {
  variant?: 'full' | 'mark'
  tone?: 'auto' | 'color' | 'white'
  className?: string
  height?: number
  'aria-label'?: string
}

/**
 * GalacMark — the G-orbital logomark.
 *
 * Geometry (traced from brand PDF):
 *  1. OUTER ARC  — large bold stroke ~300°, open gap top-right
 *  2. INNER ARC  — smaller arc, offset forming G bowl
 *  3. CROSSBAR   — horizontal shelf extending right (the G bar)
 *  4. SPEED ARCS — two small accent arcs at the gap, top-right
 *
 * When white=false → blue gradient (brand color). When white=true → flat white.
 */
function GalacMark({ white, size }: { white: boolean; size: number }) {
  const gradId = `galac-grad-${white ? 'w' : 'c'}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        {/* Brand gradient: light azure → azure blue → azure deep */}
        <linearGradient id={gradId} x1="20" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor={white ? '#F7F7F7' : '#60A5FA'} />
          <stop offset="50%"  stopColor={white ? '#F7F7F7' : '#2E7EFF'} />
          <stop offset="100%" stopColor={white ? '#F7F7F7' : '#1F5FD1'} />
        </linearGradient>
      </defs>

      {/* 1. OUTER ARC — bold, sweeps ~300° CW, gap at top-right ~1 o'clock */}
      <path
        d="M 60 14 A 46 46 0 1 1 100 37"
        stroke={`url(#${gradId})`}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* 2. INNER ARC — smaller ring (r=30), offset, sweeps ~250° CW */}
      <path
        d="M 54 34 A 30 30 0 1 1 26 54"
        stroke={`url(#${gradId})`}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* 3. CROSSBAR — horizontal G shelf from ring centre rightward */}
      <line
        x1="54" y1="64"
        x2="92" y2="64"
        stroke={`url(#${gradId})`}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* 4. SPEED ARCS — two concentric accent arcs at the gap (top-right) */}
      <path
        d="M 95 24 A 9 9 0 0 1 107 34"
        stroke={`url(#${gradId})`}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 100 16 A 17 17 0 0 1 115 30"
        stroke={`url(#${gradId})`}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default function Logo({
  variant = 'full',
  tone = 'auto',
  className = '',
  height = 36,
  'aria-label': ariaLabel = 'Galac.ai',
}: LogoProps) {
  const isWhite = tone === 'white'
  const markSize = Math.round(height * 1.0)

  // mark-only variant: keep SVG for decorative watermark uses
  if (variant === 'mark') {
    return (
      <span
        className={`brand-logo brand-logo--mark ${className}`}
        role="img"
        aria-label={ariaLabel}
        style={{ display: 'inline-flex', alignItems: 'center' }}
      >
        <GalacMark white={isWhite} size={markSize} />
      </span>
    )
  }

  // full variant: use pristine transparent brand PNGs with zero background
  // tone='white' (or dark navbar): brilliant white text + azure/cyan mark
  // tone='color' (or light navbar): dark text + azure/cyan mark
  const logoSrc = isWhite
    ? '/brand/galac-logo-transparent.png'
    : '/brand/galac-logo-transparent-dark.png'

  // Size increased for prominent brand visibility
  const logoHeight = Math.round(height * 1.25)

  return (
    <span
      className={`brand-logo brand-logo--full ${className}`}
      role="img"
      aria-label={ariaLabel}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        userSelect: 'none',
        flexShrink: 0,
      }}
    >
      <img
        src={logoSrc}
        alt="Galac.ai"
        aria-hidden="true"
        className="nav-logo-img"
        style={{
          height: `${logoHeight}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
        }}
      />
    </span>
  )
}
