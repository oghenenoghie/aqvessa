import { STAGES, stageOf, type StageNumber } from "@/content/products";
import { cn } from "@/lib/utils";

/** A product's stage: five bars filled in ink up to the current one, with the stage named in text. */
export function StageMeter({ stage, className }: { stage: StageNumber; className?: string }) {
  const current = stageOf(stage);
  return (
    <div className={cn("grid gap-2", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <p className="type-body-sm font-medium text-ink">{current.name}</p>
        <p className="type-mono-sm text-ink-muted">
          Stage {stage} of {STAGES.length}
        </p>
      </div>
      <ol aria-label="Product stages" className="grid grid-cols-5 gap-1">
        {STAGES.map((s) => (
          <li key={s.stage} aria-current={s.stage === stage ? "step" : undefined} className={cn("h-1", s.stage <= stage ? "bg-ink" : "bg-hairline")}>
            <span className="sr-only">
              {s.name}
              {s.stage < stage ? ", reached" : s.stage === stage ? ", current stage" : ", not reached"}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
