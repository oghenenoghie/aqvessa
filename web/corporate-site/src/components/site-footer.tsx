import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { footerLine } from "@/content/company";
import { LEGAL_NAV, ROUTES, SOCIAL } from "@/lib/site";

const legalHrefs = new Set(LEGAL_NAV.map((item) => item.href));

export function SiteFooter() {
  const links = ROUTES.filter((r) => r.href !== "/" && !legalHrefs.has(r.href));
  const linkClass = "font-medium text-deep-muted no-underline transition-colors duration-150 hover:text-deep-brand";
  return (
    <footer className="deep relative overflow-hidden border-t border-deep-line bg-deep pt-16 pb-8 type-body-sm text-deep-muted">
      <div aria-hidden="true" className="frontier-glow pointer-events-none absolute -right-48 -top-64 size-[600px]" />
      <div className="wrap relative grid gap-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div className="grid content-start gap-5">
            <Logo tone="deep" width={170} />
            <p className="max-w-[420px] type-body-lg text-deep-muted">Ideas into systems. Vision into reality. We build digital products and technology that move organisations forward.</p>
            <span className="type-mono-sm text-deep-brand">DESIGN / ENGINEERING / INNOVATION</span>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <nav aria-label="Footer navigation" className="grid content-start gap-3">
              <span className="type-label text-deep-brand">Explore</span>
              {links.map(({ href, label }) => <a key={href} href={href} className={linkClass}>{label}</a>)}
            </nav>
            <nav aria-label="Legal" className="grid content-start gap-3">
              <span className="type-label text-deep-brand">Information</span>
              {LEGAL_NAV.map(({ href, label }) => <a key={href} href={href} className={linkClass}>{label}</a>)}
              {SOCIAL.length > 0 && <div className="flex flex-wrap gap-4 pt-2">{SOCIAL.map((s) => <a key={s.href} href={s.href} target="_blank" rel="noopener" aria-label={s.label} className={linkClass}><Icon name={s.icon} className="size-5" /></a>)}</div>}
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-deep-line pt-6 type-caption">
          <span>{footerLine(new Date().getFullYear())}</span>
          <span>Incorporated in Nigeria under CAMA 2020. General information only.</span>
        </div>
      </div>
    </footer>
  );
}
