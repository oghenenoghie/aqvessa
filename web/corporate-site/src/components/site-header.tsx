import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { NavLinks } from "@/components/nav-links";
import { ButtonLink } from "@/components/ui/button";
import { LINKS } from "@/lib/site";

/**
 * Sticky header on `ground`. space-6 above and below the lockup keeps the height of the A clear
 * around it. The enquiry button is a line button: the primary in each view belongs to the page.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ground">
      <a
        href="#main"
        className="sr-only rounded-md border border-hairline bg-surface px-4 py-2 text-ink focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to content
      </a>
      <div className="wrap relative flex items-center gap-6 py-6">
        <Logo />
        <nav aria-label="Primary" className="ml-auto hidden gap-1 nav:flex">
          <NavLinks />
        </nav>
        <div className="hidden nav:flex">
          <ButtonLink variant="line" href={LINKS.contact}>
            Make an enquiry
          </ButtonLink>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
