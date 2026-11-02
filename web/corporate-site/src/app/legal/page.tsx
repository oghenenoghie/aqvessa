import type { Metadata } from "next";
import { FactList } from "@/components/fact-list";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { CORPORATE_FACTS } from "@/content/company";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.legal;

export const metadata: Metadata = pageMetadata(page, "/legal");

export default function LegalPage() {
  return (
    <>
      <PageIntro page={page} />

      <Section id="company" label="Company" title="Corporate information">
        <div className="rounded-md border border-hairline bg-surface px-6">
          <FactList facts={CORPORATE_FACTS} />
        </div>
      </Section>

      <Section id="intellectual-property" label="Intellectual property" title="Ownership of content">
        <div className="max-w-prose space-y-4 type-body text-ink">
          <p>
            All company names, trademarks, software products, source code, documentation and other intellectual
            property on this website remain the property of their respective owners unless otherwise stated.
          </p>
          <p>
            Unauthorised copying, redistribution or commercial exploitation of proprietary company materials is not
            permitted.
          </p>
        </div>
      </Section>

      <Section id="general-information" label="Content" title="General information only">
        <div className="max-w-prose space-y-4 type-body text-ink">
          <p>
            This website gives a general overview of AQVESSA LIMITED. It is not an offer, and it does not represent
            every active business operation of the company.
          </p>
          <p>
            Business areas describe what the company is constituted to do. A product or service is available only where
            this website says so and gives its stage.
          </p>
        </div>
      </Section>

      <Section id="your-data" label="Your data" title="How this website handles your data">
        <div className="max-w-prose space-y-4 type-body text-ink">
          <p>This website does not set cookies and does not run analytics or advertising scripts.</p>
          <p>
            If you choose a light or dark theme, the choice is stored in your browser&apos;s local storage on your
            device. It is not sent to us, and you can clear it at any time in your browser settings.
          </p>
        </div>
      </Section>
    </>
  );
}
