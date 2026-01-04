"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";
import { buildCreaPublicSearchUrl, copyToClipboard } from "@/lib/crea";

type CopyStatus = "idle" | "copied" | "failed";

type Props = Readonly<{
  className?: string;
}>;

function getHint(status: CopyStatus) {
  switch (status) {
    case "copied":
      return "Número do CREA copiado. Abrindo consulta pública...";
    case "failed":
      return "Não foi possível copiar automaticamente. Abrindo consulta pública...";
    default:
      return "Abrir consulta pública do CREA-SP (o número será copiado automaticamente).";
  }
}

export function CreaPublicLink({ className }: Props) {
  const [status, setStatus] = useState<CopyStatus>("idle");

  const number = siteConfig.crea.number;
  const url = buildCreaPublicSearchUrl(siteConfig.crea.publicSearchUrl);

  const hint = getHint(status);

  function handleClick() {
    // Abre primeiro (evita bloqueio por popup quando há await)
    const win = window.open(url, "_blank", "noopener,noreferrer");

    copyToClipboard(number)
      .then((ok) => setStatus(ok ? "copied" : "failed"))
      .catch(() => setStatus("failed"))
      .finally(() => {
        globalThis.setTimeout(() => setStatus("idle"), 2500);
      });

    // Fallback se popup for bloqueado
    if (!win) globalThis.location.assign(url);
  }

  const mergedClassName = ["cursor-pointer", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      onClick={handleClick}
      className={mergedClassName}
      aria-label="Abrir consulta pública do CREA-SP e copiar o número do registro"
      title={hint}
    >
      Consulta pública (autenticidade)
    </button>
  );
}
