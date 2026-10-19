// src/lib/lenis.ts
// Lenis smooth scroll configuration (from Part 9 of spec)
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export function initLenis(): Lenis {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    // No smooth scroll for reduced motion
    return new Lenis({ duration: 0 })
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.4,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  lenisInstance = lenis
  return lenis
}

export function getLenis(): Lenis | null {
  return lenisInstance
}

export function stopLenis(): void {
  lenisInstance?.stop()
}

export function startLenis(): void {
  lenisInstance?.start()
}

export function scrollTo(target: string | number | HTMLElement, options?: object): void {
  lenisInstance?.scrollTo(target as any, options)
}
