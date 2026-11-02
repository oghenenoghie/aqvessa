import type { Metadata } from "next";
import type { PageCopy } from "@/content/pages";
import { SITE } from "@/lib/site";

/** Title, description, canonical URL and social cards for one public route. */
export function pageMetadata(page: Pick<PageCopy, "title" | "description">, path: string): Metadata {
  const full = `${page.title} · ${SITE.name}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: full,
      description: page.description,
      url: new URL(path, SITE.url).toString(),
      siteName: SITE.name,
      type: "website",
      locale: "en_NG",
    },
    twitter: { card: "summary", title: full, description: page.description },
  };
}
