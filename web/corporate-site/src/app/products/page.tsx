import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SectionHead, sectionClass } from "@/components/section-head";
import { StageMeter } from "@/components/stage-meter";
import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { PAGES } from "@/content/pages";
import { PRODUCTS, STAGES } from "@/content/products";
import { formatDate } from "@/lib/dates";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.products;

export const metadata: Metadata = pageMetadata(page, "/products");

export default function ProductsPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>

      <section aria-label="Products" className="border-t border-hairline py-16">
        <div className="wrap grid gap-6">
          {PRODUCTS.map((product) => (
            <article
              key={product.slug}
              id={product.slug}
              aria-labelledby={`${product.slug}-name`}
              className="scroll-mt-32 overflow-hidden rounded-lg border border-hairline bg-surface"
            >
              <header className="grid gap-6 border-b border-hairline p-6 sm:p-8 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-7">
                  <h2 id={`${product.slug}-name`} className="type-heading-lg">
                    {product.name}
                  </h2>
                  <p className="mt-4 type-body-lg text-ink-muted">{product.summary}</p>
                </div>
                <div className="lg:col-span-4 lg:col-start-9">
                  <StageMeter stage={product.stage} />
                </div>
              </header>
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <h3 className="type-label text-ink-muted">Development areas</h3>
                  <ul className="brand-list mt-3">
                    {product.areas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-5 lg:col-start-8">
                  <h3 className="type-label text-ink-muted">Where it stands</h3>
                  <dl className="mt-3 border-t border-hairline">
                    {product.status.map((item) => (
                      <div key={item.term} className="border-b border-hairline py-3">
                        <dt className="type-body-sm font-medium">{item.term}</dt>
                        <dd className="mt-1 type-body-sm text-ink-muted">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 type-caption text-ink-muted">
                    Checked against the product&apos;s repositories on <time dateTime={product.asOf}>{formatDate(product.asOf)}</time>.
                  </p>
                </div>
              </div>
              {product.url && (
                <footer className="border-t border-hairline px-6 py-4 sm:px-8">
                  <ButtonLink variant="line" href={product.url} target="_blank" rel="noopener">
                    {product.urlLabel} <ArrowIcon />
                    <span className="sr-only">(opens in a new tab)</span>
                  </ButtonLink>
                </footer>
              )}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="stages-title" className={sectionClass}>
        <div className="wrap">
          <SectionHead eyebrow="Stages" id="stages-title" title="The five stages.">
            A product moves up one stage at a time, and only when the evidence for the next stage exists.
          </SectionHead>
          <ol className="grid border-t border-hairline sm:grid-cols-2 lg:grid-cols-5">
            {STAGES.map((s, i) => (
              <li
                key={s.stage}
                className={[
                  "grid content-start gap-2 border-b border-hairline pt-6 pr-6 pb-8",
                  i % 2 === 1 ? "sm:max-lg:border-l sm:max-lg:pl-6" : "",
                  i % 5 !== 0 ? "lg:border-l lg:pl-6" : "",
                ].join(" ")}
              >
                <span className="type-mono-sm text-brand-text">{String(s.stage).padStart(2, "0")}</span>
                <h3 className="type-body-lg font-medium">{s.name}</h3>
                <p className="type-body-sm text-ink-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
