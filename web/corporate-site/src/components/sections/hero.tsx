import { Fragment } from "react";
import { FactList } from "@/components/fact-list";
import { Icon } from "@/components/icons";
import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { CORPORATE_FACTS, FACTS_SOURCE, TAGLINE } from "@/content/company";
import { LINKS } from "@/lib/site";

const PROOF_POINTS = [
  { value: "20", label: "projects with a working deployment" },
  { value: "02", label: "products in development" },
];

const CAPABILITIES = [
  { number: "01", title: "Software engineering", detail: "Enterprise software, SaaS products and platforms" },
  { number: "02", title: "Technology solutions", detail: "Cloud infrastructure, data and cybersecurity" },
  { number: "03", title: "Digital services", detail: "Web experiences, branding and digital growth" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="deep relative isolate overflow-hidden bg-deep text-deep-ink">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-48 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(240,122,48,.18),transparent_68%)]" />
        <div className="absolute -bottom-72 left-[28%] size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(240,122,48,.09),transparent_68%)]" />
        <div className="absolute inset-0 opacity-[.14] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <div className="wrap grid items-center gap-12 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:min-h-[620px] lg:grid-cols-[minmax(0,1.02fr)_minmax(0,.98fr)] lg:gap-16 lg:py-24">
        <div className="grid gap-7">
          <div className="rise flex w-fit items-center gap-2 rounded-full border border-deep-line bg-deep-surface/80 px-3 py-2 [animation-delay:30ms]">
            <span className="size-2 rounded-full bg-deep-brand shadow-[0_0_14px_rgba(240,122,48,.8)]" />
            <span className="type-label !text-[10px] !tracking-[.16em] text-deep-muted">Technology · Software · Digital innovation</span>
          </div>

          <div className="grid gap-5">
            <h1 id="hero-title" className="rise max-w-[780px] font-display text-[clamp(3.25rem,7vw,5.7rem)] font-semibold leading-[.98] tracking-[-.065em] text-deep-ink [animation-delay:60ms]">
              {TAGLINE.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  <span className={i === TAGLINE.length - 1 ? "text-deep-brand" : ""}>{line}</span>
                  {i < TAGLINE.length - 1 && " "}
                </Fragment>
              ))}
            </h1>
            <p className="rise max-w-[570px] text-[17px] leading-8 text-deep-muted [animation-delay:120ms] sm:text-lg">
              We design and build software products and digital solutions that help businesses work smarter, operate confidently and grow.
            </p>
          </div>

          <div className="rise flex flex-wrap items-center gap-3 [animation-delay:180ms]">
            <ButtonLink href={LINKS.contact} variant="deep-primary" className="!rounded-full !px-6">
              Start a conversation <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/business" variant="line-deep" className="!rounded-full !px-6">
              Explore what we do
            </ButtonLink>
          </div>

          <div className="rise mt-3 grid max-w-[520px] grid-cols-2 gap-6 border-t border-deep-line pt-6 [animation-delay:240ms]">
            {PROOF_POINTS.map((point) => (
              <div key={point.label} className="flex items-center gap-3">
                <span className="font-display text-3xl font-semibold tracking-tight text-deep-ink sm:text-4xl">{point.value}</span>
                <span className="max-w-[130px] text-xs leading-5 text-deep-muted">{point.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-[590px] [animation-delay:140ms]">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-deep-line/80" />
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 aspect-square w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-deep-line" />

          <div className="relative rounded-[1.75rem] border border-white/10 bg-[#1b2027]/90 p-4 shadow-[0_30px_100px_rgba(0,0,0,.35)] backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#f07a30]" />
                <span className="type-label !text-[10px] !tracking-[.16em] text-deep-muted">The Aqvessa ecosystem</span>
              </div>
              <span className="type-mono-sm text-white/40">01 — 03</span>
            </div>

            <div className="grid gap-3 py-5">
              {CAPABILITIES.map((item, index) => (
                <div key={item.number} className="group grid grid-cols-[42px_minmax(0,1fr)_20px] items-center gap-3 rounded-2xl border border-white/[.07] bg-white/[.035] p-4 transition-colors hover:border-deep-brand/50 hover:bg-white/[.06] sm:p-5">
                  <span className="grid size-10 place-items-center rounded-xl bg-deep-brand/10 font-mono text-xs text-deep-brand">{item.number}</span>
                  <div className="grid gap-1">
                    <h2 className="font-display text-base font-semibold text-deep-ink sm:text-lg">{item.title}</h2>
                    <p className="text-xs leading-5 text-deep-muted sm:text-sm">{item.detail}</p>
                  </div>
                  <span className="text-lg text-white/25 transition-all group-hover:translate-x-1 group-hover:text-deep-brand">↗</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl bg-[#111419] p-4 sm:p-5">
              <div className="grid gap-1">
                <span className="type-label !text-[10px] !tracking-[.15em] text-deep-muted">Our approach</span>
                <p className="text-sm font-medium text-deep-ink">Built around real business needs.</p>
              </div>
              <div className="grid size-11 place-items-center rounded-full border border-deep-brand/30 bg-deep-brand/10 text-deep-brand">
                <Icon name="check" className="size-5" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-[#242a32] px-4 py-3 shadow-2xl sm:block lg:-left-8">
            <p className="type-label !text-[9px] !tracking-[.14em] text-deep-muted">Product focus</p>
            <p className="mt-1 text-sm font-semibold text-deep-ink">Plutus <span className="mx-1 text-white/25">·</span> Intelligent CBT</p>
          </div>
          <div className="absolute -right-2 -top-5 hidden rounded-xl border border-white/10 bg-[#242a32] px-4 py-3 shadow-2xl sm:block lg:-right-5">
            <span className="block type-label !text-[9px] !tracking-[.14em] text-deep-muted">Engineering first</span>
            <span className="mt-1 block text-xs font-medium text-deep-brand">Purposeful technology</span>
          </div>
        </div>
      </div>

      <div className="wrap border-t border-deep-line/80 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-deep-muted">
          <p>AQvessa Limited <span className="mx-2 text-white/20">/</span> Incorporated in Nigeria under CAMA 2020</p>
          <a href="/about" className="inline-flex items-center gap-2 transition-colors hover:text-deep-ink">
            Company information <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
