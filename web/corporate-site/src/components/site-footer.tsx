import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { BUILD_YEAR, NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-hairline">
      <Container className="grid gap-12 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-5">
          <Logo width={160} />
          <p className="mt-8 max-w-sm type-body-sm text-ink-muted">
            Building technology. Enabling businesses. Creating lasting value.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          <div>
            <h2 className="type-label text-ink-muted">Company</h2>
            <ul className="mt-4 space-y-3">
              {NAV.filter((item) => item.href !== "/contact").map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="motion-colors type-body-sm text-ink hover:text-brand-text">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="type-label text-ink-muted">Enquiries</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/contact" className="motion-colors type-body-sm text-ink hover:text-brand-text">
                  Make an enquiry
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="type-label text-ink-muted">Legal</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/legal" className="motion-colors type-body-sm text-ink hover:text-brand-text">
                  Legal notice
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
      <div className="border-t border-hairline">
        <Container className="py-6">
          <p className="type-caption text-ink-muted">
            © {BUILD_YEAR} {SITE.legalName}. A private company limited by shares, incorporated in Nigeria under the
            Companies and Allied Matters Act 2020.
          </p>
        </Container>
      </div>
    </footer>
  );
}
