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
  engineering: {
    label: "Engineering",
    title: "How we build software",
    lead: "Maintainability, security, scalability, performance and reliability come first. These are the principles and tools behind every system we build.",
    description: "The engineering principles, standards and default technology stack Aqvessa uses to build software.",
  },
  contact: {
    label: "Contact",
    title: "Make an enquiry",
    lead: "We welcome enquiries about technology partnerships, enterprise software, licensing, digital transformation and international business.",
    description: "How to contact AQVESSA LIMITED about partnerships, enterprise software, licensing and other business enquiries.",
  },
  legal: {
    label: "Legal",
    title: "Legal notice",
    lead: "Corporate information about AQVESSA LIMITED, and the terms that apply to this website and its content.",
    description: "Legal notice for the Aqvessa website: corporate information, intellectual property and how this website handles your data.",
  },
} as const satisfies Record<string, PageCopy>;
