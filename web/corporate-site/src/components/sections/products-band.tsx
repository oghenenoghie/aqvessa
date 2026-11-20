import { SectionHead, sectionClass } from "@/components/section-head";
import { StageMeter } from "@/components/stage-meter";
import { ArrowIcon } from "@/components/ui/button";
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
            <li key={product.slug} className="frontier-card group relative grid min-h-full overflow-hidden rounded-xl border border-hairline bg-surface transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_55px_rgb(0_0_0_/_0.24)]">
              <div className="frontier-product-visual relative flex min-h-[150px] items-end justify-between overflow-hidden border-b border-hairline p-6">
                <div aria-hidden="true" className="frontier-card-grid absolute inset-0" />
                <span className="relative type-mono-sm text-brand-text">AQVESSA / PRODUCT {String(index + 1).padStart(2, "0")}</span>
                <span aria-hidden="true" className="frontier-card-glyph relative font-display text-7xl font-semibold leading-none tracking-[-.09em] text-brand/80">{product.name.charAt(0)}</span>
              </div>
              <div className="grid flex-1 content-between gap-7 p-6 sm:p-7">
                <div className="grid content-start gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="type-label text-brand-text">Product profile</span>
                    <span className="type-caption text-ink-muted">Verified {formatDate(product.asOf)}</span>
                  </div>
                  <div className="grid gap-3">
                    <h3 className="type-heading-lg transition-colors group-hover:text-brand-text">{product.name}</h3>
                    <p className="type-body text-ink-muted">{product.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.areas.slice(0, 4).map((area) => <Chip key={area}>{area}</Chip>)}
                  </div>
                </div>
                <div className="grid gap-5 border-t border-hairline pt-5">
                  <StageMeter stage={product.stage} />
                  <a href={`/products#${product.slug}`} className="inline-flex items-center gap-2 justify-self-start type-body-sm font-semibold text-brand-text no-underline transition-colors hover:text-brand-deep">
                    Explore product <ArrowIcon />
                  </a>
                </div>
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
