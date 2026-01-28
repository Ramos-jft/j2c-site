import type { Metadata } from "next";
import Link from "next/link";
import { GaleriaServico } from "@/components/site/GaleriaServico";
import { notFound } from "next/navigation";
import { siteConfig } from "@/content/site";
import { getAllServiceSlugs, getServiceBySlug } from "@/content/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { serviceJsonLd } from "@/lib/seo/jsonld";

export const dynamicParams = false;

type PageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Serviço | J2C Engenharia e Geotecnia",
      description:
        "Detalhes do serviço, escopo, entregáveis e contato. Atendimento nacional e plantão 24h (até 300 km de Campinas/SP).",
    };
  }

  const url = `${siteConfig.siteUrl}/servicos/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      title: service.seoTitle,
      description: service.seoDescription,
      siteName: siteConfig.name,
    },
  };
}

function SectionTitle({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h2 className="text-lg font-semibold text-slate-900">{children}</h2>;
}

export default async function ServiceDetailPage({
  params,
}: Readonly<PageProps>) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const waHref = buildWhatsAppLink(
    siteConfig.contacts.whatsapp,
    service.cta.whatsappMessage
  );

  return (
    <main id="conteudo" className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(service)),
        }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link className="hover:text-slate-900" href="/">
          Início
        </Link>
        <span className="mx-2">/</span>
        <Link className="hover:text-slate-900" href="/servicos">
          Serviços
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{service.title}</span>
      </nav>

      <header className="mt-6 rounded-2xl border border-black/10 bg-white p-6">
        <h1 className="text-3xl font-semibold text-slate-900">{service.title}</h1>

        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          {service.overview}
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={waHref}
            className="inline-flex items-center justify-center rounded-xl bg-[var(--j2c-gold)] px-5 py-3 text-sm font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
            aria-label={service.cta.label}
          >
            {service.cta.label}
          </a>

          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-[var(--j2c-cor-superficie)] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
          >
            Ver contato e horários
          </Link>

          <p className="text-xs text-slate-500">
            {siteConfig.responseSla} • {siteConfig.emergencyCoverage}
          </p>
        </div>
      </header>

      {service.galeria?.length ? (
        <>
          <GaleriaServico itens={service.galeria} />
          <div className="mt-3">
            <Link
              className="text-sm font-semibold text-[var(--j2c-gold)] hover:underline"
              href={`/portfolio?servico=${service.slug}`}
            >
              Ver mais exemplos deste serviço →
            </Link>
          </div>
        </>
      ) : null}

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <SectionTitle>Quando este serviço é indicado</SectionTitle>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {service.whenClientsLookForYou.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <SectionTitle>
            <span className="mt-8 block">Como funciona</span>
          </SectionTitle>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600">
            {service.howItWorks.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <SectionTitle>O que você recebe</SectionTitle>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {service.typicalDeliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-black/10 bg-[var(--j2c-cor-superficie)] p-4">
            <p className="text-sm font-semibold text-slate-900">Prazo típico</p>
            <p className="mt-2 text-sm text-slate-600">
              {service.typicalTimeline}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-black/10 bg-white p-6">
        <SectionTitle>O que precisamos para orçar com precisão</SectionTitle>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
          {service.clientProvides.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={waHref}
            className="inline-flex items-center justify-center rounded-xl bg-[var(--j2c-gold)] px-5 py-3 text-sm font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
          >
            Enviar detalhes
          </a>

          <p className="text-xs text-slate-500">
            Dica: envie cidade/UF, objetivo, prazo e fotos/plantas/PDFs se
            houver.
          </p>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-black/10 bg-white p-6">
        <SectionTitle>Perguntas frequentes</SectionTitle>

        <div className="mt-4 space-y-3">
          {service.faqs.map((f) => (
            <details
              key={f.q}
              className="rounded-xl border border-black/10 bg-[var(--j2c-cor-superficie)] p-4"
            >
              <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
