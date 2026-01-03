export function buildWhatsAppLink(phone: string, message: string) {
  const digits = phone.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}
