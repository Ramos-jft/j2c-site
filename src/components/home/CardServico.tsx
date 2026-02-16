// src/components/home/CardServico.tsx
import Link from "next/link";
import { BotaoContatoComSelecao } from "@/components/contato/BotaoContatoComSelecao";

type CardServicoProps = {
  titulo: string;
  descricao: string;
  hrefDetalhes: string;
  hrefWhatsApp: string;

  assuntoEmail?: string;
  corpoEmail?: string;
};

export function CardServico({
  titulo,
  descricao,
  hrefDetalhes,
  hrefWhatsApp,
  assuntoEmail,
  corpoEmail,
}: Readonly<CardServicoProps>) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-5">
      <h3 className="text-base font-semibold text-slate-900">{titulo}</h3>
      <p className="mt-2 text-sm text-slate-600">{descricao}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href={hrefDetalhes}
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-[var(--j2c-cor-superficie)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-cor-laranja)]"
        >
          Saiba mais
        </Link>

        <BotaoContatoComSelecao
          textoBotao="Pedir orçamento"
          hrefWhatsApp={hrefWhatsApp}
          assuntoEmail={assuntoEmail}
          corpoEmail={corpoEmail}
          classNameBotao="j2c-botao-cta j2c-botao-cta--sm"
          alinhamentoMenu="esquerda"
        />
      </div>
    </article>
  );
}
