import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Serviços | J2C Engenharia e Geotecnia",
  description:
    "Serviços em engenharia e geotecnia: barragens, taludes, contenções, fundações, investigação geotécnica e levantamentos com drone. Atendimento nacional e plantão 24h (até 300 km de Campinas/SP).",
};

export default function ServicesPage() {
  return (
    <main
      id="conteudo"
      data-no-underline
      className="mx-auto max-w-6xl px-4 py-10"
    >
      <h1 className="text-3xl font-semibold">Serviços</h1>

      <p className="mt-3 max-w-3xl text-sm text-white/70">
        Atendimento nacional.{" "}
        <span className="font-semibold text-white">
          {siteConfig.emergencyCoverage}
        </span>{" "}
        • {siteConfig.responseSla}.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/servicos/${s.slug}`}
            className="cursor-pointer rounded-2xl border border-white/10 bg-black/20 p-5 no-underline hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
            aria-label={`Abrir serviço: ${s.title}`}
          >
            <h2 className="text-base font-semibold text-white">{s.title}</h2>
            <p className="mt-2 text-sm text-white/70">{s.short}</p>

            <p className="mt-4 text-sm font-semibold text-[var(--j2c-gold)]">
              Ver detalhes →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
