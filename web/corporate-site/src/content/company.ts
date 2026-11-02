/**
 * Company facts. Source: the company README and the CAC registration documents (Memorandum and
 * Articles of Association). Do not add a fact here that those documents do not state.
 */

export type Fact = { term: string; value: string; mono?: boolean };

export const CORPORATE_FACTS: readonly Fact[] = [
  { term: "Registered name", value: "AQVESSA LIMITED" },
  { term: "Country of incorporation", value: "Federal Republic of Nigeria" },
  { term: "Legal structure", value: "Private company limited by shares" },
  { term: "Governing legislation", value: "Companies and Allied Matters Act (CAMA) 2020" },
  { term: "Registered share capital", value: "₦1,000,000", mono: true },
];

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
