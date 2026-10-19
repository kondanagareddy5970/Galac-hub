// src/pages/Contact.tsx
// Split layout: approved copy left, form right
// Form: First Name, Last Name, E-Mail, Company, Message + validation + success state

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, MapPin, Mail } from 'lucide-react'
import { CONTACT } from '../content/copy'
import FormField from '../components/ui/FormField'
import OrbitalArc from '../components/brand/OrbitalArc'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().min(1, 'Company name is required.'),
  message: z.string().min(20, 'Message must be at least 20 characters.'),
  // Honeypot
  _honey: z.string().max(0, '').optional(),
})

type FormValues = z.infer<typeof schema>

// TODO: Replace with actual API endpoint
async function submitContactForm(_data: Omit<FormValues, '_honey'>): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  // Stub: In production, POST to /api/contact
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    if (data._honey) return // Honeypot triggered
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
    <main id="main-content" aria-label="Contact Galac.ai">
      <section
        data-theme="light"
        style={{
          position: 'relative',
          background: 'linear-gradient(160deg, var(--cultured) 0%, var(--platinum) 100%)',
          paddingTop: 140,
          paddingBottom: 120,
          paddingInline: 'var(--outer)',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* Orbital Arc background */}
        <OrbitalArc
          style={{ position: 'absolute', bottom: -100, left: -60 } as React.CSSProperties}
          size={700}
          opacity={0.08}
          animated={false}
        />
        <OrbitalArc
          style={{ position: 'absolute', top: 0, right: -120 } as React.CSSProperties}
          size={500}
          opacity={0.06}
          animated={false}
        />

        <div
          style={{
            maxWidth: 'var(--container)',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left: Approved copy */}
          <div style={{ paddingTop: 16 }}>
            <p style={{ fontSize: 11, color: 'var(--azure)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Geist Mono, monospace', marginBottom: 20 }}>
              Contact
            </p>
            <motion.h1
              className="text-display-1"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontWeight: 400, color: 'var(--rich-black)', marginBottom: 24 }}
            >
              {CONTACT.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(16px,1.2vw,18px)',
                color: 'var(--text-muted-light)',
                lineHeight: 1.65,
                letterSpacing: '-0.02em',
                maxWidth: '48ch',
                marginBottom: 48,
              }}
            >
              {CONTACT.hero.body}
            </motion.p>

            {/* Contact details (placeholders) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div
                data-placeholder="contact-email"
                style={{ display: 'flex', alignItems: 'center', gap: 12, borderStyle: 'none' }}
              >
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--azure-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={16} color="var(--azure)" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontSize: 12, color: 'var(--text-muted-light)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'Geist Mono, monospace' }}>
                    Email
                  </p>
                  <p style={{ fontSize: 15, color: 'var(--rich-black)' }}>{CONTACT.emailPlaceholder}</p>
                </div>
              </div>

              <div
                data-placeholder="contact-address"
                style={{ display: 'flex', alignItems: 'center', gap: 12, borderStyle: 'none' }}
              >
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--azure-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={16} color="var(--azure)" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontSize: 12, color: 'var(--text-muted-light)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'Geist Mono, monospace' }}>
                    Address
                  </p>
                  <p style={{ fontSize: 15, color: 'var(--rich-black)' }}>{CONTACT.addressPlaceholder}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--cultured)',
              borderRadius: 24,
              padding: '48px 40px',
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
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 16,
                    minHeight: 320,
                    textAlign: 'center',
                  }}
                  role="alert"
                  aria-live="polite"
                >
                  <CheckCircle size={48} color="var(--azure)" strokeWidth={1.5} />
                  <h2 style={{ fontSize: 24, fontWeight: 400, letterSpacing: '-0.03em', color: 'var(--rich-black)' }}>
                    Message sent.
                  </h2>
                  <p style={{ fontSize: 16, color: 'var(--text-muted-light)' }}>
                    {CONTACT.form.success}
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setStatus('idle')}
                    style={{ marginTop: 16 }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.03em', color: 'var(--rich-black)', marginBottom: 8 }}>
                    Get Started With Us
                  </h2>

                  {/* Honeypot (hidden from real users) */}
                  <input
                    {...register('_honey')}
                    type="text"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0 }}
                  />

                  {/* Two-column row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <FormField
                      id="firstName"
                      label="First Name"
                      type="text"
                      autoComplete="given-name"
                      required
                      error={errors.firstName}
                      {...register('firstName')}
                    />
                    <FormField
                      id="lastName"
                      label="Last Name"
                      type="text"
                      autoComplete="family-name"
                      required
                      error={errors.lastName}
                      {...register('lastName')}
                    />
                  </div>

                  <FormField
                    id="email"
                    label="E-Mail"
                    type="email"
                    autoComplete="email"
                    required
                    error={errors.email}
                    {...register('email')}
                  />

                  <FormField
                    id="company"
                    label="Company"
                    type="text"
                    autoComplete="organization"
                    required
                    error={errors.company}
                    {...register('company')}
                  />

                  <FormField
                    id="message"
                    label="Message"
                    as="textarea"
                    required
                    error={errors.message}
                    {...register('message')}
                  />

                  {status === 'error' && (
                    <p role="alert" style={{ fontSize: 13, color: '#c00' }}>
                      {CONTACT.form.errorFallback}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'loading'}
                    style={{ height: 52, fontSize: 15, marginTop: 8 }}
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span style={{
                        width: 18, height: 18,
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff',
                        borderRadius: '50%',
                        display: 'inline-block',
                        animation: 'spin 0.7s linear infinite',
                      }} />
                    ) : CONTACT.form.submit}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </main>
  )
}
