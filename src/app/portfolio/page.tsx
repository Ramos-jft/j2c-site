import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServicesEmOrdemPrioritaria } from "@/content/services";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Galeria de registros e exemplos por serviço: taludes, contenções, barragens, fundações, solos moles, drone e vistorias.",
};

type PortfolioPageProps = {
  searchParams?: { servico?: string | string[] };
};

function normalizeSearchParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0]?.toLowerCase().trim();
  return value?.toLowerCase().trim();
}

export default function PortfolioPage({ searchParams }: Readonly<PortfolioPageProps>) {
  const servicos = getServicesEmOrdemPrioritaria();
  const slugSelecionado = normalizeSearchParam(searchParams?.servico);

  const servicosFiltrados = slugSelecionado
    ? servicos.filter((s) => s.slug.toLowerCase() === slugSelecionado)
    : servicos;

  const itens = servicosFiltrados.flatMap((servico) =>
    (servico.galeria ?? []).map((img) => ({
      ...img,
      slugServico: servico.slug,
      tituloServico: servico.title,
    }))
  );

  return (
    <main id="conteudo" data-no-underline className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-slate-900">Portfólio</h1>
      <p className="mt-3 max-w-3xl text-sm text-slate-600">
        Exemplos e registros organizados por serviço. Use o filtro para ver apenas o que importa.
      </p>

      <section className="mt-6">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/portfolio"
            className={[
              "rounded-full border px-4 py-2 text-sm font-semibold",
              slugSelecionado
                ? "border-black/10 bg-white text-slate-800 hover:bg-[var(--j2c-cor-superficie)]"
                : "border-[var(--j2c-gold)] bg-[var(--j2c-gold)] text-white",
            ].join(" ")}
          >
            Todos
          </Link>

          {servicos.map((servico) => {
            const ativo = slugSelecionado === servico.slug.toLowerCase();

            return (
              <Link
                key={servico.slug}
                href={`/portfolio?servico=${servico.slug}`}
                title={servico.title}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-semibold",
                  ativo
                    ? "border-[var(--j2c-gold)] bg-[var(--j2c-gold)] text-white"
                    : "border-black/10 bg-white text-slate-800 hover:bg-[var(--j2c-cor-superficie)]",
                ].join(" ")}
              >
                {servico.title}
              </Link>
            );
          })}
        </div>

        {itens.length ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {itens.map((item) => (
              <article
                key={`${item.slugServico}:${item.src}`}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.tituloServico}
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    {item.legenda ?? item.alt}
                  </p>

                  <Link
                    href={`/servicos/${item.slugServico}`}
                    className="mt-3 inline-flex text-sm font-semibold text-[var(--j2c-gold)] hover:underline"
                  >
                    Ver detalhes do serviço →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-sm text-slate-600">
              Ainda não há imagens cadastradas para este filtro. Adicione arquivos em{" "}
              <span className="font-semibold">public/portfolio/&lt;slug&gt;/</span> e preencha{" "}
              <span className="font-semibold">galeria</span> no arquivo{" "}
              <span className="font-semibold">src/content/services.ts</span>.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
