import type { ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  id,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  id: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 grid max-w-3xl gap-4">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2" id={id}>
        {title}
      </h2>
      {children ? <div className="lede">{children}</div> : null}
    </div>
  );
}

export const sectionClass = "relative border-t border-hairline py-20";
export const deepSectionClass = "deep relative overflow-hidden bg-deep py-20 text-deep-ink";
