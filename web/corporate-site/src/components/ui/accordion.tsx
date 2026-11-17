import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Accordion built on native details and summary, so it works with the keyboard and screen readers
 * without scripts. Items sharing a group name open one at a time where the browser supports it.
 */
export function Accordion({ className, children, label }: { className?: string; children: ReactNode; label?: string }) {
  return (
    <div role="group" aria-label={label} className={cn("border-t border-hairline", className)}>
      {children}
    </div>
  );
}

export function AccordionItem({
  group,
  eyebrow,
  title,
  defaultOpen,
  tone = "light",
  children,
}: {
  group: string;
  eyebrow?: string;
  title: string;
  defaultOpen?: boolean;
  tone?: "light" | "deep";
  children: ReactNode;
}) {
  const deep = tone === "deep";
  return (
    <details name={group} open={defaultOpen} className={cn("group border-b", deep ? "border-deep-line" : "border-hairline")}>
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-6 py-5 marker:hidden [&::-webkit-details-marker]:hidden",
          deep ? "text-deep-ink" : "text-ink",
        )}
      >
        <span className="grid gap-1">
          {eyebrow && <span className={cn("type-mono-sm", deep ? "text-deep-brand" : "text-brand-text")}>{eyebrow}</span>}
          <span className="type-body-lg font-medium">{title}</span>
        </span>
        {/* Plus that turns into a minus when the panel opens. */}
        <span aria-hidden="true" className="relative size-4 flex-none">
          <span className={cn("absolute inset-x-0 top-1/2 h-px -translate-y-1/2", deep ? "bg-deep-ink" : "bg-ink")} />
          <span
            className={cn(
              "absolute inset-y-0 left-1/2 w-px -translate-x-1/2 transition-transform duration-200 group-open:rotate-90",
              deep ? "bg-deep-ink" : "bg-ink",
            )}
          />
        </span>
      </summary>
      <div className={cn("max-w-prose pb-6 type-body-sm", deep ? "text-deep-muted" : "text-ink-muted")}>{children}</div>
    </details>
  );
}
