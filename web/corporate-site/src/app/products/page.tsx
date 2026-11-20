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
        <div className="wrap grid gap-6 lg:grid-cols-2">
          {PRODUCTS.map((product, index) => (
            <article key={product.slug} id={product.slug} aria-labelledby={`${product.slug}-name`} className="frontier-card grid scroll-mt-32 content-start overflow-hidden rounded-xl border border-hairline bg-surface">
              <header className="frontier-product-visual relative grid min-h-[190px] content-between overflow-hidden border-b border-hairline p-6 sm:p-8">
                <div aria-hidden="true" className="frontier-card-grid absolute inset-0" />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="type-mono-sm text-brand-text">PRODUCT / {String(index + 1).padStart(2, "0")}</span>
                  <span className="type-caption text-ink-muted">Verified {formatDate(product.asOf)}</span>
                </div>
                <h2 id={`${product.slug}-name`} className="relative max-w-[15ch] type-display-lg">{product.name}</h2>
              </header>
              <div className="grid gap-8 p-6 sm:p-8">
                <div className="grid gap-6">
                  <p className="type-body-lg text-ink-muted">{product.summary}</p>
                  <div className="frontier-panel rounded-lg p-5">
                    <StageMeter stage={product.stage} />
                  </div>
                </div>
                <div className="grid gap-8 border-t border-hairline pt-6 md:grid-cols-2">
                  <div>
                    <h3 className="type-label text-brand-text">Development areas</h3>
                    <ul className="brand-list mt-3">{product.areas.map((area) => <li key={area}>{area}</li>)}</ul>
                  </div>
                  <div>
                    <h3 className="type-label text-brand-text">Where it stands</h3>
                    <dl className="mt-3 border-t border-hairline">
                      {product.status.map((item) => (
                        <div key={item.term} className="border-b border-hairline py-3">
                          <dt className="type-body-sm font-semibold">{item.term}</dt>
                          <dd className="mt-1 type-body-sm text-ink-muted">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-3 type-caption text-ink-muted">Checked against the product&apos;s repositories on <time dateTime={product.asOf}>{formatDate(product.asOf)}</time>.</p>
                  </div>
                </div>
              </div>
              {product.url ? (
                <footer className="border-t border-hairline px-6 py-5 sm:px-8">
                  <ButtonLink variant="line" href={product.url} target="_blank" rel="noopener">
                    {product.urlLabel} <ArrowIcon />
                    <span className="sr-only">(opens in a new tab)</span>
                  </ButtonLink>
                </footer>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="stages-title" className={sectionClass}>
        <div className="wrap">
          <SectionHead eyebrow="Stages" id="stages-title" title="The five stages.">
            A product moves up one stage at a time, and only when the evidence for the next stage exists.
          </SectionHead>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {STAGES.map((s, i) => (
              <li key={s.stage} className="frontier-card grid min-h-[190px] content-start gap-4 rounded-xl border border-hairline bg-surface p-5">
                <span className="type-mono-sm text-brand-text">STAGE / {String(s.stage).padStart(2, "0")}</span>
                <div className="grid gap-2">
                  <h3 className="type-body-lg font-semibold">{s.name}</h3>
                  <p className="type-body-sm text-ink-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
