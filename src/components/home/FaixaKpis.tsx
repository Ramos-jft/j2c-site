type ItemKpi = {
  titulo: string;
  descricao: string;
};

type FaixaKpisProps = {
  itens: readonly ItemKpi[];
};

export function FaixaKpis({ itens }: FaixaKpisProps) {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="mt-5 grid gap-3 rounded-2xl border border-black/10 bg-[var(--j2c-cor-superficie)] p-4 sm:grid-cols-3 sm:p-5">
        {itens.map((i) => (
          <div
            key={i.titulo}
            className="rounded-xl border border-black/10 bg-white p-4"
          >
            <p className="text-sm font-semibold text-slate-900">{i.titulo}</p>
            <p className="mt-1 text-sm text-slate-600">{i.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
