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
  /** True only for a number the owner confirmed also takes ordinary calls. */
  calls: boolean;
};

/**
 * Company contact channels, as confirmed by the owner. Both numbers are on WhatsApp. Only the
 * Nigerian number also takes ordinary calls, so only it gets a tel: link and a telephone entry in
 * the structured data; the Kuwait number stays WhatsApp only.
 */
export const CONTACT: { email: string; whatsapp: readonly WhatsAppNumber[] } = {
  email: "info@aqvessa.org",
  whatsapp: [
    { country: "Kuwait", display: "+965 5083 8915", digits: "96550838915", calls: false },
    { country: "Nigeria", display: "+234 810 867 0629", digits: "2348108670629", calls: true },
  ],
};

export type SocialLink = { label: string; href: string; icon: "linkedin" | "github" };

/** Public profiles. A null address leaves the link out until the profile exists. */
const LINKEDIN_URL: string | null = null;
const GITHUB_URL: string | null = "https://github.com/oghenenoghie/aqvessa";

export const SOCIAL: readonly SocialLink[] = [
  ...(LINKEDIN_URL ? [{ label: "LinkedIn", href: LINKEDIN_URL, icon: "linkedin" as const }] : []),
  ...(GITHUB_URL ? [{ label: "GitHub", href: GITHUB_URL, icon: "github" as const }] : []),
];

export const whatsappHref = (n: WhatsAppNumber) => `https://wa.me/${n.digits}`;

/** A call link, only for a number that takes ordinary calls. Every tel: link on the site comes from here. */
export const telHref = (n: WhatsAppNumber): string | null => (n.calls ? `tel:+${n.digits}` : null);

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
  { href: "/how-we-work", label: "How we work" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
];

/** Every public route, for the sitemap and the footer. */
export const LEGAL_NAV: readonly NavItem[] = [
  { href: "/legal", label: "Legal notice" },
  { href: "/legal/privacy", label: "Privacy notice" },
  { href: "/legal/terms", label: "Terms of use" },
];

export const ROUTES: readonly NavItem[] = [{ href: "/", label: "Home" }, ...NAV, ...LEGAL_NAV];
