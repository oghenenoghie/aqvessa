import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { SectionHead, sectionClass } from "@/components/section-head";
import { PAGES } from "@/content/pages";
import { PROJECTS, PROJECT_GROUPS, PROJECTS_CHECKED, projectsIn } from "@/content/projects";
import { formatDate } from "@/lib/dates";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.projects;

export const metadata: Metadata = pageMetadata(page, "/projects");

export default function ProjectsPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>

      <section aria-label="How projects are listed" className="border-t border-hairline">
        <div className="wrap py-8">
          <dl className="grid gap-6 sm:grid-cols-3">
            {PROJECT_GROUPS.map((group) => (
              <div key={group.id} className="grid gap-1">
                <dt className="type-label text-ink-muted">{group.label}</dt>
                <dd className="type-heading-md tabular-nums text-ink">{projectsIn(group.id).length}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-prose type-caption text-ink-muted">
            {PROJECTS.length} projects. &ldquo;Deployed&rdquo; means the latest production build succeeded when checked on{" "}
            <time dateTime={PROJECTS_CHECKED}>{formatDate(PROJECTS_CHECKED)}</time>; &ldquo;on request&rdquo; means the
            deployment is not open to the public. A project links to its site only when that site is public.
          </p>
        </div>
      </section>

      {PROJECT_GROUPS.map((group) => (
        <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className={sectionClass}>
          <div className="wrap">
            <SectionHead eyebrow={group.label} id={`${group.id}-title`} title={group.title}>
              {group.intro}
            </SectionHead>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectsIn(group.id).map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </main>
  );
}
