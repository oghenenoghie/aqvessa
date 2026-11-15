import { COMPANY_DETAILS } from "@/content/company";
import { PRODUCTS } from "@/content/products";
import { WORKING_PROJECTS } from "@/content/projects";
import { cn } from "@/lib/utils";

/** Each figure appears only when its fact is known: a null value leaves the figure out. */
const STATS: readonly (readonly [string, string])[] = [
  [String(WORKING_PROJECTS.length), "projects with a working deployment"],
  ...(COMPANY_DETAILS.sectorsServed !== null ? [[String(COMPANY_DETAILS.sectorsServed), "sectors served"] as const] : []),
  [
    String(PRODUCTS.length),
    `${PRODUCTS.length === 1 ? "product" : "products"} in development: ${new Intl.ListFormat("en-GB").format(PRODUCTS.map((p) => p.name))}`,
  ],
  ...(COMPANY_DETAILS.foundedYear !== null ? [[String(COMPANY_DETAILS.foundedYear), "Founded"] as const] : []),
];

const COLUMNS: Record<number, string> = { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" };

export function StatStrip() {
  return (
    <div className="border-y border-hairline bg-surface">
      <dl className={cn("wrap grid grid-cols-1 sm:grid-cols-2", COLUMNS[STATS.length])}>
        {STATS.map(([n, label], i) => (
          <div
            key={label}
            className={cn(
              "grid gap-1 border-hairline py-6",
              i > 0 && "max-sm:border-t",
              i % 2 === 1 && "sm:border-l sm:pl-6",
              i >= 2 && "sm:max-md:border-t",
              i > 0 && "md:border-t-0 md:border-l md:pl-6",
              i === 0 && "md:pr-6",
            )}
          >
            <dt className="order-2 type-body-sm text-ink-muted">{label}</dt>
            <dd className="order-1 m-0 type-heading-md tabular-nums text-ink lg:type-heading-lg">{n}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
