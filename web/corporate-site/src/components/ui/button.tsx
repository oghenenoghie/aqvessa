import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Button styles. One primary per view; secondary for the alternative; text for low emphasis.
 * Hover and active use brand-deep; focus uses the global focus-visible ring.
 */
export const buttonVariants = cva(
  "motion-colors inline-flex items-center justify-center gap-2 rounded-md border type-body font-medium whitespace-nowrap no-underline [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "border-brand bg-brand px-6 py-3 text-on-brand hover:border-brand-deep hover:bg-brand-deep active:border-brand-deep active:bg-brand-deep",
        secondary:
          "border-hairline bg-surface px-6 py-3 text-ink hover:border-ink active:bg-surface-sunk",
        text: "border-transparent px-0 py-3 text-brand-text underline decoration-1 underline-offset-4 hover:text-brand-deep",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonLinkProps = ComponentProps<typeof Link> & VariantProps<typeof buttonVariants>;

/** A link styled as a button. Internal links use next/link; external ones pass a full URL. */
export function ButtonLink({ className, variant, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonVariants({ variant }), className)} {...props} />;
}
