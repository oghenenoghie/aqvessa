import type { Metadata } from "next";
import { FactList } from "@/components/fact-list";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { ABOUT_PARAGRAPHS, CORPORATE_FACTS, FACTS_SOURCE, MISSION, VALUES, VISION } from "@/content/company";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.about;

export const metadata: Metadata = pageMetadata(page, "/about");

export default function AboutPage() {
  return (
    <>
      <PageIntro page={page} />

      <Section id="who-we-are" label="Who we are" title="A technology-led company">
        <div className="max-w-prose space-y-4 type-body-lg text-ink">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="mission-vision" label="Direction" title="Mission and vision">
        <div className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline md:grid-cols-2">
          <div className="bg-surface p-6 sm:p-8">
            <h3 className="type-label text-ink-muted">Mission</h3>
            <p className="mt-4 type-body-lg text-ink">{MISSION}</p>
          </div>
          <div className="bg-surface p-6 sm:p-8">
            <h3 className="type-label text-ink-muted">Vision</h3>
            <p className="mt-4 type-body-lg text-ink">{VISION}</p>
          </div>
        </div>
      </Section>

      <Section id="values" label="Values" title="What we hold ourselves to">
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {VALUES.map((value) => (
            <li key={value.name} className="border-t border-hairline py-6">
              <h3 className="type-body-lg font-medium text-ink">{value.name}</h3>
              <p className="mt-2 type-body-sm text-ink-muted">{value.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="corporate-information"
        label="Corporate information"
        title="Registration"
        intro={<p>Use the registered name, AQVESSA LIMITED, in contracts, invoices and other legal documents.</p>}
      >
        <div className="rounded-md border border-hairline bg-surface px-6">
          <FactList facts={CORPORATE_FACTS} />
        </div>
        <p className="mt-3 type-caption text-ink-muted">{FACTS_SOURCE}</p>
      </Section>
    </>
  );
}
