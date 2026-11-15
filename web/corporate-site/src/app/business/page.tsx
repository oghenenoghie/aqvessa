import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SectionHead, sectionClass } from "@/components/section-head";
import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { BUSINESS_AREAS, TECHNOLOGY_DIRECTIONS } from "@/content/business";
import { PAGES } from "@/content/pages";
import { PRODUCTS } from "@/content/products";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.business;

export const metadata: Metadata = pageMetadata(page, "/business");

export default function BusinessPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>

      <section aria-label="Business areas" className="border-t border-hairline">
        <div className="wrap">
          <aside className="mt-12 max-w-2xl rounded-md border border-hairline bg-brand-tint px-6 py-4 type-body-sm text-ink">
            <span className="font-medium">About these areas.</span> A business area describes what the company is constituted to
            do. Where a product exists, the{" "}
            <a href="/products" className="link">
              products page
            </a>{" "}
            gives its current stage.
          </aside>
          <ol>
            {BUSINESS_AREAS.map((area) => {
              const products = area.slug === "software-engineering" ? PRODUCTS : [];
              const primary = area.tier === "primary";
              const secondary = area.tier === "secondary";
              return (
                <li
                  key={area.slug}
                  id={area.slug}
                  className={[
                    "grid scroll-mt-32 gap-6 border-b border-hairline last:border-b-0 lg:grid-cols-12 lg:gap-8",
                    primary ? "py-16" : secondary ? "py-6" : "py-12",
                  ].join(" ")}
                >
                  <div className="lg:col-span-4">
                    <p className="type-mono text-ink-muted">{area.number}</p>
                    <h2 className={primary ? "mt-3 type-heading-lg" : secondary ? "mt-2 type-body-lg font-medium" : "mt-3 type-heading-md"}>
                      {area.name}
                    </h2>
                    {secondary && <p className="mt-1 type-label text-ink-muted">Secondary area</p>}
                  </div>
                  <div className="lg:col-span-8">
                    <p className={primary ? "max-w-prose type-body-lg" : secondary ? "max-w-prose type-body-sm text-ink-muted" : "max-w-prose type-body-lg"}>
                      {area.summary}
                    </p>
                    {secondary ? (
                      <p className="mt-2 type-body-sm text-ink-muted">Covers {area.covers.join(", ").toLowerCase()}.</p>
                    ) : (
                      <>
                        <h3 className="mt-6 type-label text-ink-muted">Covers</h3>
                        <ul className="brand-list mt-3 sm:grid-cols-2 sm:gap-x-8">
                          {area.covers.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {products.length > 0 && (
                      <p className="mt-6 type-body-sm text-ink-muted">
                        In development:{" "}
                        {products.map((product, i) => (
                          <span key={product.slug}>
                            {i > 0 && ", "}
                            <a href={`/products#${product.slug}`} className="link">
                              {product.name}
                            </a>
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section aria-labelledby="direction-title" className={sectionClass}>
        <div className="wrap">
          <SectionHead eyebrow="Technology direction" id="direction-title" title="Where our software work is heading.">
            Software engineering is our strategic focus. These are the product areas we are developing towards.
          </SectionHead>
          <ul className="brand-list sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
            {TECHNOLOGY_DIRECTIONS.map((d) => (
              <li key={d} className="type-body">
                {d}
              </li>
            ))}
          </ul>
          <ButtonLink variant="line" href="/engineering" className="mt-8">
            How we build software <ArrowIcon />
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
