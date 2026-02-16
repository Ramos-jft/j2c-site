// src/components/home/HeroSplit.tsx
import Image from "next/image";
import Link from "next/link";
import { BotaoContatoComSelecao } from "@/components/contato/BotaoContatoComSelecao";

type ImagemHero = {
  src: string;
  alt: string;
  prioridade?: boolean;
};

type HeroSplitProps = {
  titulo: string;
  subtitulo: string;
  linhaProva?: string;

  hrefWhatsApp: string;
  textoBotaoPrimario?: string;

  assuntoEmailPrimario?: string;
  corpoEmailPrimario?: string;

  textoBotaoSecundario?: string;
  hrefBotaoSecundario?: string;

  imagem: ImagemHero;
};

export function HeroSplit({
  titulo,
  subtitulo,
  linhaProva,
  hrefWhatsApp,
  textoBotaoPrimario = "Solicitar orçamento",
  assuntoEmailPrimario,
  corpoEmailPrimario,
  textoBotaoSecundario = "Ver serviços",
  hrefBotaoSecundario = "#servicos",
  imagem,
}: Readonly<HeroSplitProps>) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10">
      <div className="grid items-center gap-8 rounded-2xl border border-black/10 bg-white p-6 lg:grid-cols-2 lg:p-10">
        <div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
            {titulo}
          </h1>

          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 lg:text-lg">
            {subtitulo}
          </p>

          {linhaProva ? (
            <p className="mt-4 text-sm text-slate-500">{linhaProva}</p>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <BotaoContatoComSelecao
              textoBotao={textoBotaoPrimario}
              hrefWhatsApp={hrefWhatsApp}
              assuntoEmail={assuntoEmailPrimario}
              corpoEmail={corpoEmailPrimario}
              classNameBotao="j2c-botao-cta"
            />

            <Link
              href={hrefBotaoSecundario}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-[var(--j2c-cor-superficie)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-cor-laranja)]"
            >
              {textoBotaoSecundario}
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[var(--j2c-cor-superficie)]">
          <Image
            src={imagem.src}
            alt={imagem.alt}
            width={1200}
            height={800}
            priority={imagem.prioridade ?? true}
            className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[360px]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        </div>
      </div>
    </section>
  );
}
