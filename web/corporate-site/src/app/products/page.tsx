import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { StageMeter } from "@/components/stage-meter";
import { ButtonLink } from "@/components/ui/button";
import { PAGES } from "@/content/pages";
import { PRODUCTS, STAGES } from "@/content/products";
import { formatDate } from "@/lib/dates";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.products;

export const metadata: Metadata = pageMetadata(page, "/products");

export default function ProductsPage() {
  return (
    <>
      <PageIntro page={page} />

      <section aria-label="Products" className="border-t border-hairline">
        <Container className="py-12 lg:py-16">
          {PRODUCTS.map((product) => (
            <article
              key={product.slug}
              id={product.slug}
              aria-labelledby={`${product.slug}-name`}
              className="scroll-mt-8 rounded-md border border-hairline bg-surface"
            >
              <header className="grid gap-6 border-b border-hairline p-6 sm:p-8 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-7">
                  <h2 id={`${product.slug}-name`} className="type-heading-lg text-ink">
                    {product.name}
                  </h2>
                  <p className="mt-4 max-w-prose type-body-lg text-ink-muted">{product.summary}</p>
                </div>
                <div className="lg:col-span-4 lg:col-start-9">
                  <StageMeter stage={product.stage} />
                </div>
              </header>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <h3 className="type-label text-ink-muted">Development areas</h3>
                  <ul className="mt-3">
                    {product.areas.map((area) => (
                      <li key={area} className="border-t border-hairline py-3 type-body-sm text-ink">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-5 lg:col-start-8">
                  <h3 className="type-label text-ink-muted">Where it stands</h3>
                  <dl className="mt-3">
                    {product.status.map((item) => (
                      <div key={item.term} className="border-t border-hairline py-3">
                        <dt className="type-body-sm font-medium text-ink">{item.term}</dt>
                        <dd className="mt-1 type-body-sm text-ink-muted">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 type-caption text-ink-muted">
                    Checked against the product&apos;s repositories on{" "}
                    <time dateTime={product.asOf}>{formatDate(product.asOf)}</time>.
                  </p>
                </div>
              </div>

              {product.url && (
                <footer className="border-t border-hairline px-6 sm:px-8">
                  <ButtonLink href={product.url} variant="text" target="_blank" rel="noopener">
                    {product.urlLabel}
                    <ArrowUpRight aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </ButtonLink>
                </footer>
              )}
            </article>
          ))}
        </Container>
      </section>

      <Section
        id="stages"
        label="Stages"
        title="The five stages"
        intro={<p>A product moves up one stage at a time, and only when the evidence for the next stage exists.</p>}
      >
        <ol className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline">
          {STAGES.map((stage) => (
            <li key={stage.stage} className="grid grid-cols-[3rem_1fr] gap-4 bg-surface p-6 sm:grid-cols-[4rem_1fr]">
              <span className="type-mono text-ink-muted">{String(stage.stage).padStart(2, "0")}</span>
              <div>
                <h3 className="type-body-lg font-medium text-ink">{stage.name}</h3>
                <p className="mt-1 type-body-sm text-ink-muted">{stage.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
