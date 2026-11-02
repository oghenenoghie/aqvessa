import { FactList } from "@/components/fact-list";
import { Icon } from "@/components/icons";
import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { CORPORATE_FACTS, FACTS_SOURCE, TAGLINE } from "@/content/company";
import { LINKS } from "@/lib/site";

const CHECKS = ["Registered under CAMA 2020", "Software engineering at the centre", "Every product shown with its stage"];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="py-12 lg:py-16">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-16">
        <div className="grid gap-6 pt-2">
          <p className="eyebrow rise">Technology and software</p>
          <h1 id="hero-title" className="rise type-heading-lg text-ink [animation-delay:60ms] sm:type-display-lg">
            {TAGLINE.map((line, i) => (
              <span key={line} className={i === TAGLINE.length - 1 ? "block text-ink-muted" : "block"}>
                {line}
              </span>
            ))}
          </h1>
          <p className="rise lede text-ink [animation-delay:120ms]">
            Aqvessa is a Nigerian technology company. We build software products and digital solutions for businesses in
            Nigeria and international markets.
          </p>
          <div className="rise flex flex-wrap gap-3 [animation-delay:180ms]">
            <ButtonLink href={LINKS.contact}>
              Make an enquiry <ArrowIcon />
            </ButtonLink>
            <ButtonLink variant="line" href="/business">
              What we do
            </ButtonLink>
          </div>
          <ul className="rise flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-6 type-body-sm text-ink-muted [animation-delay:240ms]">
            {CHECKS.map((c) => (
              <li key={c} className="inline-flex items-center gap-2">
                <Icon name="check" className="size-4 text-ink" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <aside aria-labelledby="record-title" className="rise overflow-hidden rounded-lg border border-hairline bg-surface [animation-delay:120ms]">
          <div className="flex items-baseline justify-between gap-4 border-b border-hairline bg-surface-sunk px-6 py-3">
            <h2 id="record-title" className="type-label text-ink-muted">
              Company record
            </h2>
            <p className="type-mono-sm text-ink-muted">CAMA 2020</p>
          </div>
          <FactList facts={CORPORATE_FACTS} className="px-6" />
          <p className="border-t border-hairline px-6 py-3 type-caption text-ink-muted">{FACTS_SOURCE}</p>
        </aside>
      </div>
    </section>
  );
}
