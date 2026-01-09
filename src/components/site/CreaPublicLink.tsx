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
      return "Número do CREA copiado. Abrindo a consulta pública...";
    case "failed":
      return "Não foi possível copiar automaticamente. Abrindo a consulta pública...";
    default:
      return "Abrir consulta pública do CREA-SP e copiar o número do registro.";
  }
}

export function CreaPublicLink({ className }: Props) {
  const [status, setStatus] = useState<CopyStatus>("idle");

  const number = siteConfig.crea.number;
  const url = buildCreaPublicSearchUrl(siteConfig.crea.publicSearchUrl);
  const hint = getHint(status);

  function handleClick() {
    const win = window.open(url, "_blank", "noopener,noreferrer");

    copyToClipboard(number)
      .then((ok) => setStatus(ok ? "copied" : "failed"))
      .catch(() => setStatus("failed"))
      .finally(() => {
        globalThis.setTimeout(() => setStatus("idle"), 2500);
      });

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
      aria-label="Copiar número do CREA e abrir a consulta pública do CREA-SP"
      title={hint}
    >
      Copiar CREA e abrir consulta
    </button>
  );
}
