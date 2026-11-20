import type { ReactNode } from "react";
import { Pill } from "@/components/ui/pill";

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
    <section className="relative isolate overflow-hidden border-b border-hairline bg-surface">
      <div aria-hidden="true" className="frontier-grid pointer-events-none absolute inset-0 opacity-50" />
      <div aria-hidden="true" className="frontier-glow pointer-events-none absolute -right-48 -top-40 size-[620px]" />
      <div className="wrap relative grid gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:items-end lg:gap-10 lg:py-24">
        <div className="grid content-start gap-6 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">{eyebrow}</p>
            {tag ? <Pill tone="brand">{tag}</Pill> : null}
          </div>
          <h1 className="max-w-[16ch] type-display-lg text-ink lg:type-display-xl">{title}</h1>
        </div>
        <div className="grid content-end gap-6 lg:col-span-4 lg:col-start-9">
          {children ? <p className="lede max-w-[48ch]">{children}</p> : null}
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          <div className="flex items-center gap-3 border-t border-hairline pt-4 type-caption text-ink-muted">
            <span className="size-1.5 rounded-full bg-brand shadow-[0_0_12px_var(--brand)]" aria-hidden="true" />
            <span>AQvessa Limited / Digital Frontier</span>
          </div>
        </div>
      </div>
    </section>
  );
}
