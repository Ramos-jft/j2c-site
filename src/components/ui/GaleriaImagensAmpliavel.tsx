"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type ItemGaleriaAmpliavel = {
  src: string;
  alt: string;
  legenda?: string;
};

type ModoGaleria = "carrossel" | "grade";

type GaleriaImagensAmpliavelProps = {
  itens: ItemGaleriaAmpliavel[];
  modo?: ModoGaleria;
  className?: string;
  ariaLabel?: string;
};

function clampIndice(indice: number, total: number) {
  if (total <= 0) return 0;
  if (indice < 0) return 0;
  if (indice >= total) return total - 1;
  return indice;
}

function abrirDialog(dialog: HTMLDialogElement) {
  if (typeof dialog.showModal === "function") {
    if (!dialog.open) dialog.showModal();
    return;
  }
  dialog.setAttribute("open", "true");
}

function fecharDialog(dialog: HTMLDialogElement) {
  if (typeof dialog.close === "function") {
    if (dialog.open) dialog.close();
    return;
  }
  dialog.removeAttribute("open");
}

export function GaleriaImagensAmpliavel({
  itens,
  modo = "carrossel",
  className,
  ariaLabel = "Galeria de imagens",
}: Readonly<GaleriaImagensAmpliavelProps>) {
  const [indiceAberto, setIndiceAberto] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const total = itens.length;

  const itemAtivo = useMemo(() => {
    if (indiceAberto === null) return null;
    const indiceSeguro = clampIndice(indiceAberto, total);
    return { indice: indiceSeguro, ...itens[indiceSeguro] };
  }, [indiceAberto, itens, total]);

  // Abre/fecha <dialog> conforme estado
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (itemAtivo) abrirDialog(dialog);
    else fecharDialog(dialog);
  }, [itemAtivo]);

  // Navegação por teclado (setas) sem usar onKeyDown em elemento "não-interativo"
  useEffect(() => {
    if (indiceAberto === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndiceAberto((atual) =>
          atual === null ? null : clampIndice(atual - 1, total),
        );
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndiceAberto((atual) =>
          atual === null ? null : clampIndice(atual + 1, total),
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [indiceAberto, total]);

  if (!itens.length) return null;

  return (
    <>
      {modo === "carrossel" ? (
        <div
          className={["flex gap-3 overflow-x-auto pb-2", className]
            .filter(Boolean)
            .join(" ")}
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
          aria-label={ariaLabel}
        >
          {itens.map((item, indice) => (
            <figure
              key={item.src}
              className="shrink-0 overflow-hidden rounded-xl border border-black/10 bg-[var(--j2c-cor-superficie)]"
              style={{ scrollSnapAlign: "start" }}
            >
              <button
                type="button"
                onClick={() => setIndiceAberto(indice)}
                className="relative block aspect-[16/9] w-[280px] sm:w-[360px] lg:w-[420px]"
                aria-label="Ampliar imagem"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                  className="object-cover"
                  loading="lazy"
                />
              </button>

              {item.legenda ? (
                <figcaption className="px-3 py-2 text-xs text-slate-600">
                  {item.legenda}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      ) : (
        <div
          className={["grid gap-3 sm:grid-cols-2", className]
            .filter(Boolean)
            .join(" ")}
          aria-label={ariaLabel}
        >
          {itens.map((item, indice) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-xl border border-black/10 bg-white"
            >
              <button
                type="button"
                onClick={() => setIndiceAberto(indice)}
                className="relative block aspect-[16/9] w-full"
                aria-label="Ampliar imagem"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </button>

              {item.legenda ? (
                <figcaption className="px-3 py-2 text-xs text-slate-600">
                  {item.legenda}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        aria-label="Visualização ampliada"
        className="backdrop:bg-black/70 m-auto flex items-center justify-center rounded-2xl bg-transparent p-0"
        onClose={() => setIndiceAberto(null)}
      >
        {itemAtivo ? (
          <div className="relative w-[min(92vw,72rem)] overflow-hidden rounded-2xl bg-black">
            {/* Backdrop clicável (nativo/interativo) */}
            <button
              type="button"
              onClick={() => setIndiceAberto(null)}
              aria-label="Fechar visualização"
              className="absolute inset-0 z-0 cursor-zoom-out"
            />

            {/* Conteúdo acima do backdrop */}
            <div className="relative z-10">
              <div className="relative h-[70vh] w-full">
                <Image
                  src={itemAtivo.src}
                  alt={itemAtivo.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
                <p className="text-xs text-white/80">
                  {itemAtivo.legenda ?? itemAtivo.alt}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setIndiceAberto((atual) =>
                        atual === null ? null : clampIndice(atual - 1, total),
                      )
                    }
                    className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20"
                    aria-label="Imagem anterior"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setIndiceAberto((atual) =>
                        atual === null ? null : clampIndice(atual + 1, total),
                      )
                    }
                    className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20"
                    aria-label="Próxima imagem"
                  >
                    →
                  </button>

                  <button
                    type="button"
                    onClick={() => setIndiceAberto(null)}
                    className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20"
                    aria-label="Fechar"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
