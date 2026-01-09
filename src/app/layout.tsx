import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { siteConfig } from "@/content/site";

const description =
  "Engenharia e geotecnia em Campinas/SP, com atendimento nacional e plantão 24h para emergências (até 300 km). Taludes, contenções, drenagem, barragens, inspeções prediais, laudos e investigações geotécnicas — com documentação objetiva e responsabilidade técnica.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.siteUrl,
    title: siteConfig.name,
    description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
