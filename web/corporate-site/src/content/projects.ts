/**
 * Projects with a working deployment, from the owner's GitHub repositories.
 *
 * A project is listed only when its latest production deployment succeeded (or, for Plutus
 * Desktop, when installer builds are published), as checked on PROJECTS_CHECKED. Each entry is
 * written from its repository's README, description and dependencies; nothing is added that
 * those do not state.
 *
 * Websites built for organisations are described without naming the organisation and without a
 * link, as the owner decided. A project links to its live site only when the address is open to
 * the public: most Vercel deployments here require a Vercel sign-in.
 */

import type { StageNumber } from "@/content/products";

export const PROJECTS_CHECKED = "2026-11-02";

export type ProjectGroup = "products" | "organisations" | "demos";

export type Project = {
  slug: string;
  group: ProjectGroup;
  name: string;
  /** Industry the project serves, for the filter. */
  sector: string;
  summary: string;
  /** The problem it solves, only when the facts state it. */
  problem?: string;
  /** One measurable outcome, only when the facts include one. */
  outcome?: string;
  /** One screenshot in /public. Left out until a real one exists. */
  screenshot?: { src: string; alt: string; width: number; height: number };
  /** Product stage from the products page, for projects that are products. */
  stage?: StageNumber;
  points: readonly string[];
  stack: readonly string[];
  /** What the evidence shows, in two or three words. */
  status: string;
  /** A public address only; null when the deployment is private or the organisation is unnamed. */
  url: string | null;
  urlLabel?: string;
};

export const PROJECT_GROUPS: readonly { id: ProjectGroup; label: string; title: string; intro: string }[] = [
  {
    id: "products",
    label: "Products",
    title: "Plutus and the platforms behind it.",
    intro: "Our own payroll, HR and business software, from the Plutus editions to the shared platform they draw on.",
  },
  {
    id: "organisations",
    label: "Built for organisations",
    title: "Websites and platforms for organisations.",
    intro: "Work built for organisations in marine services, finance and consulting, training, education and the arts. We describe each one without naming the organisation.",
  },
  {
    id: "demos",
    label: "Demos",
    title: "Demos and experiments.",
    intro: "Smaller builds we use to try out architectures and interfaces, from headless commerce to content and data apps.",
  },
];

