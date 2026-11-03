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

export type WhatsAppNumber = {
  country: string;
  /** As shown on the page, in international format with spaces. */
  display: string;
  /** Country code and number, digits only, as WhatsApp's click-to-chat links expect. */
  digits: string;
};

/**
 * Company contact channels, as confirmed by the owner. The phone numbers take WhatsApp only, so
 * they link to WhatsApp, never to tel:, and stay out of the structured data.
 */
export const CONTACT: { email: string; whatsapp: readonly WhatsAppNumber[] } = {
  email: "info@aqvessa.org",
  whatsapp: [
    { country: "Kuwait", display: "+965 5083 8915", digits: "96550838915" },
    { country: "Nigeria", display: "+234 810 867 0629", digits: "2348108670629" },
  ],
};

export const whatsappHref = (n: WhatsAppNumber) => `https://wa.me/${n.digits}`;

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
