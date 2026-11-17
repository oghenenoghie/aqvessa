import { SectionHead, deepSectionClass } from "@/components/section-head";
import { StageMeter } from "@/components/stage-meter";
import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { Chip } from "@/components/ui/pill";
import { PRODUCTS } from "@/content/products";
import { formatDate } from "@/lib/dates";

export function ProductsBand() {
  return (
    <section aria-labelledby="products-title" className={deepSectionClass}>
      <div className="wrap">
        <SectionHead eyebrow="Products" id="products-title" title="We say what stage each product is at.">
          Every product moves through five stages, from proposed to production-ready. We never describe a product as further
          along than its own repositories and documentation show.
        </SectionHead>
        <ul className="grid gap-6">
          {PRODUCTS.map((product) => (
            <li key={product.slug} className="grid gap-8 rounded-lg border border-deep-line bg-deep-surface p-6 sm:p-8 lg:grid-cols-12">
              <div className="grid content-start gap-4 lg:col-span-7">
                <h3 className="type-heading-lg text-deep-ink">{product.name}</h3>
                <p className="type-body text-deep-muted">{product.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {product.areas.slice(0, 4).map((area) => (
                    <Chip key={area} className="border-deep-line bg-transparent text-deep-ink">
                      {area}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="grid content-between gap-6 lg:col-span-4 lg:col-start-9">
                <StageMeter stage={product.stage} tone="deep" />
                <p className="type-caption text-deep-muted">Checked {formatDate(product.asOf)}</p>
                <ButtonLink variant="line-deep" href={`/products#${product.slug}`} className="justify-self-start">
                  Read about {product.name} <ArrowIcon />
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
