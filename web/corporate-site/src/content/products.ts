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
  urlLabel?: string;
};

export const PRODUCTS: readonly Product[] = [
  {
    slug: "plutus",
    name: "Plutus",
    summary:
      "An accounting, payroll, HR and business management platform for businesses in Nigeria and across Africa, in Cloud and Desktop editions.",
    stage: 3,
    asOf: "2026-11-24",
    areas: [
      "Human resource management",
      "Payroll and wage administration",
      "Payroll in six countries: Nigeria, the Gambia, Rwanda, Kenya, Ghana and Côte d'Ivoire",
      "Accounting and compliance",
      "Inventory and stock control",
      "Recruitment and applicant tracking",
      "Learning management",
      "Analytics and reporting",
      "Cloud and desktop delivery",
    ],
    status: [
      { term: "Desktop edition", value: "Completed. Installers for Windows, macOS and Linux are published, and updates install over the previous version" },
      { term: "Cloud edition", value: "Completed and deployed for testing. Access is by request, through the Plutus website" },
      {
        term: "Codebases",
        value: "Wagebook is the Supabase codebase for Plutus. Plutus Cloud is a parallel build of the same product on FastAPI and PostgreSQL",
      },
    ],
    url: "https://www.plutusbiztech.com",
    urlLabel: "Visit the Plutus website",
  },
  {
    slug: "intelligent-cbt",
    name: "Intelligent CBT",
    summary:
      "A computer-based testing platform for schools. AI drafts exam questions only from a school's own approved learning materials, and teachers approve every question before it is used in an exam.",
    stage: 2,
    asOf: "2026-11-15",
    areas: [
      "AI question drafts with citations",
      "Question bank and exam builder",
      "Online exams and marking",
      "Offline exams in computer labs",
      "Results and item analysis",
      "Learning materials and OCR",
      "School accounts, classes and subjects",
    ],
    status: [
      {
        term: "Web app",
        value: "In development. The exam workflow runs in the browser, from learning materials and AI drafts to released results. Not yet publicly available",
      },
      { term: "Desktop app", value: "For exams in school computer labs without the internet. In development" },
    ],
    url: null,
  },
];

export function stageOf(stage: StageNumber) {
  const found = STAGES.find((s) => s.stage === stage);
  if (!found) throw new Error(`Unknown stage ${stage}`);
  return found;
}
