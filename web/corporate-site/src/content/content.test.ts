import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import * as business from "@/content/business";
import * as company from "@/content/company";
import * as engineering from "@/content/engineering";
import * as enquiries from "@/content/enquiries";
import * as pages from "@/content/pages";
import * as products from "@/content/products";
import * as projects from "@/content/projects";
import { formatDate } from "@/lib/dates";
import { NAV, ROUTES } from "@/lib/site";

/** Every string in the content modules, with the path it was found at. */
function strings(value: unknown, path: string, out: { path: string; text: string }[] = []) {
  if (typeof value === "string") out.push({ path, text: value });
  else if (Array.isArray(value)) value.forEach((item, index) => strings(item, `${path}[${index}]`, out));
  else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) strings(item, `${path}.${key}`, out);
  }
  return out;
}

/** Text between JSX tags in the app and components, ignoring expressions and code. */
function jsxText(dir: string, out: { path: string; text: string }[] = []) {
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    if (statSync(file).isDirectory()) jsxText(file, out);
    else if (file.endsWith(".tsx")) {
      const source = readFileSync(file, "utf8");
      for (const match of source.matchAll(/>([^<>{}=;()]+)</g)) {
        const text = match[1].trim();
        if (/[A-Za-z]{3}/.test(text)) out.push({ path: file, text });
      }
    }
  }
  return out;
}

const copy = [
  ...strings(company, "company"),
  ...strings(business, "business"),
  ...strings(products, "products"),
  ...strings(projects, "projects"),
  ...strings(engineering, "engineering"),
  ...strings(enquiries, "enquiries"),
  ...strings(pages, "pages"),
  ...jsxText(join(process.cwd(), "src/app")),
  ...jsxText(join(process.cwd(), "src/components")),
];

const SUPERLATIVES =
  /\b(best|leading|world[- ]class|cutting[- ]edge|revolutionary|unparalleled|unmatched|state[- ]of[- ]the[- ]art|seamless(ly)?|game[- ]chang\w*|industry[- ]leading|number one|trusted by)\b/i;
const AMERICAN = /\b(organiz\w*|recogniz\w*|prioritiz\w*|optimiz\w*|analyz\w*|commercializ\w*|customiz\w*|authoriz\w*|standardiz\w*|colou?r(?<!colour)|center|behavior|favor\w*)\b/i;
const EMOJI = /\p{Extended_Pictographic}/u;

describe("copy rules (DESIGN.md: writing tone)", () => {
  it("finds copy to check", () => {
    expect(copy.length).toBeGreaterThan(100);
  });

  it.each(copy)("$path: no exclamation marks, emoji or superlatives", ({ text }) => {
    expect(text).not.toMatch(/!/);
    expect(text).not.toMatch(EMOJI);
    expect(text).not.toMatch(SUPERLATIVES);
  });

  it.each(copy)("$path: British spelling", ({ text }) => {
    expect(text).not.toMatch(AMERICAN);
  });

  it.each(copy)("$path: the descriptor 'Technologies' is not used as part of the name", ({ text }) => {
    expect(text).not.toMatch(/Aqvessa Technologies/i);
  });

  it.each(copy)("$path: capitals AQVESSA only in the registered name", ({ text }) => {
    for (const match of text.matchAll(/AQVESSA(?! LIMITED)/g)) {
      throw new Error(`"${match[0]}" outside "AQVESSA LIMITED" in: ${text}`);
    }
  });
});

describe("company facts", () => {
  it("states the registered name and share capital exactly", () => {
    const facts = Object.fromEntries(company.CORPORATE_FACTS.map((fact) => [fact.term, fact.value]));
    expect(facts["Registered name"]).toBe("AQVESSA LIMITED");
    expect(facts["Registered share capital"]).toBe("₦1,000,000");
    expect(facts["Governing legislation"]).toContain("2020");
  });
});

describe("products", () => {
  it("each product sits on a defined stage with a valid check date", () => {
    for (const product of products.PRODUCTS) {
      expect(products.STAGES.map((s) => s.stage)).toContain(product.stage);
      expect(() => formatDate(product.asOf)).not.toThrow();
    }
  });

  it("no product claims a stage beyond under development without saying why", () => {
    // Raising a stage is a deliberate decision: update this test with the evidence when it happens.
    for (const product of products.PRODUCTS) expect(product.stage).toBeLessThanOrEqual(2);
  });

  it("stages are numbered one to five in order", () => {
    expect(products.STAGES.map((s) => s.stage)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("pages", () => {
  it("meta descriptions stay under 160 characters", () => {
    for (const page of Object.values(pages.PAGES)) expect(page.description.length).toBeLessThanOrEqual(160);
  });

  it("every navigation entry has a route and a page", () => {
    const routes = ROUTES.map((route) => route.href);
    for (const item of NAV) {
      expect(routes).toContain(item.href);
      const file = join(process.cwd(), "src/app", item.href, "page.tsx");
      expect(statSync(file).isFile()).toBe(true);
    }
  });

  it("business area anchors are unique", () => {
    const slugs = business.BUSINESS_AREAS.map((area) => area.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("projects", () => {
  const ORGANISATION_NAMES =
    /anchorship|drydock|geca|dhn|natenrock|nea\b|ifs|publicsphere|pronl|streamline|folad|termly/i;

  it("organisation work is never named or linked", () => {
    for (const p of projects.projectsIn("organisations")) {
      expect(p.url, p.slug).toBeNull();
      for (const text of [p.name, p.summary, ...p.points]) expect(text, p.slug).not.toMatch(ORGANISATION_NAMES);
    }
  });

  it("links are public HTTPS addresses with a label", () => {
    for (const p of projects.PROJECTS.filter((x) => x.url)) {
      expect(p.url, p.slug).toMatch(/^https:\/\//);
      expect(p.urlLabel, p.slug).toBeTruthy();
    }
  });

  it("every project has a known status, a summary and a stack", () => {
    const statuses = ["Live", "Deployed", "Deployed, on request", "Builds published"];
    for (const p of projects.PROJECTS) {
      expect(statuses, p.slug).toContain(p.status);
      expect(p.summary.length, p.slug).toBeGreaterThan(20);
      expect(p.stack.length, p.slug).toBeGreaterThan(0);
    }
  });

  it("slugs are unique and every group has projects", () => {
    const slugs = projects.PROJECTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const g of projects.PROJECT_GROUPS) expect(projects.projectsIn(g.id).length, g.id).toBeGreaterThan(0);
  });

  it("the check date is a valid ISO date", () => {
    expect(() => formatDate(projects.PROJECTS_CHECKED)).not.toThrow();
  });
});
