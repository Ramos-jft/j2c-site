import Image from "next/image";

type ItemGaleria = {
  src: string;
  alt: string;
  legenda?: string;
};

type GaleriaServicoProps = {
  titulo?: string;
  itens: ItemGaleria[];
};

export function GaleriaServico({
  titulo = "Exemplos (portfólio)",
  itens,
}: Readonly<GaleriaServicoProps>) {
  if (!itens.length) return null;

  return (
    <section className="mt-6 rounded-2xl border border-black/10 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-900">{titulo}</h2>
      <p className="mt-2 text-sm text-slate-600">
        Arraste para o lado no celular para ver mais registros.
      </p>

      <div
        className="mt-4 flex gap-3 overflow-x-auto pb-2"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
        aria-label="Galeria com rolagem horizontal"
      >
        {itens.map((item) => (
          <figure
            key={item.src}
            className="shrink-0 overflow-hidden rounded-xl border border-black/10 bg-[var(--j2c-cor-superficie)]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative aspect-[16/9] w-[280px] sm:w-[360px] lg:w-[420px]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                className="object-cover"
                loading="lazy"
              />
            </div>

            {item.legenda ? (
              <figcaption className="px-3 py-2 text-xs text-slate-600">
                {item.legenda}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  );
}
