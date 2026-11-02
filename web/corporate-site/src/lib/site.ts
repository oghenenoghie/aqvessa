/** Site-wide settings. Anything marked "before launch" in the README is set here. */

function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  // Set by Vercel on every deployment: the project's production domain, without a scheme.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const SITE = {
  name: "Aqvessa",
  legalName: "AQVESSA LIMITED",
  url: siteUrl(),
  description:
    "Aqvessa is a Nigerian technology company working in software engineering, technology services, digital services, commerce, and research and intellectual property.",
} as const;

/**
 * Verified company contact channels only. Leave a value null until it is confirmed: the site
 * shows a holding note instead.
 */
export const CONTACT: { email: string | null } = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
};

export const LINKS = {
  contact: "/contact",
  products: "/products",
} as const;

export type NavItem = { href: string; label: string };

/** Header navigation, in order. */
export const NAV: readonly NavItem[] = [
  { href: "/about", label: "Company" },
  { href: "/business", label: "Business areas" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/engineering", label: "Engineering" },
  { href: "/contact", label: "Contact" },
];

/** Every public route, for the sitemap and the footer. */
export const ROUTES: readonly NavItem[] = [{ href: "/", label: "Home" }, ...NAV, { href: "/legal", label: "Legal notice" }];
