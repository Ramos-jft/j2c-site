import { siteConfig } from "@/content/site";
import type { Service } from "@/content/services";
import type { FaqItem } from "@/content/faq";

export function organizationJsonLd() {
  const sameAs = [
    siteConfig.contacts.instagramUrl,
    siteConfig.contacts.linkedinUrl,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/brand/j2c-logo.webp`,
    sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contacts.whatsapp,
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
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
      "@type": "Organization",
      name: siteConfig.legalName,
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
