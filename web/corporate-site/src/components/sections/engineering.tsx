import { SectionHead, sectionClass } from "@/components/section-head";
import { PRINCIPLES } from "@/content/engineering";

export function Engineering() {
  return (
    <section id="principles" aria-labelledby="principles-title" className={sectionClass}>
      <div className="wrap">
        <SectionHead eyebrow="How we build" id="principles-title" title="Engineering principles clients can evaluate.">
          We prioritise maintainability, security, scalability, performance and reliability throughout the software lifecycle.
        </SectionHead>
        <div className="grid border-y border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <article
              key={p.tag}
              className={[
                "frontier-tile group relative grid content-start gap-3 rounded-md border border-hairline p-5 transition-colors duration-200 hover:border-brand",
                i % 2 === 1 ? "sm:max-lg:border-l sm:max-lg:pl-6" : "",
                i % 4 !== 0 ? "lg:border-l lg:pl-6" : "",
                "lg:border-b-0",
              ].join(" ")}
            >
              <span className="type-mono-sm text-brand-text">{p.tag}</span>
              <h3 className="type-heading-md">{p.title}</h3>
              <p className="type-body-sm text-ink-muted">{p.text}</p>
              <span aria-hidden="true" className="mt-2 h-px w-8 bg-brand transition-[width] duration-200 group-hover:w-14" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
