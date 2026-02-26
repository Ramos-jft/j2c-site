type ParametrosEvento = Record<string, unknown>;

function obterGtag(): ((...args: unknown[]) => void) | null {
  if (globalThis.window === undefined) return null;

  const gtag = (globalThis as unknown as { gtag?: unknown }).gtag;
  return typeof gtag === "function"
    ? (gtag as (...args: unknown[]) => void)
    : null;
}

export function registrarConversaoGoogleAds(
  sendTo: string,
  parametros: ParametrosEvento = {},
) {
  const gtag = obterGtag();
  if (!gtag) return;

  const destino = (sendTo ?? "").trim();
  if (!destino) return;

  gtag("event", "conversion", {
    send_to: destino,
    ...parametros,
  });
}

export function registrarConversaoWhatsApp() {
  registrarConversaoGoogleAds(
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSAO_WHATSAPP_SEND_TO ?? "",
  );
}

export function registrarConversaoEmail() {
  registrarConversaoGoogleAds(
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSAO_EMAIL_SEND_TO ?? "",
  );
}
