import { siteConfig } from "@/content/site";
import { faq } from "@/content/faq";
import { getServicesEmOrdemPrioritaria } from "@/content/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { faqJsonLd, organizationJsonLd } from "@/lib/seo/jsonld";
import { HeroSplit } from "@/components/home/HeroSplit";
import { FaixaKpis } from "@/components/home/FaixaKpis";
import { CardServico } from "@/components/home/CardServico";

export default function HomePage() {
  const hrefWhatsAppGeral = buildWhatsAppLink(
    siteConfig.contacts.whatsapp,
    `Olá! Quero solicitar orçamento.

Cidade/UF: ____
Serviço: ____
Prazo desejado: ____
O local tem acesso liberado para vistoria? ( ) Sim ( ) Não`,
  );

  const itensKpi = [
    {
      titulo: "NBR 11682",
      descricao:
        "Referência para estabilidade de encostas e taludes (quando aplicável).",
    },
    {
      titulo: "ART quando aplicável",
      descricao:
        "Emitida conforme escopo contratado e exigências do cliente/órgão.",
    },
    {
      titulo: siteConfig.responseSla,
      descricao: "Orçamento inicial e alinhamento de escopo pelo WhatsApp.",
    },
  ] as const;

  const servicosOrdenados = getServicesEmOrdemPrioritaria();

  return (
    <main id="conteudo" data-no-underline className="pb-12">
      <HeroSplit
        titulo="Laudo de estabilidade e geotecnia aplicada para decisões seguras."
        subtitulo="Atendimento para rodovias, cortes e aterros, obras urbanas e imóveis. Diagnóstico em campo, análise técnica e entrega objetiva — com comunicação simples e documentação que ajuda a contratar e executar."
        linhaProva={`${siteConfig.location} • ${siteConfig.coverage} • ${siteConfig.emergencyCoverage}`}
        hrefWhatsApp={hrefWhatsAppGeral}
        textoBotaoPrimario="Chamar no WhatsApp"
        textoBotaoSecundario="Ver serviços"
        hrefBotaoSecundario="#servicos"
        imagem={{
          src: "/brand/drone-v2.png",
          alt: "Vistoria e análise geotécnica em campo (foto real)",
          prioridade: true,
        }}
      />

      <FaixaKpis itens={itensKpi} />

      {/* Como funciona (reduz objeções: orçamento remoto / visita) */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Como funciona do primeiro contato à entrega
          </h2>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-[var(--j2c-cor-superficie)] p-5">
              <p className="text-sm font-semibold text-slate-900">
                1) Orçamento pelo WhatsApp
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Você envia local, objetivo e prazo. A gente retorna com escopo
                sugerido e estimativa inicial.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[var(--j2c-cor-superficie)] p-5">
              <p className="text-sm font-semibold text-slate-900">
                2) Vistoria quando necessária
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Em casos que exigem evidência de campo, fazemos visita técnica e
                registros (fotos, medições e checklist).
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[var(--j2c-cor-superficie)] p-5">
              <p className="text-sm font-semibold text-slate-900">
                3) Entrega objetiva
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Relatório/laudo com evidências, recomendações e próximos passos.
                Sem texto excessivo e com prioridades claras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços (ordem do briefing) */}
      <section id="servicos" className="mx-auto max-w-6xl px-4 pt-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Serviços</h2>
            <p className="mt-1 text-sm text-slate-600">
              Se o seu caso é “laudo de estabilidade”, você está no lugar certo.
              Escolha o serviço e peça orçamento no WhatsApp.
            </p>
          </div>

          <a
            href={hrefWhatsAppGeral}
            className="inline-flex items-center justify-center rounded-xl bg-[var(--j2c-cor-laranja)] px-4 py-2 text-sm font-semibold text-white hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-cor-laranja)]"
          >
            Pedir orçamento agora
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicosOrdenados.map((s) => (
            <CardServico
              key={s.slug}
              titulo={s.title}
              descricao={s.short}
              hrefDetalhes={`/servicos/${s.slug}`}
              hrefWhatsApp={buildWhatsAppLink(
                siteConfig.contacts.whatsapp,
                s.cta.whatsappMessage,
              )}
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <h2 className="text-xl font-semibold text-slate-900">
          Perguntas frequentes
        </h2>

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
