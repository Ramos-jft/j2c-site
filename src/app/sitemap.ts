import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.siteUrl, lastModified: now },
    { url: `${siteConfig.siteUrl}/quem-somos`, lastModified: now },
    { url: `${siteConfig.siteUrl}/servicos`, lastModified: now },
    { url: `${siteConfig.siteUrl}/contato`, lastModified: now },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteConfig.siteUrl}/servicos/${s.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
