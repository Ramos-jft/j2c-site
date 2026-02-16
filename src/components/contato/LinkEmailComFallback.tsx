// src/components/contato/LinkEmailComFallback.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";
import { buildMailtoLink } from "@/lib/email";

type EstadoCopia = "idle" | "ok" | "erro";

type LinkEmailComFallbackProps = {
  assunto?: string;

  /** Conteúdo visual do link (ex.: ícone, texto, etc.) */
  children: React.ReactNode;

  className?: string;
  ariaLabel?: string;
  title?: string;

  /**
   * Por padrão, tentamos abrir o cliente de e-mail e, se nada acontecer,
   * exibimos uma opção para copiar o e-mail.
   */
  mostrarFallbackCopia?: boolean;
};

async function copiarTextoSeguro(texto: string): Promise<boolean> {
  try {
    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard?.writeText &&
      typeof globalThis.isSecureContext === "boolean" &&
      globalThis.isSecureContext
    ) {
      await navigator.clipboard.writeText(texto);
      return true;
    }

    // Sem Clipboard API disponível (ou sem HTTPS): retornamos false e o usuário copia manualmente
    return false;
  } catch {
    return false;
  }
}

function deveExibirFallback() {
  // Heurística simples: se a página continua visível, assumimos que o mailto:
  // não abriu nada e mostramos o fallback de cópia.
  if (typeof document === "undefined") return false;
  return document.visibilityState === "visible";
}

export function LinkEmailComFallback({
  assunto,
  children,
  className,
  ariaLabel,
  title,
  mostrarFallbackCopia = true,
}: Readonly<LinkEmailComFallbackProps>) {
  const [fallbackAberto, setFallbackAberto] = useState(false);
  const [estadoCopia, setEstadoCopia] = useState<EstadoCopia>("idle");

  const refTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const destinatarioEmail = siteConfig.contacts.email;
  const hrefEmail = buildMailtoLink({
    destinatario: destinatarioEmail,
    assunto,
  });

  useEffect(() => {
    return () => {
      if (refTimer.current) globalThis.clearTimeout(refTimer.current);
    };
  }, []);

  function agendarFallbackCopia() {
    if (!mostrarFallbackCopia) return;

    if (refTimer.current) {
      globalThis.clearTimeout(refTimer.current);
    }

    refTimer.current = globalThis.setTimeout(() => {
      if (deveExibirFallback()) {
        setFallbackAberto(true);
        setEstadoCopia("idle");
      }
    }, 900);
  }

  async function aoCopiarEmail() {
    const ok = await copiarTextoSeguro(destinatarioEmail);
    setEstadoCopia(ok ? "ok" : "erro");
  }

  return (
    <div className="relative inline-flex">
      <a
        href={hrefEmail}
        className={className}
        aria-label={ariaLabel}
        title={title}
        onClick={() => {
          // Não usar preventDefault para não atrapalhar o mailto:
          setFallbackAberto(false);
          setEstadoCopia("idle");
          agendarFallbackCopia();
        }}
      >
        {children}
      </a>

      {fallbackAberto ? (
        <output
          aria-live="polite"
          className="absolute right-0 top-full z-40 mt-2 w-[min(28rem,90vw)] rounded-xl border border-black/10 bg-white p-3 shadow-lg"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Se nada abrir, copie o e-mail:
              </p>

              <p className="mt-1 select-all text-sm text-slate-700">
                {destinatarioEmail}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={aoCopiarEmail}
                  className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-[var(--j2c-cor-superficie)] px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-cor-laranja)]"
                >
                  Copiar e-mail
                </button>

                {estadoCopia === "ok" ? (
                  <span className="text-xs font-semibold text-slate-700">
                    Copiado ✅
                  </span>
                ) : null}

                {estadoCopia === "erro" ? (
                  <span className="text-xs font-semibold text-slate-700">
                    Não foi possível copiar automaticamente. Selecione o e-mail
                    e copie manualmente.
                  </span>
                ) : null}
              </div>
            </div>

            <button
              type="button"
              aria-label="Fechar aviso"
              onClick={() => {
                setFallbackAberto(false);
                setEstadoCopia("idle");
              }}
              className="rounded-lg px-2 py-1 text-sm font-semibold text-slate-700 hover:bg-[var(--j2c-cor-superficie)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-cor-laranja)]"
            >
              ✕
            </button>
          </div>
        </output>
      ) : null}
    </div>
  );
}
