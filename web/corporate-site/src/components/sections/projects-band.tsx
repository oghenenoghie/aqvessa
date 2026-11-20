import { SectionHead, sectionClass } from "@/components/section-head";
import { ArrowIcon } from "@/components/ui/button";
import { PROJECT_GROUPS, WORKING_PROJECTS } from "@/content/projects";

const symbols: Record<string, string> = { products: "P", organisations: "O", demos: "D" };

export function ProjectsBand() {
  return (
    <section aria-labelledby="projects-title" className={sectionClass}>
      <div className="wrap">
        <SectionHead eyebrow="Selected work" id="projects-title" title="A portfolio shaped by practical delivery.">
          Explore our deployed products, work for organisations and technical demonstrations. Project listings reflect the current evidence available for each deployment.
        </SectionHead>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-5">
          <div className="grid gap-1">
            <span className="type-mono-sm text-brand-text">PORTFOLIO / 2026</span>
            <p className="type-body-sm text-ink-muted">{WORKING_PROJECTS.length} projects with a working deployment or published build.</p>
          </div>
          <a href="/projects" className="link type-body-sm font-medium">Explore the portfolio</a>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {PROJECT_GROUPS.map((group, index) => {
            const count = WORKING_PROJECTS.filter((p) => p.group === group.id).length;
            return (
              <li key={group.id}>
                <a href={`/projects#${group.id}`} className="frontier-card group relative grid h-full min-h-[280px] content-between overflow-hidden rounded-xl border border-hairline bg-surface p-6 text-ink no-underline transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_55px_rgb(0_0_0_/_0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:p-7">
                  <div aria-hidden="true" className="frontier-card-grid absolute inset-0" />
                  <div className="relative flex items-center justify-between gap-3">
                    <span className="type-label text-brand-text">{group.label}</span>
                    <span className="type-mono-sm text-ink-muted">0{index + 1} / 03</span>
                  </div>
                  <div className="relative grid gap-3">
                    <span aria-hidden="true" className="frontier-card-glyph font-display text-8xl font-semibold leading-none tracking-[-.1em] text-brand/80">{symbols[group.id]}</span>
                    <span className="type-display-lg tabular-nums">{String(count).padStart(2, "0")}</span>
                    <span className="max-w-[32ch] type-body-sm text-ink-muted">{group.intro}</span>
                  </div>
                  <span className="relative mt-5 inline-flex items-center gap-2 border-t border-hairline pt-4 type-body-sm font-semibold text-brand-text [&_svg]:size-4">
                    Browse collection <ArrowIcon />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
