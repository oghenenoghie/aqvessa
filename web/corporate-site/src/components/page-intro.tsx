import type { ReactNode } from "react";
import { Pill } from "@/components/ui/pill";

/** Shared editorial opening for every interior route: clear hierarchy and an intentional next step. */
export function PageIntro({
  eyebrow,
  title,
  tag,
  children,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  tag?: string;
  children?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-surface">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[32%] border-l border-hairline bg-surface-sunk/40 lg:block" />
      <div className="wrap relative grid gap-8 py-14 sm:py-16 lg:grid-cols-12 lg:items-end lg:gap-10 lg:py-20">
        <div className="grid content-start gap-5 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">{eyebrow}</p>
            {tag ? <Pill tone="brand">{tag}</Pill> : null}
          </div>
          <h1 className="max-w-[16ch] type-heading-lg text-ink sm:type-display-lg lg:type-display-xl">{title}</h1>
        </div>
        <div className="grid content-end gap-6 lg:col-span-4 lg:col-start-9">
          {children ? <p className="lede max-w-[48ch]">{children}</p> : null}
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          <div className="flex items-center gap-3 border-t border-hairline pt-4 type-caption text-ink-muted">
            <span className="size-1.5 bg-brand" aria-hidden="true" />
            <span>AQvessa Limited <span aria-hidden="true">/</span> Technology and software engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
