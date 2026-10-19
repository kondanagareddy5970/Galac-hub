// src/components/brand/MotionField.tsx
// The Galactic Motion Field — layered grainy gradients with deep shadows
// Used for final CTA and large hero-scale moments

interface MotionFieldProps {
  className?: string
}

export default function MotionField({ className = '' }: MotionFieldProps) {
  return (
    <div
      className={`motion-field ${className}`}
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 90% 70% at 15% 60%, rgba(46, 126, 255, 0.22) 0%, transparent 65%),
            radial-gradient(ellipse 70% 90% at 85% 30%, rgba(31, 95, 209, 0.15) 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at 50% 80%, rgba(46, 126, 255, 0.08) 0%, transparent 70%),
            linear-gradient(160deg, #15191E 0%, #0d1520 40%, #060b14 100%)
          `,
        }}
      />
      {/* Orbital curves */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1 }}
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <ellipse cx="720" cy="300" rx="680" ry="240" stroke="#2E7EFF" strokeWidth="1" strokeDasharray="6 12" />
        <ellipse cx="720" cy="300" rx="460" ry="160" stroke="#2E7EFF" strokeWidth="0.8" strokeDasharray="4 8" />
        <ellipse cx="720" cy="300" rx="240" ry="80" stroke="#2E7EFF" strokeWidth="0.6" />
      </svg>
      {/* Film grain */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
          opacity: 0.6,
        }}
      />
    </div>
  )
}
