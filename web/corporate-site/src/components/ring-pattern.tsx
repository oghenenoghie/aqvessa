import { cn } from "@/lib/utils";

/**
 * The ring from the logo's A, repeated at a 64px pitch with a 32px half-step (space-16 and
 * space-8). Decorative: drawn in hairline so it never competes with content.
 */
export function RingPattern({ id, className }: { id: string; className?: string }) {
  const patternId = `rings-${id}`;
  return (
    <svg aria-hidden="true" focusable="false" className={cn("pointer-events-none block", className)}>
      <defs>
        <pattern id={patternId} width="64" height="64" patternUnits="userSpaceOnUse">
          <circle cx="16" cy="16" r="6" fill="none" strokeWidth="2.5" className="stroke-hairline" />
          <circle cx="48" cy="48" r="6" fill="none" strokeWidth="2.5" className="stroke-hairline" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
