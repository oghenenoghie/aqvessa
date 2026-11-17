import { SectionHead, sectionClass } from "@/components/section-head";
import { ArrowIcon } from "@/components/ui/button";
import { BentoGrid, BentoTile } from "@/components/ui/bento";
import { Pill } from "@/components/ui/pill";
import { BUSINESS_AREAS } from "@/content/business";

const More = ({ end }: { end?: boolean }) => (
  <span className={end ? "self-end" : ""}>
    <span className="mt-1 inline-flex items-center gap-2 type-body-sm font-medium text-brand-text [&_svg]:size-4">
      Read more <ArrowIcon />
    </span>
  </span>
);

const SPAN: Record<string, string> = {
  "software-engineering": "lg:col-span-4 lg:row-span-2",
  "technology-solutions": "lg:col-span-2",
  "digital-services": "lg:col-span-2",
  commerce: "lg:col-span-3",
  "research-and-innovation": "lg:col-span-3",
};

/**
 * The five registered areas as a bento grid. Software engineering is the large tile, two supporting
 * areas sit beside it, and commerce and research are smaller tiles along the bottom.
 */
export function BusinessCards() {
  return (
    <section aria-labelledby="areas-title" className={sectionClass}>
      <div className="wrap">
        <SectionHead
          eyebrow="What we do"
          id="areas-title"
          title="Five business areas, with software engineering at the centre."
        >
          Each area is part of our registered objects. Products we are building
          are listed with their stage on the{" "}
          <a href="/products" className="link">
            products page
          </a>
          .
        </SectionHead>

        <BentoGrid>
          {BUSINESS_AREAS.map((area) => {
            const primary = area.tier === "primary";
            const secondary = area.tier === "secondary";
            return (
              <BentoTile
                key={area.slug}
                href={`/business#${area.slug}`}
                className={SPAN[area.slug]}
              >
                {primary && (
                  <div
                    aria-hidden="true"
                    className="grid-ruled pointer-events-none absolute inset-0 opacity-100"
                  />
                )}
                <div
                  className={
                    primary
                      ? "relative grid h-full grid-rows-[auto_auto_auto_auto_1fr] gap-4"
                      : "relative grid content-start gap-4"
                  }
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="type-mono-sm text-ink-muted">
                      {area.number}
                    </span>
                    {primary && <Pill tone="brand">Primary area</Pill>}
                    {secondary && <Pill>Secondary area</Pill>}
                  </div>
                  <h3
                    className={
                      primary
                        ? "type-heading-lg"
                        : secondary
                          ? "type-body-lg font-medium"
                          : "type-heading-md"
                    }
                  >
                    {area.name}
                  </h3>
                  <p
                    className={
                      primary
                        ? "max-w-prose type-body-lg text-ink-muted"
                        : "type-body-sm text-ink-muted"
                    }
                  >
                    {area.summary}
                  </p>
                  {!secondary && (
                    <ul
                      className={
                        primary
                          ? "brand-list sm:grid-cols-2 sm:gap-x-8"
                          : "brand-list"
                      }
                    >
                      {area.covers
                        .slice(0, primary ? area.covers.length : 4)
                        .map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                    </ul>
                  )}
                  <More end={primary} />
                </div>
              </BentoTile>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
