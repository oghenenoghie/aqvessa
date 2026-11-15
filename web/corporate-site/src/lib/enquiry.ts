import { BUSINESS_AREAS } from "@/content/business";

/** Shared by the form (client) and the server action, so both apply the same rules. */

/** Hidden field that people leave empty and simple bots fill in. */
export const HONEYPOT = "company_website";

export const AREA_OTHER = "other";
export const AREA_OPTIONS: readonly { value: string; label: string }[] = [
  ...BUSINESS_AREAS.map((a) => ({ value: a.slug, label: a.name })),
  { value: AREA_OTHER, label: "Other" },
];

export const BUDGET_OPTIONS: readonly { group: string; options: readonly { value: string; label: string }[] }[] = [
  {
    group: "Naira",
    options: [
      { value: "ngn-1", label: "Under ₦3,000,000" },
      { value: "ngn-2", label: "₦3,000,000 to ₦10,000,000" },
      { value: "ngn-3", label: "₦10,000,000 to ₦30,000,000" },
      { value: "ngn-4", label: "Over ₦30,000,000" },
    ],
  },
  {
    group: "US dollars",
    options: [
      { value: "usd-1", label: "Under USD 2,000" },
      { value: "usd-2", label: "USD 2,000 to USD 7,000" },
      { value: "usd-3", label: "USD 7,000 to USD 20,000" },
      { value: "usd-4", label: "Over USD 20,000" },
    ],
  },
  { group: "Other", options: [{ value: "unsure", label: "Not sure yet" }] },
];

export const CONTACT_METHODS = [
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

export const FIELDS = [
  "name",
  "email",
  "organisation",
  "country",
  "area",
  "message",
  "deadline",
  "budget",
  "method",
  "whatsapp",
  "consent",
] as const;
export type FieldName = (typeof FIELDS)[number];

export type EnquiryValues = Record<FieldName, string>;
export type EnquiryErrors = Partial<Record<FieldName, string>>;

export const EMPTY_VALUES: EnquiryValues = {
  name: "",
  email: "",
  organisation: "",
  country: "",
  area: "",
  message: "",
  deadline: "",
  budget: "",
  method: "email",
  whatsapp: "",
  consent: "",
};

export const LIMITS = { name: 100, email: 254, organisation: 150, country: 80, message: 3000, messageMin: 20 } as const;

const EMAIL = /^[^\s@<>"',;:]+@[^\s@<>"',;:]+\.[^\s@<>"',;:]{2,}$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Reads the form's values as trimmed strings, ignoring anything that is not a known field. */
export function readValues(source: { get(name: string): unknown }): EnquiryValues {
  const out = { ...EMPTY_VALUES };
  for (const field of FIELDS) {
    const raw = source.get(field);
    if (typeof raw === "string") out[field] = raw.replace(/\r\n/g, "\n").trim();
  }
  if (!out.method) out.method = "email";
  return out;
}

/** Returns an error message per invalid field. An empty object means the enquiry is valid. */
export function validateEnquiry(v: EnquiryValues, today: Date = new Date()): EnquiryErrors {
  const e: EnquiryErrors = {};
  if (!v.name) e.name = "Enter your name.";
  else if (v.name.length > LIMITS.name) e.name = `Use ${LIMITS.name} characters or fewer.`;

  if (!v.email) e.email = "Enter your email address.";
  else if (v.email.length > LIMITS.email || !EMAIL.test(v.email)) e.email = "Enter an email address in the form name@example.com.";

  if (!v.organisation) e.organisation = "Enter your organisation, or your own name if you are writing as an individual.";
  else if (v.organisation.length > LIMITS.organisation) e.organisation = `Use ${LIMITS.organisation} characters or fewer.`;

  if (!v.country) e.country = "Enter your country.";
  else if (v.country.length > LIMITS.country) e.country = `Use ${LIMITS.country} characters or fewer.`;

  if (!v.area) e.area = "Choose a business area, or Other.";
  else if (!AREA_OPTIONS.some((o) => o.value === v.area)) e.area = "Choose one of the listed business areas.";

  if (!v.message) e.message = "Tell us what you need.";
  else if (v.message.length < LIMITS.messageMin) e.message = `Write at least ${LIMITS.messageMin} characters so we can understand the request.`;
  else if (v.message.length > LIMITS.message) e.message = `Use ${LIMITS.message} characters or fewer.`;

  if (v.deadline) {
    const date = new Date(`${v.deadline}T00:00:00Z`);
    const earliest = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1);
    if (!DATE.test(v.deadline) || Number.isNaN(date.getTime())) e.deadline = "Enter the deadline as a date, for example 2026-12-31.";
    else if (date.getTime() < earliest) e.deadline = "Choose a deadline that is today or later.";
  }

  if (v.budget && !BUDGET_OPTIONS.some((g) => g.options.some((o) => o.value === v.budget))) e.budget = "Choose one of the listed budget ranges.";

  if (!CONTACT_METHODS.some((m) => m.value === v.method)) e.method = "Choose how you would like us to reply.";

  const digits = v.whatsapp.replace(/[\s()-]/g, "");
  if (v.method === "whatsapp" && !v.whatsapp) e.whatsapp = "Enter your WhatsApp number, because you chose WhatsApp.";
  else if (v.whatsapp && !/^\+?\d{8,15}$/.test(digits)) e.whatsapp = "Enter the number with its country code, for example +234 801 234 5678.";

  if (v.consent !== "yes") e.consent = "Confirm that you have read the privacy notice.";
  return e;
}

export const hasErrors = (e: EnquiryErrors) => Object.keys(e).length > 0;

export type EnquiryState =
  | { status: "idle"; values: EnquiryValues; errors: EnquiryErrors }
  | { status: "invalid"; values: EnquiryValues; errors: EnquiryErrors }
  | { status: "failed"; values: EnquiryValues; errors: EnquiryErrors; message: string }
  | { status: "success"; values: EnquiryValues; errors: EnquiryErrors };

export const INITIAL_STATE: EnquiryState = { status: "idle", values: EMPTY_VALUES, errors: {} };

const labelOf = (options: readonly { value: string; label: string }[], value: string) => options.find((o) => o.value === value)?.label ?? value;

/** Plain-text body for the email to info@aqvessa.org. */
export function enquiryText(v: EnquiryValues): string {
  const budget = BUDGET_OPTIONS.flatMap((g) => g.options).find((o) => o.value === v.budget)?.label;
  return [
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Organisation: ${v.organisation}`,
    `Country: ${v.country}`,
    `Business area: ${labelOf(AREA_OPTIONS, v.area)}`,
    `Preferred contact: ${labelOf(CONTACT_METHODS, v.method)}${v.whatsapp ? ` (${v.whatsapp})` : ""}`,
    `Deadline: ${v.deadline || "Not given"}`,
    `Budget range: ${budget ?? "Not given"}`,
    "Consent: privacy notice read",
    "",
    "Message:",
    v.message,
  ].join("\n");
}

export const enquirySubject = (v: EnquiryValues) => `Website enquiry: ${labelOf(AREA_OPTIONS, v.area)}`;
