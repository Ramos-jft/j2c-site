"use client";

import { siteConfig } from "@/content/site";
import { buildCreaPublicSearchUrl, copyToClipboard } from "@/lib/crea";
import { useState } from "react";

type Props = { className?: string };

export function CreaPublicLink({ className }: Props) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  const number = siteConfig.crea.number;
  const url = buildCreaPublicSearchUrl(siteConfig.crea.publicSearchUrl);

  async function handleClick() {
    const ok = await copyToClipboard(number);
    setStatus(ok ? "copied" : "failed");

    // Abre a consulta pública oficial em nova aba
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const hint =
    status === "copied"
      ? "Número copiado. Na página do CREA-SP, cole no campo Registro e clique em Buscar."
      : status === "failed"
      ? "Não foi possível copiar automaticamente. Copie o número e prossiga na página do CREA-SP."
      : "Abrir consulta pública do CREA-SP (o número será copiado automaticamente).";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label="Abrir consulta pública do CREA-SP e copiar o número do registro"
      title={hint}
    >
      Consulta pública (autenticidade)
    </button>
  );
}
