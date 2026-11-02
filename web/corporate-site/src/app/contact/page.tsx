import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SectionHead, sectionClass } from "@/components/section-head";
import { Contact } from "@/components/sections/contact";
import { ENQUIRY_CHECKLIST } from "@/content/enquiries";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.contact;

export const metadata: Metadata = pageMetadata(page, "/contact");

export default function ContactPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>

      <Contact />

      <section aria-labelledby="include-title" className={sectionClass}>
        <div className="wrap">
          <SectionHead eyebrow="Before you write" id="include-title" title="What to include.">
            A short enquiry with these four points gets to the right person fastest.
          </SectionHead>
          <ol className="grid border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
            {ENQUIRY_CHECKLIST.map((item, i) => (
              <li
                key={item}
                className={[
                  "grid content-start gap-2 border-b border-hairline pt-6 pr-6 pb-8",
                  i % 2 === 1 ? "sm:max-lg:border-l sm:max-lg:pl-6" : "",
                  i % 4 !== 0 ? "lg:border-l lg:pl-6" : "",
                ].join(" ")}
              >
                <span className="type-mono-sm text-brand-text">{String(i + 1).padStart(2, "0")}</span>
                <p className="type-body text-ink">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
