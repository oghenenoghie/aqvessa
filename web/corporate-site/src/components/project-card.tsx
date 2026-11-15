import Image from "next/image";
import { ArrowIcon } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { stageOf } from "@/content/products";
import type { Project } from "@/content/projects";

/**
 * One project: screenshot, name, status, the problem, what was built, one outcome, the stack, and
 * a link only when the site is public. The screenshot, problem and outcome lines appear only when
 * the facts for them exist.
 */
export function ProjectCard({ project }: { project: Project }) {
  const stage = project.stage ? stageOf(project.stage) : null;
  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-name`}
      className="grid h-full scroll-mt-32 content-start gap-4 overflow-hidden rounded-md border border-hairline bg-surface"
    >
      {project.screenshot && (
        <Image
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          width={project.screenshot.width}
          height={project.screenshot.height}
          className="h-auto w-full border-b border-hairline"
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
        />
      )}
      <div className="grid content-start gap-4 p-6 pt-2 first:pt-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 id={`${project.slug}-name`} className="type-heading-md text-ink">
            {project.name}
          </h3>
          <Pill className="whitespace-normal">{project.status}</Pill>
        </div>
        <p className="type-caption text-ink-muted">
          {project.sector}
          {stage ? ` · Stage ${project.stage} of 5, ${stage.name.toLowerCase()}` : ""}
        </p>
        {project.problem && (
          <p className="type-body-sm text-ink">
            <span className="font-medium">Problem.</span> <span className="text-ink-muted">{project.problem}</span>
          </p>
        )}
        <p className="type-body-sm text-ink-muted">
          {project.problem && <span className="font-medium text-ink">Built. </span>}
          {project.summary}
        </p>
        {project.points.length > 0 && (
          <ul className="brand-list">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        {project.outcome && (
          <p className="type-body-sm text-ink">
            <span className="font-medium">Outcome.</span> <span className="text-ink-muted">{project.outcome}</span>
          </p>
        )}
        {project.stack.length > 0 && (
          <ul aria-label="Built with" className="flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <li key={tool} className="rounded-sm border border-hairline px-2 py-1 type-mono-sm text-ink-muted">
                {tool}
              </li>
            ))}
          </ul>
        )}
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
      </div>
    </article>
  );
}
