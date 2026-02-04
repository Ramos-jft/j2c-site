import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { LinkEmailComFallback } from "@/components/contato/LinkEmailComFallback";

function SecureConnectionBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[var(--j2c-cor-superficie)] px-3 py-2 text-xs text-slate-700"
      title="Conexão segura (HTTPS)"
      aria-label="Conexão segura (HTTPS)"
    >
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
      <span className="text-slate-500">(HTTPS)</span>
    </div>
  );
}

function EmergencyBadge({
  href,
  title,
}: Readonly<{ href: string; title: string }>) {
  return (
    <a
      href={href}
      aria-label="Acionar plantão 24 horas via WhatsApp"
      title={title}
      className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--j2c-whatsapp)]/35 bg-[var(--j2c-whatsapp)]/12 px-3 py-2 text-xs font-semibold text-[var(--j2c-whatsapp)] hover:bg-[var(--j2c-whatsapp)]/16 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
    >
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full bg-[var(--j2c-whatsapp)]"
      />
      <span>Plantão 24h</span>
      <span className="hidden sm:inline text-slate-600">• Emergências</span>
    </a>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  const emergencyWa = buildWhatsAppLink(
    siteConfig.contacts.whatsapp,
    "Olá! Preciso de atendimento EMERGENCIAL (Plantão 24h).\n\nPara agilizar, por favor envie na próxima mensagem:\n- Cidade/UF e ponto de referência\n- O que aconteceu (resumo objetivo)\n- Se há risco imediato para pessoas/estruturas\n- Fotos/vídeos do local (se possível)\n- Melhor horário para retorno por ligação (se necessário)",
  );

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {siteConfig.legalName}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              CNPJ: {siteConfig.cnpj}
              <br />
              {siteConfig.location} • {siteConfig.coverage}
              <br />
              <span className="text-slate-500">{siteConfig.businessHours}</span>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Contato</p>

            <EmergencyBadge
              href={emergencyWa}
              title={siteConfig.emergencyCoverage}
            />
            <p className="mt-2 text-xs text-slate-600">
              {siteConfig.emergencyCoverage}
            </p>

            <div className="mt-3 space-y-2 text-sm">
              <a
                href={buildWhatsAppLink(
                  siteConfig.contacts.whatsapp,
                  "Olá! Vim pelo site e gostaria de um orçamento.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
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
                href={siteConfig.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
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

              <p className="text-xs text-slate-500">{siteConfig.responseSla}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Informações</p>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <Link
                className="text-slate-700 hover:text-slate-900"
                href="/servicos"
              >
                Ver serviços
              </Link>
              <Link
                className="text-slate-700 hover:text-slate-900"
                href="/portfolio"
              >
                Ver portfólio
              </Link>
              <Link
                className="text-slate-700 hover:text-slate-900"
                href="/contato"
              >
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="mx-auto grid max-w-4xl items-center gap-3 text-xs text-slate-600 sm:grid-cols-3">
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
