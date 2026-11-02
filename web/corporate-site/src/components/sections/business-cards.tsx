import { SectionHead, sectionClass } from "@/components/section-head";
import { ArrowIcon } from "@/components/ui/button";
import { BUSINESS_AREAS } from "@/content/business";

export function BusinessCards() {
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
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_AREAS.map((area) => (
            <li key={area.slug}>
              <a
                href={`/business#${area.slug}`}
                className="group grid h-full content-start gap-4 rounded-md border border-hairline bg-surface p-6 text-ink no-underline transition-colors duration-120 hover:border-brand"
              >
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
                <span className="mt-1 inline-flex items-center gap-2 type-body-sm font-medium text-brand-text [&_svg]:size-4">
                  Read more <ArrowIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
