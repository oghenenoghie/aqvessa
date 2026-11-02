"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Desktop navigation. The current page is marked with aria-current and a brand-text rule. */
export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-1">
      {NAV.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "motion-colors relative inline-flex items-center rounded-sm px-3 py-3 type-body-sm font-medium",
                active ? "text-ink" : "text-ink-muted hover:text-ink",
              )}
            >
              {item.label}
              {active && <span aria-hidden="true" className="absolute inset-x-3 bottom-2 h-0.5 bg-brand-text" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Phone and tablet navigation: a disclosure that opens below the header. Escape closes it and
 * returns focus to the button. Keying the panel on the path closes it after navigation.
 */
export function MobileNav() {
  const pathname = usePathname();
  return <MobileNavPanel key={pathname} pathname={pathname} />;
}

function MobileNavPanel({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
        className="motion-colors inline-flex size-12 items-center justify-center rounded-md border border-hairline bg-surface text-ink hover:border-ink active:bg-surface-sunk"
      >
        {open ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full z-20 border-y border-hairline bg-ground"
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-2 sm:px-6">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="border-b border-hairline last:border-b-0">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "motion-colors flex items-center justify-between py-4 type-body font-medium",
                    active ? "text-brand-text" : "text-ink hover:text-brand-text",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
