import type { ReactNode } from "react";
import { Container } from "@/components/container";
import type { PageCopy } from "@/content/pages";

/** The opening of an inner page: label, page title (display-lg) and lead. */
export function PageIntro({ page, children }: { page: PageCopy; children?: ReactNode }) {
  return (
    <Container className="pt-12 pb-12 lg:pt-16 lg:pb-16">
      <p className="type-label text-brand-text">{page.label}</p>
      <h1 className="mt-4 max-w-4xl text-balance type-heading-lg text-ink sm:type-display-lg">{page.title}</h1>
      <p className="mt-6 max-w-2xl type-body-lg text-ink-muted">{page.lead}</p>
      {children}
    </Container>
  );
}
