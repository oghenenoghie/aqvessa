import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { BUSINESS_AREAS, TECHNOLOGY_DIRECTIONS } from "@/content/business";
import { PAGES } from "@/content/pages";
import { PRODUCTS } from "@/content/products";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.business;

export const metadata: Metadata = pageMetadata(page, "/business");

export default function BusinessPage() {
  return (
    <>
      <PageIntro page={page}>
        <aside className="mt-8 max-w-2xl rounded-md border border-hairline bg-brand-tint px-6 py-4">
          <p className="type-body-sm text-ink">
            <span className="font-medium">About these areas.</span> A business area describes what the company is
            constituted to do. Where a product exists, the{" "}
            <Link href="/products" className="link">
              products page
            </Link>{" "}
            gives its current stage.
          </p>
        </aside>
      </PageIntro>

      <section aria-label="Business areas" className="border-t border-hairline">
        <Container>
          <ol>
            {BUSINESS_AREAS.map((area) => {
              const products = area.slug === "software-engineering" ? PRODUCTS : [];
              return (
                <li
                  key={area.slug}
                  id={area.slug}
                  className="grid scroll-mt-8 gap-6 border-b border-hairline py-12 last:border-b-0 lg:grid-cols-12 lg:gap-8"
                >
                  <div className="lg:col-span-4">
                    <p className="type-mono text-ink-muted">{area.number}</p>
                    <h2 className="mt-3 type-heading-md text-ink">{area.name}</h2>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="max-w-prose type-body-lg text-ink">{area.summary}</p>
                    <h3 className="mt-6 type-label text-ink-muted">Covers</h3>
                    <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
                      {area.covers.map((item) => (
                        <li key={item} className="border-t border-hairline py-3 type-body-sm text-ink">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {products.length > 0 && (
                      <p className="mt-6 type-body-sm text-ink-muted">
                        In development:{" "}
                        {products.map((product, index) => (
                          <span key={product.slug}>
                            {index > 0 && ", "}
                            <Link href={`/products#${product.slug}`} className="link">
                              {product.name}
                            </Link>
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <Section
        id="technology-direction"
        label="Technology direction"
        title="Where our software work is heading"
        intro={<p>Software engineering is our strategic focus. These are the product areas we are developing towards.</p>}
      >
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGY_DIRECTIONS.map((direction) => (
            <li key={direction} className="border-t border-hairline py-4 type-body text-ink">
              {direction}
            </li>
          ))}
        </ul>
        <Link
          href="/engineering"
          className="motion-colors mt-8 inline-flex items-center gap-2 type-body font-medium text-brand-text underline decoration-1 underline-offset-4 hover:text-brand-deep"
        >
          How we build software
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </Section>
    </>
  );
}
