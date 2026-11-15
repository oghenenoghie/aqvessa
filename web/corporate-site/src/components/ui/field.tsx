import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared look for text inputs, selects and textareas: surface fill, hairline border, 4px corner. */
export const controlClass =
  "w-full rounded-md border border-hairline bg-surface px-3 py-3 type-body text-ink transition-colors duration-120 placeholder:text-ink-muted hover:border-ink aria-[invalid=true]:border-signal-danger disabled:cursor-not-allowed disabled:opacity-50";

/** An error line. The word "Error" is text, so colour is never the only signal. */
export function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="type-body-sm text-signal-danger">
      <span className="font-medium">Error:</span> {children}
    </p>
  );
}

export function Field({
  id,
  label,
  optional,
  hint,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid content-start gap-2", className)}>
      <label htmlFor={id} className="type-body-sm font-medium text-ink">
        {label}
        {optional ? <span className="font-normal text-ink-muted"> (optional)</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="type-caption text-ink-muted">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? <FieldError id={`${id}-error`}>{error}</FieldError> : null}
    </div>
  );
}
