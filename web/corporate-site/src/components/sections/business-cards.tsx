import { SectionHead, sectionClass } from "@/components/section-head";
import { ArrowIcon } from "@/components/ui/button";
import { BUSINESS_AREAS, type BusinessArea } from "@/content/business";

const cardClass =
  "group grid h-full content-start gap-4 rounded-md border border-hairline bg-surface text-ink no-underline transition-colors duration-120 hover:border-brand";

function More({ children = "Read more" }: { children?: string }) {
  return (
    <span className="mt-1 inline-flex items-center gap-2 type-body-sm font-medium text-brand-text [&_svg]:size-4">
      {children} <ArrowIcon />
    </span>
  );
}

/** Software engineering first and largest, two supporting areas, then commerce and research with less space. */
export function BusinessCards() {
  const byTier = (tier: BusinessArea["tier"]) => BUSINESS_AREAS.filter((a) => a.tier === tier);
  const [primary] = byTier("primary");
  return (
    <section aria-labelledby="areas-title" className={sectionClass}>
      <div className="wrap">
        <SectionHead eyebrow="What we do" id="areas-title" title="Five business areas, with software engineering at the centre.">
          Each area is part of our registered objects. Products we are building are listed with their stage on the{" "}
          <a href="/products" className="link">
            products page
          </a>
          .
        </SectionHead>

        <div className="grid gap-6">
          <a href={`/business#${primary.slug}`} className={`${cardClass} p-6 sm:p-8 lg:grid-cols-12 lg:gap-x-8`}>
            <div className="grid content-start gap-4 lg:col-span-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="type-heading-lg">{primary.name}</h3>
                <span className="type-mono-sm text-ink-muted">{primary.number}</span>
              </div>
              <p className="type-body-lg text-ink-muted">{primary.summary}</p>
              <More />
            </div>
            <ul className="brand-list lg:col-span-5 lg:col-start-8">
              {primary.covers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </a>

          <ul className="grid gap-6 md:grid-cols-2">
            {byTier("supporting").map((area) => (
              <li key={area.slug}>
                <a href={`/business#${area.slug}`} className={`${cardClass} p-6`}>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="type-heading-md">{area.name}</h3>
                    <span className="type-mono-sm text-ink-muted">{area.number}</span>
                  </div>
                  <p className="type-body-sm text-ink-muted">{area.summary}</p>
                  <ul className="brand-list">
                    {area.covers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <More />
                </a>
              </li>
            ))}
          </ul>

          <div>
            <h3 className="mb-3 type-label text-ink-muted">Secondary areas</h3>
            <ul className="grid gap-4 md:grid-cols-2">
              {byTier("secondary").map((area) => (
                <li key={area.slug}>
                  <a href={`/business#${area.slug}`} className={`${cardClass} gap-2 p-4`}>
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="type-body font-medium">{area.name}</h4>
                      <span className="type-mono-sm text-ink-muted">{area.number}</span>
                    </div>
                    <p className="type-body-sm text-ink-muted">{area.summary}</p>
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
