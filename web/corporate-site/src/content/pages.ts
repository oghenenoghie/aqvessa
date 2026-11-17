/** Page intros and metadata, one entry per route. */

export type PageCopy = {
  label: string;
  title: string;
  lead: string;
  /** Meta description: one or two sentences, under 160 characters. */
  description: string;
};

export const PAGES = {
  about: {
    label: "Company",
    title: "About Aqvessa",
    lead: "We are a Nigerian company working in technology, software engineering, digital services, commerce, and research and intellectual property.",
    description: "AQVESSA LIMITED: a Nigerian private company limited by shares, with its mission, vision, values and corporate information.",
  },
  business: {
    label: "Business areas",
    title: "Five areas of work",
    lead: "Our registered objects cover software, technology services, digital services, commerce and research. We organise the company into five business areas, with software engineering at the centre.",
    description: "Aqvessa's five business areas: software engineering, technology solutions, digital services, commerce, and research and innovation.",
  },
  products: {
    label: "Products",
    title: "Products and their stage",
    lead: "We build proprietary software. Every product on this page carries one of five stages, and we do not describe a product as further along than the evidence shows.",
    description: "Aqvessa's software products, each shown with its current stage on a five-step ladder from proposed to production-ready.",
  },
  projects: {
    label: "Projects",
    title: "What we have built",
    lead: "Each project has a working deployment or a published build, checked on 2 November 2026. Work for organisations is described without naming them.",
    description: "Software products, organisation websites and demos built by Aqvessa, each with a working deployment.",
  },
  engineering: {
    label: "Engineering",
    title: "How we build software",
    lead: "Maintainability, security, scalability, performance and reliability come first. These are the principles and tools behind every system we build.",
    description: "The engineering principles, standards and default technology stack Aqvessa uses to build software.",
  },
  howWeWork: {
    label: "How we work",
    title: "How we work with clients",
    lead: "Three ways to engage us, five steps from enquiry to handover, and how pricing works.",
    description: "How Aqvessa works with clients: engagement models, the five delivery steps from enquiry to support, and how projects are priced.",
  },
  downloads: {
    label: "Downloads",
    title: "CBT offline trust-root utility",
    lead: "A Windows utility for authorised CBT administrators to generate the platform’s offline signing trust root on a dedicated local workstation.",
    description: "Download the CBT offline trust-root setup utility for Windows and review its checksum and security instructions.",
  },
  contact: {
    label: "Contact",
    title: "Make an enquiry",
    lead: "We welcome enquiries about technology partnerships, enterprise software, licensing, digital transformation and international business.",
    description: "Send an enquiry to AQVESSA LIMITED about partnerships, enterprise software, licensing and other business matters.",
  },
  legal: {
    label: "Legal",
    title: "Legal notice",
    lead: "Corporate information about AQVESSA LIMITED, and who owns the content of this website.",
    description: "Legal notice for the Aqvessa website: corporate information, intellectual property and the limits of the information given.",
  },
  privacy: {
    label: "Legal",
    title: "Privacy notice",
    lead: "What the enquiry form collects, why, on what legal basis, and how to exercise your rights under the Nigeria Data Protection Act 2023.",
    description: "How AQVESSA LIMITED handles personal data from this website under the Nigeria Data Protection Act 2023, and your rights.",
  },
  terms: {
    label: "Legal",
    title: "Terms of use",
    lead: "The terms that apply when you use this website.",
    description: "Terms of use for the Aqvessa website: acceptable use, intellectual property, links, liability and governing law.",
  },
} as const satisfies Record<string, PageCopy>;
