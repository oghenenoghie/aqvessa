# Aqvessa corporate website

The public website for AQVESSA LIMITED. Next.js (App Router), React, TypeScript and Tailwind CSS v4.

- **Layout:** taken from the Plutus marketing site (`oghenenoghie/plutus-technologies-landing-page`): utility bar, sticky header, eyebrow rules, card grids with bulleted lists, an engineering grid with mono tags, and a dark band for enquiries and the footer.
- **Content and brand:** Aqvessa's, from the design system in [`DESIGN.md`](../../DESIGN.md) and [`resources/brand`](../../resources/brand).

**Stage: under development.** Deployed from `main` by the Vercel project `aqvessa-corporate-site` (Root Directory `web/corporate-site`).

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
| `/` | Tagline and company record, key figures, the five business areas, Plutus with its stage, engineering principles, enquiries |
| `/about` | Who we are, mission and vision, values, registration |
| `/business` | The five business areas, what each covers, and the technology direction |
| `/products` | Plutus with its stage and status, and the five-stage ladder |
| `/projects` | 20 projects with a working deployment, in three groups: products, work for organisations (unnamed, unlinked) and demos |
| `/engineering` | Eight principles and the default stack |
| `/contact` | Enquiry band and what to include |
| `/legal` | Corporate information, intellectual property, general information, data handling |

Plus `sitemap.xml`, `robots.txt`, schema.org `Organization` data on the home page, icons, an Open Graph card and a 404 page.

## Where things live

- `src/app/globals.css`: Aqvessa tokens, in light and dark (the theme follows the device setting), and one `type-*` utility per type style. Tailwind's default palette, radii, shadows and type scale are removed, so only tokens can be used. The dark band uses the dark-theme token values in both themes, so the reversed lockup sits on its own ground.
- `src/content/`: all copy and company facts. `content.test.ts` checks every string, and the text in every `.tsx` file, against the writing rules:
  - no exclamation marks, emoji or superlatives
  - British spelling
  - no "Aqvessa Technologies"
  - capital AQVESSA only in AQVESSA LIMITED
- `src/content/projects.ts`: the projects page. A project is listed only when its latest production deployment succeeded (or, for Plutus Desktop, installer builds are published), checked on `PROJECTS_CHECKED`. Each entry is written from its repository. Work for organisations is never named or linked; tests enforce that, and that every link is a public HTTPS address. Re-check deployments and update the date when adding or removing a project.
- `src/content/products.ts`: products and the five stages. Change a product's `stage` and `asOf` only after checking its repositories. A test fails if a product goes past stage 2.
- `src/lib/site.ts`: site URL, contact channel and navigation.
- `src/components/sections/`: the home page sections. `contact.tsx` is reused on `/contact`.
- `next.config.ts`: security headers and a Content Security Policy without nonces, so pages stay static.

## Before launch

1. **Deployment Protection.** The `aqvessa-corporate-site` Vercel project has Vercel Authentication on everything except custom domains, so `aqvessa-corporate-site.vercel.app` asks visitors to sign in to Vercel. Add a custom domain, or change the setting under Settings, Deployment Protection, before sharing the site.
2. **Contact address.** Set `NEXT_PUBLIC_CONTACT_EMAIL` to a verified company address. Until then the enquiry band says the address will be published there. The Plutus site's phone numbers and offices were not carried over because they belong to Plutus Technologies.
3. **Domain.** Set `NEXT_PUBLIC_SITE_URL`, or rely on Vercel's production URL.
4. **Duplicate Vercel projects.** `aqvessa`, `aqvessa-6eg2` and `aqvessa-vfvd` build the same folder as `aqvessa-corporate-site`. Keep one.
5. **Plutus link and status.** The Plutus links point to `www.plutusbiztech.com`, the domain attached to the Plutus site's Vercel project (its DNS reported as correctly configured on 2 November 2026). Re-check the status lines in `src/content/products.ts`.
6. **Logo masters.** Replace the trimmed PNGs with SVG masters when they exist.
7. **Legal review.** Have a qualified Nigerian lawyer review the legal page and confirm whether "Technologies", which appears in the logo, can be used as a trading name.
