import type { Metadata } from "next";
import { LEGAL_UPDATED, LegalBlock, LegalNav } from "@/components/legal";
import { PageIntro } from "@/components/page-intro";
import { COMPANY_DETAILS } from "@/content/company";
import { PAGES } from "@/content/pages";
import { formatDate } from "@/lib/dates";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/site";

const page = PAGES.privacy;

export const metadata: Metadata = pageMetadata(page, "/legal/privacy");

export default function PrivacyPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>
      <LegalNav current="/legal/privacy" />

      <LegalBlock id="controller" eyebrow="Who we are" title="The data controller">
        <p>
          AQVESSA LIMITED decides why and how the personal data described here is used, so it is the data controller under the Nigeria
          Data Protection Act 2023 (the Act).
          {COMPANY_DETAILS.registeredOffice ? ` Our registered office is ${COMPANY_DETAILS.registeredOffice}.` : ""}
        </p>
        <p>
          Contact us about this notice, or to exercise a right, at{" "}
          <a href={`mailto:${CONTACT.email}`} className="link">
            {CONTACT.email}
          </a>
          .
        </p>
        <p className="type-caption text-ink-muted">
          Last updated <time dateTime={LEGAL_UPDATED}>{formatDate(LEGAL_UPDATED)}</time>.
        </p>
      </LegalBlock>

      <LegalBlock id="collected" eyebrow="What we collect" title="What the enquiry form collects">
        <p>The enquiry form asks for these details. Fields marked required cannot be skipped.</p>
        <ul className="brand-list">
          <li>Required: your name, email address, organisation, country, business area and message.</li>
          <li>Required: your preferred contact method, and a WhatsApp number if you choose WhatsApp.</li>
          <li>Optional: a deadline and a budget range.</li>
          <li>Your confirmation that you have read this notice.</li>
        </ul>
        <p>
          We do not ask for sensitive personal data. Please do not put it in the message. We also use your IP address briefly to limit
          repeated submissions, as described under &ldquo;Cookies, scripts and logs&rdquo; below.
        </p>
      </LegalBlock>

      <LegalBlock id="purpose" eyebrow="Why" title="Purpose of the processing">
        <p>We use these details to:</p>
        <ul className="brand-list">
          <li>read your enquiry and send it to the business area it concerns;</li>
          <li>reply to you by the method you chose;</li>
          <li>scope the work and prepare a proposal if you ask for one;</li>
          <li>protect the form from spam and abuse.</li>
        </ul>
        <p>We do not add you to a mailing list from this form, and we do not sell your details.</p>
      </LegalBlock>

      <LegalBlock id="basis" eyebrow="Legal basis" title="Why the processing is lawful">
        <p>
          We process the details in your enquiry on the basis of your consent, which you give by ticking the box on the form
          (sections 25 and 26 of the Act). You can withdraw it at any time, as explained below.
        </p>
        <p>
          We use your IP address to limit repeated submissions on the basis of our legitimate interest in keeping the website secure
          and available, where that does not override your rights.
        </p>
      </LegalBlock>

      <LegalBlock id="recipients" eyebrow="Sharing" title="Who receives your data">
        <p>
          Your enquiry is sent to our company mailbox through an email delivery service that acts on our instructions, and the website
          is hosted by a hosting provider. These providers may process data outside Nigeria. We will use a provider only where it gives
          safeguards that meet the Act&apos;s requirements for transfers of personal data out of Nigeria.
        </p>
        <p>We do not share your details with anyone else unless the law requires it.</p>
      </LegalBlock>

      {COMPANY_DETAILS.retention && (
        <LegalBlock id="retention" eyebrow="Keeping data" title="How long we keep it">
          <p>{COMPANY_DETAILS.retention}</p>
        </LegalBlock>
      )}

      <LegalBlock id="rights" eyebrow="Your rights" title="Your rights as a data subject">
        <p>Under Part VI of the Act (sections 34 to 38) you have the right to:</p>
        <ul className="brand-list">
          <li>ask whether we hold your personal data, and receive a copy and details of how we use it;</li>
          <li>ask us to correct data that is wrong or incomplete;</li>
          <li>ask us to delete your data, or to restrict how we use it;</li>
          <li>object to processing based on our legitimate interest;</li>
          <li>withdraw your consent at any time, without affecting use made before you withdrew it;</li>
          <li>receive your data in a structured, commonly used format and have it transferred to another controller;</li>
          <li>not be subject to a decision based only on automated processing. We make no such decisions.</li>
        </ul>
        <p>
          You may also complain to the Nigeria Data Protection Commission, the regulator under the Act.
        </p>
      </LegalBlock>

      <LegalBlock id="requests" eyebrow="Requests" title="Contact for data requests">
        <p>
          Email{" "}
          <a href={`mailto:${CONTACT.email}`} className="link">
            {CONTACT.email}
          </a>{" "}
          with the subject &ldquo;Data request&rdquo;, say which right you want to use, and write from the email address you used on the
          form so we can find your enquiry.
        </p>
      </LegalBlock>

      <LegalBlock id="cookies" eyebrow="Cookies and scripts" title="Cookies, scripts and logs">
        <p>This website does not set cookies and does not run analytics or advertising scripts. The enquiry form sets no cookies either.</p>
        <p>
          The colour theme follows your device setting, and nothing about your visit is stored by this website in your browser. When you
          submit the form, your IP address is held briefly in the memory of our server to count submissions, and is not stored in a
          database or included in the email. Our hosting provider keeps standard server logs of requests.
        </p>
      </LegalBlock>
    </main>
  );
}
