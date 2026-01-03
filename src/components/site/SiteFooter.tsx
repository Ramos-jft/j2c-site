import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/20 bg-[var(--j2c-graphite)]">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-white">{siteConfig.legalName}</p>
          <p className="mt-2 text-sm text-white/70">
            CNPJ: {siteConfig.cnpj}
            <br />
            {siteConfig.location} • {siteConfig.coverage}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contato</p>
          <p className="mt-2 text-sm text-white/70">
            WhatsApp: {siteConfig.contacts.whatsapp}
            <br />
            E-mail: {siteConfig.contacts.email}
            <br />
            Instagram: {siteConfig.contacts.instagramHandle}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Informações</p>
          <div className="mt-2 flex flex-col gap-2 text-sm">
            <Link className="text-white/70 hover:text-white" href="/servicos">Ver serviços</Link>
            <Link className="text-white/70 hover:text-white" href="/contato">Solicitar orçamento</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-white/60">
          <span>© {new Date().getFullYear()} {siteConfig.legalName}. Todos os direitos reservados.</span>
          <span>CREA-{siteConfig.crea.uf} {siteConfig.crea.number}</span>
        </div>
      </div>
    </footer>
  );
}
