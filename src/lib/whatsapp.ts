export function buildWhatsAppLink(telefone: string, mensagem: string): string {
  const digitos = (telefone ?? "").replaceAll(/\D/g, "");
  const texto = encodeURIComponent(mensagem ?? "");

  return `https://wa.me/${digitos}?text=${texto}`;
}
