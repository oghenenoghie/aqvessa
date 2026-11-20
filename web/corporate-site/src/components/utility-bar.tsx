import { CONTACT, SITE } from "@/lib/site";

export function UtilityBar() {
  return (
    <div role="complementary" aria-label="Company information" className="deep border-b border-deep-line bg-deep type-caption text-deep-muted">
      <div className="wrap flex min-h-9 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-deep-brand shadow-[0_0_10px_var(--deep-brand)]" />
          <b className="font-medium text-deep-ink">{SITE.legalName}</b>
          <span className="hidden sm:inline">/ Building digital capability</span>
        </span>
        <a href={`mailto:${CONTACT.email}`} className="text-deep-ink no-underline transition-colors hover:text-deep-brand">{CONTACT.email}</a>
      </div>
    </div>
  );
}
