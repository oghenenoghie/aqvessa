import { CONTACT, SITE } from "@/lib/site";

/**
 * schema.org Organization data for search engines. Only registered facts: name, legal name,
 * country, site and logo, plus the enquiry email. The WhatsApp numbers are left out: a telephone
 * entry would invite ordinary calls.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: new URL("/brand/aqvessa-lockup-light.png", SITE.url).toString(),
    description: SITE.description,
    address: { "@type": "PostalAddress", addressCountry: "NG" },
    email: CONTACT.email,
  };
  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
