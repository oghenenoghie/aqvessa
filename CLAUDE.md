# Aqvessa repository

## UI engineering standards

- For premium visual sections and effects, search the Aceternity registry before hand-building: `npx shadcn@latest search @aceternity -q "<need>"`.
- Install verified registry items with `npx shadcn@latest add @aceternity/<item>`; preserve the project's existing shadcn configuration.
- Use Motion (formerly Framer Motion) from `motion/react` for new React animations. Do not introduce a second animation library without a clear reason.
- Consult the official Motion docs/MCP for current APIs; respect reduced-motion preferences and prioritize transform/opacity performance.
- Reuse existing design tokens, typography, spacing, and component conventions. Do not hard-code arbitrary colors or create generic sections when a suitable Aceternity component exists.
- Keep animation purposeful, responsive, accessible, and restrained. Verify lint, types, build, and rendered layouts where tooling is available.

## Skill routing

- Aceternity component discovery/installation/customization: `aceternity-ui-specialist`.
- Motion animation implementation/performance/accessibility: `motion-animation-engineer`.
- Full page, landing page, dashboard, or multi-section redesign: `premium-ui-architect` (also consult the two specialist skills as needed).

## Project notes

These take precedence over the general standards above when they conflict.

- `DESIGN.md` is the source of truth for the brand: lines and hairlines instead of shadows, the three radii, the palette tokens, 120ms and 200ms durations, and no bouncing, looping or parallax. Adapt any registry component to it, or leave the component out.
- `web/corporate-site/next.config.ts` sends a Content Security Policy that only allows scripts, images and fonts from the site itself. A component that loads remote images, fonts or scripts needs those assets served from the site, or a deliberate change to the policy.
- `web/corporate-site` has a `components.json` with the `@aceternity` registry, but no animation library is installed yet. Adding `motion` is a dependency decision for the pull request that first needs it.
- `web/corporate-site/src/content/content.test.ts` checks the site's copy for exclamation marks, emoji, superlatives, American spellings and the company's name. `DESIGN.md` also rules out claims about clients, awards, scale or certifications that cannot be shown; no test checks that.
