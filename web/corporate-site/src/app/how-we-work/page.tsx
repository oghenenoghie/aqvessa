import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SectionHead, sectionClass } from "@/components/section-head";
import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { DELIVERY_STEPS, ENGAGEMENT_MODELS, PRICING_NOTE } from "@/content/how-we-work";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.howWeWork;

export const metadata: Metadata = pageMetadata(page, "/how-we-work");

export default function HowWeWorkPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>

      <section aria-labelledby="models-title" className={sectionClass}>
        <div className="wrap">
          <SectionHead eyebrow="Engagement models" id="models-title" title="Three ways to work with us." />
          <ul className="grid gap-6 md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((m) => (
              <li key={m.name} className="grid content-start gap-4 rounded-md border border-hairline bg-surface p-6">
                <h3 className="type-heading-md">{m.name}</h3>
                <p className="type-body-sm text-ink-muted">{m.text}</p>
                <p className="border-t border-hairline pt-4 type-body-sm">
                  <span className="font-medium">Suits: </span>
                  <span className="text-ink-muted">{m.fits}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="steps-title" className={sectionClass}>
        <div className="wrap">
          <SectionHead eyebrow="Delivery" id="steps-title" title="From enquiry to handover." />
          <ol className="grid border-t border-hairline sm:grid-cols-2 lg:grid-cols-5">
            {DELIVERY_STEPS.map((step, i) => (
              <li
                key={step.name}
                className={[
                  "grid content-start gap-2 border-b border-hairline pt-6 pr-6 pb-8",
                  i % 2 === 1 ? "sm:max-lg:border-l sm:max-lg:pl-6" : "",
                  i % 5 !== 0 ? "lg:border-l lg:pl-6" : "",
                ].join(" ")}
              >
                <span className="type-mono-sm text-brand-text">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="type-body-lg font-medium">{step.name}</h3>
                <p className="type-body-sm text-ink-muted">{step.text}</p>
                {step.duration && <p className="type-mono-sm text-ink-muted">Typically {step.duration}</p>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="pricing-title" className={sectionClass}>
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Pricing</p>
            <h2 id="pricing-title" className="mt-4 type-heading-lg">
              Quoted per project.
            </h2>
          </div>
          <div className="grid max-w-prose content-start gap-6 lg:col-span-7 lg:col-start-6">
            <p className="type-body-lg text-ink">{PRICING_NOTE}</p>
            <ButtonLink href="/contact#enquiry" className="justify-self-start">
              Start with an enquiry <ArrowIcon />
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
