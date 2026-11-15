import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { footerLine } from "@/content/company";
import { LEGAL_NAV, ROUTES, SOCIAL } from "@/lib/site";

const legalHrefs = new Set(LEGAL_NAV.map((item) => item.href));

export function SiteFooter() {
  const links = ROUTES.filter((r) => r.href !== "/" && !legalHrefs.has(r.href));
  const linkClass = "font-medium text-deep-muted no-underline transition-colors duration-120 hover:text-deep-ink";
  return (
    <footer className="deep border-t border-deep-line bg-deep pt-12 pb-8 type-body-sm text-deep-muted">
      <div className="wrap grid gap-8">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <Logo tone="deep" width={160} />
          <nav aria-label="Footer" className="flex max-w-3xl flex-wrap gap-x-6 gap-y-2">
            {links.map(({ href, label }) => (
              <a key={href} href={href} className={linkClass}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-deep-line pt-6">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_NAV.map(({ href, label }) => (
              <a key={href} href={href} className={linkClass}>
                {label}
              </a>
            ))}
          </nav>
          {SOCIAL.length > 0 && (
            <ul aria-label="Aqvessa on the web" className="flex flex-wrap gap-x-6 gap-y-2">
              {SOCIAL.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener" className={`inline-flex items-center gap-2 ${linkClass}`}>
                    <Icon name={s.icon} className="size-5" />
                    {s.label}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-deep-line pt-6 type-caption">
          <span>{footerLine(new Date().getFullYear())}</span>
          <span>Incorporated in Nigeria under the Companies and Allied Matters Act 2020. General information only. Not an offer.</span>
        </div>
      </div>
    </footer>
  );
}
