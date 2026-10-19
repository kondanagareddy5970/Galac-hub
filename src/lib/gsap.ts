// src/lib/gsap.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger)

// Try to register SplitText if available (GSAP Club)
try {
  gsap.registerPlugin(SplitText)
} catch {
  // SplitText not available, use manual split
}

export { gsap, ScrollTrigger }

export const PRIMARY_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

export function revealLines(
  elements: Element[],
  options: { stagger?: number; duration?: number; delay?: number } = {}
) {
  const { stagger = 0.07, duration = 0.9, delay = 0 } = options

  gsap.fromTo(
    elements,
    { y: '100%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
    }
  )
}

export function fadeUp(
  element: Element | Element[] | null,
  options: { duration?: number; delay?: number; stagger?: number } = {}
) {
  if (!element) return
  const { duration = 0.8, delay = 0, stagger = 0.08 } = options
  gsap.fromTo(
    element,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
    }
  )
}
