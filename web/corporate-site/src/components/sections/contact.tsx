import { Fragment } from "react";
import { Icon, type IconName } from "@/components/icons";
import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { deepSectionClass } from "@/components/section-head";
import { COMPANY_DETAILS } from "@/content/company";
import { ENQUIRY_TYPES } from "@/content/enquiries";
import { CONTACT, telHref, whatsappHref } from "@/lib/site";
import { CopyButton } from "./copy-button";

type Row = {
  country?: string;
  icon: IconName;
  label: string;
  display: string;
  copy: string;
  href: string;
  external: boolean;
  /** A second way to use the same number: WhatsApp, for a number whose main link is a call. */
  secondary?: { label: string; href: string };
};

const ROWS: readonly Row[] = [
  { icon: "mail", label: "Email", display: CONTACT.email, copy: CONTACT.email, href: `mailto:${CONTACT.email}`, external: false },
  ...CONTACT.whatsapp.map((n): Row => {
    const call = telHref(n);
    return {
      country: n.country,
      icon: call ? "phone" : "chat",
      label: call ? `Phone and WhatsApp, ${n.country}` : `WhatsApp, ${n.country}`,
      display: n.display,
      copy: `+${n.digits}`,
      href: call ?? whatsappHref(n),
      external: !call,
      secondary: call ? { label: "Message on WhatsApp", href: whatsappHref(n) } : undefined,
    };
  }),
];

/** The dark enquiry band: what to write about, and the company's email, phone and WhatsApp numbers. */
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
          <ButtonLink variant="line-deep" href="/contact#enquiry" className="justify-self-start">
            Use the enquiry form <ArrowIcon />
          </ButtonLink>
          <ul className="brand-list mt-4 type-body-sm">
            {ENQUIRY_TYPES.map((t) => (
              <li key={t} className="text-deep-ink">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4">
          <ul className="frontier-panel overflow-hidden rounded-lg border border-deep-line">
            {ROWS.map((r) => (
              <Fragment key={r.href}>
              <li
                className="grid grid-cols-[40px_1fr_auto] items-center gap-3 border-b border-deep-line px-4 py-4 last:border-b-0 sm:gap-4 sm:px-6"
              >
                <span className="grid size-10 place-items-center rounded-md bg-deep-brand text-on-deep-brand">
                  <Icon name={r.icon} className="size-4" />
                </span>
                <div className="min-w-0">
                  <small className="block type-label text-deep-muted">{r.label}</small>
                  <a
                    href={r.href}
                    {...(r.external ? { target: "_blank", rel: "noopener" } : {})}
                    className="type-body font-medium tabular-nums text-deep-ink no-underline hover:underline [overflow-wrap:anywhere]"
                  >
                    <span className={r.country ? "copy-value whitespace-nowrap" : "copy-value"}>{r.display}</span>
                    {r.external && <span className="sr-only">, opens WhatsApp</span>}
                  </a>
                  {r.secondary && (
                    <a
                      href={r.secondary.href}
                      target="_blank"
                      rel="noopener"
                      className="block type-body-sm text-deep-muted underline hover:text-deep-ink"
                    >
                      {r.secondary.label}
                      <span className="sr-only">, opens WhatsApp</span>
                    </a>
                  )}
                </div>
                <CopyButton value={r.copy} label={`${r.label} ${r.display}`} />
              </li>
              {r.country === "Kuwait" && COMPANY_DETAILS.kuwaitLineNote && (
                <li className="border-b border-deep-line px-4 py-3 type-body-sm text-deep-muted last:border-b-0 sm:px-6">
                  {COMPANY_DETAILS.kuwaitLineNote}
                </li>
              )}
              </Fragment>
            ))}
          </ul>
          <p className="type-body-sm text-deep-muted">
            The Kuwait number is for WhatsApp only, not ordinary calls or text messages. The Nigerian number takes calls as
            well as WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
