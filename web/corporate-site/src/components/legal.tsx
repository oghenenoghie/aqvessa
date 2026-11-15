import type { ReactNode } from "react";
import { sectionClass } from "@/components/section-head";
import { LEGAL_NAV } from "@/lib/site";

/** Switches between the three legal pages. The current page carries aria-current. */
export function LegalNav({ current }: { current: string }) {
  return (
    <nav aria-label="Legal pages" className="border-t border-hairline">
      <ul className="wrap flex flex-wrap gap-x-8 gap-y-2 py-4">
        {LEGAL_NAV.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={item.href === current ? "page" : undefined}
              className={
                item.href === current
                  ? "type-body-sm font-medium text-ink underline decoration-brand decoration-2 underline-offset-8"
                  : "type-body-sm font-medium text-ink-muted no-underline hover:text-ink"
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function LegalBlock({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
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

export const LEGAL_UPDATED = "2026-11-15";
