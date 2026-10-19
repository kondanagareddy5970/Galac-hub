// src/pages/Home.tsx
// Galac.ai — Single-page website. All sections scroll on one page.

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle, MapPin, Mail } from 'lucide-react'
import FreshShotHero from '../components/sections/FreshShotHero'
import HandoffsSection from '../components/sections/HandoffsSection'
import OrchestrationPillarsSection from '../components/sections/OrchestrationPillarsSection'
import ComparisonSection from '../components/sections/ComparisonSection'
import InsightsSection from '../components/sections/InsightsSection'
import OrbitalArc from '../components/brand/OrbitalArc'
import FormField from '../components/ui/FormField'
import Logo from '../components/brand/Logo'
import { SERVICES, SOLUTIONS, CONTACT } from '../content/copy'

// ─── ORBIT GRID (shared decorative SVG) ───────────────────────────────────────
function OrbitGrid() {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.07 }}
      viewBox="0 0 1320 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {[220, 340, 480].map((rx, i) => (
        <ellipse key={i} cx="660" cy="300" rx={rx} ry={rx * 0.42} stroke="#2E7EFF" strokeWidth="0.6" strokeDasharray="4 10" transform={`rotate(${i * 9}, 660, 300)`} />
      ))}
    </svg>
  )
}

// ─── SERVICES SECTION ─────────────────────────────────────────────────────────
function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="services"
      ref={ref}
      data-theme="light"
      aria-label="Galac.ai services"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, var(--cultured) 0%, var(--platinum) 100%)',
        paddingTop: 100,
        paddingBottom: 80,
        paddingInline: 'var(--outer)',
        overflow: 'hidden',
      }}
    >
      <OrbitGrid />
      <OrbitalArc
        style={{ position: 'absolute', top: -60, right: -80 } as React.CSSProperties}
        size={500}
        opacity={0.1}
        animated={false}
      />

      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontSize: 11, color: 'var(--azure)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace', marginBottom: 16 }}>
            Services
          </p>
          <h2 style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 400, letterSpacing: '-0.04em', color: 'var(--rich-black)', lineHeight: 1.05, maxWidth: '20ch' }}>
            {SERVICES.hero.headline}
          </h2>
          <p style={{ fontSize: 'clamp(15px,1.1vw,17px)', color: 'var(--text-muted-light)', maxWidth: '52ch', lineHeight: 1.65, marginTop: 16 }}>
            {SERVICES.hero.body}
          </p>
        </motion.div>

        {/* Section Underline Divider */}
        <div className="section-underline-light" />

        {/* Service areas */}
        {SERVICES.areas.map((area, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hairline" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, padding: '48px 0', alignItems: 'start' }} className="services-row">
              <h3 style={{ fontSize: 'clamp(24px,3vw,44px)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--rich-black)' }}>
                {area.headline}
              </h3>
              <div>
                <p style={{ fontSize: 'clamp(15px,1.1vw,17px)', color: 'var(--text-muted-light)', lineHeight: 1.65, letterSpacing: '-0.02em', marginBottom: 20, maxWidth: '44ch' }}>
                  {area.body}
                </p>
                <div
                  style={{ padding: '20px 24px', minHeight: 60, background: 'var(--cultured)', borderRadius: 12, border: '1px dashed rgba(46,126,255,0.2)' }}
                >
                  <p style={{ fontSize: 13, color: 'var(--text-muted-light)' }}>
                    Detailed service description — to be provided by client.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="hairline" />
      </div>
    </section>
  )
}

// ─── SOLUTIONS SECTION ────────────────────────────────────────────────────────
function SolutionsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="solutions"
      ref={ref}
      data-theme="dark"
      aria-label="Galac.ai solutions"
      style={{
        position: 'relative',
        background: '#040810',
        paddingTop: 100,
        paddingBottom: 100,
        paddingInline: 'var(--outer)',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '60vh', background: 'radial-gradient(ellipse,rgba(0,112,242,0.14) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}
          className="solutions-header"
        >
          <div>
            <p style={{ fontSize: 11, color: '#00B4FF', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace', marginBottom: 16 }}>
              Solutions
            </p>
            <h2 style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 400, letterSpacing: '-0.04em', color: '#FFFFFF', lineHeight: 1.05 }}>
              {SOLUTIONS.hero.headline}
            </h2>
          </div>
          <div style={{ paddingTop: 8 }}>
            <p style={{ fontSize: 'clamp(15px,1.1vw,17px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 20, maxWidth: '48ch' }}>
              {SOLUTIONS.hero.body}
            </p>
            <p style={{ fontSize: 'clamp(15px,1.1vw,17px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.55, maxWidth: '44ch' }}>
              {SOLUTIONS.body}
            </p>
          </div>
        </motion.div>

        {/* Section Underline Divider */}
        <div className="section-underline-dark" />

        {/* Solution placeholder cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 56 }}>
          {SOLUTIONS.placeholderSlots.map((slot, i) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '36px 28px',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.08)',
                minHeight: 180,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,180,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#00B4FF', opacity: 0.7 }} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                {slot.label}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
                Solution description — to be provided by client.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


// ─── CONTACT SECTION ──────────────────────────────────────────────────────────
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().min(1, 'Company name is required.'),
  message: z.string().min(20, 'Message must be at least 20 characters.'),
  _honey: z.string().max(0, '').optional(),
})

type ContactFormValues = z.infer<typeof contactSchema>

async function submitContactForm(_data: Omit<ContactFormValues, '_honey'>): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1200))
}

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data: ContactFormValues) => {
    if (data._honey) return
    setStatus('loading')
    try {
      const { _honey, ...payload } = data
      await submitContactForm(payload)
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      data-theme="light"
      aria-label="Contact Galac.ai"
      style={{
        position: 'relative',
        background: 'linear-gradient(160deg, var(--cultured) 0%, var(--platinum) 100%)',
        paddingTop: 100,
        paddingBottom: 120,
        paddingInline: 'var(--outer)',
        overflow: 'hidden',
      }}
    >
      <OrbitalArc
        style={{ position: 'absolute', bottom: -100, left: -60 } as React.CSSProperties}
        size={700} opacity={0.08} animated={false}
      />
      <OrbitalArc
        style={{ position: 'absolute', top: 0, right: -120 } as React.CSSProperties}
        size={500} opacity={0.06} animated={false}
      />

      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ fontSize: 11, color: 'var(--azure)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace', marginBottom: 16 }}
        >
          Contact
        </motion.p>

        {/* Section Underline Divider */}
        <div className="section-underline-light" style={{ margin: '16px 0 48px' }} />

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
          className="contact-grid"
        >
          {/* Left: Copy */}
          <div style={{ paddingTop: 8 }}>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 400, letterSpacing: '-0.04em', color: 'var(--rich-black)', marginBottom: 24, lineHeight: 1.05 }}
            >
              {CONTACT.hero.headline}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: 'clamp(15px,1.1vw,17px)', color: 'var(--text-muted-light)', lineHeight: 1.65, letterSpacing: '-0.02em', maxWidth: '48ch', marginBottom: 44 }}
            >
              {CONTACT.hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--azure-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={16} color="var(--azure)" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontSize: 12, color: 'var(--text-muted-light)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'Geist Mono, monospace' }}>Email</p>
                  <p style={{ fontSize: 15, color: 'var(--rich-black)' }}>{CONTACT.emailPlaceholder}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--azure-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={16} color="var(--azure)" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontSize: 12, color: 'var(--text-muted-light)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'Geist Mono, monospace' }}>Address</p>
                  <p style={{ fontSize: 15, color: 'var(--rich-black)' }}>{CONTACT.addressPlaceholder}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--cultured)',
              borderRadius: 24,
              padding: '44px 36px',
              border: '1px solid var(--hairline-light)',
              boxShadow: '0 8px 48px rgba(0,2,5,0.05)',
            }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, minHeight: 300, textAlign: 'center' }}
                  role="alert"
                  aria-live="polite"
                >
                  <CheckCircle size={48} color="var(--azure)" strokeWidth={1.5} />
                  <h3 style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.03em', color: 'var(--rich-black)' }}>Message sent.</h3>
                  <p style={{ fontSize: 15, color: 'var(--text-muted-light)' }}>{CONTACT.form.success}</p>
                  <button className="btn btn-secondary" onClick={() => setStatus('idle')} style={{ marginTop: 12 }}>
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 style={{ fontSize: 20, fontWeight: 400, letterSpacing: '-0.03em', color: 'var(--rich-black)', marginBottom: 6 }}>
                    Get Started With Us
                  </h3>

                  {/* Honeypot */}
                  <input {...register('_honey')} type="text" tabIndex={-1} aria-hidden="true"
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0 }} />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <FormField id="firstName" label="First Name" type="text" autoComplete="given-name" required error={errors.firstName} {...register('firstName')} />
                    <FormField id="lastName" label="Last Name" type="text" autoComplete="family-name" required error={errors.lastName} {...register('lastName')} />
                  </div>
                  <FormField id="email" label="E-Mail" type="email" autoComplete="email" required error={errors.email} {...register('email')} />
                  <FormField id="company" label="Company" type="text" autoComplete="organization" required error={errors.company} {...register('company')} />
                  <FormField id="message" label="Message" as="textarea" required error={errors.message} {...register('message')} />

                  {status === 'error' && (
                    <p role="alert" style={{ fontSize: 13, color: '#c00' }}>{CONTACT.form.errorFallback}</p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'loading'}
                    style={{ height: 52, fontSize: 15, marginTop: 6 }}
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
                    ) : CONTACT.form.submit}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}

