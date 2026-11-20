import { Fragment } from "react";
import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { TAGLINE } from "@/content/company";
import { PRODUCTS } from "@/content/products";
import { WORKING_PROJECTS } from "@/content/projects";
import { LINKS } from "@/lib/site";

const CAPABILITIES = [
  { number: "01", title: "Software engineering", detail: "Enterprise applications, SaaS products and business platforms" },
  { number: "02", title: "Technology solutions", detail: "Cloud infrastructure, data systems and cybersecurity" },
  { number: "03", title: "Digital services", detail: "Web experiences, digital strategy and business growth" },
];

const PROOF_POINTS = [
  { value: String(WORKING_PROJECTS.length).padStart(2, "0"), label: "projects with a working deployment" },
  { value: String(PRODUCTS.length).padStart(2, "0"), label: "products in development" },
];

/**
 * The homepage introduction. A light, editorial layout puts the company proposition first,
 * then gives visitors a clear route into its capabilities and current work.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-hairline bg-ground text-ink">
      <div className="wrap grid items-center gap-12 py-16 sm:py-20 lg:min-h-[620px] lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,.92fr)] lg:gap-16 lg:py-24">
        <div className="grid content-center gap-7">
          <p className="eyebrow rise">Technology · Software engineering · Digital innovation</p>

          <div className="grid gap-6">
            <h1 id="hero-title" className="rise max-w-[760px] font-display type-heading-lg sm:type-display-lg lg:type-display-xl [animation-delay:40ms]">
              {TAGLINE.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                  {i < TAGLINE.length - 1 ? " " : null}
                </Fragment>
              ))}
            </h1>
            <p className="rise max-w-[570px] type-body-lg text-ink-muted [animation-delay:80ms]">
              We design and build software products and digital solutions that help businesses work smarter, operate confidently and grow.
            </p>
          </div>

          <div className="rise flex flex-wrap items-center gap-3 [animation-delay:120ms]">
            <ButtonLink href={LINKS.contact}>
              Start a conversation <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/business" variant="line">
              Explore our business areas
            </ButtonLink>
          </div>

          <dl className="rise mt-3 grid max-w-[520px] grid-cols-2 border-t border-hairline pt-6 [animation-delay:160ms]">
            {PROOF_POINTS.map((point, index) => (
              <div key={point.label} className={index === 1 ? "grid gap-1 border-l border-hairline pl-5 sm:pl-7" : "grid gap-1 pr-5 sm:pr-7"}>
                <dd className="order-1 m-0 font-display text-3xl font-semibold tracking-tight tabular-nums text-ink sm:text-4xl">
                  {point.value}
                </dd>
                <dt className="order-2 max-w-[150px] type-body-sm text-ink-muted">{point.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise grid gap-0 border-y border-hairline bg-surface [animation-delay:100ms]">
          <div className="flex items-center justify-between gap-4 border-b border-hairline px-5 py-4 sm:px-7">
            <div className="grid gap-1">
              <span className="type-label text-brand-text">The Aqvessa ecosystem</span>
              <span className="type-body-sm text-ink-muted">Technology shaped around business needs</span>
            </div>
            <span className="type-mono-sm text-ink-muted">01 — 03</span>
          </div>

          <ol className="grid">
            {CAPABILITIES.map((item, index) => (
              <li key={item.number} className="grid grid-cols-[44px_minmax(0,1fr)_20px] items-center gap-4 border-b border-hairline px-5 py-6 last:border-b-0 sm:px-7 sm:py-7">
                <span className="type-mono-sm text-brand-text">{item.number}</span>
                <div className="grid gap-1">
                  <h2 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">{item.title}</h2>
                  <p className="type-body-sm max-w-[36ch] text-ink-muted">{item.detail}</p>
                </div>
                <span aria-hidden="true" className="type-body-lg text-ink-muted">↗</span>
              </li>
            ))}
          </ol>

          <div className="grid gap-2 border-t border-hairline bg-surface-sunk px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:px-7">
            <div className="grid gap-1">
              <span className="type-label text-ink-muted">Our approach</span>
              <p className="type-body font-medium text-ink">Practical engineering. Measurable outcomes.</p>
            </div>
            <a href="/engineering" className="link type-body-sm font-medium sm:justify-self-end">
              How we build
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="wrap flex flex-wrap items-center justify-between gap-3 py-4 type-body-sm text-ink-muted">
          <p>AQvessa Limited <span aria-hidden="true" className="mx-2 text-hairline">/</span> Incorporated in Nigeria under CAMA 2020</p>
          <a href="/about" className="inline-flex items-center gap-2 font-medium text-ink no-underline hover:text-brand-text">
            Company information <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
