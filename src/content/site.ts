export const siteConfig = {
  name: "J2C Engenharia & Geotecnia",
  legalName: "J2C Engenharia e Geotecnia",
  cnpj: "43.849.045/0001-48",

  // Nome de apresentação no site (pode ser encurtado)
  responsible: "José Luiz Carneiro",

  crea: {
    uf: "SP",
    number: "5070949755",
    publicSearchUrl:
      "https://creanet1.creasp.org.br/_UI/Pages/ConsultaPublica/PesquisaProfissional/PesquisaProfissional.aspx",
  },

  // Dados que devem aparecer “exatamente como no print” na seção de autenticidade
  creaPublicProfile: {
    professionalName: "JOSE LUIZ CARNEIRO DA SILVA",
    registrationStatus: "ATIVO",
    titles: ["ENGENHEIRO CIVIL", "ESPECIALISTA"],
    technicalResponsibilityNote:
      "Não foi encontrada nenhuma empresa sob responsabilidade técnica de JOSE LUIZ CARNEIRO DA SILVA (CREASP 5070949755).",
  },

  location: "Campinas - SP",
  coverage: "Atendimento Nacional",
  businessHours: "Seg–Sex, 08:00–18:00", // simulado
  responseSla: "Resposta média em até 1 dia útil", // simulado

  contacts: {
    whatsapp: "+55 19 98398-9725",
    email: "jl.carneiro@outlook.com.br",
    instagramHandle: "@j2c_engenharia",
    instagramUrl: "https://www.instagram.com/j2c_engenharia",

    // simulados (substituir quando o cliente enviar)
    linkedinUrl: "https://www.linkedin.com/company/j2c-engenharia-geotecnia",
    googleBusinessUrl: "https://g.page/r/SEU-PERFIL-AQUI",
  },

  siteUrl: "https://j2c.eng.br",
} as const;
