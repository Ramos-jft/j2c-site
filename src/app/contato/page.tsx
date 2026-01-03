import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato",
  description: "Contato da J2C Engenharia & Geotecnia: WhatsApp, e-mail e Instagram.",
};

export default function ContactPage() {
  const wa = buildWhatsAppLink(
    siteConfig.contacts.whatsapp,
    "Olá! Quero solicitar um orçamento. Minha cidade/UF é: _____. Serviço: _____."
  );

  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Contato</h1>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-white/70">
            {siteConfig.businessHours} • {siteConfig.responseSla}
          </p>

          <div className="mt-4 grid gap-3 text-sm">
            <a className="text-white/80 hover:text-white" href={wa}>
              WhatsApp: {siteConfig.contacts.whatsapp}
            </a>
            <a className="text-white/80 hover:text-white" href={`mailto:${siteConfig.contacts.email}`}>
              E-mail: {siteConfig.contacts.email}
            </a>
            <a className="text-white/80 hover:text-white" href={siteConfig.contacts.instagramUrl} target="_blank" rel="noreferrer">
              Instagram: {siteConfig.contacts.instagramHandle}
            </a>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Para agilizar: envie cidade/UF, serviço desejado, descrição do objetivo/problema e fotos/plantas (se houver).
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
