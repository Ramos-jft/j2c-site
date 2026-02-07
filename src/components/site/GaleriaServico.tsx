import { GaleriaImagensAmpliavel } from "@/components/ui/GaleriaImagensAmpliavel";

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

      <GaleriaImagensAmpliavel
        itens={itens}
        modo="carrossel"
        className="mt-4"
        ariaLabel="Galeria com rolagem horizontal"
      />
    </section>
  );
}