// ─── FINAL CTA SECTION ────────────────────────────────────────────────────────
function FinalCTASection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      id="final-cta"
      data-theme="dark"
      aria-label="Get started with Galac.ai"
      style={{
        position: 'relative',
        background: '#040814',
        padding: '100px 40px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '70vw', height: '60vh', background: 'radial-gradient(ellipse, rgba(0, 112, 242, 0.16) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.035, pointerEvents: 'none' }} aria-hidden="true">
        <Logo variant="mark" tone="white" height={400} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 820, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ fontSize: 12, color: '#00B4FF', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace', fontWeight: 600, marginBottom: 20 }}
        >
          GALAC.AI • AI ORCHESTRATION LAYER
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 'clamp(34px, 4.5vw, 64px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, color: '#FFFFFF', marginBottom: 24 }}
        >
          Ready to Orchestrate Your<br />
          <span style={{ color: '#00B4FF' }}>Enterprise Stack?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 'clamp(15px, 1.15vw, 18px)', color: 'rgba(255, 255, 255, 0.65)', maxWidth: '54ch', margin: '0 auto 40px', lineHeight: 1.65 }}
        >
          Unify SAP and Salesforce through intelligent AI agents. Deploy in days with zero disruption to your existing infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#contact"
            id="final-cta-get-started"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 999, background: 'linear-gradient(135deg, #0070F2 0%, #00B4FF 100%)', color: '#FFFFFF', fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 32px rgba(0, 112, 242, 0.45)', cursor: 'pointer' }}
          >
            Get Started Now <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a
            href="#services"
            id="final-cta-services"
            onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 999, background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.18)', color: '#FFFFFF', fontSize: 15, fontWeight: 600, textDecoration: 'none', backdropFilter: 'blur(12px)', cursor: 'pointer' }}
          >
            Explore Services <ArrowRight size={15} strokeWidth={2} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ─── HOME PAGE (single scroll) ────────────────────────────────────────────────
export default function Home() {
  return (
    <main id="main-content" aria-label="Galac.ai">
      <FreshShotHero />
      <HandoffsSection />
      <OrchestrationPillarsSection />
      <ComparisonSection />
      <InsightsSection />
      <ServicesSection />
      <SolutionsSection />
      <ContactSection />
      <FinalCTASection />
    </main>
  )
}
