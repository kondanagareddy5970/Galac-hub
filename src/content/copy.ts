// src/content/copy.ts
// SOURCE OF TRUTH: All approved copy from the Galac.ai Brand Guidelines PDF.
// DO NOT add or modify copy here without client approval.
// Placeholders marked with data-placeholder are awaiting client content.

export const BRAND = {
  name: 'Galac.ai',
  domain: 'galac.ai',
  url: 'https://galac.ai',
  social: {
    instagram: '@Galac_ai',
    x: '@Galac.ai',
    linkedIn: 'placeholder', // data-placeholder="linkedin-handle"
  },
  copyright: 'Galac.ai © 2026. All Rights Reserved.',
} as const;

export const META = {
  home: {
    title: 'Galac.ai | AI Orchestration for SAP and Salesforce',
    description:
      'Galac.ai is an enterprise AI platform that helps SAP and Salesforce work together as one intelligent system, connecting data, workflows, and decisions across both platforms.',
  },
  services: {
    title: 'Services | Galac.ai',
    description:
      'Galac.ai connects SAP and Salesforce for smarter automation and clearer insights. Explore our enterprise orchestration services.',
  },
  solutions: {
    title: 'Solutions | Galac.ai',
    description:
      'Enterprise intelligence that connects SAP and Salesforce. AI orchestration across complex operational ecosystems.',
  },
  research: {
    title: 'Research | Galac.ai',
    description:
      'Insights and research from the Galac.ai team on enterprise AI orchestration.',
  },
  contact: {
    title: 'Contact Us | Galac.ai',
    description:
      'Get in touch with Galac.ai. AI orchestration for SAP and Salesforce, allowing smarter integration without replacement.',
  },
} as const;

