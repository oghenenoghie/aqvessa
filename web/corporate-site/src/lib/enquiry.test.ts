import { describe, expect, it } from "vitest";
import { EMPTY_VALUES, enquiryText, hasErrors, readValues, validateEnquiry, type EnquiryValues } from "@/lib/enquiry";
import { rateLimited, resetRateLimit } from "@/lib/rate-limit";

const valid: EnquiryValues = {
  ...EMPTY_VALUES,
  name: "Ada Obi",
  email: "ada@example.com",
  organisation: "Example Ltd",
  country: "Nigeria",
  area: "software-engineering",
  message: "We need a payroll integration for our finance system.",
  consent: "yes",
};
const today = new Date("2026-11-15T10:00:00Z");

describe("enquiry validation", () => {
  it("accepts a complete enquiry with only the required fields", () => {
    expect(validateEnquiry(valid, today)).toEqual({});
  });

  it("reports every missing required field", () => {
    const errors = validateEnquiry(EMPTY_VALUES, today);
    for (const f of ["name", "email", "organisation", "country", "area", "message", "consent"] as const) expect(errors[f], f).toBeTruthy();
    expect(errors.deadline).toBeUndefined();
    expect(errors.budget).toBeUndefined();
  });

  it("rejects bad email, short message, unknown area and unticked consent", () => {
    const errors = validateEnquiry({ ...valid, email: "ada@", message: "Hi", area: "nope", consent: "" }, today);
    expect(Object.keys(errors).sort()).toEqual(["area", "consent", "email", "message"]);
  });

  it("rejects an email that could carry header injection", () => {
    expect(validateEnquiry({ ...valid, email: "a@b.co\nBcc: x@y.z" }, today).email).toBeTruthy();
  });

  it("checks the deadline and the WhatsApp number when given", () => {
    expect(validateEnquiry({ ...valid, deadline: "2026-12-31" }, today).deadline).toBeUndefined();
    expect(validateEnquiry({ ...valid, deadline: "2026-01-01" }, today).deadline).toBeTruthy();
    expect(validateEnquiry({ ...valid, deadline: "soon" }, today).deadline).toBeTruthy();
    expect(validateEnquiry({ ...valid, method: "whatsapp" }, today).whatsapp).toBeTruthy();
    expect(validateEnquiry({ ...valid, method: "whatsapp", whatsapp: "+234 801 234 5678" }, today).whatsapp).toBeUndefined();
    expect(validateEnquiry({ ...valid, whatsapp: "12" }, today).whatsapp).toBeTruthy();
  });

  it("rejects a budget value that is not an offered band", () => {
    expect(validateEnquiry({ ...valid, budget: "usd-2" }, today).budget).toBeUndefined();
    expect(validateEnquiry({ ...valid, budget: "free" }, today).budget).toBeTruthy();
  });

  it("reads only known fields and trims them", () => {
    const data = new FormData();
    data.set("name", "  Ada  ");
    data.set("unknown", "x");
    const values = readValues(data);
    expect(values.name).toBe("Ada");
    expect(values.method).toBe("email");
    expect("unknown" in values).toBe(false);
    expect(hasErrors({})).toBe(false);
  });

  it("builds a plain-text email body that names every field", () => {
    const text = enquiryText({ ...valid, budget: "ngn-2", deadline: "2026-12-31" });
    expect(text).toContain("Business area: Software engineering");
    expect(text).toContain("Budget range: ₦3,000,000 to ₦10,000,000");
    expect(text).toContain("Deadline: 2026-12-31");
  });
});

describe("rate limit", () => {
  it("allows five in the window, then blocks, then allows again after the window", () => {
    resetRateLimit();
    const now = 1_000_000;
    for (let i = 0; i < 5; i++) expect(rateLimited("ip", { now: now + i })).toBe(false);
    expect(rateLimited("ip", { now: now + 10 })).toBe(true);
    expect(rateLimited("other", { now: now + 10 })).toBe(false);
    expect(rateLimited("ip", { now: now + 16 * 60 * 1000 })).toBe(false);
  });
});
