// src/lib/email.ts
type BuildMailtoLinkParams = {
  destinatario: string;
  assunto?: string;

  // Mantido apenas para compatibilidade (não será usado).
  // Se preferir, pode remover do tipo depois que ajustar os callers.
  corpo?: string;
};

export function buildMailtoLink({
  destinatario,
  assunto,
}: BuildMailtoLinkParams): string {
  const email = (destinatario ?? "").trim();
  const assuntoLimpo = (assunto ?? "").trim();

  if (!assuntoLimpo) return `mailto:${email}`;

  // encodeURIComponent usa %20 (não +) e funciona melhor em mailto:
  return `mailto:${email}?subject=${encodeURIComponent(assuntoLimpo)}`;
}
