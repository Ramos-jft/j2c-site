// src/components/contato/BotaoContatoComSelecao.tsx
"use client";

import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/content/site";
import { buildMailtoLink } from "@/lib/email";

type AlinhamentoMenu = "esquerda" | "direita";

type BotaoContatoComSelecaoProps = {
  textoBotao: string;
  hrefWhatsApp: string;

  assuntoEmail?: string;
  corpoEmail?: string;

  classNameBotao?: string;
  alinhamentoMenu?: AlinhamentoMenu;

  abrirWhatsAppEmNovaAba?: boolean;
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

export function BotaoContatoComSelecao({
  textoBotao,
  hrefWhatsApp,
  assuntoEmail,
  corpoEmail,
  classNameBotao = "j2c-botao-cta",
  alinhamentoMenu = "esquerda",
  abrirWhatsAppEmNovaAba = true,
}: Readonly<BotaoContatoComSelecaoProps>) {
  const [aberto, setAberto] = useState(false);

  // Aviso/fallback do e-mail
  const [avisoEmailAberto, setAvisoEmailAberto] = useState(false);
  const [emailCopiado, setEmailCopiado] = useState<"idle" | "ok" | "erro">(
    "idle",
  );

  const idMenu = useId();
  const refWrapper = useRef<HTMLDivElement | null>(null);
  const timerAvisoEmail = useRef<ReturnType<typeof setTimeout> | null>(null);

  const destinatarioEmail = siteConfig.contacts.email;

  const hrefEmail = buildMailtoLink({
    destinatario: destinatarioEmail,
    assunto: assuntoEmail,
    corpo: corpoEmail,
  });

  useEffect(() => {
    function aoClicarFora(evento: MouseEvent) {
      const alvo = evento.target as Node | null;
      if (!alvo) return;

      if (refWrapper.current && !refWrapper.current.contains(alvo)) {
        setAberto(false);
      }
    }

    function aoPressionarTecla(evento: KeyboardEvent) {
      if (evento.key === "Escape") {
        setAberto(false);
        setAvisoEmailAberto(false);
        setEmailCopiado("idle");
      }
    }

    document.addEventListener("mousedown", aoClicarFora);
    document.addEventListener("keydown", aoPressionarTecla);

    return () => {
      document.removeEventListener("mousedown", aoClicarFora);
      document.removeEventListener("keydown", aoPressionarTecla);
    };
  }, []);

  useEffect(() => {
    if (!avisoEmailAberto) return;

    if (timerAvisoEmail.current) {
      globalThis.clearTimeout(timerAvisoEmail.current);
    }

    timerAvisoEmail.current = globalThis.setTimeout(() => {
      setAvisoEmailAberto(false);
      setEmailCopiado("idle");
    }, 12000);

    return () => {
      if (timerAvisoEmail.current) {
        globalThis.clearTimeout(timerAvisoEmail.current);
      }
    };
  }, [avisoEmailAberto]);

  function abrirAvisoEmail() {
    setAvisoEmailAberto(true);
    setEmailCopiado("idle");
  }

  async function aoCopiarEmail() {
    const ok = await copiarTextoSeguro(destinatarioEmail);
    setEmailCopiado(ok ? "ok" : "erro");
  }

  const classeMenuBase =
    "absolute z-50 mt-2 w-56 rounded-xl border border-black/10 bg-white p-1 shadow-lg";
  const classeMenuPosicao =
    alinhamentoMenu === "direita" ? "right-0" : "left-0";

  return (
    <div ref={refWrapper} className="relative inline-flex">
      <button
        type="button"
        className={classNameBotao}
        aria-haspopup="menu"
        aria-expanded={aberto}
        aria-controls={idMenu}
        onClick={() => setAberto((valorAtual) => !valorAtual)}
      >
        {textoBotao}
      </button>

      {aberto ? (
        <div
          id={idMenu}
          role="menu"
          className={`${classeMenuBase} ${classeMenuPosicao}`}
        >
          <a
            role="menuitem"
            href={hrefWhatsApp}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-[var(--j2c-cor-superficie)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-cor-laranja)]"
            target={abrirWhatsAppEmNovaAba ? "_blank" : undefined}
            rel={abrirWhatsAppEmNovaAba ? "noopener noreferrer" : undefined}
            onClick={() => setAberto(false)}
          >
            Falar no WhatsApp
          </a>

          <a
            role="menuitem"
            href={hrefEmail}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-[var(--j2c-cor-superficie)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-cor-laranja)]"
            onClick={() => {
              // Não usar preventDefault para não atrapalhar o mailto:
              setAberto(false);
              abrirAvisoEmail();
            }}
          >
            Enviar E-mail
          </a>
        </div>
      ) : null}

      {avisoEmailAberto ? (
        <output
          aria-live="polite"
          className={`absolute z-40 mt-2 w-[min(28rem,90vw)] rounded-xl border border-black/10 bg-white p-3 shadow-lg ${
            alinhamentoMenu === "direita" ? "right-0" : "left-0"
          }`}
          style={{ top: "100%" }}
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

                {emailCopiado === "ok" ? (
                  <span className="text-xs font-semibold text-slate-700">
                    Copiado ✅
                  </span>
                ) : null}

                {emailCopiado === "erro" ? (
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
                setAvisoEmailAberto(false);
                setEmailCopiado("idle");
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
