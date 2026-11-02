import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "down"
  | "check"
  | "mail"
  | "phone"
  | "globe"
  | "menu"
  | "close";

/** Rendered once in the root layout; icons reference these symbols. */
export function IconSprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <symbol id="i-arrow" viewBox="0 0 16 16">
          <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-down" viewBox="0 0 16 16">
          <path d="M8 2v9M4 7l4 4 4-4M2.5 14h11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 16 16">
          <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-mail" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.5 6l8.5 7 8.5-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path d="M6.6 3.5h2.8l1.4 4.2-2 1.4a11 11 0 0 0 6.1 6.1l1.4-2 4.2 1.4v2.8a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-globe" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </symbol>
        <symbol id="i-menu" viewBox="0 0 20 20">
          <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </symbol>
        <symbol id="i-close" viewBox="0 0 20 20">
          <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </symbol>
      </defs>
    </svg>
  );
}

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" {...props}>
      <use href={`#i-${name}`} />
    </svg>
  );
}
