export type Service = {
  slug: string;
  title: string;
  short: string;
  keywords: string[];
  whenClientsLookForYou: string[];
  commonSegments: string[];
  typicalDeliverables: string[];
  typicalTimeline: string;
  clientProvides: string[];
};

export const services: Service[] = [
  {
    slug: "barragens",
    title: "Barragens (Segurança e Apoio Técnico)",
    short: "Apoio técnico, inspeções, levantamentos e relatórios para tomada de decisão e conformidade.",
    keywords: ["barragens", "segurança de barragens", "inspeção", "monitoramento", "relatório técnico"],
    whenClientsLookForYou: [
      "Necessidade de inspeção e diagnóstico para manutenção preventiva.",
      "Dúvidas sobre condições de estabilidade/segurança após chuvas intensas.",
      "Exigência de documentação técnica para auditoria/contratante.",
      "Implantação de rotina de monitoramento e registro fotogramétrico.",
    ],
    commonSegments: [
      "Empresas de mineração/industrial (operações com estruturas de contenção).",
      "Concessionárias e empresas de infraestrutura.",
      "Consultorias e engenharia (subcontratação técnica).",
      "Órgãos públicos e contratantes institucionais (quando aplicável).",
    ],
    typicalDeliverables: [
      "Relatório técnico com registros, evidências e recomendações.",
      "Levantamento topográfico/elevações (quando aplicável).",
      "Anotações e documentação para suporte à ART (quando necessário).",
    ],
    typicalTimeline: "5–15 dias úteis (depende de acesso, escopo e volume de dados).",
    clientProvides: [
      "Localização e acesso ao empreendimento.",
      "Documentos e histórico (quando houver).",
      "Contato do responsável local e restrições de segurança.",
    ],
  },
  {
    slug: "regularizacao-prefeitura",
    title: "Regularização junto à Prefeitura",
    short: "Apoio técnico e documentação para processos de regularização e conformidade.",
    keywords: ["regularização", "prefeitura", "documentação", "conformidade", "engenharia"],
    whenClientsLookForYou: [
      "Regularização de obra/terreno para aprovação ou atualização cadastral.",
      "Adequação de documentação técnica para exigências do município.",
      "Correções após apontamentos em processos anteriores.",
    ],
    commonSegments: ["Prefeituras (demandas internas)", "Construtoras", "Indústrias", "Proprietários e administradoras"],
    typicalDeliverables: [
      "Relatório técnico e memoriais (conforme necessidade).",
      "Pranchas e documentação de suporte (quando aplicável).",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline: "7–20 dias úteis (varia conforme exigências do processo).",
    clientProvides: ["Endereço e matrícula/inscrições (se houver)", "Plantas/arquivos existentes", "Histórico do processo e exigências recebidas"],
  },
  {
    slug: "drone-topografia-monitoramento",
    title: "Drone – Topografia e Monitoramento",
    short: "Levantamentos com drone para mapa, elevações, inspeção visual e acompanhamento de obras.",
    keywords: ["drone", "topografia", "monitoramento", "ortomosaico", "nuvem de pontos"],
    whenClientsLookForYou: [
      "Necessidade de levantamento rápido de área/elevações.",
      "Acompanhamento periódico do avanço de obra.",
      "Inspeção visual de áreas de difícil acesso.",
      "Base para estudos de implantação e movimentação de terra.",
    ],
    commonSegments: ["Construtoras", "Indústrias", "Infraestrutura", "Engenharia/arquitetura", "Prefeituras"],
    typicalDeliverables: [
      "Ortomosaico e imagens georreferenciadas (quando aplicável).",
      "Modelo digital de terreno/superfície (quando aplicável).",
      "Relatório técnico com metodologia e resultados.",
    ],
    typicalTimeline: "3–10 dias úteis (coleta + processamento).",
    clientProvides: ["Endereço/área de interesse", "Pontos de acesso e restrições locais", "Objetivo do levantamento (precisão/escala desejada)"],
  },
  {
    slug: "laudos-estabilidade-taludes",
    title: "Laudos de Estabilidade de Taludes",
    short: "Análise e laudo técnico para reduzir riscos, orientar contenções e suportar decisões.",
    keywords: ["taludes", "estabilidade", "laudo", "risco geotécnico", "fator de segurança"],
    whenClientsLookForYou: [
      "Aparecimento de trincas, erosões ou escorregamentos.",
      "Intervenções em corte/aterro que exigem validação técnica.",
      "Obra próxima a encostas com risco geotécnico.",
      "Exigência de laudo para seguradoras/contratantes.",
    ],
    commonSegments: ["Construtoras", "Indústrias", "Condomínios", "Prefeituras", "Infraestrutura"],
    typicalDeliverables: [
      "Laudo técnico com diagnóstico e recomendações.",
      "Relatório fotográfico e mapeamento de evidências.",
      "Memorial descritivo e orientações de mitigação (quando aplicável).",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline: "7–20 dias úteis (depende de investigações e dados).",
    clientProvides: ["Endereço e acesso", "Fotos/vídeos do problema", "Plantas/projetos existentes (se houver)", "Histórico de ocorrências e intervenções"],
  },
  {
    slug: "investigacao-geotecnica",
    title: "Investigação Geotécnica",
    short: "Coleta e interpretação de dados do solo para projeto seguro e econômico.",
    keywords: ["investigação geotécnica", "sondagem", "perfil de solo", "relatório geotécnico"],
    whenClientsLookForYou: [
      "Início de projeto de fundações/estrutura.",
      "Dúvidas sobre capacidade de suporte do solo.",
      "Necessidade de reduzir incerteza e risco de obra.",
    ],
    commonSegments: ["Construtoras", "Indústrias", "Infraestrutura", "Engenharia (projetistas)", "Loteamentos"],
    typicalDeliverables: [
      "Relatório geotécnico com interpretação e recomendações.",
      "Memorial e parâmetros de projeto (quando aplicável).",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline: "10–25 dias úteis (campo + consolidação).",
    clientProvides: ["Local e acesso", "Tipo de obra e cargas previstas (se disponível)", "Planta de locação/implantação (se houver)"],
  },
  {
    slug: "fundacoes",
    title: "Fundações",
    short: "Soluções e recomendações para fundações seguras, com base em dados do solo e cargas.",
    keywords: ["fundações", "sapatas", "estacas", "projeto de fundações", "memorial"],
    whenClientsLookForYou: [
      "Projeto novo exigindo definição do tipo de fundação.",
      "Reforço/adequação de fundação em obra existente.",
      "Inconsistência entre projeto e condições reais de solo.",
    ],
    commonSegments: ["Construtoras", "Indústrias", "Engenharia estrutural", "Infraestrutura"],
    typicalDeliverables: [
      "Memorial descritivo e recomendações técnicas.",
      "Relatório técnico de apoio ao projeto.",
      "Pranchas (quando aplicável).",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline: "10–20 dias úteis (varia com dados e interfaces do projeto).",
    clientProvides: ["Plantas/projeto estrutural (se houver)", "Informações de cargas", "Relatórios geotécnicos existentes (se houver)"],
  },
  {
    slug: "aterros-solos-moles",
    title: "Aterros em Solos Moles",
    short: "Análise e recomendações para reduzir recalques e riscos em aterros sobre solos compressíveis.",
    keywords: ["solos moles", "aterro", "recalque", "melhoramento de solo", "estabilidade"],
    whenClientsLookForYou: [
      "Aterros com risco de recalque excessivo.",
      "Obra em área com histórico de baixa capacidade de suporte.",
      "Necessidade de plano de execução e controle.",
    ],
    commonSegments: ["Infraestrutura", "Construtoras", "Indústrias", "Loteamentos"],
    typicalDeliverables: [
      "Relatório técnico com recomendações e critérios.",
      "Plano de controle/monitoramento (quando aplicável).",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline: "10–25 dias úteis (depende de dados e controles).",
    clientProvides: ["Local e croqui", "Cotas/volumes previstos", "Histórico do terreno (se houver)", "Prazos e restrições de obra"],
  },
  {
    slug: "muros-de-contencao",
    title: "Muros de Contenção",
    short: "Avaliação, recomendações e suporte técnico para contenções e estabilização.",
    keywords: ["muro de contenção", "contenção", "estabilidade", "drenagem", "talude"],
    whenClientsLookForYou: [
      "Risco de deslizamento em cortes/aterros.",
      "Necessidade de contenção em obra urbana.",
      "Patologias em contenção existente (trincas, deformações, drenagem).",
    ],
    commonSegments: ["Construtoras", "Condomínios", "Indústrias", "Obras urbanas", "Prefeituras"],
    typicalDeliverables: [
      "Relatório/laudo técnico (conforme caso).",
      "Memorial e recomendações de intervenção (quando aplicável).",
      "Pranchas (quando aplicável).",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline: "7–20 dias úteis (varia conforme vistoria e dados).",
    clientProvides: ["Endereço e acesso", "Fotos/vídeos", "Projetos existentes (se houver)", "Histórico de intervenções e drenagem"],
  },
];