export const NAV = {
  links: [
    { label: 'Home', href: '#hero' },
    { label: 'Platform', href: '#orchestration' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Insights', href: '#insights' },
    { label: 'Services', href: '#services' },
  ],
  cta: { label: 'Contact Us', href: '#contact' },
} as const;

export const HOME = {
  hero: {
    headline: 'Where Enterprise Systems Think Together',
    body: 'Enterprise systems often fall short because critical data and workflows remain disconnected. Galac.ai unifies SAP and Salesforce through intelligent orchestration, creating greater efficiency, insight, and control.',
    ctaPrimary: { label: 'Get Started', href: '/contact' },
    ctaSecondary: { label: 'Explore', href: '/services' },
    scrollCue: 'Scroll to explore',
  },
  disconnect: {
    lines: [
      'Enterprise systems often fall short because critical data and workflows remain disconnected.',
      'Most enterprise systems struggle because of disconnected workflows and fragmented data.',
    ],
  },
  orchestration: {
    headline: 'Built for Enterprise Complexity',
    body: 'Most enterprise systems struggle because of disconnected workflows and fragmented data. Galac.ai creates a unified intelligence layer that connects SAP and Salesforce, enabling smarter automation, clearer insights, and more efficient operations.',
  },
  statements: [
    {
      headline: 'Connect systems.',
      body: 'Connecting data, workflows, and decisions across both platforms.',
    },
    {
      headline: 'Automate workflows.',
      body: 'Making automation, orchestration, and insight easier to deploy.',
    },
    {
      headline: 'Surface intelligence.',
      body: 'Speed, clarity, and control to the systems businesses rely on every day.',
    },
  ],
  layer: {
    headline: 'Without Replacement',
    body: 'It sits on top of existing enterprise systems without forcing teams to rebuild or replace what they already use.',
  },
  // Stats from PDF mockups — data-placeholder="confirm-with-client"
  // TODO: replace with verified figures
  stats: [
    {
      figure: '73%',
      label: 'Workflow automation up 73% since SAP Salesforce sync.',
      note: 'Illustrative figure',
    },
    {
      figure: '98.7%',
      label: 'Sync Accuracy',
      delta: '+1.4%',
      note: 'Illustrative figure',
    },
    {
      figure: '$4.2M',
      label: 'Revenue Unlocked',
      delta: '+31%',
      note: 'Illustrative figure',
    },
  ],
  enterpriseIntelligence: {
    headline: 'Enterprise Intelligence That Connects',
    subheadline: 'AI orchestration across SAP and Salesforce.',
    body: 'Galac orchestrates SAP and Salesforce through a unified layer of enterprise intelligence designed for complex operational ecosystems.',
    logoStory: {
      line1: 'Two orbits, two systems.',
      line2: 'SAP and Salesforce, or any two worlds.',
      line3: 'Complexity collapses into a single point of clarity.',
    },
  },
  teasers: [
    {
      headline: 'Services',
      body: 'Connect systems. Automate workflows. Surface intelligence.',
      cta: { label: 'Explore Services', href: '/services' },
    },
    {
      headline: 'Solutions',
      body: 'AI Orchestration Layer — Galac unifies SAP and Salesforce for complex operations.',
      cta: { label: 'Explore Solutions', href: '/solutions' },
    },
  ],
  finalCta: {
    headline: 'Where Enterprise Systems Think Together',
    domainDisplay: 'galac.ai',
    ctaPrimary: { label: 'Get Started', href: '/contact' },
    ctaSecondary: { label: 'Explore More', href: '/services' },
  },
} as const;

export const SERVICES = {
  hero: {
    headline: 'AI for SAP & Salesforce Orchestration',
    body: 'Enterprise systems struggle with disconnected workflows and data. Galac.ai connects SAP and Salesforce for smarter automation and clearer insights.',
  },
  areas: [
    {
      headline: 'Connect systems.',
      body: 'Connecting data, workflows, and decisions across both platforms.',
      placeholder: 'client-content', // data-placeholder="service-detail-connect"
    },
    {
      headline: 'Automate workflows.',
      body: 'Making automation, orchestration, and insight easier to deploy.',
      placeholder: 'client-content', // data-placeholder="service-detail-automate"
    },
    {
      headline: 'Surface intelligence.',
      body: 'Speed, clarity, and control to the systems businesses rely on every day.',
      placeholder: 'client-content', // data-placeholder="service-detail-intelligence"
    },
  ],
  cta: { label: 'Get Started', href: '/contact' },
} as const;

export const SOLUTIONS = {
  hero: {
    headline: 'Enterprise Intelligence That Connects',
    body: 'Galac.ai orchestrates AI for SAP and Salesforce, allowing smarter integration without replacement.',
  },
  body: 'Galac orchestrates SAP and Salesforce through a unified layer of enterprise intelligence designed for complex operational ecosystems.',
  placeholderSlots: [
    { id: 'solution-1', label: 'Solution Category' }, // data-placeholder="solution-category-1"
    { id: 'solution-2', label: 'Solution Category' }, // data-placeholder="solution-category-2"
    { id: 'solution-3', label: 'Solution Category' }, // data-placeholder="solution-category-3"
  ],
  cta: { label: 'Get Started', href: '/contact' },
} as const;

export const RESEARCH = {
  hero: {
    headline: 'Research',
    body: 'Intelligence at the intersection of SAP, Salesforce, and enterprise AI orchestration.',
  },
  // Placeholder cards — data-placeholder="research-articles"
  placeholders: Array.from({ length: 6 }, (_, i) => ({
    id: `article-${i + 1}`,
    title: 'Article title', // data-placeholder="article-title"
    excerpt: 'Short excerpt from the article.', // data-placeholder="article-excerpt"
    date: '—', // data-placeholder="article-date"
    category: 'Research', // data-placeholder="article-category"
  })),
} as const;

export const CONTACT = {
  hero: {
    headline: 'Get Started With Galac.ai',
    body: 'Galac.ai orchestrates AI for SAP and Salesforce, allowing smarter integration without replacement.',
  },
  form: {
    fields: [
      { id: 'firstName', label: 'First Name', type: 'text', required: true },
      { id: 'lastName', label: 'Last Name', type: 'text', required: true },
      { id: 'email', label: 'E-Mail', type: 'email', required: true },
      { id: 'company', label: 'Company', type: 'text', required: true },
      { id: 'message', label: 'Message', type: 'textarea', required: true },
    ] as const,
    submit: 'Send Message',
    success: 'Thank you. We will be in touch shortly.',
    errorFallback: 'Something went wrong. Please try again.',
  },
  // data-placeholder="contact-email"
  emailPlaceholder: 'hello@galac.ai',
  // data-placeholder="contact-address"
  addressPlaceholder: 'Address to be confirmed.',
} as const;
