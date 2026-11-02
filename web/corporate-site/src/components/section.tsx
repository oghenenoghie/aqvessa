import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

/**
 * A page section: hairline above, space-12 padding on phones and tablets, space-16 on desktop.
 * The heading block sits in the left four columns on desktop, content in the right eight.
 */
export function Section({
  id,
  label,
  title,
  intro,
  children,
  className,
  layout = "split",
}: {
  id: string;
  label?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  layout?: "split" | "stacked";
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("border-t border-hairline", className)}>
      <Container
        className={cn(
          "py-12 lg:py-16",
          layout === "split" ? "grid gap-8 lg:grid-cols-12 lg:gap-8" : "flex flex-col gap-8",
        )}
      >
        <div className={cn("min-w-0", layout === "split" && "lg:col-span-4")}>
          {label && <p className="type-label text-ink-muted">{label}</p>}
          <h2 id={headingId} className={cn("text-balance type-heading-md text-ink", label && "mt-3")}>
            {title}
          </h2>
          {intro && <div className="mt-4 max-w-prose type-body text-ink-muted">{intro}</div>}
        </div>
        <div className={cn("min-w-0", layout === "split" && "lg:col-span-8")}>{children}</div>
      </Container>
    </section>
  );
}
