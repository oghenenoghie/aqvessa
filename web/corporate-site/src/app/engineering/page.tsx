import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SectionHead, sectionClass } from "@/components/section-head";
import { Engineering } from "@/components/sections/engineering";
import { STACK, STACK_NOTE } from "@/content/engineering";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.engineering;

export const metadata: Metadata = pageMetadata(page, "/engineering");

export default function EngineeringPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>

      <Engineering />

      <section aria-labelledby="stack-title" className={sectionClass}>
        <div className="wrap">
          <SectionHead eyebrow="Stack" id="stack-title" title="Default technology stack.">
            {STACK_NOTE}
          </SectionHead>
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
                    <th scope="row" className="px-6 py-4 align-top type-body-sm font-medium">
                      {row.layer}
                    </th>
                    <td className="px-6 py-4 align-top type-body-sm text-ink-muted">{row.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
