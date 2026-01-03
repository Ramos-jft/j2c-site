import { siteConfig } from "@/content/site";
import { CreaPublicLink } from "@/components/site/CreaPublicLink";

export function CreaVerificationCard() {
  const now = new Date();
  const dt = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
  }).format(now);

  return (
    <section
      aria-label="Autenticidade do registro no CREA-SP"
      className="rounded-2xl border border-white/10 bg-black/20 p-6"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-semibold">Autenticidade do CREA-SP</h2>
          <p className="mt-1 text-sm text-white/70">
            Data e Hora da Pesquisa (simulada): {dt}
          </p>
        </div>

        <div className="text-sm">
          <span className="font-semibold text-white">
            CREA-{siteConfig.crea.uf} {siteConfig.crea.number}
          </span>
          <span className="ml-2 text-white/60">•</span>
          <CreaPublicLink className="ml-2 text-sm font-semibold text-[var(--j2c-gold)] hover:brightness-110" />
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs text-white/60">Nome do Profissional</p>
          <p className="text-sm font-semibold">{siteConfig.creaPublicProfile.professionalName}</p>
        </div>

        <div>
          <p className="text-xs text-white/60">Situação do Registro</p>
          <p className="text-sm font-semibold">{siteConfig.creaPublicProfile.registrationStatus}</p>
        </div>

        <div className="sm:col-span-2">
          <p className="text-xs text-white/60">Títulos</p>
          <ul className="mt-1 list-disc pl-5 text-sm text-white/80">
            {siteConfig.creaPublicProfile.titles.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2">
          <p className="text-xs text-white/60">Responsabilidade Técnica</p>
          <p className="mt-1 text-sm text-white/80">
            {siteConfig.creaPublicProfile.technicalResponsibilityNote}
          </p>
        </div>
      </div>

      <p className="mt-5 text-xs text-white/60">
        Observação: a validação oficial ocorre no site do CREA-SP. Ao abrir a consulta pública, o número do registro é copiado automaticamente para facilitar o preenchimento.
      </p>
    </section>
  );
}
