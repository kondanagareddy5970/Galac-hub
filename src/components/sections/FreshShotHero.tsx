// src/components/sections/FreshShotHero.tsx
// Redesigned to exactly match the 4 reference images:
//   1. NovaPay-style hero: dark orbital-ribbon bg, bold headline LEFT, 3 stat cards RIGHT
//   2. Product views section: Image showcase with the galac-products-hero.jpg
//   3. Woopicx-style feature cards: futuristic hex bg, 3 glassmorphic cards with icons
//   4. SAP + Salesforce showcase: light section, text left, product image right

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart2, Database, ShieldCheck, Zap, Activity } from 'lucide-react'

// --- HERO SECTION (Image 1 - NovaPay style) ----------------------------------
function NovapayHero() {
  const STATS = [
    { figure: '73%', label: 'Workflow Automation Increase', sub: 'Since SAP + Salesforce sync' },
    { figure: '98.7%', label: 'Sync Accuracy', sub: '+1.4% vs last quarter' },
    { figure: '$4.2M', label: 'Revenue Unlocked', sub: '+31% YoY impact' },
  ]

  return (
    <section
      id="hero"
      data-theme="dark"
      aria-label="Hero — Galac.ai AI Orchestration"
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: '#050A14',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/backgrounds/orbital-ribbon-4k.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          opacity: 0.75,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, rgba(5,10,20,0.97) 0%, rgba(5,10,20,0.88) 38%, rgba(5,10,20,0.55) 65%, rgba(5,10,20,0.15) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%', right: '-5%',
          width: '60vw', height: '80vh',
          background: 'radial-gradient(ellipse at 70% 40%, rgba(0,140,255,0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0, height: 100,
          background: 'linear-gradient(to top, #050A14 0%, transparent 100%)',
        }}
      />

      {/* MAIN GRID */}
      <div style={{ position: 'relative', zIndex: 10, flex: 1, width: '100%', maxWidth: 1320, margin: '0 auto', padding: '120px 40px 80px', display: 'grid', gridTemplateColumns: '1fr minmax(300px,420px)', gap: 60, alignItems: 'center' }} className="hero-main-grid">
        {/* LEFT */}
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, border: '1px solid rgba(0,180,255,0.3)', background: 'rgba(0,180,255,0.08)', color: '#00B4FF', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace', marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00E5FF', boxShadow: '0 0 8px #00E5FF', display: 'inline-block' }} />
            AI Orchestration Platform
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.2, ease: [0.22,1,0.36,1] }} style={{ fontSize: 'clamp(40px,5.5vw,78px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#FFFFFF', marginBottom: 28, textShadow: '0 4px 32px rgba(0,0,0,0.6)' }}>
            Where Enterprise<br />
            Systems <span style={{ color: '#00B4FF' }}>Think Together</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.38, ease: [0.22,1,0.36,1] }} style={{ fontSize: 'clamp(15px,1.15vw,18px)', color: 'rgba(255,255,255,0.72)', maxWidth: '52ch', lineHeight: 1.65, letterSpacing: '-0.01em', marginBottom: 44 }}>
            Galac.ai unifies SAP and Salesforce through intelligent orchestration, creating greater efficiency, insight, and control across your entire enterprise ecosystem — without replacing a single line of infrastructure.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.52, ease: [0.22,1,0.36,1] }} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/contact" id="hero-cta-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 999, background: 'linear-gradient(135deg,#0070F2 0%,#00B4FF 100%)', color: '#FFFFFF', fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,112,242,0.45)' }}>
              Get Started<ArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <Link to="/services" id="hero-cta-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 999, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', color: '#FFFFFF', fontSize: 14, fontWeight: 600, textDecoration: 'none', backdropFilter: 'blur(12px)' }}>
              Explore Services<ArrowRight size={14} strokeWidth={2} />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.7 }} style={{ marginTop: 52, display: 'flex', alignItems: 'center', gap: 20 }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace' }}>Integrates with</span>
            <img src="/images/sap-salesforce-logos.png" alt="SAP and Salesforce" style={{ height: 28, objectFit: 'contain', opacity: 0.75, filter: 'brightness(1.4)' }} />
          </motion.div>
        </div>

        {/* RIGHT: 3 stacked stat cards */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.95, delay: 0.35, ease: [0.22,1,0.36,1] }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {STATS.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.45 + i * 0.12, ease: [0.22,1,0.36,1] }} style={{ padding: '28px 32px', background: 'rgba(255,255,255,0.042)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, boxShadow: '0 20px 60px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: 'linear-gradient(to bottom,#00B4FF,#0070F2)', borderRadius: '3px 0 0 3px' }} />
              <div style={{ fontSize: 'clamp(34px,3.5vw,50px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8 }}>{stat.figure}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>{stat.label}</div>
              <div style={{ fontSize: 12, color: 'rgba(0,180,255,0.8)', fontFamily: 'Geist Mono, monospace' }}>{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// --- PRODUCT VIEWS SECTION ----------------------------------------------------
function ProductViewsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="product-views" data-theme="dark" aria-label="Galac.ai Platform Product Views" style={{ position: 'relative', background: '#040810', padding: '100px 40px 80px', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '60vh', background: 'radial-gradient(ellipse,rgba(0,112,242,0.12) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: 44 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00B4FF', fontFamily: 'Geist Mono, monospace', marginBottom: 16 }}>Platform Overview</p>
          <h2 style={{ fontSize: 'clamp(30px,4vw,56px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#FFFFFF', marginBottom: 20 }}>
            Built for the Enterprise.<br />
            <span style={{ color: '#00B4FF' }}>Powered by Galac.ai.</span>
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.1vw,17px)', color: 'rgba(255,255,255,0.55)', maxWidth: '54ch', margin: '0 auto 28px', lineHeight: 1.65 }}>
            A unified suite of AI products that orchestrate, integrate, and amplify your existing enterprise systems — without replacing a single line of infrastructure.
          </p>
          <div style={{ display: 'inline-flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['AI Workflow Engine', 'Real-time Analytics', 'Enterprise Connectors'].map(pill => (
              <span key={pill} style={{ fontSize: 12, fontWeight: 600, padding: '7px 20px', borderRadius: 999, background: 'rgba(0,112,242,0.16)', border: '1px solid rgba(0,180,255,0.32)', color: '#FFFFFF', fontFamily: 'Geist Mono, monospace', boxShadow: '0 2px 12px rgba(0,112,242,0.2)' }}>{pill}</span>
            ))}
          </div>
        </motion.div>

        {/* Section Underline Divider */}
        <div className="section-underline-center-dark" />

        <motion.div initial={{ opacity: 0, y: 48 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.0, delay: 0.2, ease: [0.22,1,0.36,1] }} style={{ position: 'relative' }}>
          {/* Main Showcase Window Frame */}
          <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(0,180,255,0.24)', background: 'rgba(5,12,24,0.85)', backdropFilter: 'blur(20px)', boxShadow: '0 40px 100px -20px rgba(0,112,242,0.32), 0 30px 80px rgba(0,0,0,0.85)', position: 'relative' }}>
            {/* Top Window Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px', background: 'rgba(255,255,255,0.035)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,95,86,0.85)' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,189,46,0.85)' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(39,201,63,0.85)' }} />
                <span style={{ marginLeft: 12, fontSize: 12, fontFamily: 'Geist Mono, monospace', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>galac.ai/platform/overview</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 999, background: 'rgba(0,180,255,0.1)', border: '1px solid rgba(0,180,255,0.25)', fontSize: 11, fontFamily: 'Geist Mono, monospace', color: '#00B4FF' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00E5FF', boxShadow: '0 0 8px #00E5FF' }} />
                  Live Orchestration Engine
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 999, background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', fontSize: 11, fontFamily: 'Geist Mono, monospace', color: '#10B981', fontWeight: 600 }}>
                  99.8% Uptime SLA
                </div>
              </div>
            </div>

            {/* Showcase Image Display - 100% clean and fully visible */}
            <div style={{ position: 'relative', width: '100%', lineHeight: 0 }}>
              <img src="/images/galac-products-hero.jpg" alt="Galac.ai Intelligence Platform — AI Workflow Orchestration Dashboard" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginTop: 14 }} className="product-mini-cards">
            {[
              { icon: <Zap size={20} color="#00B4FF" strokeWidth={2} />, title: 'Agent Orchestration', desc: 'Autonomous AI agents that coordinate complex enterprise workflows end-to-end.' },
              { icon: <BarChart2 size={20} color="#00B4FF" strokeWidth={2} />, title: 'Live Analytics Engine', desc: 'Real-time business intelligence surfaced directly within your dashboards.' },
              { icon: <Activity size={20} color="#00B4FF" strokeWidth={2} />, title: 'Zero-Touch Integration', desc: 'Native connectors for SAP, Salesforce, and 200+ enterprise systems.' },
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.5 + i * 0.1 }} style={{ padding: '24px 28px', background: 'rgba(255,255,255,0.032)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 }}>
                <div style={{ marginBottom: 10 }}>{card.icon}</div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF', marginBottom: 6, letterSpacing: '-0.02em' }}>{card.title}</h4>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', lineHeight: 1.55 }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// --- WOOPICX FEATURE CARDS (Image 4 style) -----------------------------------
function WoopicxFeatureCards() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const CARDS = [
    { id: 'card-agent-orchestration', icon: <Zap size={28} color="#00B4FF" strokeWidth={1.5} />, tag: 'Core Product', title: 'Agent Orchestration', desc: 'Autonomous AI agents that intelligently coordinate complex enterprise workflows across SAP and Salesforce. Deploy, monitor, and scale in real time.', metric: '73%', metricLabel: 'Automation uplift', accent: '#00B4FF' },
    { id: 'card-data-integration', icon: <Database size={28} color="#7C3AED" strokeWidth={1.5} />, tag: 'Core Product', title: 'Real-time Data Integration', desc: 'Bi-directional data pipelines that sync SAP and Salesforce with 98.7% accuracy. No silos, no lag — pure enterprise clarity.', metric: '98.7%', metricLabel: 'Sync accuracy', accent: '#7C3AED' },
    { id: 'card-secure-storage', icon: <ShieldCheck size={28} color="#10B981" strokeWidth={1.5} />, tag: 'Core Product', title: 'Enterprise Security', desc: 'Zero-trust architecture with end-to-end encryption across all enterprise connections. Your data, fully protected, always compliant.', metric: '99.8%', metricLabel: 'Uptime SLA', accent: '#10B981' },
  ]

  return (
    <section ref={ref} id="feature-cards" data-theme="dark" aria-label="Core capabilities" style={{ position: 'relative', background: '#030712', padding: '100px 40px 120px', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='64'%3E%3Cpath d='M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z' fill='none' stroke='rgba(0,100,200,0.09)' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '56px 64px' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '-10%', left: '15%', width: '50vw', height: '50vw', background: 'radial-gradient(circle,rgba(0,80,200,0.18) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-5%', right: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle,rgba(124,58,237,0.14) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00B4FF', fontFamily: 'Geist Mono, monospace', marginBottom: 18 }}>What We Offer</p>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,52px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#FFFFFF', marginBottom: 18 }}>Three Pillars of Enterprise AI</h2>
          <p style={{ fontSize: 'clamp(14px,1.1vw,17px)', color: 'rgba(255,255,255,0.5)', maxWidth: '48ch', margin: '0 auto', lineHeight: 1.65 }}>Agent Orchestration, Real-time Analytics, and native SAP &amp; Salesforce Integration — seamlessly unified.</p>
        </motion.div>

        {/* Section Underline Divider */}
        <div className="section-underline-center-dark" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="woopicx-cards">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              id={card.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.14, ease: [0.22,1,0.36,1] }}
              style={{ position: 'relative', padding: '36px 32px 40px', background: 'rgba(255,255,255,0.035)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.45)' }}
              whileHover={{ borderColor: `${card.accent}44`, boxShadow: `0 32px 80px rgba(0,0,0,0.55), 0 0 40px ${card.accent}18`, y: -6 } as any}
            >
              <div aria-hidden="true" style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', width: 180, height: 120, background: `radial-gradient(ellipse,${card.accent}22 0%,transparent 75%)`, pointerEvents: 'none' }} />
              <div style={{ width: 60, height: 60, borderRadius: 18, background: `${card.accent}14`, border: `1px solid ${card.accent}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: `0 6px 20px ${card.accent}18` }}>{card.icon}</div>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: card.accent, fontFamily: 'Geist Mono, monospace', marginBottom: 10 }}>{card.tag}</p>
              <h3 style={{ fontSize: 'clamp(18px,1.6vw,22px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#FFFFFF', marginBottom: 14, lineHeight: 1.2 }}>{card.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.52)', lineHeight: 1.65, marginBottom: 28, letterSpacing: '-0.01em' }}>{card.desc}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1 }}>{card.metric}</div>
                  <div style={{ fontSize: 11, color: card.accent, fontFamily: 'Geist Mono, monospace', marginTop: 4 }}>{card.metricLabel}</div>
                </div>
                <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: card.accent, textDecoration: 'none' }}>Learn more <ArrowRight size={13} strokeWidth={2.5} /></Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }} style={{ textAlign: 'center', marginTop: 56 }}>
          <Link to="/services" id="feature-cards-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 36px', borderRadius: 999, background: 'linear-gradient(135deg,#0070F2 0%,#00B4FF 100%)', color: '#FFFFFF', fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,112,242,0.42)' }}>
            Explore All Services<ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// --- SAP + SALESFORCE SHOWCASE (Image 3 style) --------------------------------
function SAPSalesforceShowcase() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="sap-salesforce-showcase" data-theme="light" aria-label="SAP and Salesforce Integration Showcase" style={{ position: 'relative', background: '#f8faff', padding: '100px 40px', overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none' }} aria-hidden="true">
        <defs><pattern id="dotpat" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#0070F2" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#dotpat)" />
      </svg>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60vw', height: '70vh', background: 'radial-gradient(ellipse,rgba(0,112,242,0.07) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="sap-sf-grid">
          {/* LEFT text */}
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0070F2', fontFamily: 'Geist Mono, monospace', marginBottom: 20 }}>Zero Replacement</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.1, ease: [0.22,1,0.36,1] }} style={{ fontSize: 'clamp(28px,3.5vw,50px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0A0F1E', marginBottom: 24 }}>
              SAP &amp; Salesforce,<br />
              <span style={{ color: '#0070F2' }}>United by Galac.ai</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay: 0.22, ease: [0.22,1,0.36,1] }} style={{ fontSize: 'clamp(14px,1.1vw,17px)', color: 'rgba(10,15,30,0.62)', lineHeight: 1.65, letterSpacing: '-0.01em', maxWidth: '44ch', marginBottom: 28 }}>
              Galac.ai sits on top of your existing enterprise systems — no rip-and-replace, no retraining your teams. It orchestrates SAP and Salesforce as one unified intelligence layer.
            </motion.p>
            <div className="section-underline-light" style={{ margin: '0 0 28px 0', maxWidth: '44ch' }} />
            {['Connects data, workflows, and decisions across both platforms', 'Real-time bi-directional sync with 98.7% accuracy', 'Deploy in days — not months — with zero disruption'].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.32 + i * 0.1 }} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,112,242,0.1)', border: '1px solid rgba(0,112,242,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#0070F2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(10,15,30,0.7)', lineHeight: 1.5 }}>{item}</p>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.65 }} style={{ marginTop: 36 }}>
              <Link to="/solutions" id="sap-sf-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 999, background: '#0070F2', color: '#FFFFFF', fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 28px rgba(0,112,242,0.32)' }}>
                View Solutions<ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: product image */}
          <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ duration: 1.0, delay: 0.15, ease: [0.22,1,0.36,1] }} style={{ position: 'relative' }}>
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,2,20,0.14)', border: '1px solid rgba(0,112,242,0.12)', aspectRatio: '4/3' }}>
              <img src="/images/galac-products-frame2.jpg" alt="SAP and Salesforce united by Galac.ai" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <motion.div initial={{ opacity: 0, y: 12, scale: 0.9 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.55 }} style={{ position: 'absolute', bottom: -20, left: -20, background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 18, padding: '14px 20px', boxShadow: '0 20px 50px rgba(0,2,20,0.12)', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#666', fontFamily: 'Geist Mono, monospace' }}>Connected via Galac.ai</p>
              <img src="/images/sap-salesforce-logos.png" alt="SAP + Salesforce" style={{ height: 24, objectFit: 'contain' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 12, scale: 0.9 }} animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.7 }} style={{ position: 'absolute', top: -16, right: -16, background: '#0070F2', borderRadius: 18, padding: '14px 20px', boxShadow: '0 12px 40px rgba(0,112,242,0.35)', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1 }}>10x</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', fontFamily: 'Geist Mono, monospace', marginTop: 3 }}>Faster Deploy</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// --- COMBINED EXPORT ----------------------------------------------------------
export default function FreshShotHero() {
  return (
    <>
      <NovapayHero />
      <ProductViewsSection />
      <WoopicxFeatureCards />
      <SAPSalesforceShowcase />
    </>
  )
}
