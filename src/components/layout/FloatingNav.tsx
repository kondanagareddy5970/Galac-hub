// src/components/layout/FloatingNav.tsx
// Single-page anchor navigation — smooth scroll to sections

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from '../brand/Logo'
import OrbitalArc from '../brand/OrbitalArc'
import { NAV } from '../../content/copy'

type NavTheme = 'light' | 'dark'

function smoothScrollTo(hash: string) {
  if (hash === '#hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    const offset = 80 // account for nav height
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function FloatingNav() {
  const [theme, setTheme] = useState<NavTheme>('dark')
  const [compressed, setCompressed] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [entered, setEntered] = useState(false)
  const [activeHash, setActiveHash] = useState('#hero')

  const lastScrollY = useRef(0)
  const scrollThreshold = 100
  const hideThreshold = 20

  // Detect which section is currently in view
  const updateActive = useCallback(() => {
    const sectionIds = NAV.links.map((l) => l.href.replace('#', ''))
    for (const id of [...sectionIds].reverse()) {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120) {
          setActiveHash(`#${id}`)
          break
        }
      }
    }
  }, [])

  // Detect section theme under navbar
  const updateTheme = useCallback(() => {
    if (typeof document === 'undefined') return
    const navPointY = 50
    const navPointX = window.innerWidth / 2

    const element = document.elementFromPoint(navPointX, navPointY)
    const section = element?.closest('[data-theme]')
    if (section) {
      const sectionTheme = section.getAttribute('data-theme')
      setTheme(sectionTheme === 'dark' ? 'dark' : 'light')
      return
    }

    const sections = document.querySelectorAll('[data-theme]')
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect()
      if (rect.top <= 80 && rect.bottom > 80) {
        const t = sec.getAttribute('data-theme')
        setTheme(t === 'dark' ? 'dark' : 'light')
        return
      }
    }
  }, [])

  // Initial entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setEntered(true)
      updateTheme()
      updateActive()
    }, 250)
    return () => clearTimeout(timer)
  }, [updateTheme, updateActive])

  // Scroll listeners
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const delta = scrollY - lastScrollY.current

      setCompressed(scrollY > scrollThreshold)

      if (!mobileOpen) {
        if (delta > hideThreshold && scrollY > scrollThreshold) {
          setHidden(true)
        } else if (delta < -hideThreshold || scrollY < scrollThreshold) {
          setHidden(false)
        }
      }

      lastScrollY.current = scrollY
      updateTheme()
      updateActive()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [mobileOpen, updateTheme, updateActive])

  // Mobile menu open / close
  const openMobileMenu = () => {
    setMobileOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMobileMenu = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) closeMobileMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const isDark = theme === 'dark'
  const shouldHide = !mobileOpen && hidden

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMobileMenu()
    smoothScrollTo(href)
  }

  return (
    <>
      {/* Outer fixed centering wrapper */}
      <div className="floating-nav-wrapper">
        <motion.nav
          role="navigation"
          aria-label="Main navigation"
          initial={{ y: -80, opacity: 0 }}
          animate={
            entered
              ? { y: shouldHide ? -100 : 0, opacity: shouldHide ? 0 : 1 }
              : { y: -80, opacity: 0 }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={[
            'floating-nav',
            isDark ? 'nav-dark' : 'nav-light',
            compressed ? 'nav-compressed' : '',
          ].join(' ')}
        >
          {/* 1. Left: Brand Logo */}
          <a
            href="#hero"
            aria-label="Galac.ai — Home"
            className="nav-brand-slot"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{ textDecoration: 'none' }}
          >
            <Logo
              variant="full"
              tone={isDark ? 'white' : 'color'}
              height={compressed ? 30 : 36}
              aria-label="Galac.ai"
            />
          </a>

          {/* 2. Center: Desktop Navigation Links */}
          <div className="nav-links-slot" role="menubar">
            {NAV.links.map((link) => {
              const isActive = activeHash === link.href

              return (
                <a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  className={`nav-link ${isActive ? 'active' : ''} ${isDark ? 'link-dark' : 'link-light'}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{ textDecoration: 'none', position: 'relative' }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className={`nav-active-chip ${isDark ? 'chip-dark' : 'chip-light'}`}
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* 3. Right: CTA Button & Mobile Trigger */}
          <div className="nav-actions-slot">
            <a
              href={NAV.cta.href}
              className={`nav-cta-btn ${isDark ? 'cta-dark' : 'cta-light'}`}
              onClick={(e) => handleNavClick(e, NAV.cta.href)}
              style={{ textDecoration: 'none' }}
            >
              <span>{NAV.cta.label}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={`nav-mobile-btn ${isDark ? 'mobile-btn-dark' : 'mobile-btn-light'}`}
              onClick={mobileOpen ? closeMobileMenu : openMobileMenu}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <OrbitalArc
              style={{ position: 'absolute', bottom: -50, right: -50, opacity: 0.1 } as React.CSSProperties}
              size={560}
            />

            <div className="mobile-menu-header">
              <Logo variant="full" tone="white" height={36} />
              <button
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="mobile-close-btn"
              >
                <X size={24} strokeWidth={1.75} />
              </button>
            </div>

            <nav className="mobile-links-container">
              {NAV.links.map((link, i) => {
                const isActive = activeHash === link.href

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * (i + 1), duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {link.label}
                      {isActive && <span className="mobile-active-dot" />}
                    </a>
                  </motion.div>
                )
              })}
            </nav>

            <div className="mobile-menu-footer">
              <a
                href={NAV.cta.href}
                onClick={(e) => handleNavClick(e, NAV.cta.href)}
                className="mobile-cta-btn"
                style={{ textDecoration: 'none' }}
              >
                {NAV.cta.label}
              </a>
              <p className="mobile-domain-text">galac.ai</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
