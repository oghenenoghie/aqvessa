import { ArrowIcon } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import type { Project } from "@/content/projects";

/** One project: name, status, summary, what it does, stack, and a link only when the site is public. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-name`}
      className="grid h-full scroll-mt-32 content-start gap-4 rounded-md border border-hairline bg-surface p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 id={`${project.slug}-name`} className="type-heading-md text-ink">
          {project.name}
        </h3>
        <Pill>{project.status}</Pill>
      </div>
      <p className="type-body-sm text-ink-muted">{project.summary}</p>
      {project.points.length > 0 && (
        <ul className="brand-list">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      <ul aria-label="Built with" className="flex flex-wrap gap-2">
        {project.stack.map((tool) => (
          <li key={tool} className="rounded-sm border border-hairline px-2 py-1 type-mono-sm text-ink-muted">
            {tool}
          </li>
        ))}
      </ul>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener"
          className="group mt-1 inline-flex items-center gap-2 justify-self-start type-body-sm font-medium text-brand-text underline decoration-1 underline-offset-4 hover:text-brand-deep [&_svg]:size-4"
        >
          {project.urlLabel ?? "Visit the site"} <ArrowIcon />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
    </article>
  );
}
