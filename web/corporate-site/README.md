# Aqvessa corporate website

The public website for AQVESSA LIMITED. Next.js (App Router), React, TypeScript and Tailwind CSS v4.

- **Layout:** taken from the Plutus marketing site (`oghenenoghie/plutus-technologies-landing-page`): utility bar, sticky header, eyebrow rules, card grids with bulleted lists, an engineering grid with mono tags, and a dark band for enquiries and the footer.
- **Content and brand:** Aqvessa's, from the design system in [`DESIGN.md`](../../DESIGN.md) and [`resources/brand`](../../resources/brand).

**Stage: under development.** Deployed from `main` by the Vercel project `aqvessa` (Root Directory `web/corporate-site`), the one project kept of the four that once built this folder.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm test           # copy rules, content integrity, date formatting
npm run build      # every route prerenders as static HTML
```

CI (`.github/workflows/corporate-site.yml` at the repository root) runs typecheck, tests and build on every pull request and every push to `main` that touches this folder.

## Pages

| Route | Content |
| --- | --- |
| `/` | Tagline and company record, key figures, the five business areas, each product with its stage, projects, engineering principles, enquiries |
| `/about` | Who we are, mission and vision, values, registration |
| `/business` | The five business areas, what each covers, and the technology direction |
| `/products` | Plutus and Intelligent CBT, each with its stage and status, and the five-stage ladder |
| `/projects` | 20 projects with a working deployment, in three groups: products, work for organisations (unnamed, unlinked) and demos |
| `/engineering` | Eight principles and the default stack |
| `/how-we-work` | Three engagement models, five delivery steps and how pricing works |
| `/contact` | Enquiry form, then the email, phone and WhatsApp numbers, and what to include |
| `/legal` | Legal notice: corporate information, intellectual property, general information |
| `/legal/privacy` | Privacy notice under the Nigeria Data Protection Act 2023 |
| `/legal/terms` | Terms of use |

Plus `sitemap.xml`, `robots.txt`, schema.org `Organization` data on the home page, icons, an Open Graph card and a 404 page.

## Facts still to supply

`src/content/company.ts` holds `COMPANY_DETAILS`. A value of `null` leaves out every block that depends on it, so no placeholder can render. Fill a value in and the block appears everywhere it is used: `rcNumber`, `registeredOffice` (company record, footer, privacy notice, JSON-LD), `foundedYear` and `sectorsServed` (home figures), `retention` (privacy notice), `kuwaitLineNote` (contact band). `PEOPLE` in the same file fills the "Who runs Aqvessa" section on `/about`. The LinkedIn address is `LINKEDIN_URL` in `src/lib/site.ts`. Durations for the delivery steps are in `src/content/how-we-work.ts`. Project problem, outcome and screenshot lines are optional fields in `src/content/projects.ts`.

## Enquiry form

The form on `/contact` is validated in the browser and again in the server action (`src/app/contact/actions.ts`, rules in `src/lib/enquiry.ts`). It has a honeypot field and an in-memory rate limit of five submissions per IP in 15 minutes. The limit is per server instance: add a Vercel Firewall rate-limit rule on `/contact` for a hard limit.

Delivery uses the Resend HTTP API (`src/lib/mailer.ts`). Set these in the Vercel project:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Required in production. Without it the form tells the visitor to email instead. |
| `ENQUIRY_FROM` | Sender on a domain verified with Resend, for example `Aqvessa website <enquiries@aqvessa.org>` |
| `ENQUIRY_TO` | Optional. Defaults to `info@aqvessa.org` |

The form and the privacy notice assume no cookies and no analytics. If either changes, update `/legal/privacy`.

## Where things live

- `src/app/globals.css`: Aqvessa tokens, in light and dark (the theme follows the device setting), and one `type-*` utility per type style. Tailwind's default palette, radii, shadows and type scale are removed, so only tokens can be used. The dark band uses the dark-theme token values in both themes, so the reversed lockup sits on its own ground.
- `src/content/`: all copy and company facts. `content.test.ts` checks every string, and the text in every `.tsx` file, against the writing rules:
  - no exclamation marks, emoji or superlatives
  - British spelling
  - no "Aqvessa Technologies"
  - capital AQVESSA only in AQVESSA LIMITED
- `src/content/projects.ts`: the projects page. A project is listed only when its latest production deployment succeeded (or, for Plutus Desktop, installer builds are published), checked on `PROJECTS_CHECKED`. Each entry is written from its repository. Work for organisations is never named or linked; tests enforce that, and that every link is a public HTTPS address. Re-check deployments and update the date when adding or removing a project.
- `src/content/products.ts`: products and the five stages. Change a product's `stage` and `asOf` only after checking its repositories. A test fails if a product goes past stage 2.
- `src/lib/site.ts`: site URL, contact details and navigation. Enquiries go to `info@aqvessa.org` and to two WhatsApp numbers. The Kuwait number is WhatsApp only. The Nigerian number (`calls: true`) also takes ordinary calls, so it alone gets a `tel:` link and a `telephone` entry in the structured data. Tests check that each number's display, links and country code agree, and that every `tel:` link comes from `telHref`, which refuses a number without `calls`.
- `src/components/sections/`: the home page sections. `contact.tsx` is reused on `/contact`.
- `next.config.ts`: security headers and a Content Security Policy without nonces, so pages stay static.

## Before launch

1. **Deployment Protection.** Check the `aqvessa` Vercel project under Settings, Deployment Protection. With Vercel Authentication on everything except custom domains, the project's `.vercel.app` address asks visitors to sign in to Vercel. Add a custom domain, or change the setting, before sharing the site.
2. **Domain.** Set `NEXT_PUBLIC_SITE_URL`, or rely on Vercel's production URL.
3. **Plutus link and status.** The Plutus links point to `www.plutusbiztech.com`, the domain attached to the Plutus site's Vercel project (its DNS reported as correctly configured on 2 November 2026). Re-check the status lines in `src/content/products.ts`.
4. **Logo masters.** Replace the trimmed PNGs with SVG masters when they exist.
5. **Legal review.** Have a qualified Nigerian lawyer review the legal page and confirm whether "Technologies", which appears in the logo, can be used as a trading name.
