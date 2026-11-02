import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/ui/button";
import { ENQUIRY_CHECKLIST, ENQUIRY_TYPES } from "@/content/enquiries";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/site";

const page = PAGES.contact;

export const metadata: Metadata = pageMetadata(page, "/contact");

export default function ContactPage() {
  return (
    <>
      <PageIntro page={page} />

      <Section id="how-to-reach-us" label="How to reach us" title="Contact channel">
        {CONTACT.email ? (
          <div className="rounded-md border border-hairline bg-surface p-6 sm:p-8">
            <p className="type-body text-ink-muted">Email us at</p>
            <p className="mt-2 type-heading-md break-all text-ink">{CONTACT.email}</p>
            <ButtonLink href={`mailto:${CONTACT.email}`} className="mt-6">
              <Mail aria-hidden="true" />
              Write to us
            </ButtonLink>
          </div>
        ) : (
          <div role="note" className="rounded-md border border-hairline bg-brand-tint p-6 sm:p-8">
            <p className="type-body-lg font-medium text-ink">Our enquiry address will be published here.</p>
            <p className="mt-2 max-w-prose type-body text-ink">
              We list only verified company contact channels. Until the address appears on this page, treat any other
              address claiming to represent AQVESSA LIMITED with caution.
            </p>
          </div>
        )}
      </Section>

      <Section id="enquiry-types" label="Topics" title="What you can contact us about">
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {ENQUIRY_TYPES.map((type) => (
            <li key={type} className="border-t border-hairline py-4 type-body text-ink">
              {type}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="what-to-include"
        label="Before you write"
        title="What to include"
        intro={<p>A short enquiry with these four points gets to the right person fastest.</p>}
      >
        <ol className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2">
          {ENQUIRY_CHECKLIST.map((item, index) => (
            <li key={item} className="flex gap-4 bg-surface p-6">
              <span className="type-mono text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
              <span className="type-body text-ink">{item}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
