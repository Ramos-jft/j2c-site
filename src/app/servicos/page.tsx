import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { getServicesEmOrdemPrioritaria } from "@/content/services";

export const metadata: Metadata = {
  title: "Serviços | J2C Engenharia e Geotecnia",
  description:
    "Serviços em engenharia e geotecnia: investigação, laudos de estabilidade de taludes, barragens, contenções, fundações, solos moles, drone e apoio a regularização. Atendimento nacional e plantão 24h (até 300 km de Campinas/SP).",
};

export default function ServicesPage() {
  const servicosOrdenados = getServicesEmOrdemPrioritaria();

  return (
    <main
      id="conteudo"
      data-no-underline
      className="mx-auto max-w-6xl px-4 py-10"
    >
      <h1 className="text-3xl font-semibold">Serviços</h1>

      <p className="mt-3 max-w-3xl text-sm text-slate-600">
        Atendimento nacional.{" "}
        <span className="font-semibold text-slate-900">
          {siteConfig.emergencyCoverage}
        </span>{" "}
        • {siteConfig.responseSla}.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {servicosOrdenados.map((s) => (
          <Link
            key={s.slug}
            href={`/servicos/${s.slug}`}
            className="cursor-pointer rounded-2xl border border-black/10 bg-white p-5 no-underline hover:bg-[var(--j2c-cor-superficie)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-cor-laranja)]"
            aria-label={`Abrir serviço: ${s.title}`}
          >
            <h2 className="text-base font-semibold text-slate-900">{s.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{s.short}</p>

            <p className="mt-4 text-sm font-semibold text-[var(--j2c-cor-laranja)]">
              Ver detalhes →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
