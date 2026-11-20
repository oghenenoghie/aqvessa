import type { Metadata } from "next";
import { OrganizationJsonLd } from "@/components/organization-json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BusinessCards } from "@/components/sections/business-cards";
import { Contact } from "@/components/sections/contact";
import { Engineering } from "@/components/sections/engineering";
import { Hero } from "@/components/sections/hero";
import { ProductsBand } from "@/components/sections/products-band";
import { ProjectsBand } from "@/components/sections/projects-band";
import { StatStrip } from "@/components/sections/stat-strip";
import { SITE } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = `${SITE.name}: technology and software engineering`;
  return {
    title: { absolute: title },
    description: SITE.description,
    alternates: { canonical: "/" },
    openGraph: { title, description: SITE.description, url: SITE.url, siteName: SITE.name, type: "website", locale: "en_NG" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function HomePage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <OrganizationJsonLd />
      <Hero />
      <ScrollReveal delay={40}><StatStrip /></ScrollReveal>
      <ScrollReveal delay={70}><BusinessCards /></ScrollReveal>
      <ScrollReveal delay={90}><ProductsBand /></ScrollReveal>
      <ScrollReveal delay={90}><ProjectsBand /></ScrollReveal>
      <ScrollReveal delay={70}><Engineering /></ScrollReveal>
      <ScrollReveal delay={40}><Contact /></ScrollReveal>
    </main>
  );
}
