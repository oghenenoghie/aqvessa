import { SectionHead, sectionClass } from "@/components/section-head";
import { ArrowIcon } from "@/components/ui/button";
import { PROJECT_GROUPS, WORKING_PROJECTS } from "@/content/projects";

/** Home page summary of the projects page: one tile per group with its count. */
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
        <ul className="grid gap-4 md:grid-cols-3">
          {PROJECT_GROUPS.map((group, index) => (
            <li key={group.id}>
              <a href={`/projects#${group.id}`} className="group grid h-full content-start gap-4 border border-hairline bg-surface p-6 text-ink no-underline transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
                <div className="flex items-center justify-between">
                  <span className="type-label text-ink-muted">{group.label}</span>
                  <span className="type-mono-sm text-brand-text">0{index + 1}</span>
                </div>
                <span className="type-display-lg tabular-nums">{String(WORKING_PROJECTS.filter((p) => p.group === group.id).length).padStart(2, "0")}</span>
                <span className="type-body-sm text-ink-muted">{group.intro}</span>
                <span className="mt-2 inline-flex items-center gap-2 border-t border-hairline pt-4 type-body-sm font-medium text-brand-text [&_svg]:size-4">
                  Browse this work <ArrowIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
