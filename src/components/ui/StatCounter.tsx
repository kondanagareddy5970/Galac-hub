// src/components/ui/StatCounter.tsx
// Counts up when 60% in view, with tabular numbers
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

interface StatCounterProps {
  figure: string
  label: string
  delta?: string
  note?: string
}

function extractNumeric(figure: string): { prefix: string; suffix: string; value: number } {
  const match = figure.match(/^([^0-9]*)([0-9,.]+)(.*)$/)
  if (!match) return { prefix: '', suffix: figure, value: 0 }
  const prefix = match[1] || ''
  const suffix = match[3] || ''
  const value = parseFloat(match[2].replace(/,/g, ''))
  return { prefix, suffix, value }
}

export default function StatCounter({ figure, label, delta, note }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.6, once: true })
  const [count, setCount] = useState(0)
  const { prefix, suffix, value } = extractNumeric(figure)

  useEffect(() => {
    if (!inView || value === 0) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      requestAnimationFrame(() => setCount(value))
      return
    }

    const duration = 1600
    const start = Date.now()

    const animate = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(1, elapsed / duration)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * value)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, value])

  const displayValue = value > 0
    ? (Number.isInteger(value) ? Math.round(count) : count.toFixed(1))
    : figure

  const formattedValue = typeof displayValue === 'number' && displayValue >= 1000
    ? displayValue.toLocaleString()
    : displayValue

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {/* The big figure */}
      <div className="stat-figure" aria-live="polite">
        {value > 0 ? `${prefix}${formattedValue}${suffix}` : figure}
      </div>

      {/* Delta badge */}
      {delta && (
        <span className="stat-delta">{delta}</span>
      )}

      {/* Label */}
      <p className="stat-label">{label}</p>

      {/* Illustrative note */}
      {note && (
        <p
          style={{
            fontSize: 10,
            color: 'rgba(154, 163, 178, 0.6)',
            fontFamily: 'Geist Mono, monospace',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginTop: 4,
          }}
        >
          {note} *
        </p>
      )}
    </div>
  )
}
