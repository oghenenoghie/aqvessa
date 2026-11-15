/**
 * Company facts. Source: the company README and the CAC registration documents (Memorandum and
 * Articles of Association). Do not add a fact here that those documents do not state.
 */

export type Fact = { term: string; value: string; mono?: boolean };

/**
 * Facts the owner has still to supply. A value of null means "not supplied": every block that
 * depends on it is left out of the page, so no placeholder text can render. Fill a value in here
 * and the matching block appears everywhere it is used. Nothing else needs to change.
 */
export const COMPANY_DETAILS: {
  /** CAC registration number, for example "RC 1234567". */
  rcNumber: string | null;
  /** Full registered office address, on one line. */
  registeredOffice: string | null;
  /** Year the company was founded or began operating. */
  foundedYear: number | null;
  /** Number of sectors served, counted from client work. */
  sectorsServed: number | null;
  /** How long enquiry data is kept, as a sentence for the privacy notice. */
  retention: string | null;
  /** One sentence saying why the site lists a Kuwait WhatsApp number. */
  kuwaitLineNote: string | null;
} = {
  rcNumber: null,
  registeredOffice: null,
  foundedYear: null,
  sectorsServed: null,
  retention: null,
  kuwaitLineNote: null,
};

export const CORPORATE_FACTS: readonly Fact[] = [
  { term: "Registered name", value: "AQVESSA LIMITED" },
  ...(COMPANY_DETAILS.rcNumber ? [{ term: "RC number", value: COMPANY_DETAILS.rcNumber, mono: true }] : []),
  { term: "Country of incorporation", value: "Federal Republic of Nigeria" },
  { term: "Legal structure", value: "Private company limited by shares" },
  { term: "Governing legislation", value: "Companies and Allied Matters Act (CAMA) 2020" },
  ...(COMPANY_DETAILS.registeredOffice ? [{ term: "Registered office", value: COMPANY_DETAILS.registeredOffice }] : []),
  { term: "Registered share capital", value: "₦1,000,000", mono: true },
];

/** "© 2026 AQVESSA LIMITED", plus the RC number and registered office once they are supplied. */
export function footerLine(year: number): string {
  return ["© " + year + " AQVESSA LIMITED", COMPANY_DETAILS.rcNumber, COMPANY_DETAILS.registeredOffice].filter(Boolean).join(" · ");
}

export const FACTS_SOURCE = "Source: company registration documents";

export const TAGLINE = [
  "Building technology.",
  "Enabling businesses.",
  "Creating lasting value.",
] as const;

export const MISSION =
  "To develop innovative technology products and deliver reliable digital solutions that help businesses operate more efficiently, grow sustainably and compete in an increasingly digital economy.";

export const VISION =
  "To become an internationally competitive technology-driven enterprise recognised for engineering excellence, innovation, business transformation and sustainable commercial growth.";

export type Value = { name: string; text: string };

export const VALUES: readonly Value[] = [
  { name: "Innovation", text: "We keep looking for better ways to solve the problem in front of us." },
  { name: "Integrity", text: "We operate with transparency and accept accountability for what we ship." },
  { name: "Engineering excellence", text: "We build solutions that are reliable, secure and maintainable." },
  { name: "Customer value", text: "We judge our work by the outcome it gives the customer." },
  { name: "Sustainability", text: "We develop businesses that are commercially viable over the long term." },
  { name: "Continuous improvement", text: "We learn, adapt and change how we work when the evidence says so." },
];

export const ABOUT_PARAGRAPHS = [
  "AQVESSA LIMITED is a private company limited by shares, incorporated in Nigeria under the Companies and Allied Matters Act 2020.",
  "We combine software development, digital transformation, business solutions, research and development, and commercial work in one company. Software engineering is the strategic centre of that work.",
  "We believe technology should solve real problems, improve how a business operates and create value that can be measured.",
] as const;

export type Person = {
  name: string;
  role: string;
  /** Two sentences. */
  bio: string;
  /** Public LinkedIn address. */
  linkedin: string;
  /** Portrait in /public, for example "/people/name.jpg". Never a stock photo. */
  portrait: { src: string; alt: string; width: number; height: number } | null;
};

/** Leadership, for the "Who runs Aqvessa" section. Empty until the owner supplies each person. */
export const PEOPLE: readonly Person[] = [];
