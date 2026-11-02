import type { Metadata } from "next";
import type { PageCopy } from "@/content/pages";
import { SITE } from "@/lib/site";

/**
 * Page metadata from its copy entry. Next.js merges metadata shallowly, so a page's openGraph
 * replaces the layout's: repeat the shared fields here.
 */
export function pageMetadata(page: PageCopy, path: string): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      title: page.title,
      description: page.description,
      url: path,
    },
  };
}
