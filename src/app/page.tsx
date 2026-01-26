import Link from "next/link";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { faq } from "@/content/faq";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { faqJsonLd, organizationJsonLd } from "@/lib/seo/jsonld";

export default function HomePage() {
  const wa = buildWhatsAppLink(
    siteConfig.contacts.whatsapp,
    "Olá! Quero solicitar proposta. Minha cidade/UF é: _____. Serviço: _____. Prazo desejado: _____. Caso emergencial? ( ) Sim ( ) Não."
  );

  return (
    <main
      id="conteudo"
      data-no-underline
      className="mx-auto max-w-6xl px-4 py-10"
    >
      {/* Hero */}
      <section className="rounded-2xl border border-black/10 bg-[var(--j2c-cor-superficie)] p-6 sm:p-10">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-slate-600">
              {siteConfig.location} • {siteConfig.coverage}
              <span className="mx-2 text-slate-400">•</span>
              {siteConfig.emergencyCoverage}
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engenharia e Geotecnia com rigor técnico e entrega objetiva.
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
              Projetos, laudos e inspeções para decisões seguras em obras,
              imóveis e infraestrutura — com método, documentação e
              responsabilidade profissional.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Diagnóstico claro + recomendação executável.</li>
              <li>
                Conformidade com normas e boas práticas (ABNT e referências
                aplicáveis).
              </li>
              <li>
                Relatórios com evidências (fotos, croquis, registros e
                rastreabilidade).
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={wa}
                className="rounded-xl bg-[var(--j2c-gold)] px-5 py-3 text-sm font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
              >
                Falar no WhatsApp
              </a>

              <Link
                href="/servicos"
                className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
              >
                Ver serviços
              </Link>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">
                {siteConfig.businessHours}
              </span>
              <span className="mx-2 text-slate-400">•</span>
              <span>{siteConfig.responseSla}</span>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos / Como trabalhamos */}
      <section className="mt-10 rounded-2xl border border-black/10 bg-white p-6">
        <h2 className="text-xl font-semibold">O que fazemos</h2>
        <p className="mt-3 text-sm text-slate-600">
          A J2C Engenharia e Geotecnia atua com foco em geotecnia aplicada,
          estabilidade de taludes, drenagem, contenções, barragens e inspeções
          técnicas, entregando documentação robusta para aprovação, contratação
          e execução em campo.
        </p>

        <h3 className="mt-6 text-base font-semibold">Como trabalhamos</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
          <li>Entendimento e objetivo (escopo, prazo, nível de detalhe).</li>
          <li>
            Visita/levantamento (vistoria, registros, medições e evidências).
          </li>
          <li>Análise técnica (normas, parâmetros e hipóteses explícitas).</li>
          <li>Entrega do relatório/projeto (com clareza e anexos).</li>
          <li>Suporte à execução (quando contratado).</li>
        </ol>

        <p className="mt-6 text-sm text-slate-600">
          <span className="font-semibold text-slate-900">
            Precisão técnica. Comunicação simples. Documento que resolve.
          </span>{" "}
          Você recebe um material que facilita a tomada de decisão: o que é, por
          que ocorreu, risco associado, prioridade, alternativas de correção e
          próximos passos.
        </p>
      </section>

      {/* Serviços */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Serviços</h2>
        <p className="mt-2 text-sm text-slate-600">
          Cada serviço pode ser contratado em níveis de profundidade, conforme
          objetivo e prazo: do diagnóstico técnico com recomendações ao estudo
          completo e projeto executivo.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="rounded-2xl border border-black/10 bg-white p-5 hover:bg-[var(--j2c-cor-superficie)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
            >
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.short}</p>
              <p className="mt-4 text-sm font-semibold text-[var(--j2c-gold)]">
                Saiba mais →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Perguntas frequentes</h2>
        <div className="mt-4 grid gap-3">
          {faq.map((i) => (
            <details
              key={i.q}
              className="rounded-2xl border border-black/10 bg-white p-5"
            >
              <summary className="cursor-pointer text-sm font-semibold">
                {i.q}
              </summary>
              <p className="mt-3 text-sm text-slate-600">{i.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
    </main>
  );
}
