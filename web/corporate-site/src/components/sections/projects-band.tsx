import { SectionHead, sectionClass } from "@/components/section-head";
import { ArrowIcon } from "@/components/ui/button";
import { PROJECT_GROUPS, PROJECTS, projectsIn } from "@/content/projects";

/** Home page summary of the projects page: one tile per group with its count. */
export function ProjectsBand() {
  return (
    <section aria-labelledby="projects-title" className={sectionClass}>
      <div className="wrap">
        <SectionHead eyebrow="Projects" id="projects-title" title="What we have built.">
          {PROJECTS.length} projects with a working deployment, from our own payroll platform to websites for organisations.
        </SectionHead>
        <ul className="grid gap-6 md:grid-cols-3">
          {PROJECT_GROUPS.map((group) => (
            <li key={group.id}>
              <a
                href={`/projects#${group.id}`}
                className="group grid h-full content-start gap-3 rounded-md border border-hairline bg-surface p-6 text-ink no-underline transition-colors duration-120 hover:border-brand"
              >
                <span className="type-label text-ink-muted">{group.label}</span>
                <span className="type-heading-lg tabular-nums">{projectsIn(group.id).length}</span>
                <span className="type-body-sm text-ink-muted">{group.intro}</span>
                <span className="mt-1 inline-flex items-center gap-2 type-body-sm font-medium text-brand-text [&_svg]:size-4">
                  See the projects <ArrowIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
