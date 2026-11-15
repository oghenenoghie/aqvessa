import { PAGES } from "@/content/pages";
import { renderOgCard } from "@/lib/og";

export const alt = "Aqvessa: legal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({ eyebrow: PAGES.legal.label, title: PAGES.legal.title });
}
