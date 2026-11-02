import { CONTACT, SITE } from "@/lib/site";

/** The dark strip above the header: the registered company, and the enquiry address once verified. */
export function UtilityBar() {
  return (
    <div role="complementary" aria-label="Company" className="deep border-b border-deep-line bg-deep type-caption text-deep-muted">
      <div className="wrap flex min-h-10 flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2">
        <span>
          <span aria-hidden="true" className="mr-2 inline-block size-1 bg-deep-brand align-middle" />
          <b className="font-medium text-deep-ink">{SITE.legalName}</b>, a private company limited by shares,
          incorporated in Nigeria
        </span>
        <div className="hidden items-center gap-x-6 md:flex">
          {CONTACT.email ? (
            <a href={`mailto:${CONTACT.email}`} className="text-deep-ink no-underline hover:underline">
              {CONTACT.email}
            </a>
          ) : (
            <a href="/contact" className="text-deep-ink no-underline hover:underline">
              Enquiries
            </a>
          )}
          <span>Companies and Allied Matters Act 2020</span>
        </div>
      </div>
    </div>
  );
}
