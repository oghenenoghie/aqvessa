import type { Metadata } from "next";
import { OrganizationJsonLd } from "@/components/organization-json-ld";
import { BusinessCards } from "@/components/sections/business-cards";
import { Contact } from "@/components/sections/contact";
import { Engineering } from "@/components/sections/engineering";
import { Hero } from "@/components/sections/hero";
import { ProductsBand } from "@/components/sections/products-band";
import { StatStrip } from "@/components/sections/stat-strip";
import { SITE } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = `${SITE.name}: technology and software engineering`;
  return {
    title: { absolute: title },
    description: SITE.description,
    alternates: { canonical: "/" },
    openGraph: { title, description: SITE.description, url: SITE.url, siteName: SITE.name, type: "website", locale: "en_NG" },
    twitter: { card: "summary", title, description: SITE.description },
  };
}

export default function HomePage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <OrganizationJsonLd />
      <Hero />
      <StatStrip />
      <BusinessCards />
      <ProductsBand />
      <Engineering />
      <Contact />
    </main>
  );
}
