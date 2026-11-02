/**
 * Business areas. Each one is part of the company's registered objects. A registered object is a
 * permission, not a live service: describe what an area covers, never that it is operating,
 * unless a product or engagement can be shown.
 */

export type BusinessArea = {
  slug: string;
  number: string;
  name: string;
  summary: string;
  covers: readonly string[];
};

export const BUSINESS_AREAS: readonly BusinessArea[] = [
  {
    slug: "software-engineering",
    number: "01",
    name: "Software engineering",
    summary: "Custom software, enterprise applications, SaaS products and platforms.",
    covers: [
      "Custom software development",
      "Enterprise applications",
      "SaaS and subscription platforms",
      "Web and mobile applications",
    ],
  },
  {
    slug: "technology-solutions",
    number: "02",
    name: "Technology solutions",
    summary: "IT consulting, cloud infrastructure, databases and cybersecurity.",
    covers: ["IT consulting", "Cloud computing and infrastructure", "Database design and administration", "Cybersecurity"],
  },
  {
    slug: "digital-services",
    number: "03",
    name: "Digital services",
    summary: "Websites, applications, digital marketing, branding, advertising and media.",
    covers: ["Websites and web applications", "Digital marketing and advertising", "Branding and creative services", "Media production"],
  },
  {
    slug: "commerce",
    number: "04",
    name: "Commerce and e-commerce",
    summary: "Online commerce, distribution, fashion and apparel, and technology products.",
    covers: ["Online commerce", "Distribution", "Fashion and apparel", "Technology products"],
  },
  {
    slug: "research-and-innovation",
    number: "05",
    name: "Research and innovation",
    summary: "Proprietary products, research and development, intellectual property and licensing.",
    covers: ["Proprietary product development", "Research and development", "Intellectual property", "Licensing and commercialisation"],
  },
];

/** Product directions for the software engineering area, from the company README. */
export const TECHNOLOGY_DIRECTIONS: readonly string[] = [
  "HR, payroll and workforce platforms",
  "Accounting and business management systems",
  "SaaS and subscription products",
  "Web and mobile applications",
  "E-commerce solutions",
  "Business process automation",
  "API integrations and cloud applications",
  "Data management and analytics",
  "AI-assisted business tools",
];
