import type { Fact } from "@/content/company";
import { cn } from "@/lib/utils";

/** Term and value rows with hairline dividers. Amounts and identifiers use mono, tabular figures. */
export function FactList({ facts, className }: { facts: readonly Fact[]; className?: string }) {
  return (
    <dl className={cn("divide-y divide-hairline", className)}>
      {facts.map((fact) => (
        <div key={fact.term} className="grid gap-1 py-3 sm:grid-cols-5 sm:gap-4">
          <dt className="type-body-sm text-ink-muted sm:col-span-2">{fact.term}</dt>
          <dd className={cn("text-ink sm:col-span-3", fact.mono ? "type-mono" : "type-body-sm font-medium")}>
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
