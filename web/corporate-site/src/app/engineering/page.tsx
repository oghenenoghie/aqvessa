import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { PRINCIPLES, STACK, STACK_NOTE } from "@/content/engineering";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.engineering;

export const metadata: Metadata = pageMetadata(page, "/engineering");

export default function EngineeringPage() {
  return (
    <>
      <PageIntro page={page} />

      <Section id="principles" label="Principles" title="Eight principles for every system">
        <ol className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2">
          {PRINCIPLES.map((principle, index) => (
            <li key={principle.title} className="bg-surface p-6">
              <p className="type-mono-sm text-ink-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 type-body-lg font-medium text-ink">{principle.title}</h3>
              <p className="mt-2 type-body-sm text-ink-muted">{principle.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="stack" label="Stack" title="Default technology stack" intro={<p>{STACK_NOTE}</p>}>
        <div className="overflow-x-auto rounded-md border border-hairline bg-surface">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Default technology for each layer</caption>
            <thead className="bg-surface-sunk">
              <tr>
                <th scope="col" className="w-1/3 px-6 py-3 type-label text-ink-muted">
                  Layer
                </th>
                <th scope="col" className="px-6 py-3 type-label text-ink-muted">
                  Default tools
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {STACK.map((row) => (
                <tr key={row.layer}>
                  <th scope="row" className="px-6 py-4 align-top type-body-sm font-medium text-ink">
                    {row.layer}
                  </th>
                  <td className="px-6 py-4 align-top type-body-sm text-ink-muted">{row.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
