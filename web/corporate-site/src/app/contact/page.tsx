import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
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

      <section id="enquiry" aria-labelledby="enquiry-title" className={`${sectionClass} scroll-mt-24`}>
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="grid content-start gap-4 lg:col-span-4">
            <p className="eyebrow">Enquiry form</p>
            <h2 id="enquiry-title" className="type-heading-lg">
              Tell us what you need.
            </h2>
            <p className="type-body text-ink-muted">
              Fields marked optional can be left blank. Your details are used only to reply to your enquiry, as the{" "}
              <a href="/legal/privacy" className="link">
                privacy notice
              </a>{" "}
              explains. Prefer email, WhatsApp or a phone call? The details are below.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm />
          </div>
        </div>
      </section>

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
