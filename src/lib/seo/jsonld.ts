import { siteConfig } from "@/content/site";
import type { Service } from "@/content/services";
import type { FaqItem } from "@/content/faq";

export function organizationJsonLd() {
  const sameAs = [
    siteConfig.contacts.instagramUrl,
    siteConfig.contacts.linkedinUrl,
    siteConfig.contacts.googleBusinessUrl,
  ].filter(Boolean);

  const addr = siteConfig.address;

  const address = addr
    ? {
        "@type": "PostalAddress",
        addressLocality: addr.city,
        addressRegion: addr.state,
        addressCountry: addr.country,
        // streetAddress é opcional (e você não quer expor)
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.tradeName ?? siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/brand/j2c-logo.png`,
    image: `${siteConfig.siteUrl}/brand/j2c-logo.png`,
    telephone: siteConfig.contacts.whatsapp,
    email: siteConfig.contacts.email,
    areaServed: "BR",
    ...(address ? { address } : {}),
    sameAs,

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contacts.whatsapp,
        email: siteConfig.contacts.email,
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contacts.whatsapp,
        contactType: "emergency",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
        description: siteConfig.emergencyCoverage,
      },
    ],
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.tradeName ?? siteConfig.name,
      url: siteConfig.siteUrl,
    },
    areaServed: "BR",
    serviceType: service.keywords?.[0] ?? service.title,
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
