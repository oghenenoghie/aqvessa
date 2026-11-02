import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Page width and gutters: space-4 on phones, space-6 on tablets, space-8 on desktops. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}
