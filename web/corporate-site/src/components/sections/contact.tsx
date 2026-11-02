import { Icon } from "@/components/icons";
import { deepSectionClass } from "@/components/section-head";
import { ENQUIRY_TYPES } from "@/content/enquiries";
import { CONTACT } from "@/lib/site";
import { CopyButton } from "./copy-button";

/** The dark enquiry band: what to write about, and the verified address or a holding note. */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className={deepSectionClass}>
      <div className="wrap grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid content-start gap-4">
          <p className="eyebrow">Make an enquiry</p>
          <h2 className="h2" id="contact-title">
            Work with Aqvessa.
          </h2>
          <p className="lede">Tell us what you need, where you are and when you need it. Enquiries go to the business area they concern.</p>
          <ul className="brand-list mt-4 type-body-sm">
            {ENQUIRY_TYPES.map((t) => (
              <li key={t} className="text-deep-ink">
                {t}
              </li>
            ))}
          </ul>
        </div>
        {CONTACT.email ? (
          <ul className="overflow-hidden rounded-lg border border-deep-line">
            <li className="grid grid-cols-[40px_1fr_auto] items-center gap-4 px-6 py-4">
              <span className="grid size-10 place-items-center rounded-md bg-deep-brand text-on-deep-brand">
                <Icon name="mail" className="size-4" />
              </span>
              <div className="min-w-0">
                <small className="block type-label text-deep-muted">Email</small>
                <a href={`mailto:${CONTACT.email}`} className="copy-value type-body font-medium text-deep-ink no-underline [overflow-wrap:anywhere]">
                  {CONTACT.email}
                </a>
              </div>
              <CopyButton value={CONTACT.email} label={`Email ${CONTACT.email}`} />
            </li>
          </ul>
        ) : (
          <div role="note" className="grid gap-2 rounded-lg border border-deep-line bg-deep-surface p-6 sm:p-8">
            <p className="type-body-lg font-medium text-deep-ink">Our enquiry address will be published here.</p>
            <p className="type-body text-deep-muted">
              We list only verified company contact channels. Until the address appears on this page, treat any other address
              claiming to represent AQVESSA LIMITED with caution.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
