import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/project-card";
import { StatStrip } from "@/components/sections/stat-strip";
import { PROJECTS } from "@/content/projects";

describe("project card", () => {
  it("leaves out screenshot, problem and outcome lines when there are no facts for them", () => {
    const html = renderToStaticMarkup(<ProjectCard project={PROJECTS[0]} />);
    expect(html).not.toContain("<img");
    expect(html).not.toContain("Problem.");
    expect(html).not.toContain("Outcome.");
  });

  it("shows problem, outcome and screenshot when supplied", () => {
    const html = renderToStaticMarkup(
      <ProjectCard
        project={{
          ...PROJECTS[0],
          problem: "A test problem.",
          outcome: "A test outcome.",
          screenshot: { src: "/x.png", alt: "Screenshot of the test", width: 800, height: 500 },
        }}
      />,
    );
    expect(html).toContain("Problem.");
    expect(html).toContain("Outcome.");
    expect(html).toContain("Screenshot of the test");
  });
});

describe("stat strip", () => {
  it("shows the working-deployment and in-development figures, and no empty ones", () => {
    const html = renderToStaticMarkup(<StatStrip />);
    expect(html).toContain("projects with a working deployment");
    expect(html).toContain("products: Plutus, completed");
    expect(html).not.toMatch(/registered share capital|stages every product/);
    expect(html).not.toMatch(/\[\[|null|undefined/);
  });
});
