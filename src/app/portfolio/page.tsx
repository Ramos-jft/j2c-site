import type { Metadata } from "next";
import Link from "next/link";
import { GaleriaImagensAmpliavel } from "@/components/ui/GaleriaImagensAmpliavel";
import { getServicesEmOrdemPrioritaria } from "@/content/services";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Casos organizados por serviço: taludes, contenções, barragens, fundações, solos moles, drone e vistorias.",
};

type PortfolioPageProps = {
  searchParams?:
    | { servico?: string | string[] }
    | Promise<{ servico?: string | string[] }>;
};

function normalizeSearchParam(
  value: string | string[] | undefined,
): string | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return undefined;

  try {
    return decodeURIComponent(raw).toLowerCase().trim();
  } catch {
    return raw.toLowerCase().trim();
  }
}

function montarMetaDoCaso(
  tituloServico: string,
  periodo?: string,
  localidadeAproximada?: string,
) {
  const partes = [tituloServico];
  if (periodo) partes.push(periodo);
  if (localidadeAproximada) partes.push(localidadeAproximada);
  return partes.join(" • ");
}

export default async function PortfolioPage({
  searchParams,
}: Readonly<PortfolioPageProps>) {
  const servicos = getServicesEmOrdemPrioritaria();

  // ✅ FIX: searchParams pode vir como Promise
  const searchParamsResolvido = (await searchParams) ?? {};
  const slugSelecionado = normalizeSearchParam(searchParamsResolvido.servico);

  // ✅ Só aparece categoria que tem casos
  const servicosComConteudo = servicos.filter(
    (s) => (s.casosPortfolio?.length ?? 0) > 0,
  );

  const servicoSelecionado = slugSelecionado
    ? servicosComConteudo.find((s) => {
        const slug = s.slug.toLowerCase();
        const titulo = s.title.toLowerCase();
        return slug === slugSelecionado || titulo === slugSelecionado;
      })
    : undefined;

  const servicosFiltrados = servicoSelecionado
    ? [servicoSelecionado]
    : servicosComConteudo;

  const casos = servicosFiltrados.flatMap((servico) =>
    (servico.casosPortfolio ?? []).map((caso) => ({ servico, caso })),
  );

  return (
    <main
      id="conteudo"
      data-no-underline
      className="mx-auto max-w-6xl px-4 py-10"
    >
      <h1 className="text-3xl font-semibold text-slate-900">Portfólio</h1>

      <section className="mt-6">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/portfolio"
            className={[
              "j2c-botao-cta j2c-botao-cta--pill",
              servicoSelecionado ? "" : "j2c-botao-cta--selecionado",
            ].join(" ")}
          >
            Todos
          </Link>

          {servicosComConteudo.map((servico) => {
            const ativo = servicoSelecionado?.slug === servico.slug;

            return (
              <Link
                key={servico.slug}
                href={`/portfolio?servico=${encodeURIComponent(servico.slug)}`}
                title={servico.title}
                className={[
                  "j2c-botao-cta j2c-botao-cta--pill",
                  ativo ? "j2c-botao-cta--selecionado" : "",
                ].join(" ")}
              >
                {servico.title}
              </Link>
            );
          })}
        </div>

        {/* ✅ REMOVIDO: seção “Registros” (grid por galeria) */}

        {casos.length ? (
          <div className="mt-8 columns-1 gap-4 lg:columns-2">
            {casos.map(({ servico, caso }) => (
              <article
                key={`${servico.slug}:${caso.id}`}
                className="mb-4 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl border border-black/10 bg-white p-6"
              >
                <p className="text-xs font-semibold text-slate-500">
                  {montarMetaDoCaso(
                    servico.title,
                    caso.periodo,
                    caso.localidadeAproximada,
                  )}
                </p>

                <h2 className="mt-2 text-xl font-semibold text-slate-900">
                  {caso.titulo}
                </h2>

                <p className="mt-3 text-sm text-slate-600">{caso.resumo}</p>

                {caso.destaques?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                    {caso.destaques.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {/* ✅ Imagens ampliáveis no card */}
                {caso.imagens?.length ? (
                  <div className="mt-5">
                    <GaleriaImagensAmpliavel
                      itens={caso.imagens}
                      modo="grade"
                      ariaLabel={`Imagens do caso ${caso.titulo}`}
                    />
                  </div>
                ) : null}

                <Link
                  href={`/servicos/${encodeURIComponent(servico.slug)}`}
                  className="mt-5 inline-flex text-sm font-semibold text-[var(--j2c-gold)] hover:opacity-90"
                >
                  Ver detalhes do serviço →
                </Link>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}
