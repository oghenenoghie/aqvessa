import type { ReactNode } from "react";
import { Pill } from "@/components/ui/pill";

/** The top of every page except home: eyebrow, the page's only h1, and a lede. */
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
    <section className="py-12 lg:py-16">
      <div className="wrap grid gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow">{eyebrow}</p>
          {tag ? <Pill tone="brand">{tag}</Pill> : null}
        </div>
        <h1 className="max-w-[18ch] type-heading-lg text-ink sm:type-display-lg">{title}</h1>
        {children ? <p className="lede">{children}</p> : null}
        {actions ? <div className="flex flex-wrap gap-3 pt-1">{actions}</div> : null}
      </div>
    </section>
  );
}
