import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** One primary per view; line for the alternative; line-deep on the dark band. */
export const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border px-6 py-3 type-body font-medium no-underline transition-colors duration-120 [&_svg]:size-4 [&_svg]:flex-none",
  {
    variants: {
      variant: {
        primary: "border-brand bg-brand text-on-brand hover:border-brand-deep hover:bg-brand-deep",
        line: "border-hairline bg-surface text-ink hover:border-ink",
        "deep-primary": "border-deep-brand bg-deep-brand text-on-deep-brand hover:border-deep-ink hover:bg-deep-ink",
        "line-deep": "border-deep-line bg-transparent text-deep-ink hover:border-deep-ink",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof buttonVariants> & { disabled?: boolean };

export function ButtonLink({ className, variant, disabled, href, ...props }: ButtonLinkProps) {
  if (disabled) {
    // No href: a disabled link is not focusable or followable.
    return (
      <a
        aria-disabled="true"
        className={cn(buttonVariants({ variant }), "pointer-events-none cursor-not-allowed opacity-50", className)}
        {...props}
      />
    );
  }
  return <a href={href} className={cn(buttonVariants({ variant }), className)} {...props} />;
}

/** Arrow that nudges right on hover of the parent button. */
export function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="transition-transform duration-120 group-hover:translate-x-1">
      <use href="#i-arrow" />
    </svg>
  );
}
