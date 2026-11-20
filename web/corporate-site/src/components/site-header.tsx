import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { NavLinks } from "@/components/nav-links";
import { ButtonLink } from "@/components/ui/button";
import { LINKS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ground/85 backdrop-blur-xl">
      <a href="#main" className="sr-only rounded-md border border-hairline bg-surface px-4 py-2 text-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50">Skip to content</a>
      <div className="wrap relative flex min-h-[84px] items-center gap-6">
        <Logo />
        <span aria-hidden="true" className="hidden h-8 w-px bg-hairline sm:block" />
        <span className="hidden type-mono-sm tracking-[.14em] text-ink-muted sm:block">DIGITAL FRONTIER</span>
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 nav:flex"><NavLinks /></nav>
        <div className="hidden nav:flex"><ButtonLink href={LINKS.contact}>Let&apos;s talk <span aria-hidden="true">↗</span></ButtonLink></div>
        <MobileNav />
      </div>
    </header>
  );
}
