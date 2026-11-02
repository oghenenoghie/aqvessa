import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const ROUTES = ["/", "/about", "/business", "/products", "/engineering", "/contact", "/legal"];
const VIEWPORTS = [
  { name: "phone", width: 375, height: 812 },
  { name: "desktop", width: 1440, height: 900 },
] as const;
const SCHEMES = ["light", "dark"] as const;

/** Collects console errors and uncaught exceptions for the life of the page. */
function watchErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  return errors;
}

for (const scheme of SCHEMES) {
  for (const viewport of VIEWPORTS) {
    test.describe(`${scheme} theme, ${viewport.name}`, () => {
      test.use({ colorScheme: scheme, viewport: { width: viewport.width, height: viewport.height } });

      for (const route of ROUTES) {
        test(`${route} renders cleanly and passes accessibility checks`, async ({ page }) => {
          const errors = watchErrors(page);
          const response = await page.goto(route);
          expect(response?.status()).toBe(200);

          await expect(page.locator("h1")).toHaveCount(1);

          const overflow = await page.evaluate(
            () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
          );
          expect(overflow, "horizontal overflow in px").toBeLessThanOrEqual(0);

          // The lockup for the active theme must be visible and loaded.
          const logo = page.locator("header img:visible");
          await expect(logo).toHaveCount(1);
          expect(await logo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);

          const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
          const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
          expect(
            serious.map((v) => `${v.id}: ${v.help} (${v.nodes.map((n) => n.target.join(" ")).join(", ")})`),
          ).toEqual([]);

          expect(errors).toEqual([]);
        });
      }
    });
  }
}

test("unknown pages return 404 with a way home", async ({ page }) => {
  const response = await page.goto("/no-such-page");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1, name: "Page not found" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Go to the home page" })).toHaveAttribute("href", "/");
});

test("security headers are sent", async ({ request }) => {
  const response = await request.get("/");
  const headers = response.headers();
  expect(headers["content-security-policy"]).toContain("default-src 'self'");
  expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(headers["content-security-policy"]).toContain("object-src 'none'");
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["x-powered-by"]).toBeUndefined();
});

test("organisation data uses only registered facts", async ({ page }) => {
  await page.goto("/");
  const json = await page.locator('script[type="application/ld+json"]').textContent();
  const data = JSON.parse(json ?? "{}");
  expect(data["@type"]).toBe("Organization");
  expect(data.legalName).toBe("AQVESSA LIMITED");
  expect(data.address.addressCountry).toBe("NG");
});

test.describe("theme toggle", () => {
  test.use({ colorScheme: "light" });

  test("switches theme, swaps the lockup and remembers the choice", async ({ page }) => {
    await page.goto("/");
    const background = () => page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(await background()).toBe("rgb(246, 244, 239)");

    await page.getByRole("button", { name: "Switch to dark theme" }).click();
    expect(await background()).toBe("rgb(20, 22, 27)");
    await expect(page.locator("header img:visible")).toHaveAttribute("src", /lockup-dark/);

    await page.reload();
    expect(await background()).toBe("rgb(20, 22, 27)");
    await expect(page.getByRole("button", { name: "Switch to light theme" })).toBeVisible();
  });
});

test.describe("phone navigation", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("menu opens, closes on Escape with focus returned, and closes after navigating", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("#mobile-nav");
    await expect(nav).toBeHidden();

    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(nav).toBeVisible();
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(nav).toBeHidden();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();

    await page.getByRole("button", { name: "Open menu" }).click();
    await nav.getByRole("link", { name: "Products" }).click();
    await expect(page).toHaveURL(/\/products$/);
    await expect(nav).toBeHidden();
    // The panel is hidden, so query its markup rather than the accessibility tree.
    await expect(nav.locator('a[aria-current="page"]')).toHaveText("Products");
  });
});

test("skip link is the first tab stop and moves focus to the main content", async ({ page }) => {
  await page.goto("/about");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page.locator("main#main")).toBeFocused();
});

test("contact page shows the holding note when no address is configured", async ({ page }) => {
  test.skip(Boolean(process.env.NEXT_PUBLIC_CONTACT_EMAIL), "An enquiry address is configured.");
  await page.goto("/contact");
  await expect(page.getByRole("note")).toContainText("Our enquiry address will be published here.");
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
});
