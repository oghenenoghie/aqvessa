"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { MobileNavLinks } from "@/components/nav-links";
import { ButtonLink } from "@/components/ui/button";
import { LINKS } from "@/lib/site";

/** Phone and tablet menu. Escape closes it and returns focus to the button. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        ref={button}
        type="button"
        className="ml-auto inline-grid size-12 cursor-pointer place-items-center rounded-md border border-hairline bg-surface text-ink transition-colors duration-120 hover:border-ink nav:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name={open ? "close" : "menu"} width={20} height={20} />
      </button>
      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-full border-y border-hairline bg-ground nav:hidden"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        <nav aria-label="Mobile" className="wrap grid pt-2 pb-6">
          <MobileNavLinks />
          <div className="mt-4 grid">
            <ButtonLink href={LINKS.contact}>Make an enquiry</ButtonLink>
          </div>
        </nav>
      </div>
    </>
  );
}
