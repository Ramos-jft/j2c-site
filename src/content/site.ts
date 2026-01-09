export const siteConfig = {
  // Marca (o que aparece no site)
  name: "J2C Engenharia & Geotecnia",

  // Nome fantasia / uso em SEO (mantém compatibilidade com jsonld)
  tradeName: "J2C Engenharia e Geotecnia",

  // Razão social (se quiser diferenciar no futuro; por ora igual ao tradeName)
  legalName: "J2C Engenharia e Geotecnia",

  cnpj: "43.849.045/0001-48",

  // Nome do responsável (curto no header)
  responsible: "José Luiz Carneiro",

  crea: {
    uf: "SP",
    number: "5070949755",
    publicSearchUrl:
      "https://creanet1.creasp.org.br/_UI/Pages/ConsultaPublica/PesquisaProfissional/PesquisaProfissional.aspx",
  },

  // Dados exibidos na verificação (conforme print)
  creaPublicProfile: {
    professionalName: "JOSE LUIZ CARNEIRO DA SILVA",
    registrationStatus: "ATIVO",
    titles: ["ENGENHEIRO CIVIL", "ESPECIALISTA"],
    technicalResponsibilityNote:
      "Não foi encontrada nenhuma empresa sob responsabilidade técnica de JOSE LUIZ CARNEIRO DA SILVA (CREASP 5070949755).",
  },

  // Região / atuação
  location: "Campinas - SP",
  coverage: "Atendimento Nacional",
  emergencyCoverage: "Plantão 24h para emergências (até 300 km de Campinas/SP)",

  // Horário / SLA
  businessHours: "Seg–Sex, 08:00–17:00",
  responseSla: "Resposta em até 1 dia útil",

  // Endereço: como você não quer “endereço comercial completo”, deixamos só cidade/UF
  // (mantém compatibilidade e evita undefined no JSON-LD)
  address: {
    city: "Campinas",
    state: "SP",
    country: "BR",
  },

  contacts: {
    whatsapp: "+55 19 98398-9725",
    email: "jl.carneiro@j2c.eng.br",
    instagramHandle: "@j2c_engenharia",
    instagramUrl: "https://www.instagram.com/j2c_engenharia",

    // simulados (substituir quando o cliente enviar)
    linkedinUrl: "https://www.linkedin.com/company/j2c-engenharia-geotecnia",
    googleBusinessUrl: "https://g.page/r/SEU-PERFIL-AQUI",
  },

  siteUrl: "https://j2c.eng.br",
} as const;
