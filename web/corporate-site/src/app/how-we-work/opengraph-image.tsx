import { PAGES } from "@/content/pages";
import { renderOgCard } from "@/lib/og";

export const alt = "Aqvessa: howWeWork";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({ eyebrow: PAGES.howWeWork.label, title: PAGES.howWeWork.title });
}
