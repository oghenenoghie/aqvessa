import type { Metadata } from "next";
import { FactList } from "@/components/fact-list";
import { LegalBlock, LegalNav } from "@/components/legal";
import { PageIntro } from "@/components/page-intro";
import { CORPORATE_FACTS } from "@/content/company";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.legal;

export const metadata: Metadata = pageMetadata(page, "/legal");

export default function LegalPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>
      <LegalNav current="/legal" />

      <LegalBlock id="company" eyebrow="Company" title="Corporate information">
        <div className="rounded-md border border-hairline bg-surface px-6">
          <FactList facts={CORPORATE_FACTS} />
        </div>
      </LegalBlock>

      <LegalBlock id="ip" eyebrow="Intellectual property" title="Ownership of content">
        <p>
          All company names, trademarks, software products, source code, documentation and other intellectual property on this
          website remain the property of their respective owners unless otherwise stated.
        </p>
        <p>Unauthorised copying, redistribution or commercial exploitation of proprietary company materials is not permitted.</p>
      </LegalBlock>

      <LegalBlock id="general" eyebrow="Content" title="General information only">
        <p>
          This website gives a general overview of AQVESSA LIMITED. It is not an offer, and it does not represent every active
          business operation of the company.
        </p>
        <p>
          Business areas describe what the company is constituted to do. A product or service is available only where this
          website says so and gives its stage.
        </p>
      </LegalBlock>

      <LegalBlock id="more" eyebrow="Related" title="Privacy and terms">
        <p>
          How we handle personal data is in the{" "}
          <a href="/legal/privacy" className="link">
            privacy notice
          </a>
          . The rules for using this website are in the{" "}
          <a href="/legal/terms" className="link">
            terms of use
          </a>
          .
        </p>
      </LegalBlock>
    </main>
  );
}
