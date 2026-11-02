import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FactList } from "@/components/fact-list";
import { PageIntro } from "@/components/page-intro";
import { sectionClass } from "@/components/section-head";
import { CORPORATE_FACTS } from "@/content/company";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.legal;

export const metadata: Metadata = pageMetadata(page, "/legal");

function Block({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`${id}-title`} className={sectionClass}>
      <div className="wrap grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-4 type-heading-md">
            {title}
          </h2>
        </div>
        <div className="grid max-w-prose gap-4 type-body text-ink lg:col-span-7 lg:col-start-6">{children}</div>
      </div>
    </section>
  );
}

export default function LegalPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>

      <Block id="company" eyebrow="Company" title="Corporate information">
        <div className="rounded-md border border-hairline bg-surface px-6">
          <FactList facts={CORPORATE_FACTS} />
        </div>
      </Block>

      <Block id="ip" eyebrow="Intellectual property" title="Ownership of content">
        <p>
          All company names, trademarks, software products, source code, documentation and other intellectual property on this
          website remain the property of their respective owners unless otherwise stated.
        </p>
        <p>Unauthorised copying, redistribution or commercial exploitation of proprietary company materials is not permitted.</p>
      </Block>

      <Block id="general" eyebrow="Content" title="General information only">
        <p>
          This website gives a general overview of AQVESSA LIMITED. It is not an offer, and it does not represent every active
          business operation of the company.
        </p>
        <p>
          Business areas describe what the company is constituted to do. A product or service is available only where this
          website says so and gives its stage.
        </p>
      </Block>

      <Block id="data" eyebrow="Your data" title="How this website handles your data">
        <p>This website does not set cookies and does not run analytics or advertising scripts.</p>
        <p>
          The colour theme follows your device setting. Nothing about your visit is stored by this website in your browser.
        </p>
      </Block>
    </main>
  );
}
