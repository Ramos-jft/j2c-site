import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Responsável técnico, credenciais e forma de trabalho da J2C Engenharia e Geotecnia (Campinas/SP, atendimento nacional e plantão 24h para emergências).",
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
        <p className="mt-2 text-sm text-white/70">
          <span className="font-semibold text-white">
            {siteConfig.emergencyCoverage}
          </span>
          <span className="mx-2 text-white/40">•</span>
          {siteConfig.responseSla}
        </p>

        <h2 className="mt-6 text-lg font-semibold">Quem somos</h2>
        <p className="mt-3 text-sm text-white/70">
          A J2C Engenharia e Geotecnia é liderada por {siteConfig.responsible}{" "}
          (CREA-{siteConfig.crea.uf} {siteConfig.crea.number}), com atuação em
          obras e análises técnicas envolvendo geotecnia, taludes, drenagem,
          contenções, barragens e inspeções.
        </p>
        <p className="mt-3 text-sm text-white/70">
          Trabalhamos com método, transparência de premissas e documentação bem
          apresentada. O padrão é entregar um material que possa ser usado para
          aprovação, contratação, execução e histórico técnico — sem excesso de
          palavras e sem lacunas críticas.
        </p>

        <h2 className="mt-6 text-lg font-semibold">Como trabalhamos</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/70">
          <li>Entendimento e objetivo (escopo, prazo, nível de detalhe).</li>
          <li>
            Visita/levantamento (vistoria, registros, medições e evidências).
          </li>
          <li>Análise técnica (normas, parâmetros e hipóteses explícitas).</li>
          <li>Entrega do relatório/projeto (com clareza e anexos).</li>
          <li>Suporte à execução (quando contratado).</li>
        </ol>

        <h2 className="mt-6 text-lg font-semibold">Responsabilidade técnica</h2>
        <p className="mt-3 text-sm text-white/70">
          Quando aplicável, os serviços são acompanhados de ART, conforme escopo
          contratado e exigências do cliente/órgão/empreendimento.
        </p>
      </div>
    </main>
  );
}
