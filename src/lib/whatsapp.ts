// src/lib/whatsapp.ts
function extrairPrimeiraMensagem(mensagem: string): string {
  const texto = (mensagem ?? "").trim();
  if (!texto) return "";

  // 1) Primeiro bloco (antes de uma linha em branco)
  const primeiroBloco = texto.split(/\n\s*\n/)[0].trim();

  // 2) Se ainda tiver o marcador, corta nele
  const indiceMarcador = primeiroBloco.toLowerCase().indexOf("para agilizar");
  const semInstrucao =
    indiceMarcador >= 0
      ? primeiroBloco.slice(0, indiceMarcador).trim()
      : primeiroBloco;

  // 3) Se estiver tudo na mesma linha (ex.: "Olá! ... Minha cidade/UF ..."),
  // mantém "Olá!" + a primeira frase após o "Olá!"
  if (semInstrucao.toLowerCase().startsWith("olá!")) {
    const resto = semInstrucao.slice("Olá!".length).trimStart();
    const fim = resto.search(/[.!?]/);
    if (fim >= 0) return `Olá! ${resto.slice(0, fim + 1).trim()}`;
    return `Olá! ${resto}`.trim();
  }

  // fallback: primeira frase
  const fim = semInstrucao.search(/[.!?]/);
  if (fim >= 0) return semInstrucao.slice(0, fim + 1).trim();
  return semInstrucao;
}

export function buildWhatsAppLink(telefone: string, mensagem: string): string {
  const digitos = (telefone ?? "").replaceAll(/\D/g, "");
  const primeiraMensagem = extrairPrimeiraMensagem(mensagem ?? "");
  const texto = encodeURIComponent(primeiraMensagem);

  return `https://wa.me/${digitos}?text=${texto}`;
}
