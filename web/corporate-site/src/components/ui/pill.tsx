import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Tag: capitals in the label style, on the house 2px corner. Signal tones always carry text. */
export const pillVariants = cva("inline-flex items-center gap-1 whitespace-nowrap rounded-sm px-2 py-1 type-label", {
  variants: {
    tone: {
      brand: "bg-brand-tint text-brand-text",
      mute: "border border-hairline bg-surface-sunk text-ink-muted",
      success: "border border-hairline text-signal-success",
      warning: "border border-hairline text-signal-warning",
    },
  },
  defaultVariants: { tone: "mute" },
});

export function Pill({ className, tone, ...props }: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof pillVariants>) {
  return <span className={cn(pillVariants({ tone }), className)} {...props} />;
}

export function Chip({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("rounded-sm border border-hairline bg-surface px-3 py-1 type-body-sm text-ink", className)} {...props} />;
}
