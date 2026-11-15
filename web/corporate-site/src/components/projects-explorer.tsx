"use client";

import { useId, useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { SectionHead, sectionClass } from "@/components/section-head";
import { controlClass } from "@/components/ui/field";
import type { Project, ProjectGroup } from "@/content/projects";

type Group = { id: ProjectGroup; label: string; title: string; intro: string };

const ALL = "";

/** The project list with a filter by sector and by stack. Without JavaScript every project shows. */
export function ProjectsExplorer({ groups, projects }: { groups: readonly Group[]; projects: readonly Project[] }) {
  const sectorId = useId();
  const stackId = useId();
  const [sector, setSector] = useState(ALL);
  const [stack, setStack] = useState(ALL);

  const sectors = useMemo(() => [...new Set(projects.map((p) => p.sector))].sort((a, b) => a.localeCompare(b, "en-GB")), [projects]);
  const stacks = useMemo(() => [...new Set(projects.flatMap((p) => p.stack))].sort((a, b) => a.localeCompare(b, "en-GB")), [projects]);

  const shown = projects.filter((p) => (sector === ALL || p.sector === sector) && (stack === ALL || p.stack.includes(stack)));
  const filtering = sector !== ALL || stack !== ALL;

  return (
    <>
      <section aria-labelledby="filter-title" className="border-t border-hairline">
        <form
          className="wrap grid gap-4 py-8 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
          onSubmit={(e) => e.preventDefault()}
          role="search"
          aria-label="Filter projects"
        >
          <h2 id="filter-title" className="type-label text-ink-muted sm:col-span-3">
            Filter projects
          </h2>
          <div className="grid gap-2">
            <label htmlFor={sectorId} className="type-body-sm font-medium">
              Sector
            </label>
            <select id={sectorId} className={controlClass} value={sector} onChange={(e) => setSector(e.target.value)}>
              <option value={ALL}>All sectors</option>
              {sectors.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor={stackId} className="type-body-sm font-medium">
              Built with
            </label>
            <select id={stackId} className={controlClass} value={stack} onChange={(e) => setStack(e.target.value)}>
              <option value={ALL}>All technologies</option>
              {stacks.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            disabled={!filtering}
            onClick={() => {
              setSector(ALL);
              setStack(ALL);
            }}
            className="cursor-pointer rounded-md border border-hairline bg-surface px-6 py-3 type-body font-medium text-ink transition-colors duration-120 hover:border-ink disabled:cursor-not-allowed disabled:opacity-50"
          >
            Clear filters
          </button>
          <p role="status" className="type-body-sm text-ink-muted sm:col-span-3">
            Showing {shown.length} of {projects.length} projects.
          </p>
        </form>
      </section>

      {groups.map((group) => {
        const inGroup = shown.filter((p) => p.group === group.id);
        if (inGroup.length === 0) return null;
        return (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className={sectionClass}>
            <div className="wrap">
              <SectionHead eyebrow={group.label} id={`${group.id}-title`} title={group.title}>
                {group.intro}
              </SectionHead>
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {inGroup.map((project) => (
                  <li key={project.slug}>
                    <ProjectCard project={project} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {shown.length === 0 && (
        <section className={sectionClass}>
          <div className="wrap">
            <p className="type-body text-ink-muted">No project matches both filters. Clear a filter to see more.</p>
          </div>
        </section>
      )}
    </>
  );
}
