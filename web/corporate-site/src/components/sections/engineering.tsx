import { SectionHead, sectionClass } from "@/components/section-head";
import { PRINCIPLES } from "@/content/engineering";

export function Engineering() {
  return (
    <section id="principles" aria-labelledby="principles-title" className={sectionClass}>
      <div className="wrap">
        <SectionHead eyebrow="How we build" id="principles-title" title="Engineering principles a client can check.">
          Maintainability, security, scalability, performance and reliability come first.
        </SectionHead>
        <div className="grid border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <article
              key={p.tag}
              className={[
                "grid content-start gap-2 border-b border-hairline pt-6 pr-6 pb-8",
                i % 2 === 1 ? "sm:max-lg:border-l sm:max-lg:pl-6" : "",
                i % 4 !== 0 ? "lg:border-l lg:pl-6" : "",
              ].join(" ")}
            >
              <span className="type-mono-sm text-brand-text">{p.tag}</span>
              <h3 className="type-body-lg font-medium text-ink">{p.title}</h3>
              <p className="type-body-sm text-ink-muted">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
