# Aqvessa corporate website

The public website for AQVESSA LIMITED. Next.js 16 (App Router), React 19, TypeScript (strict) and Tailwind CSS v4, styled with the Aqvessa design system in [`DESIGN.md`](../../DESIGN.md) and [`resources/brand/tokens.json`](../../resources/brand/tokens.json).

**Stage: under development.** The site builds, passes its checks and is deployed to Vercel as `aqvessa-corporate-site` (production URL `aqvessa-corporate-site.vercel.app`). The items under [Before launch](#before-launch) are open.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # route types, then tsc
npm run lint
npm test           # copy rules, content integrity, date formatting
npm run build      # every route prerenders as static HTML
npm run e2e        # browser tests against the build (run `npm run build` first)
npm run check      # all of the above, in order
```

Node 20.9 or later. CI and Vercel use Node 26.

## Pages

| Route | Content |
| --- | --- |
| `/` | Tagline, company record, business areas, Plutus with its stage, engineering principles, enquiries |
| `/about` | Who we are, mission and vision, values, corporate information |
| `/business` | The five business areas, what each covers, and the technology direction |
| `/products` | Plutus with its stage and status, and the five-stage ladder |
| `/engineering` | Eight development principles and the default stack |
| `/contact` | Contact channel (from config), enquiry topics, what to include |
| `/legal` | Corporate information, intellectual property, general information, data handling |

Plus `sitemap.xml`, `robots.txt`, a favicon from the compact mark, an Apple touch icon from the orange app icon, an Open Graph card with the primary lockup, schema.org `Organization` data on the home page, a 404 page and an error page.

## Where things live

- `src/app/globals.css`: colour tokens (light, dark, and a forced theme through `data-theme`), and one `type-*` utility per type style. Tailwind's default palette, radii, shadows and type scale are removed, so only tokens can be used. Spacing uses Tailwind's 4px scale; stick to steps 1, 2, 3, 4, 6, 8, 12 and 16.
- `src/content/`: all copy and company facts. Pages read from here, and `content.test.ts` checks every string, plus the text in every `.tsx` file, against the writing rules: no exclamation marks, emoji or superlatives, British spelling, no "Aqvessa Technologies", and capital AQVESSA only in AQVESSA LIMITED.
- `src/content/products.ts`: products and the five stages. A product's `stage` and `asOf` date change only after checking its own repositories. A test fails if a product goes past stage 2, so raising a stage is a deliberate edit.
- `src/lib/site.ts`: site URL, contact channel, navigation and the route list for the sitemap.
- `src/components/logo.tsx`: the full lockup, swapped with the theme. The PNGs in `public/brand/` are the files from `resources/brand/logos` trimmed to the artwork, nothing else changed. The header keeps space-6 (about the height of the A) clear around the lockup and does not stick, so content never scrolls into that space.
- `src/components/ring-pattern.tsx`: the ring from the A at a 64px pitch with a 32px half-step, used once on the home page.
- `e2e/site.spec.ts`: Playwright tests against the production build. Every page, in both themes, at 375px and 1440px: status 200, one `h1`, no horizontal overflow, the right lockup loaded, no console errors, and no serious or critical axe violations (WCAG 2.2 A and AA). Plus the 404 page, security headers, organisation data, the theme toggle, the phone menu, the skip link and the contact holding note.
- `.github/workflows/corporate-site.yml` (repository root): runs typecheck, lint, unit tests, build and e2e on every pull request and push to `main` that touches this folder.

## Decisions

- **No Framer Motion yet.** The design system allows colour transitions only (120ms), which CSS covers. Add it when a component needs movement, and respect `prefers-reduced-motion`.
- **No shadcn/ui components yet.** The utilities it relies on (`cn`, CVA) are in place. Add primitives with the CLI when a form or dialog is needed, and restyle them with tokens.
- **No cookies or analytics.** The legal page says so. Change that page in the same commit as any tracking.
- **Content Security Policy without nonces.** Set in `next.config.ts` with the other security headers. Scripts, styles, images, fonts and connections are limited to the site's own origin; plugins, framing and foreign form targets are blocked. Inline scripts stay allowed: Next.js streams page data in inline scripts and the theme script runs inline before first paint. Nonces would force every page to render on request. Next.js also has an experimental hash-based option (Subresource Integrity); it has not been tried here, and is the route to drop `'unsafe-inline'` later. The site takes no user input, which keeps that risk low. Preview deployments also allow the Vercel Toolbar's origins.
- **Playwright pinned to 1.63.0**, with an npm override so `@axe-core/playwright` uses the same `playwright-core`. Raise them together.

## Before launch

1. **Deployment Protection.** The Vercel project has Vercel Authentication on everything except custom domains. Open the production URL in a private window; if it asks for a Vercel login, change the setting under Settings, Deployment Protection, or add a custom domain.
2. **Duplicate Vercel projects.** `aqvessa` and `aqvessa-6eg2` are linked to this repository with no Root Directory, so each push to `main` will start a build there that fails the same way. Delete them, or set their Root Directory.
3. **Contact address.** Set `NEXT_PUBLIC_CONTACT_EMAIL` to a verified company address. Until then the contact page says the address will be published there.
4. **Domain.** Set `NEXT_PUBLIC_SITE_URL` to the production domain, or rely on Vercel's production URL.
5. **Plutus link.** `src/content/products.ts` links to `https://www.plutusng.com`, the domain in the Plutus site's own config. It could not be reached from the build environment, so check it is live before launch.
6. **Plutus status.** The desktop and cloud lines come from the Plutus site's README as of 31 October 2026. Re-check against the Plutus repositories and update `asOf`.
7. **Logo masters.** Replace the trimmed PNGs with SVG or transparent masters when they exist (see `resources/brand/README.md`).
8. **Legal review.** Have a qualified Nigerian lawyer review the legal page and confirm whether "Technologies", which appears in the logo, can be used as a trading name.

## Deploying to Vercel

The `aqvessa-corporate-site` project has **Root Directory** set to `web/corporate-site` and deploys `main` to production on every push. Set the two environment variables above for Production; each takes effect on the next deployment.
