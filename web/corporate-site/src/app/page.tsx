import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { FactList } from "@/components/fact-list";
import { RingPattern } from "@/components/ring-pattern";
import { Section } from "@/components/section";
import { StageMeter } from "@/components/stage-meter";
import { ButtonLink } from "@/components/ui/button";
import { BUSINESS_AREAS } from "@/content/business";
import { CORPORATE_FACTS, FACTS_SOURCE, TAGLINE } from "@/content/company";
import { PRINCIPLES } from "@/content/engineering";
import { ENQUIRY_TYPES } from "@/content/enquiries";
import { PRODUCTS } from "@/content/products";
import { formatDate } from "@/lib/dates";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const [plutus] = PRODUCTS;
  return (
    <>
      <Hero />

      <Section
        id="business-areas"
        label="What we do"
        title="Five business areas, with software engineering at the centre"
        intro={
          <p>
            Each area is part of our registered objects. Products we are building are listed with their stage on the{" "}
            <Link href="/products" className="link">
              products page
            </Link>
            .
          </p>
        }
      >
        <ol className="border-t border-hairline">
          {BUSINESS_AREAS.map((area) => (
            <li key={area.slug} className="border-b border-hairline">
              <Link
                href={`/business#${area.slug}`}
                className="motion-colors group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-6 hover:bg-surface sm:grid-cols-[4rem_1fr_auto] sm:px-4"
              >
                <span className="type-mono text-ink-muted">{area.number}</span>
                <span>
                  <span className="block type-body-lg font-medium text-ink">{area.name}</span>
                  <span className="mt-1 block type-body-sm text-ink-muted">{area.summary}</span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="motion-colors size-4 self-center text-ink-muted group-hover:text-brand-text"
                />
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="products"
        label="Products"
        title="We say what stage each product is at"
        intro={
          <p>
            Every product moves through five stages, from proposed to production-ready. We never describe a product as
            further along than its own repositories and documentation show.
          </p>
        }
      >
        <article className="rounded-md border border-hairline bg-surface">
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-5 lg:gap-8">
            <div className="lg:col-span-3">
              <h3 className="type-heading-md text-ink">{plutus.name}</h3>
              <p className="mt-3 type-body text-ink-muted">{plutus.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {plutus.areas.slice(0, 4).map((area) => (
                  <li key={area} className="rounded-sm border border-hairline px-2 py-1 type-body-sm text-ink">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-6 lg:col-span-2">
              <StageMeter stage={plutus.stage} />
              <p className="type-caption text-ink-muted">Checked {formatDate(plutus.asOf)}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 border-t border-hairline px-6 sm:px-8">
            <ButtonLink href="/products" variant="text">
              Read about {plutus.name}
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
            {plutus.url && (
              <ButtonLink href={plutus.url} variant="text" rel="noopener" target="_blank">
                {plutus.urlLabel}
                <ArrowUpRight aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </ButtonLink>
            )}
          </div>
        </article>
      </Section>

      <Section
        id="engineering"
        label="Engineering"
        title="How we build"
        intro={
          <p>
            Maintainability, security, scalability, performance and reliability come first.{" "}
            <Link href="/engineering" className="link">
              Read all eight principles
            </Link>
            .
          </p>
        }
      >
        <ul className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2">
          {PRINCIPLES.slice(0, 4).map((principle, index) => (
            <li key={principle.title} className="bg-surface p-6">
              <p className="type-mono-sm text-ink-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 type-body-lg font-medium text-ink">{principle.title}</h3>
              <p className="mt-2 type-body-sm text-ink-muted">{principle.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <EnquiryBand />
    </>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <Container className="pt-12 pb-12 lg:pt-16 lg:pb-16">
        <p className="type-label text-brand-text">Technology and software</p>
        <h1 id="hero-heading" className="mt-6 type-heading-lg text-ink sm:type-display-lg lg:type-display-xl">
          {TAGLINE.map((line, index) => (
            <span key={line} className={index === TAGLINE.length - 1 ? "block text-ink-muted" : "block"}>
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="max-w-xl type-body-lg text-ink">
              Aqvessa is a Nigerian technology company. We build software products and digital solutions for businesses
              in Nigeria and international markets.
            </p>
            <p className="mt-4 max-w-xl type-body text-ink-muted">
              Our work covers software engineering, technology solutions, digital services, commerce, and research and
              intellectual property.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">
                Make an enquiry
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/business" variant="secondary">
                What we do
              </ButtonLink>
            </div>
          </div>

          <aside aria-labelledby="record-heading" className="lg:col-span-5 lg:col-start-8">
            <div className="flex overflow-hidden rounded-md border border-hairline bg-surface">
              <RingPattern id="record" className="hidden w-16 shrink-0 border-r border-hairline bg-ground sm:block" />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-4 border-b border-hairline bg-surface-sunk px-6 py-3">
                  <h2 id="record-heading" className="type-label text-ink-muted">
                    Company record
                  </h2>
                  <p className="type-mono-sm text-ink-muted">CAMA 2020</p>
                </div>
                <FactList facts={CORPORATE_FACTS} className="px-6" />
                <p className="border-t border-hairline px-6 py-3 type-caption text-ink-muted">{FACTS_SOURCE}</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function EnquiryBand() {
  return (
    <section aria-labelledby="enquiries-heading" className="border-t border-hairline">
      <Container className="py-12 lg:py-16">
        <div className="rounded-lg border border-hairline bg-surface">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-6">
              <p className="type-label text-ink-muted">Enquiries</p>
              <h2 id="enquiries-heading" className="mt-3 text-balance type-heading-lg text-ink">
                Work with Aqvessa
              </h2>
              <p className="mt-4 max-w-prose type-body text-ink-muted">
                Tell us what you need, where you are and when you need it. Enquiries go to the business area they
                concern.
              </p>
              <ButtonLink href="/contact" className="mt-8">
                Make an enquiry
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
            </div>
            <ul className="grid content-start gap-3 lg:col-span-5 lg:col-start-8">
              {ENQUIRY_TYPES.slice(0, 5).map((type) => (
                <li key={type} className="flex items-baseline gap-3 type-body-sm text-ink">
                  <span aria-hidden="true" className="h-px w-4 shrink-0 -translate-y-1 bg-ink-muted" />
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
