import { siteConfig } from "@/content/site";

function formatNowPtBr() {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
  }).format(new Date());
}

export function CreaVerificationCard() {
  const dt = formatNowPtBr();

  return (
    <section
      aria-label="Dados de verificação do registro no CREA-SP"
      className="rounded-2xl border border-white/10 bg-black/20 p-6"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-semibold">Verificação do CREA-SP</h2>

          <p className="mt-1 text-sm text-white/70">
            Data e Hora da Pesquisa:{" "}
            <span suppressHydrationWarning className="font-semibold text-white">
              {dt}
            </span>
          </p>
        </div>

        <div className="text-sm">
          <span className="font-semibold text-white">
            CREA-{siteConfig.crea.uf} {siteConfig.crea.number}
          </span>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs text-white/60">Nome do Profissional</p>
          <p className="text-sm font-semibold text-white">
            {siteConfig.creaPublicProfile.professionalName}
          </p>
        </div>

        <div>
          <p className="text-xs text-white/60">Situação do Registro</p>
          <p className="text-sm font-semibold text-white">
            {siteConfig.creaPublicProfile.registrationStatus}
          </p>
        </div>

        <div className="sm:col-span-2">
          <p className="text-xs text-white/60">Títulos</p>
          <ul className="mt-1 list-disc pl-5 text-sm text-white/80">
            {siteConfig.creaPublicProfile.titles.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-5 text-xs text-white/55">
        Nota: os dados acima são exibidos no site como referência de
        verificação.
      </p>
    </section>
  );
}
