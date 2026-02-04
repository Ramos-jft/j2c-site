// src/lib/email.ts
type BuildMailtoLinkParams = {
  destinatario: string;
  assunto?: string;
  corpo?: string;
};

export function buildMailtoLink({
  destinatario,
  assunto,
  corpo,
}: BuildMailtoLinkParams): string {
  const params = new URLSearchParams();

  if (assunto) params.set("subject", assunto);
  if (corpo) params.set("body", corpo);

  const query = params.toString();

  if (!query) return `mailto:${destinatario}`;
  return `mailto:${destinatario}?${query}`;
}
