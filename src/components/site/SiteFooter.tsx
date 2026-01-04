import Link from "next/link";
import { siteConfig } from "@/content/site";

function SecureConnectionBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 backdrop-blur-sm"
      title="Conexão segura (HTTPS)"
      aria-label="Conexão segura (HTTPS)"
    >
      {/* Cadeado (SVG inline) */}
      <svg
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        className="shrink-0"
        fill="none"
      >
        <path
          d="M7 11V8a5 5 0 0 1 10 0v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 11h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>

      <span className="font-semibold">Conexão segura</span>
      <span className="text-white/50">(HTTPS)</span>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/20 bg-[var(--j2c-graphite)]">
      {/* Cards: agrupados a partir do meio da página */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-white">
              {siteConfig.legalName}
            </p>
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
              <Link className="text-white/70 hover:text-white" href="/servicos">
                Ver serviços
              </Link>
              <Link className="text-white/70 hover:text-white" href="/contato">
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior: copyright | site seguro | CREA (centrado a partir do meio) */}
      <div className="border-t border-black/20">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="mx-auto grid max-w-4xl items-center gap-3 text-xs text-white/60 sm:grid-cols-3">
            <span className="sm:justify-self-start">
              © {year} {siteConfig.legalName}. Todos os direitos reservados.
            </span>

            <div className="sm:justify-self-center">
              <SecureConnectionBadge />
            </div>

            <span className="sm:justify-self-end">
              CREA-{siteConfig.crea.uf} {siteConfig.crea.number}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
