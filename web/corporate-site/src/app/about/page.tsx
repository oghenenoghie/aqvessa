import type { Metadata } from "next";
import { FactList } from "@/components/fact-list";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { SectionHead, sectionClass } from "@/components/section-head";
import { ABOUT_PARAGRAPHS, CORPORATE_FACTS, FACTS_SOURCE, MISSION, PEOPLE, VALUES, VISION } from "@/content/company";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.about;

export const metadata: Metadata = pageMetadata(page, "/about");

export default function AboutPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>

      <section aria-labelledby="who-title" className={sectionClass}>
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Who we are</p>
            <h2 id="who-title" className="mt-4 type-heading-lg">
              A technology-led company.
            </h2>
          </div>
          <div className="grid max-w-prose gap-4 type-body-lg text-ink lg:col-span-7 lg:col-start-6">
            {ABOUT_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="direction-title" className={sectionClass}>
        <div className="wrap">
          <SectionHead eyebrow="Direction" id="direction-title" title="Mission and vision." />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ["Mission", MISSION],
              ["Vision", VISION],
            ].map(([label, text]) => (
              <article key={label} className="grid content-start gap-4 rounded-md border border-hairline bg-surface p-6 sm:p-8">
                <h3 className="type-label text-ink-muted">{label}</h3>
                <p className="type-body-lg text-ink">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className={sectionClass}>
        <div className="wrap">
          <SectionHead eyebrow="Values" id="values-title" title="What we hold ourselves to." />
          <div className="grid border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <article
                key={v.name}
                className={[
                  "grid content-start gap-2 border-b border-hairline pt-6 pr-6 pb-8",
                  i % 2 === 1 ? "sm:max-lg:border-l sm:max-lg:pl-6" : "",
                  i % 3 !== 0 ? "lg:border-l lg:pl-6" : "",
                ].join(" ")}
              >
                <h3 className="type-body-lg font-medium">{v.name}</h3>
                <p className="type-body-sm text-ink-muted">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {PEOPLE.length > 0 && (
        <section aria-labelledby="people-title" className={sectionClass}>
          <div className="wrap">
            <SectionHead eyebrow="People" id="people-title" title="Who runs Aqvessa." />
            <ul className="grid gap-6 md:grid-cols-2">
              {PEOPLE.map((person) => (
                <li key={person.name} className="grid gap-6 rounded-md border border-hairline bg-surface p-6 sm:grid-cols-[120px_1fr]">
                  {person.portrait ? (
                    <Image
                      src={person.portrait.src}
                      alt={person.portrait.alt}
                      width={person.portrait.width}
                      height={person.portrait.height}
                      className="aspect-square w-[120px] rounded-md border border-hairline object-cover"
                    />
                  ) : (
                    <div aria-hidden="true" className="grid aspect-square w-[120px] place-items-center rounded-md border border-hairline bg-surface-sunk type-heading-md text-ink-muted">
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  )}
                  <div className="grid content-start gap-2">
                    <h3 className="type-heading-md">{person.name}</h3>
                    <p className="type-label text-ink-muted">{person.role}</p>
                    <p className="type-body-sm text-ink-muted">{person.bio}</p>
                    <a href={person.linkedin} target="_blank" rel="noopener" className="link justify-self-start type-body-sm font-medium">
                      {person.name} on LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section aria-labelledby="registration-title" className={sectionClass}>
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Corporate information</p>
            <h2 id="registration-title" className="mt-4 type-heading-lg">
              Registration.
            </h2>
            <p className="mt-4 type-body text-ink-muted">
              Use the registered name, AQVESSA LIMITED, in contracts, invoices and other legal documents.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="rounded-md border border-hairline bg-surface px-6">
              <FactList facts={CORPORATE_FACTS} />
            </div>
            <p className="mt-3 type-caption text-ink-muted">{FACTS_SOURCE}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
