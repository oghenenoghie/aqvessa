import { SectionHead, sectionClass } from "@/components/section-head";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { PRINCIPLES } from "@/content/engineering";

/** The engineering principles: the heading on the left, one accordion panel per principle on the right. */
export function Engineering() {
  return (
    <section id="principles" aria-labelledby="principles-title" className={sectionClass}>
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionHead eyebrow="How we build" id="principles-title" title="Engineering principles a client can check.">
            Maintainability, security, scalability, performance and reliability come first.
          </SectionHead>
        </div>
        <Accordion label="Engineering principles" className="lg:col-span-6 lg:col-start-7">
          {PRINCIPLES.map((p, i) => (
            <AccordionItem key={p.tag} group="principles" eyebrow={p.tag} title={p.title} defaultOpen={i === 0}>
              {p.text}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
