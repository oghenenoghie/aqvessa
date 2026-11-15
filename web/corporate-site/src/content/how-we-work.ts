/**
 * How Aqvessa engages with clients. Durations are shown only when supplied: a null duration
 * leaves the line out. Do not add a number here that the owner has not confirmed.
 */

export const ENGAGEMENT_MODELS: readonly { name: string; text: string; fits: string }[] = [
  {
    name: "Fixed-scope project",
    text: "We agree a written scope, a price and a set of milestones before work starts. Changes to the scope are agreed in writing before they are built.",
    fits: "A defined system, website or integration with a clear end.",
  },
  {
    name: "Monthly retainer",
    text: "A fixed monthly arrangement for continuing development, maintenance and support. The agreed work and the way requests are raised are written down at the start.",
    fits: "Software already in use that needs steady changes and support.",
  },
  {
    name: "Product licensing",
    text: "You license a product we own, such as Plutus once it is released, and we support it under the licence terms. Each product page shows its stage, so you can see what is available.",
    fits: "A product we have already built, used as it is or with configuration.",
  },
];

export const DELIVERY_STEPS: readonly { name: string; text: string; /** Typical duration, only when supplied. */ duration: string | null }[] = [
  { name: "Enquiry", text: "You send the enquiry form with your need, country and any deadline. It goes to the business area it concerns.", duration: null },
  { name: "Scoping call", text: "We ask about the problem, the people who use the system and the constraints. We tell you plainly if we are not the right fit.", duration: null },
  { name: "Written proposal", text: "You receive the scope, the milestones, the price and the terms in writing.", duration: null },
  { name: "Build in milestones", text: "We build in stages and show working software at each milestone, so you can correct course early.", duration: null },
  { name: "Handover and support", text: "We hand over the software, its documentation and access, then support it under the agreed terms.", duration: null },
];

export const PRICING_NOTE =
  "We quote the price of each project after scoping, not before. We give quotes in naira (₦) or US dollars (USD), whichever you prefer, and each quote states its currency.";
