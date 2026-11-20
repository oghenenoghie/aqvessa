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

function CrystalVisual() {
  return (
    <div className="crystal-stage" role="img" aria-label="A floating clear glass crystal sphere with a subtle lime reflection">
      <div className="crystal-halo" aria-hidden="true" />
      <svg
        className="crystal-object"
        viewBox="0 0 560 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="crystal-body" cx="34%" cy="25%" r="76%">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity=".94" />
            <stop offset=".16" stopColor="#EAF4F0" stopOpacity=".55" />
            <stop offset=".42" stopColor="#A8C3C0" stopOpacity=".16" />
            <stop offset=".72" stopColor="#DDE8E5" stopOpacity=".07" />
            <stop offset="1" stopColor="#F5FFF9" stopOpacity=".24" />
          </radialGradient>
          <linearGradient id="crystal-rim" x1="94" y1="102" x2="470" y2="458" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity=".9" />
            <stop offset=".34" stopColor="#DDEBE6" stopOpacity=".12" />
            <stop offset=".68" stopColor="#B7FF62" stopOpacity=".5" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity=".58" />
          </linearGradient>
          <linearGradient id="crystal-reflection" x1="360" y1="126" x2="454" y2="398" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9FFAB" stopOpacity="0" />
            <stop offset=".48" stopColor="#B7FF62" stopOpacity=".28" />
            <stop offset="1" stopColor="#B7FF62" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="crystal-highlight" x1="140" y1="115" x2="300" y2="330" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity=".88" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="crystal-blur" x="0" y="0" width="560" height="560" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <clipPath id="crystal-clip">
            <circle cx="280" cy="280" r="188" />
          </clipPath>
        </defs>
        <ellipse cx="280" cy="488" rx="132" ry="18" fill="#000000" fillOpacity=".34" filter="url(#crystal-blur)" />
        <g className="crystal-shell">
          <circle cx="280" cy="280" r="190" fill="url(#crystal-body)" />
          <circle cx="280" cy="280" r="188.5" stroke="url(#crystal-rim)" strokeWidth="2.5" />
          <g clipPath="url(#crystal-clip)">
            <ellipse cx="195" cy="162" rx="118" ry="70" transform="rotate(-29 195 162)" fill="url(#crystal-highlight)" opacity=".54" />
            <path d="M370 84C437 144 470 229 455 314C444 377 413 430 368 465" stroke="url(#crystal-reflection)" strokeWidth="42" strokeLinecap="round" />
            <path d="M130 270C166 181 235 125 319 105" stroke="white" strokeOpacity=".46" strokeWidth="2" strokeLinecap="round" />
            <path d="M142 343C180 411 250 454 323 457" stroke="white" strokeOpacity=".16" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M111 218C123 178 148 143 181 119" stroke="white" strokeOpacity=".62" strokeWidth="5" strokeLinecap="round" />
            <circle cx="164" cy="137" r="5" fill="white" fillOpacity=".8" />
            <circle cx="177" cy="126" r="2.5" fill="white" fillOpacity=".7" />
          </g>
          <circle cx="280" cy="280" r="190" stroke="white" strokeOpacity=".14" strokeWidth="1" />
        </g>
      </svg>
      <span className="crystal-caption" aria-hidden="true">AQVESSA / DIGITAL SYSTEMS</span>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden border-b border-hairline bg-ground">
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
          <CrystalVisual />
          <div className="mt-2 grid w-full max-w-[460px] gap-0 border-y border-hairline">
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
