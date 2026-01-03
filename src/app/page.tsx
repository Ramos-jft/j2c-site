import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { faq } from "@/content/faq";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { faqJsonLd, organizationJsonLd } from "@/lib/seo/jsonld";
import { CreaVerificationCard } from "@/components/site/CreaVerificationCard";

export default function HomePage() {
  const wa = buildWhatsAppLink(
    siteConfig.contacts.whatsapp,
    "Olá! Quero solicitar um orçamento. Minha cidade/UF é: _____. O serviço é: _____."
  );

  return (
    <>
      <SiteHeader />

      <main id="conteudo" className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-10">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-white/70">
                {siteConfig.location} • {siteConfig.coverage}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Engenharia & Geotecnia para decisões seguras em campo e em projeto
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                Foco em <strong className="text-white">barragens</strong>, investigação geotécnica,
                estabilidade de taludes, fundações, contenções e levantamentos com drone — com entregáveis claros e comunicação objetiva.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={wa}
                  className="rounded-xl bg-[var(--j2c-whatsapp)] px-5 py-3 text-sm font-semibold text-black hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
                >
                  Falar no WhatsApp
                </a>
                <Link
                  href="/servicos"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
                >
                  Ver serviços
                </Link>
              </div>

              <div className="mt-6 text-sm text-white/70">
                <span className="font-semibold text-white">
                  CREA-{siteConfig.crea.uf}
                </span>{" "}
                {siteConfig.crea.number} • {siteConfig.businessHours} • {siteConfig.responseSla}
              </div>
            </div>

            {/* NOVO: Autenticidade (sem imagem do CREA) */}
            <CreaVerificationCard />
          </div>
        </section>

        {/* Serviços (igual) */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Serviços</h2>
          <p className="mt-2 text-sm text-white/70">
            Selecione o serviço para ver quando contratar, entregáveis típicos e o que você precisa enviar para triagem.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)]"
              >
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.short}</p>
                <p className="mt-4 text-sm font-semibold text-[var(--j2c-gold)]">Saiba mais →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ (igual) */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Perguntas frequentes</h2>
          <div className="mt-4 grid gap-3">
            {faq.map((i) => (
              <details key={i.q} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <summary className="cursor-pointer text-sm font-semibold">
                  {i.q}
                </summary>
                <p className="mt-3 text-sm text-white/70">{i.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* JSON-LD (igual) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
        />
      </main>

      <SiteFooter />
    </>
  );
}
