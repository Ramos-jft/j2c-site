import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Responsável técnico, credenciais e forma de trabalho da J2C Engenharia & Geotecnia.",
};

export default function AboutPage() {
  return (
    <main id="conteudo" className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Responsável Técnico</h1>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="text-base font-semibold">{siteConfig.responsible}</p>
        <p className="mt-1 text-sm text-white/70">
          CREA-{siteConfig.crea.uf} {siteConfig.crea.number} •{" "}
          {siteConfig.location} • {siteConfig.coverage}
        </p>

        <h2 className="mt-6 text-lg font-semibold">Como trabalhamos</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
          <li>Triagem objetiva (cidade/UF, serviço, urgência e contexto).</li>
          <li>
            Vistoria/levantamento (quando necessário) com registro e
            rastreabilidade.
          </li>
          <li>
            Entregáveis claros: relatório/laudo/memorial/pranchas conforme
            escopo.
          </li>
          <li>Quando aplicável: emissão de ART conforme contratação.</li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold">Conformidade</h2>
        <p className="mt-3 text-sm text-white/70">
          Atuação com responsabilidade técnica e documentação compatível com o
          tipo de demanda.
        </p>
      </div>
    </main>
  );
}
