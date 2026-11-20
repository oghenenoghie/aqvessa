import { SectionHead, sectionClass } from "@/components/section-head";
import { ArrowIcon } from "@/components/ui/button";
import { BUSINESS_AREAS, type BusinessArea } from "@/content/business";

const cardClass =
  "frontier-card group relative grid h-full content-start gap-5 overflow-hidden rounded-xl border border-hairline bg-surface text-ink no-underline transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_55px_rgb(0_0_0_/_0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

function More({ children = "Explore capability" }: { children?: string }) {
  return (
    <span className="mt-1 inline-flex items-center gap-2 type-body-sm font-semibold text-brand-text [&_svg]:size-4">
      {children} <ArrowIcon />
    </span>
  );
}

function CardTop({ area, label }: { area: BusinessArea; label: string }) {
  return (
    <div className="relative flex items-center justify-between gap-3 border-b border-hairline pb-4">
      <span className="type-label text-brand-text">{label}</span>
      <span className="type-mono-sm text-ink-muted">AREA / {area.number}</span>
    </div>
  );
}

export function BusinessCards() {
  const byTier = (tier: BusinessArea["tier"]) => BUSINESS_AREAS.filter((a) => a.tier === tier);
  const [primary] = byTier("primary");
  return (
    <section aria-labelledby="areas-title" className={sectionClass}>
      <div className="wrap">
        <SectionHead eyebrow="What we do" id="areas-title" title="Five business areas, with software engineering at the centre.">
          Each area is part of our registered objects. Products we are building are listed with their stage on the <a href="/products" className="link">products page</a>.
        </SectionHead>
        <div className="grid gap-5">
          <a href={`/business#${primary.slug}`} className={`${cardClass} frontier-feature p-6 sm:p-8 lg:grid-cols-12 lg:gap-x-8`}>
            <div className="relative grid content-start gap-5 lg:col-span-6">
              <CardTop area={primary} label="Core capability" />
              <div className="grid gap-3">
                <h3 className="type-display-lg">{primary.name}</h3>
                <p className="type-body-lg text-ink-muted">{primary.summary}</p>
              </div>
              <More />
            </div>
            <ul className="brand-list relative lg:col-span-5 lg:col-start-8">
              {primary.covers.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <span aria-hidden="true" className="pointer-events-none absolute -right-5 -top-14 hidden font-display text-[15rem] font-bold leading-none tracking-[-.12em] text-brand/[.035] lg:block">01</span>
          </a>

          <ul className="grid gap-5 md:grid-cols-2">
            {byTier("supporting").map((area) => (
              <li key={area.slug}>
                <a href={`/business#${area.slug}`} className={`${cardClass} p-6 sm:p-7`}>
                  <CardTop area={area} label="Supporting capability" />
                  <div className="relative grid gap-3">
                    <h3 className="type-heading-lg">{area.name}</h3>
                    <p className="type-body-sm text-ink-muted">{area.summary}</p>
                  </div>
                  <ul className="brand-list relative">{area.covers.map((item) => <li key={item}>{item}</li>)}</ul>
                  <More />
                </a>
              </li>
            ))}
          </ul>

          <div className="grid gap-3">
            <h3 className="type-label text-ink-muted">Additional business areas</h3>
            <ul className="grid gap-5 md:grid-cols-2">
              {byTier("secondary").map((area) => (
                <li key={area.slug}>
                  <a href={`/business#${area.slug}`} className={`${cardClass} gap-3 p-5 sm:p-6`}>
                    <CardTop area={area} label="Additional capability" />
                    <h4 className="relative type-heading-md">{area.name}</h4>
                    <p className="relative type-body-sm text-ink-muted">{area.summary}</p>
                    <More>View area</More>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
