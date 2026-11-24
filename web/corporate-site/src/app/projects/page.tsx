import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { PAGES } from "@/content/pages";
import { PROJECTS, PROJECT_GROUPS, PROJECTS_CHECKED, WORKING_PROJECTS, projectsIn } from "@/content/projects";
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
        <div className="wrap grid gap-8 py-8 lg:grid-cols-12">
          <dl className="grid gap-6 sm:grid-cols-3 lg:col-span-6">
            {PROJECT_GROUPS.map((group) => (
              <div key={group.id} className="grid gap-1">
                <dt className="type-label text-ink-muted">{group.label}</dt>
                <dd className="type-heading-md tabular-nums text-ink">{projectsIn(group.id).length}</dd>
              </div>
            ))}
          </dl>
          <div className="grid max-w-prose content-start gap-3 type-caption text-ink-muted lg:col-span-6">
            <p>
              {WORKING_PROJECTS.length} projects have a working deployment or a published build, checked on{" "}
              <time dateTime={PROJECTS_CHECKED}>{formatDate(PROJECTS_CHECKED)}</time>. Intelligent CBT is listed with its stage and is not
              counted, because it is still in development.
            </p>
            <p>
              &ldquo;Deployed&rdquo; means the latest production build succeeded. &ldquo;Completed&rdquo; means the product is feature-complete for its release and may still be in testing. &ldquo;Development build&rdquo; means a build we use for
              testing, not a released product. A project links to its site only when that site is public.
            </p>
            <p id="on-request">
              <span className="font-medium text-ink">Deployed, on request.</span> The deployment is not open to the public. To see a
              demo, ask through the{" "}
              <a href="/contact#enquiry" className="link">
                enquiry form
              </a>{" "}
              and name the project.
            </p>
          </div>
        </div>
      </section>

      <ProjectsExplorer groups={PROJECT_GROUPS} projects={PROJECTS} />
    </main>
  );
}
