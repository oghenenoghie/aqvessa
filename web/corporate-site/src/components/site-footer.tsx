import { Logo } from "@/components/logo";
import { ROUTES, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="deep border-t border-deep-line bg-deep pt-12 pb-8 type-body-sm text-deep-muted">
      <div className="wrap grid gap-8">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <Logo tone="deep" width={160} />
          <nav aria-label="Footer" className="flex max-w-3xl flex-wrap gap-x-6 gap-y-2">
            {ROUTES.filter((r) => r.href !== "/").map(({ href, label }) => (
              <a key={href} href={href} className="font-medium text-deep-muted no-underline transition-colors duration-120 hover:text-deep-ink">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-deep-line pt-6 type-caption">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}. Incorporated in Nigeria under the Companies and Allied Matters Act
            2020.
          </span>
          <span>General information only. Not an offer.</span>
        </div>
      </div>
    </footer>
  );
}
