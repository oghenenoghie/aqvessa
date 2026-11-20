import { SectionHead, sectionClass } from "@/components/section-head";
import { PRINCIPLES } from "@/content/engineering";

export function Engineering() {
  return (
    <section id="principles" aria-labelledby="principles-title" className={sectionClass}>
      <div className="wrap">
        <SectionHead eyebrow="How we build" id="principles-title" title="Engineering principles clients can evaluate.">
          We prioritise maintainability, security, scalability, performance and reliability throughout the software lifecycle.
        </SectionHead>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <article key={p.tag} className="frontier-card group relative grid min-h-[230px] content-between gap-8 overflow-hidden rounded-xl border border-hairline bg-surface p-5 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_55px_rgb(0_0_0_/_0.24)] sm:p-6">
              <div aria-hidden="true" className="frontier-card-grid absolute inset-0" />
              <div className="relative flex items-center justify-between">
                <span className="type-mono-sm text-brand-text">{p.tag}</span>
                <span className="type-mono-sm text-ink-muted">0{i + 1}</span>
              </div>
              <div className="relative grid gap-3">
                <h3 className="type-heading-md">{p.title}</h3>
                <p className="type-body-sm text-ink-muted">{p.text}</p>
                <span aria-hidden="true" className="mt-2 h-px w-8 bg-brand transition-[width] duration-300 group-hover:w-16" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
