import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A bento grid: tiles of mixed sizes on a six-column grid from the large breakpoint up. */
export function BentoGrid({ className, children }: { className?: string; children: ReactNode }) {
  return <ul className={cn("grid gap-4 lg:grid-cols-6 lg:gap-6", className)}>{children}</ul>;
}

/**
 * One tile. It is a link with a hairline border on the surface token; the border turns brand on
 * hover and keyboard focus. Pass a col-span class to set its width.
 */
export function BentoTile({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <li className={cn("min-w-0", className)}>
      <a
        href={href}
        className="group relative grid h-full grid-rows-[1fr] gap-4 overflow-hidden rounded-lg border border-hairline bg-surface p-6 text-ink no-underline transition-colors duration-200 hover:border-brand focus-visible:border-brand sm:p-8"
      >
        {children}
      </a>
    </li>
  );
}
