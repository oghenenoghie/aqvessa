import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { MobileNav, NavLinks } from "@/components/nav-links";
import { ThemeToggle } from "@/components/theme-toggle";

/**
 * The header sits on `ground` with space-6 above and below the lockup, which keeps the height of
 * the A clear around it. It does not stick, so content never scrolls into that clear space.
 */
export function SiteHeader() {
  return (
    <header className="relative">
      <a
        href="#main"
        className="sr-only rounded-md bg-surface px-4 py-2 text-ink focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-30 focus:border focus:border-hairline"
      >
        Skip to content
      </a>
      <Container className="flex items-center justify-between gap-6 py-6">
        <Logo width={128} eager />
        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden lg:block">
            <NavLinks />
          </nav>
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
