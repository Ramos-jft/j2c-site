import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { LinkEmailComFallback } from "@/components/contato/LinkEmailComFallback";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Contato da J2C Engenharia e Geotecnia: WhatsApp, e-mail e Instagram. Campinas/SP, atendimento nacional e plantão 24h para emergências (até 300 km).",
};

export default function ContactPage() {
  const wa = buildWhatsAppLink(
    siteConfig.contacts.whatsapp,
    "Olá! Gostaria de solicitar um orçamento.",
  );

  return (
    <main id="conteudo" className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Contato</h1>

      <div className="mt-6 rounded-2xl border border-black/10 bg-white p-6">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">
            {siteConfig.businessHours}
          </span>
          <span className="mx-2 text-slate-400">•</span>
          <span>{siteConfig.responseSla}</span>
          <span className="mx-2 text-slate-400">•</span>
          <span className="font-semibold text-slate-900">
            {siteConfig.emergencyCoverage}
          </span>
        </p>

        <div className="mt-4 grid gap-3 text-sm">
          <a
            className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/brand/whatsapp-v2.png"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
            <span>WhatsApp: {siteConfig.contacts.whatsapp}</span>
          </a>

          <LinkEmailComFallback
            assunto={`Orçamento - ${siteConfig.name}`}
            className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
            ariaLabel="Enviar e-mail"
            title="E-mail"
          >
            <Image
              src="/brand/email.png"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
            <span>E-mail: {siteConfig.contacts.email}</span>
          </LinkEmailComFallback>

          <a
            className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
            href={siteConfig.contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/brand/instagram.png"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
            <span>Instagram: {siteConfig.contacts.instagramHandle}</span>
          </a>
        </div>

        <div className="mt-6 rounded-xl border border-black/10 bg-[var(--j2c-cor-superficie)] p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Região de atuação</p>
          <p className="mt-2">
            {siteConfig.location} • {siteConfig.coverage}
          </p>
          <p className="mt-1 text-slate-500">{siteConfig.emergencyCoverage}</p>
        </div>

        <p className="mt-6 text-sm text-slate-600">
          Para agilizar: envie cidade/UF, tipo de serviço, prazo desejado e uma
          descrição objetiva do problema/objetivo (com fotos, plantas ou PDFs se
          houver).
        </p>
      </div>
    </main>
  );
}
