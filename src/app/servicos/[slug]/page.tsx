import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços de engenharia e geotecnia: barragens, drone, taludes, investigação geotécnica, fundações, solos moles e contenções.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Serviços</h1>
        <p className="mt-3 text-sm text-white/70">
          Clique em um serviço para ver detalhes e iniciar uma triagem objetiva.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-black/30"
            >
              <h2 className="text-base font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-white/70">{s.short}</p>
              <p className="mt-4 text-sm font-semibold text-[var(--j2c-gold)]">Abrir →</p>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
