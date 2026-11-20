import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { TAGLINE } from "@/content/company";
import { PRODUCTS } from "@/content/products";
import { WORKING_PROJECTS } from "@/content/projects";
import { LINKS } from "@/lib/site";

const CAPABILITIES = [
  { number: "01", title: "Digital products", detail: "Software platforms built around real operational needs." },
  { number: "02", title: "Business systems", detail: "Connected tools that make organisations work better." },
  { number: "03", title: "Technology engineering", detail: "Cloud, data and dependable digital infrastructure." },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden border-b border-hairline bg-ground">
      <div aria-hidden="true" className="frontier-grid pointer-events-none absolute inset-0 -z-20" />
      <div aria-hidden="true" className="frontier-glow pointer-events-none absolute -right-48 top-0 -z-10 size-[760px]" />
      <div className="wrap grid min-h-[700px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:py-20">
        <div className="relative z-10 grid content-center gap-8">
          <div className="rise flex items-center gap-3">
            <span className="size-2 rounded-full bg-brand shadow-[0_0_18px_var(--brand)]" />
            <p className="type-label text-brand-text">Independent digital innovation company</p>
          </div>
          <div className="grid gap-6">
            <h1 id="hero-title" className="rise max-w-[850px] font-display type-display-xl [animation-delay:90ms]">
              Ideas into systems.<br />
              <span className="text-brand">Vision into reality.</span>
            </h1>
            <p className="rise max-w-[590px] type-body-lg text-ink-muted [animation-delay:180ms]">
              We design, engineer and build digital products, intelligent business systems and technology experiences for a changing world.
            </p>
          </div>
          <div className="rise flex flex-wrap items-center gap-3 [animation-delay:260ms]">
            <ButtonLink href={LINKS.contact}>Start a project <ArrowIcon /></ButtonLink>
            <ButtonLink href="/projects" variant="line">Explore our work <ArrowIcon /></ButtonLink>
          </div>
          <div className="rise grid max-w-[540px] grid-cols-2 border-t border-hairline pt-6 [animation-delay:340ms]">
            <div className="grid gap-1 pr-6">
              <span className="type-display-lg tabular-nums">{String(WORKING_PROJECTS.length).padStart(2, "0")}</span>
              <span className="type-body-sm text-ink-muted">projects with a working deployment</span>
            </div>
            <div className="grid gap-1 border-l border-hairline pl-6">
              <span className="type-display-lg tabular-nums">{String(PRODUCTS.length).padStart(2, "0")}</span>
              <span className="type-body-sm text-ink-muted">products in development</span>
            </div>
          </div>
          <span className="type-mono-sm text-ink-muted">{TAGLINE.join(" / ")}</span>
        </div>

        <div className="relative mx-auto grid w-full max-w-[620px] place-items-center py-8 lg:py-0">
          <div aria-hidden="true" className="frontier-glow absolute inset-0 scale-125" />
          <div className="relative grid w-full place-items-center">
            <div className="frontier-orbit-two" />
            <div className="frontier-orbit" />
            <div className="frontier-orb">
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid place-items-center gap-2 text-center">
                  <span className="type-label text-[10px] tracking-[.12em] text-[#10150b]/70">AQVESSA LIMITED</span>
                  <span className="font-display text-5xl font-bold tracking-[-.08em] text-[#10150b] sm:text-7xl">A<span className="text-[#314b1c]">.</span></span>
                </div>
              </div>
            </div>
            <div className="frontier-panel absolute -left-1 top-[18%] hidden max-w-[190px] gap-2 rounded-lg p-4 sm:grid">
              <span className="type-mono-sm text-brand-text">SYSTEM / 001</span>
              <span className="type-body-sm font-medium text-ink">Design with intent. Build with precision.</span>
            </div>
            <div className="frontier-panel absolute -right-1 bottom-[13%] hidden max-w-[190px] gap-2 rounded-lg p-4 sm:grid">
              <span className="type-mono-sm text-brand-text">STATUS / ACTIVE</span>
              <span className="type-body-sm font-medium text-ink">From first idea to deployed product.</span>
            </div>
          </div>
          <div className="mt-8 grid w-full max-w-[460px] gap-0 border-y border-hairline sm:mt-2">
            {CAPABILITIES.map((item) => (
              <div key={item.number} className="grid grid-cols-[44px_1fr] gap-3 border-b border-hairline py-4 last:border-b-0">
                <span className="type-mono-sm text-brand-text">{item.number}</span>
                <div className="grid gap-1">
                  <h2 className="type-body font-semibold">{item.title}</h2>
                  <p className="type-body-sm text-ink-muted">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-hairline bg-surface/60">
        <div className="wrap flex flex-wrap items-center justify-between gap-3 py-4 type-body-sm text-ink-muted">
          <span>AQvessa Limited <span aria-hidden="true" className="mx-2 text-hairline">/</span> Technology for what comes next</span>
          <a href="/about" className="inline-flex items-center gap-2 font-medium text-ink no-underline hover:text-brand-text">Discover AQVESSA LIMITED <ArrowIcon /></a>
        </div>
      </div>
    </section>
  );
}
