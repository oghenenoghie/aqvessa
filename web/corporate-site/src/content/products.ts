/**
 * Products and the five-stage status ladder. A product never shows a later stage than its own
 * repository and documentation support. Update `asOf` whenever a product's facts are re-checked.
 */

export const STAGES = [
  { stage: 1, name: "Proposed", text: "Defined and scoped. Development has not started." },
  { stage: 2, name: "Under development", text: "Being built. Features, scope and dates can still change." },
  { stage: 3, name: "Completed", text: "Feature-complete for the scope of its release." },
  { stage: 4, name: "Tested and verified", text: "Passed testing against its specification." },
  { stage: 5, name: "Production-ready", text: "Supported for use in live business operations." },
] as const;

export type StageNumber = (typeof STAGES)[number]["stage"];

export type Product = {
  slug: string;
  name: string;
  summary: string;
  stage: StageNumber;
  /** ISO date the facts below were last checked against the product's repositories. */
  asOf: string;
  areas: readonly string[];
  status: readonly { term: string; value: string }[];
  url: string | null;
  urlLabel: string;
};

export const PRODUCTS: readonly Product[] = [
  {
    slug: "plutus",
    name: "Plutus",
    summary:
      "An HR, payroll, accounting and business management platform for businesses in Nigeria and across Africa, in Cloud and Desktop editions.",
    stage: 2,
    asOf: "2026-11-02",
    areas: [
      "Human resource management",
      "Payroll and wage administration",
      "Accounting and compliance",
      "Recruitment and applicant tracking",
      "Learning management",
      "Business reporting and analytics",
      "Cloud and desktop delivery",
    ],
    status: [
      { term: "Desktop edition", value: "Early builds (version 0.1.0) published for Windows, macOS and Linux" },
      { term: "Cloud edition", value: "In development. Not yet publicly available" },
    ],
    url: "https://www.plutusng.com",
    urlLabel: "Visit the Plutus website",
  },
];

export function stageOf(stage: StageNumber) {
  const found = STAGES.find((s) => s.stage === stage);
  if (!found) throw new Error(`Unknown stage ${stage}`);
  return found;
}
