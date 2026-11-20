import { SectionHead, sectionClass } from "@/components/section-head";
import { StageMeter } from "@/components/stage-meter";
import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { Chip } from "@/components/ui/pill";
import { PRODUCTS } from "@/content/products";
import { formatDate } from "@/lib/dates";

export function ProductsBand() {
  return (
    <section className={sectionClass} aria-labelledby="products-title">
      <div className="wrap">
        <SectionHead eyebrow="Products" id="products-title" title="Products built around real operational needs.">
          We develop our own software products and publish their current development stage, so visitors can distinguish active work from production-ready releases.
        </SectionHead>
        <ul className="grid gap-5 lg:grid-cols-2">
          {PRODUCTS.map((product, index) => (
            <li key={product.slug} className="group grid content-between gap-7 frontier-tile rounded-lg border border-hairline p-6 transition-colors duration-200 hover:border-brand sm:p-7">
              <div className="grid content-start gap-5">
                <div className="flex items-center justify-between gap-3 border-b border-hairline pb-4">
                  <span className="type-label text-brand-text">Product {String(index + 1).padStart(2, "0")}</span>
                  <span className="type-caption text-ink-muted">Status checked {formatDate(product.asOf)}</span>
                </div>
                <div className="grid gap-3">
                  <h3 className="type-heading-lg">{product.name}</h3>
                  <p className="type-body text-ink-muted">{product.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.areas.slice(0, 4).map((area) => <Chip key={area}>{area}</Chip>)}
                </div>
              </div>
              <div className="grid gap-5 border-t border-hairline pt-5">
                <StageMeter stage={product.stage} />
                <ButtonLink variant="line" href={`/products#${product.slug}`} className="justify-self-start">
                  Product details <ArrowIcon />
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-5">
          <p className="type-body-sm text-ink-muted">Development stages are reviewed against each product&apos;s repository.</p>
          <a href="/products" className="link type-body-sm font-medium">View all product information</a>
        </div>
      </div>
    </section>
  );
}