export const PROJECTS: readonly Project[] = [
  // Products
  {
    slug: "plutus-cloud",
    group: "products",
    name: "Plutus Cloud",
    sector: "HR and payroll",
    summary: "The web edition of Plutus: compliance-native payroll and HR for Nigeria, built on the 2026 Nigeria Tax Act.",
    stage: 2,
    points: [
      "PAYE, pension, NHF, NHIS, NSITF, ITF and WHT from a versioned rules engine",
      "Next.js web app over a FastAPI and PostgreSQL backend",
      "One rule set shared with Plutus Desktop",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Railway"],
    status: "Development build, deployed for testing",
    url: null,
  },
  {
    slug: "plutus-desktop",
    group: "products",
    name: "Plutus Desktop",
    sector: "HR and payroll",
    summary: "The offline edition of Plutus, installed on your own machine and running on the same rule set as Cloud.",
    stage: 2,
    points: ["Installers for Windows, macOS and Linux", "Data stays on the machine", "Updates install over the previous version"],
    stack: ["Next.js", "Python", "Desktop installers"],
    status: "Development build, published for testing",
    url: "https://www.plutusbiztech.com/editions",
    urlLabel: "Download page",
  },
  {
    slug: "plutus-site",
    group: "products",
    name: "Plutus website",
    sector: "HR and payroll",
    summary: "The public site for Plutus, with feature pages, country rules, editions, pricing and user guides.",
    points: ["Product documentation with screenshots", "Country payroll rules generated from the app's own data", "Unit-tested invoice posting examples"],
    stack: ["Next.js", "Tailwind CSS", "Vitest"],
    status: "Live",
    url: "https://www.plutusbiztech.com",
    urlLabel: "plutusbiztech.com",
  },
  {
    slug: "wagebook",
    group: "products",
    name: "Wagebook",
    sector: "HR and payroll",
    summary:
      "The Supabase codebase for Plutus: HR and payroll for Nigeria and Africa on the 2026 Nigeria Tax Act, built as a monorepo with a versioned, integer-money statutory engine. Plutus Cloud is a parallel build of the same product on FastAPI and PostgreSQL.",
    stage: 2,
    points: ["PAYE, pension, NHF, NHIS, NSITF, ITF and WHT", "Money held as whole kobo, never floating point"],
    stack: ["Next.js", "React", "TypeScript", "Supabase"],
    status: "Development build, deployed for testing",
    url: null,
  },
  {
    slug: "business-platform",
    group: "products",
    name: "Business Systems Platform",
    sector: "Business software",
    summary:
      "A multi-tenant core with vertical products on top. Its payroll app is Wagebook, the Supabase codebase for Plutus, deployed against a demo organisation.",
    points: [
      "Tenancy, role-based access, Postgres row-level security and an audit log",
      "Double-entry ledger: integer money, balanced or rejected, append-only",
      "Further apps in the design: cooperative society, hotel property management, school",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Neon"],
    status: "Deployed, on request",
    url: null,
  },

  {
    slug: "intelligent-cbt",
    group: "products",
    name: "Intelligent CBT",
    sector: "Education and training",
    summary:
      "A computer-based testing platform for schools. AI drafts exam questions only from a school's own approved learning materials, and teachers approve every question before it is used in an exam.",
    stage: 2,
    points: ["AI question drafts with citations to the source material", "Online exams, and offline exams in school computer labs", "Results release and item analysis"],
    stack: [],
    status: "In development",
    url: null,
  },

  // Built for organisations
  {
    slug: "offshore-marine-services",
    group: "organisations",
    name: "Offshore marine services website",
    sector: "Marine and offshore",
    summary: "A website for an offshore marine services company.",
    points: ["Vessel catalogue and equipment listings", "Project showcase and enquiry management", "Secure admin dashboard"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Neon PostgreSQL"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "marine-parts-marketplace",
    group: "organisations",
    name: "Marine engine parts marketplace",
    sector: "Marine and offshore",
    summary: "A business-to-business marketplace for complete marine diesel engines and spare parts.",
    points: ["Part discovery from interactive engine drawings", "Condition photography for used parts", "Part-number-first search with model and category filters"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Cloudinary"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "financial-advisory",
    group: "organisations",
    name: "Financial advisory website",
    sector: "Finance and consulting",
    summary: "A website for a financial advisory firm, with its content managed in a headless CMS.",
    points: ["Content edited in Sanity", "Forms and data on Supabase"],
    stack: ["Next.js", "Sanity", "Supabase", "Framer Motion"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "strategy-consulting",
    group: "organisations",
    name: "Strategy and finance consulting website",
    sector: "Finance and consulting",
    summary: "A website for a consulting firm working on strategic growth and financial management.",
    points: [],
    stack: ["Next.js", "TypeScript"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "business-consulting",
    group: "organisations",
    name: "Business consulting website",
    sector: "Finance and consulting",
    summary: "A website for a consulting firm that helps growing businesses increase their value.",
    points: [],
    stack: ["Next.js", "Framer Motion", "Radix UI"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "management-training",
    group: "organisations",
    name: "Management training academy website",
    sector: "Education and training",
    summary: "A website for a management training academy.",
    points: ["Course and skills sections", "Payment links"],
    stack: ["Vite", "TypeScript"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "professional-training",
    group: "organisations",
    name: "Professional training website",
    sector: "Education and training",
    summary: "A website for a professional training and development organisation.",
    points: [],
    stack: ["Next.js", "Radix UI"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "cms-migration",
    group: "organisations",
    name: "WordPress to headless CMS migration",
    sector: "Other",
    summary: "The move of an existing WordPress website to Sanity and Next.js.",
    points: ["Content, media, taxonomies and relationships carried over", "SEO and existing URLs preserved", "Editors work in a Sanity Studio"],
    stack: ["Next.js", "Sanity"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "art-marketplace",
    group: "organisations",
    name: "Online art gallery and marketplace",
    sector: "Arts",
    summary: "A curated marketplace for original paintings, sculpture and bronze.",
    points: ["Collectors browse and buy", "Artists submit work to sell", "Art explored through thirteen movements"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "school-management",
    group: "organisations",
    name: "School management platform",
    sector: "Education and training",
    summary: "A multi-tenant school management platform for Nigerian schools, with the academic calendar at its centre.",
    points: [
      "Tenant isolation per school",
      "Laravel REST API with MySQL, and a Django and FastAPI backend",
      "Authentication, role-based access and multi-tenancy complete on the Python backend",
    ],
    stack: ["Next.js", "Laravel", "Django", "FastAPI"],
    status: "Deployed",
    url: null,
  },

  // Demos
  {
    slug: "headless-storefront",
    group: "demos",
    name: "Headless fashion storefront",
    sector: "Retail and e-commerce",
    summary: "A decoupled commerce build: a Next.js storefront over a custom Django REST API.",
    points: ["Catalogue with filters by category, price, rating and stock", "Cart drawer, wishlist and product reviews", "Token sign-in with automatic refresh"],
    stack: ["Next.js", "Django", "TanStack Query", "Radix UI"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "fashion-storefront",
    group: "demos",
    name: "Fashion and lifestyle storefront",
    sector: "Retail and e-commerce",
    summary: "A storefront for curated fashion and lifestyle goods.",
    points: [],
    stack: ["Next.js", "Radix UI"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "storefront-prototype",
    group: "demos",
    name: "Storefront prototype",
    sector: "Retail and e-commerce",
    summary: "A product catalogue prototype with search and stock status.",
    points: ["Product search", "Low-stock and out-of-stock states"],
    stack: ["Next.js", "Radix UI", "v0"],
    status: "Live",
    url: "https://oghie-store-front.vercel.app",
    urlLabel: "Open the prototype",
  },
  {
    slug: "blog-platform",
    group: "demos",
    name: "Blog platform",
    sector: "Media and publishing",
    summary: "A blog with news content, category navigation and a responsive layout.",
    points: ["Category-based navigation", "Built for desktop and phone"],
    stack: ["Next.js"],
    status: "Deployed",
    url: null,
  },
  {
    slug: "weather-app",
    group: "demos",
    name: "Weather app",
    sector: "Other",
    summary: "A small app that fetches and shows current weather.",
    points: [],
    stack: ["Next.js", "Axios"],
    status: "Deployed",
    url: null,
  },
];

/** Projects with a working deployment or published build. Products still in development are not counted. */
export const WORKING_PROJECTS = PROJECTS.filter((p) => p.status !== "In development");

export function projectsIn(group: ProjectGroup) {
  return PROJECTS.filter((p) => p.group === group);
}
