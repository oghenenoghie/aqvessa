import { COMPANY_DETAILS } from "@/content/company";
import { CONTACT, SITE, SOCIAL } from "@/lib/site";

/**
 * schema.org Organization data for search engines. Only registered facts: name, legal name,
 * country, site and logo, the enquiry email, the RC number and registered office once supplied, and
 * the public profiles. The WhatsApp numbers are left out: a telephone
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
    address: {
      "@type": "PostalAddress",
      ...(COMPANY_DETAILS.registeredOffice ? { streetAddress: COMPANY_DETAILS.registeredOffice } : {}),
      addressCountry: "NG",
    },
    email: CONTACT.email,
    ...(COMPANY_DETAILS.rcNumber
      ? { identifier: { "@type": "PropertyValue", propertyID: "CAC registration number", value: COMPANY_DETAILS.rcNumber } }
      : {}),
    ...(SOCIAL.length > 0 ? { sameAs: SOCIAL.map((s) => s.href) } : {}),
  };
  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
