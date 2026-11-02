import { BUSINESS_AREAS } from "@/content/business";
import { CORPORATE_FACTS } from "@/content/company";
import { PRODUCTS, STAGES } from "@/content/products";

const shareCapital = CORPORATE_FACTS.find((f) => f.term === "Registered share capital")?.value ?? "";

const STATS = [
  [String(BUSINESS_AREAS.length), "business areas in our registered objects"],
  [String(PRODUCTS.length), `product in development: ${PRODUCTS.map((p) => p.name).join(", ")}`],
  [String(STAGES.length), "stages every product is measured against"],
  [shareCapital, "registered share capital"],
] as const;

export function StatStrip() {
  return (
    <div className="border-y border-hairline bg-surface">
      <dl className="wrap grid grid-cols-2 md:grid-cols-4">
        {STATS.map(([n, label], i) => (
          <div
            key={label}
            className={[
              "grid gap-1 border-hairline py-6",
              i % 2 === 1 ? "border-l pl-6" : "pr-6",
              i >= 2 ? "border-t md:border-t-0" : "",
              i === 2 ? "md:border-l md:pl-6" : "",
            ].join(" ")}
          >
            <dt className="order-2 type-body-sm text-ink-muted">{label}</dt>
            <dd className="order-1 m-0 type-heading-md tabular-nums text-ink lg:type-heading-lg">
              {n}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
