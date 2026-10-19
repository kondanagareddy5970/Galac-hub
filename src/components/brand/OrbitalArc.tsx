import type { CSSProperties } from 'react'

interface OrbitalArcProps {
  className?: string
  color?: string
  opacity?: number
  size?: number
  animated?: boolean
  style?: CSSProperties
}

export default function OrbitalArc({
  className = '',
  color = '#2E7EFF',
  opacity = 0.18,
  size = 600,
  animated = true,
  style,
}: OrbitalArcProps) {
  const cx = size / 2
  const cy = size / 2

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`orbital-arc ${className}`}
      aria-hidden="true"
      style={{ opacity, ...style }}
    >
      <defs>
        <linearGradient id="arc-fade-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="40%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="arc-fade-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="60%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Outer arc */}
      <ellipse
        cx={cx}
        cy={cy}
        rx={cx * 0.9}
        ry={cy * 0.4}
        stroke="url(#arc-fade-1)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray={animated ? "4 8" : "none"}
        style={animated ? {
          strokeDashoffset: '1000',
          animation: 'drawArc 3s ease forwards',
        } : {}}
      />

      {/* Inner arc */}
      <ellipse
        cx={cx}
        cy={cy}
        rx={cx * 0.6}
        ry={cy * 0.26}
        stroke="url(#arc-fade-2)"
        strokeWidth="1"
        fill="none"
        strokeDasharray={animated ? "3 6" : "none"}
        style={animated ? {
          strokeDashoffset: '800',
          animation: 'drawArc 2.5s 0.3s ease forwards',
        } : {}}
      />

      {/* Center dot */}
      <circle cx={cx} cy={cy} r="3" fill={color} opacity={0.5} />

      <style>{`
        @keyframes drawArc {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  )
}
