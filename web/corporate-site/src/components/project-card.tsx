import Image from "next/image";
import { ArrowIcon } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { stageOf } from "@/content/products";
import type { Project } from "@/content/projects";

const groupLabel: Record<Project["group"], string> = {
  products: "AQVESSA PRODUCT",
  organisations: "CLIENT DELIVERY",
  demos: "EXPERIMENT / DEMO",
};

/** Portfolio card with a visual identity panel, evidence-led status and a clear content hierarchy. */
export function ProjectCard({ project }: { project: Project }) {
  const stage = project.stage ? stageOf(project.stage) : null;
  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-name`}
      className="frontier-card group grid h-full scroll-mt-32 content-start overflow-hidden rounded-xl border border-hairline bg-surface transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_55px_rgb(0_0_0_/_0.24)]"
    >
      <div className="frontier-card-visual relative grid min-h-[148px] content-between overflow-hidden border-b border-hairline p-5">
        <div aria-hidden="true" className="frontier-card-grid absolute inset-0" />
        <div className="relative flex items-center justify-between gap-3">
          <span className="type-mono-sm text-brand-text">{groupLabel[project.group]}</span>
          <Pill className="whitespace-normal">{project.status}</Pill>
        </div>
        <div className="relative flex items-end justify-between gap-4">
          <div className="grid gap-1">
            <span className="type-label text-ink-muted">{project.sector}</span>
            <span className="type-mono-sm text-ink-muted">{project.slug.toUpperCase().replaceAll("-", " / ")}</span>
          </div>
          <span aria-hidden="true" className="frontier-card-glyph font-display text-6xl font-semibold leading-none tracking-[-.08em] text-brand/80">
            {project.name.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>

      {project.screenshot ? (
        <Image
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          width={project.screenshot.width}
          height={project.screenshot.height}
          className="h-auto w-full border-b border-hairline object-cover"
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
        />
      ) : null}

      <div className="grid flex-1 content-start gap-5 p-5 sm:p-6">
        <div className="grid gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {stage ? <span className="type-mono-sm text-brand-text">STAGE {project.stage}/5 · {stage.name.toUpperCase()}</span> : null}
          </div>
          <h3 id={`${project.slug}-name`} className="type-heading-md text-ink transition-colors group-hover:text-brand-text">
            {project.name}
          </h3>
          <p className="type-body-sm text-ink-muted">{project.summary}</p>
        </div>

        {project.problem ? (
          <div className="frontier-card-note grid gap-1 border-l-2 border-brand/70 pl-3">
            <span className="type-label text-brand-text">The challenge</span>
            <p className="type-body-sm text-ink-muted">{project.problem}</p>
          </div>
        ) : null}

        {project.points.length > 0 ? (
          <ul className="frontier-card-points grid gap-2">
            {project.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        ) : null}

        {project.outcome ? (
          <p className="type-body-sm text-ink">
            <span className="font-semibold text-brand-text">Outcome / </span><span className="text-ink-muted">{project.outcome}</span>
          </p>
        ) : null}

        {project.stack.length > 0 ? (
          <ul aria-label="Built with" className="flex flex-wrap gap-2 border-t border-hairline pt-4">
            {project.stack.map((tool) => (
              <li key={tool} className="rounded-sm border border-hairline bg-surface-sunk/70 px-2 py-1 type-mono-sm text-ink-muted">{tool}</li>
            ))}
          </ul>
        ) : null}

        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener" className="mt-auto inline-flex items-center gap-2 border-t border-hairline pt-4 type-body-sm font-semibold text-brand-text no-underline transition-colors hover:text-brand-deep [&_svg]:size-4">
            {project.urlLabel ?? "Visit the site"} <ArrowIcon />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          <p className="mt-auto border-t border-hairline pt-4 type-caption text-ink-muted">Project details available on request where applicable.</p>
        )}
      </div>
    </article>
  );
}
