// src/app/RootLayout.tsx
// Root layout with floating nav, footer, scroll progress, and custom cursor

import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingNav from '../components/layout/FloatingNav'
import Footer from '../components/layout/Footer'

// Scroll progress bar
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 2,
        width: `${progress}%`,
        background: 'var(--azure)',
        zIndex: 'calc(var(--z-nav) + 1)' as any,
        transition: 'width 80ms linear',
        transformOrigin: 'left',
        pointerEvents: 'none',
      }}
    />
  )
}

// Custom cursor (desktop only)
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const [expanded, setExpanded] = useState(false)
  const [darkSection, setDarkSection] = useState(false)
  const [visible, setVisible] = useState(false)
  const rafRef = useRef<number | undefined>(undefined)

  const LERP = 0.18

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      setVisible(true)

      // Check section theme under cursor
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const section = el?.closest('[data-theme]')
      setDarkSection(section?.getAttribute('data-theme') === 'dark')
    }

    const onHoverMedia = () => setExpanded(true)
    const onLeaveMedia = () => setExpanded(false)

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('.teaser-card, .media-frame, canvas').forEach((el) => {
      el.addEventListener('mouseenter', onHoverMedia)
      el.addEventListener('mouseleave', onLeaveMedia)
    })

    const animate = () => {
      if (!cursorRef.current) return
      current.current.x += (pos.current.x - current.current.x) * LERP
      current.current.y += (pos.current.y - current.current.y) * LERP
      cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null

  return (
    <div
      ref={cursorRef}
      className={`cursor-ring ${expanded ? 'cursor-expanded' : ''} ${darkSection ? 'cursor-dark-section' : ''}`}
      style={{
        opacity: visible ? 1 : 0,
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 'var(--z-cursor)' as any,
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  )
}

// Page transition wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default function RootLayout() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <ScrollProgressBar />
      <CustomCursor />
      <FloatingNav />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  )
}
