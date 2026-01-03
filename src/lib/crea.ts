export function buildCreaPublicSearchUrl(baseUrl: string) {
  // Mantemos o baseUrl puro, porque o sistema do CREA-SP não documenta parâmetros de URL
  // para “buscar automaticamente”. A automação completa costuma ser bloqueada por reCAPTCHA/validação.
  return baseUrl;
}

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
