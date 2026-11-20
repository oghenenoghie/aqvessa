"use client";

import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {NAV.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <a key={item.href} href={item.href} aria-current={active ? "page" : undefined}
            className={cn(
              "relative whitespace-nowrap rounded-sm px-3 py-2 type-body-sm font-medium no-underline transition-colors duration-150",
              "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:bg-brand after:transition-transform after:duration-200",
              active ? "text-ink after:scale-x-100" : "text-ink-muted after:scale-x-0 hover:text-ink hover:after:scale-x-100",
            )}>{item.label}</a>
        );
      })}
    </>
  );
}

export function MobileNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {NAV.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <a key={item.href} href={item.href} aria-current={active ? "page" : undefined}
            className={cn("border-b border-hairline py-4 type-body font-medium no-underline", active ? "text-brand-text" : "text-ink hover:text-brand-text")}>{item.label}</a>
        );
      })}
    </>
  );
}
