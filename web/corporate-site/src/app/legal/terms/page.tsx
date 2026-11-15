import type { Metadata } from "next";
import { LEGAL_UPDATED, LegalBlock, LegalNav } from "@/components/legal";
import { PageIntro } from "@/components/page-intro";
import { PAGES } from "@/content/pages";
import { formatDate } from "@/lib/dates";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/site";

const page = PAGES.terms;

export const metadata: Metadata = pageMetadata(page, "/legal/terms");

export default function TermsPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>
      <LegalNav current="/legal/terms" />

      <LegalBlock id="agreement" eyebrow="Agreement" title="Using this website">
        <p>
          By using this website you accept these terms. If you do not accept them, do not use the website. These terms apply to the
          website only. A project or product is governed by its own written agreement.
        </p>
        <p className="type-caption text-ink-muted">
          Last updated <time dateTime={LEGAL_UPDATED}>{formatDate(LEGAL_UPDATED)}</time>.
        </p>
      </LegalBlock>

      <LegalBlock id="use" eyebrow="Acceptable use" title="What you may and may not do">
        <p>You may read and share the pages of this website for lawful, non-commercial purposes. You must not:</p>
        <ul className="brand-list">
          <li>copy or reuse our content, logo or software for commercial purposes without our written permission;</li>
          <li>send spam, malicious code or false enquiries through the website, or try to disrupt or gain unauthorised access to it;</li>
          <li>use automated tools to collect content or personal data from the website.</li>
        </ul>
      </LegalBlock>

      <LegalBlock id="ip" eyebrow="Intellectual property" title="Ownership">
        <p>
          The content of this website, including text, design, logo and software, belongs to AQVESSA LIMITED or its licensors. See the{" "}
          <a href="/legal" className="link">
            legal notice
          </a>{" "}
          for details.
        </p>
      </LegalBlock>

      <LegalBlock id="information" eyebrow="Content" title="General information, not an offer">
        <p>
          The website gives general information. It is not an offer, a quotation or advice. We describe each product with its stage, and
          a product is available only where the website says so.
        </p>
      </LegalBlock>

      <LegalBlock id="links" eyebrow="Links" title="Other websites">
        <p>
          The website links to other websites, such as the Plutus website and WhatsApp. We do not control them and are not responsible
          for their content or their handling of your data.
        </p>
      </LegalBlock>

      <LegalBlock id="liability" eyebrow="Liability" title="Limits on our responsibility">
        <p>
          We take care to keep the website accurate and available, but we do not promise that it will be free of errors or interruptions.
          To the extent the law allows, AQVESSA LIMITED is not liable for loss that results from using the website or relying on its
          content. Nothing in these terms limits any liability that cannot be limited by law.
        </p>
      </LegalBlock>

      <LegalBlock id="law" eyebrow="Law" title="Governing law and changes">
        <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
        <p>
          We may update these terms. The date at the top shows the latest version. Questions about them can go to{" "}
          <a href={`mailto:${CONTACT.email}`} className="link">
            {CONTACT.email}
          </a>
          .
        </p>
      </LegalBlock>
    </main>
  );
}
