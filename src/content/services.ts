export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceCta = {
  label: string;
  whatsappMessage: string;
};

export type ImagemGaleriaServico = {
  src: string;
  alt: string;
  legenda?: string;
};

export type CasoPortfolio = {
  id: string;
  titulo: string;
  periodo?: string;
  localidadeAproximada?: string;

  resumo: string;
  destaques: string[];

  imagens?: ImagemGaleriaServico[];
};

export type Service = {
  slug: string;
  title: string;
  short: string;

  seoTitle: string;
  seoDescription: string;

  keywords: string[];

  // Texto “explicativo” (2026) para SEO + conversão (sem juridiquês)
  overview: string;

  // Passo a passo de execução (alto nível)
  howItWorks: string[];

  whenClientsLookForYou: string[];
  commonSegments: string[];
  typicalDeliverables: string[];
  typicalTimeline: string;
  clientProvides: string[];

  galeria?: ImagemGaleriaServico[];
  casosPortfolio?: CasoPortfolio[];

  cta: ServiceCta;
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "barragens",
    title: "Barragens (Segurança e Apoio Técnico)",
    short:
      "Apoio técnico, inspeções, levantamentos e relatórios para decisão segura, registro e conformidade.",
    seoTitle: "Barragens: inspeções, levantamentos e relatórios | J2C",
    seoDescription:
      "Apoio técnico em barragens: inspeções, monitoramento, levantamentos e relatórios com recomendações objetivas. Atendimento nacional e plantão 24h (até 300 km de Campinas/SP).",
    keywords: [
      "barragens",
      "segurança de barragens",
      "inspeção",
      "monitoramento",
      "relatório técnico",
      "SNISB",
      "PNSB",
    ],
    overview:
      "Barragens exigem leitura de risco com base em evidências e registros consistentes. Atuamos com inspeções técnicas, levantamentos (quando aplicável) e relatórios claros para apoiar decisões de manutenção, operação e atendimento a exigências de contratantes e órgãos. O foco é reduzir incerteza: identificar anomalias, registrar condições de campo e orientar prioridades de intervenção com comunicação objetiva.",
    howItWorks: [
      "Alinhamento do objetivo (rotina, evento crítico, auditoria, apoio a decisão) e definição do escopo.",
      "Planejamento de campo e checklist de evidências (condições, anomalias, acessos, segurança).",
      "Inspeção técnica e registros (fotografia, mapeamentos e medições conforme necessidade).",
      "Consolidação e análise: comparação com histórico, leitura de evolução e criticidade.",
      "Relatório técnico: achados, evidências, recomendações e próximos passos.",
    ],
    whenClientsLookForYou: [
      "Necessidade de inspeção e diagnóstico para manutenção preventiva.",
      "Dúvidas sobre estabilidade/segurança após chuvas intensas ou ocorrência atípica.",
      "Exigência de documentação técnica para auditoria, contratante ou gestão interna.",
      "Implantação de rotina de monitoramento e registro fotogramétrico (quando aplicável).",
    ],
    commonSegments: [
      "Operadores com estruturas de contenção e reservação.",
      "Infraestrutura e concessionárias.",
      "Consultorias de engenharia (apoio técnico especializado).",
      "Contratantes institucionais (quando aplicável).",
    ],
    typicalDeliverables: [
      "Relatório técnico com achados, evidências e recomendações priorizadas.",
      "Registro fotográfico e checklist de inspeção (conforme escopo).",
      "Levantamentos/medições e mapas (quando aplicável).",
      "Suporte para reunião técnica de decisão (quando necessário).",
    ],
    typicalTimeline:
      "5–15 dias úteis (varia por acesso, escopo, volume de dados e necessidade de processamento).",
    clientProvides: [
      "Localização e condições de acesso.",
      "Documentos e histórico (quando houver).",
      "Contato do responsável local e regras de segurança.",
      "Objetivo claro (rotina / evento / auditoria / decisão).",
    ],

    // ✅ Amostra dos 2 casos (serviço "Barragens")
    galeria: [
      // Caso existente (amostra)
      {
        src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/barragem-5.png",
        alt: "Perfis de análise e resultados de estabilidade (modelagem 2D).",
        legenda: "Caso 1: modelagem 2D e resultados de estabilidade.",
      },
      {
        src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/barragem-4.png",
        alt: "Vista do reservatório durante inspeção.",
        legenda: "Caso 1: registro visual do reservatório durante a vistoria.",
      },
      {
        src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/barragem-3.png",
        alt: "Inspeção de dispositivo de drenagem.",
        legenda: "Caso 1: condição observada em elemento de drenagem.",
      },

      // Caso novo (amostra)
      {
        src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/fig-01.png",
        alt: "Figura técnica: seção/perfil considerado na análise de estabilidade do talude.",
        legenda: "Caso 2: figura técnica do perfil analisado.",
      },
      {
        src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/antes-01.JPG",
        alt: "Condição inicial do talude e drenagem (antes).",
        legenda: "Caso 2: condição inicial (antes).",
      },
      {
        src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/depois-01.JPG",
        alt: "Pós-intervenção: recomposição/berma de equilíbrio (depois).",
        legenda: "Caso 2: pós-intervenção (depois).",
      },
    ],

    casosPortfolio: [
      // ✅ Caso JÁ EXISTENTE (mantido)
      {
        id: "barragem-terra-analise-estabilidade-2024",
        titulo: "Análise de Estabilidade e Drenagem — Barragem de Terra",
        periodo: "2024",
        localidadeAproximada: "Interior de SP",
        resumo:
          "Parecer técnico para avaliação de uma barragem de terra associada a lagoa de retenção, com inspeção em campo, registros por drone, interpretação de sondagens SPT e uso de topografia para modelagem 2D. Foram analisados perfis representativos do barramento, verificada a estabilidade global por critério normativo e emitidas recomendações práticas para drenagem e monitoramento.",
        destaques: [
          "Inspeção técnica em campo + registro visual com drone (VANT).",
          "Integração de sondagens SPT e topografia para perfis geotécnicos.",
          "Análise de estabilidade 2D e verificação por critério da NBR 11682.",
          "Estabilidade adequada nos perfis analisados e plano de ações recomendado.",
          "Recomendações: melhorias de drenagem, instrumentação e monitoramento periódico.",
        ],
        imagens: [
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/barragem-5.png",
            alt: "Perfis de análise e resultados de estabilidade (modelagem 2D).",
            legenda:
              "Perfis de análise e resultados de estabilidade (modelagem 2D).",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/barragem-4.png",
            alt: "Vista do reservatório durante inspeção.",
            legenda: "Registro visual do reservatório no momento da vistoria.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/barragem-3.png",
            alt: "Inspeção de dispositivo de drenagem.",
            legenda: "Registro em campo: condição do dispositivo de drenagem.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/barragem-2.png",
            alt: "Traçado dos perfis avaliados (visão geral).",
            legenda: "Visão geral dos perfis considerados na análise.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/barragem-1.png",
            alt: "Perfis analisados na verificação de estabilidade (modelagem 2D).",
            legenda:
              "Perfis de análise e resultados de estabilidade (modelagem 2D).",
          },
        ],
      },

      // ✅ NOVO CASO (do PDF): talude da lagoa de retenção — com TODAS as imagens
      {
        id: "talude-lagoa-retencao-analise-estabilidade-2024",
        titulo: "Análise de Estabilidade — Talude de Lagoa de Retenção",
        periodo: "2024",
        localidadeAproximada: "Interior de SP",
        resumo:
          "Parecer técnico para avaliação da estabilidade do talude de uma lagoa de retenção, com definição de seções críticas, uso de dados de sondagens SPT e topografia, e modelagem 2D para verificação de fator de segurança por critério normativo. O trabalho consolidou constatações de campo, avaliou estabilidade global e local e definiu recomendações objetivas para drenagem, instrumentação e monitoramento.",
        destaques: [
          "Análises realizadas nas seções transversais consideradas mais críticas (4 perfis).",
          "Modelagem 2D em software especializado, com método de Bishop simplificado e superfícies circulares de ruptura.",
          "Comparação dos resultados com os fatores de segurança recomendados pela NBR 11682 (Estabilidade de Encostas).",
          "Conclusão de estabilidade global adequada, com atenção a ponto local associado a nível d’água elevado e necessidade de drenagem.",
          "Registro de medida emergencial com recomposição a jusante e berma de equilíbrio elevando a segurança local.",
          "Recomendações: projeto/adequação de drenagem do vertedouro, dreno na berma de alívio e programa de instrumentação/monitoramento (NA e marco referencial).",
        ],
        imagens: [
          // Figuras técnicas
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/fig-01.png",
            alt: "Figura técnica: seção/perfil considerado na análise de estabilidade do talude.",
            legenda: "Figura técnica: seção/perfil adotado na análise.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/fig-02.png",
            alt: "Figura técnica: parâmetros e/ou resultados apresentados para a análise de estabilidade.",
            legenda:
              "Figura técnica: parâmetros/resultados apresentados no estudo.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/antes-01.JPG",
            alt: "Condição inicial do talude e área de drenagem (antes).",
            legenda: "Antes: condição inicial observada em campo.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/antes-02.JPG",
            alt: "Condição inicial do talude (antes): detalhe de área com influência de água.",
            legenda: "Antes: detalhe observado em campo e influência de água.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/antes-03.JPG",
            alt: "Condição inicial do talude (antes): visão complementar do trecho inspecionado.",
            legenda: "Antes: visão complementar do trecho inspecionado.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/antes-04.JPG",
            alt: "Condição inicial do talude (antes): registro complementar do local.",
            legenda: "Antes: registro complementar do local.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/antes-05.JPG",
            alt: "Condição inicial do talude (antes): registro complementar do local e entorno.",
            legenda: "Antes: registro complementar do local e entorno.",
          },

          // Depois (todas)
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/depois-01.JPG",
            alt: "Pós-intervenção: recomposição e berma de equilíbrio (depois).",
            legenda: "Depois: recomposição e berma de equilíbrio.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/depois-02.JPG",
            alt: "Pós-intervenção: condição do talude após medidas emergenciais (depois).",
            legenda: "Depois: condição do talude após medidas emergenciais.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/depois-03.JPG",
            alt: "Pós-intervenção: vista complementar do talude após recomposição.",
            legenda: "Depois: vista complementar após recomposição.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/depois-04.JPG",
            alt: "Pós-intervenção: detalhe do trecho corrigido.",
            legenda: "Depois: detalhe do trecho corrigido.",
          },
          {
            src: "/portfolio/barragens/barragem-terra-analise-estabilidade-2024/depois-05.JPG",
            alt: "Pós-intervenção: registro complementar do local após correções.",
            legenda: "Depois: registro complementar após correções.",
          },
        ],
      },
    ],

    cta: {
      label: "Falar sobre Barragens",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para BARRAGENS (apoio técnico/inspeção).`,
    },
    faqs: [
      {
        q: "Vocês atendem emergências?",
        a: "Sim. Há plantão 24h para emergências em até 300 km de Campinas/SP. Para outras regiões, alinhamos logística e prioridade conforme cenário.",
      },
      {
        q: "O relatório vem com recomendações práticas?",
        a: "Sim. O padrão é entregar achados com evidências e recomendações priorizadas (curto/médio prazo), para facilitar decisão e execução.",
      },
      {
        q: "Precisa ter histórico para vocês avaliarem?",
        a: "Ajuda, mas não é obrigatório. Sem histórico, estruturamos o registro inicial e orientamos como criar uma linha de base de monitoramento.",
      },
    ],
  },

  {
    slug: "regularizacao-prefeitura",
    title: "Regularização junto à Prefeitura",
    short:
      "Apoio técnico e documentação para processos de regularização e conformidade (conforme exigências locais).",
    seoTitle: "Regularização na Prefeitura: apoio técnico e documentação | J2C",
    seoDescription:
      "Regularização junto à Prefeitura: triagem de exigências, visitas técnicas, memoriais e documentação de suporte. Atendimento nacional.",
    keywords: [
      "regularização",
      "prefeitura",
      "documentação técnica",
      "conformidade",
      "memorial descritivo",
      "as built",
    ],
    overview:
      "Processos de regularização variam por município, mas quase sempre exigem organização técnica: leitura das exigências, levantamento do que existe, adequação documental e comunicação clara. Atuamos na triagem do processo, vistoria técnica e preparação de documentação de suporte (memoriais, relatórios e peças técnicas quando aplicável) para reduzir retrabalho e acelerar o andamento.",
    howItWorks: [
      "Leitura das exigências e do status do processo (o que falta e por quê).",
      "Vistoria e levantamento do que existe (as built quando aplicável).",
      "Preparação da documentação técnica de suporte conforme o caso.",
      "Checklist final e entrega orientada para protocolo/andamento.",
      "Ajustes rápidos em caso de novas exigências (quando necessário).",
    ],
    whenClientsLookForYou: [
      "Regularização de obra/terreno para aprovação ou atualização cadastral.",
      "Adequação de documentação técnica para exigências do município.",
      "Correções após apontamentos em processos anteriores.",
    ],
    commonSegments: [
      "Proprietários e administradoras.",
      "Construtoras e incorporadoras.",
      "Indústrias e comércios.",
      "Demandas técnicas internas (quando aplicável).",
    ],
    typicalDeliverables: [
      "Relatório técnico e memorial descritivo (conforme necessidade).",
      "Peças técnicas de suporte (quando aplicável).",
      "Checklist de exigências atendidas + pendências e riscos.",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline:
      "7–20 dias úteis (varia conforme exigências e disponibilidade de documentos/levantamentos).",
    clientProvides: [
      "Endereço, matrícula/inscrições (se houver).",
      "Plantas/arquivos existentes (se houver).",
      "Histórico do processo, exigências recebidas e prazos.",
    ],
    cta: {
      label: "Falar sobre Regularização",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para REGULARIZAÇÃO junto à Prefeitura.`,
    },
    faqs: [
      {
        q: "Vocês conseguem dizer exatamente o que a Prefeitura vai exigir?",
        a: "Podemos estimar com base no tipo de caso, mas exigências mudam por município e por processo. O trabalho começa pela leitura formal do que foi solicitado e pela triagem técnica.",
      },
      {
        q: "É possível fazer sem plantas antigas?",
        a: "Sim. Em muitos casos fazemos levantamento do que existe e montamos a base documental necessária.",
      },
      {
        q: "Vocês acompanham ajustes se vierem novas exigências?",
        a: "Sim. Mantemos o processo “vivo” com ajustes rápidos, desde que dentro do escopo combinado.",
      },
    ],
  },

  {
    slug: "drone-topografia-monitoramento",
    title: "Drone – Mapeamento e Monitoramento",
    short:
      "Mapeamento e monitoramento com drone: ortomosaico, modelos digitais e inspeção visual com rapidez e rastreabilidade.",
    seoTitle: "Levantamento com Drone: mapeamento e monitoramento | J2C",
    seoDescription:
      "Drone para mapeamento e monitoramento: ortomosaico, modelos digitais, nuvem de pontos e relatórios. Operação alinhada às regras vigentes (ANAC/DECEA/ANATEL).",
    keywords: [
      "drone",
      "monitoramento",
      "ortomosaico",
      "nuvem de pontos",
      "modelo digital",
      "SARPAS",
      "RBAC-E 94",
    ],
    overview:
      "Levantamentos com drone reduzem tempo de campo e aumentam cobertura visual e rastreabilidade, especialmente em áreas extensas ou de difícil acesso. Entregamos produtos compatíveis com engenharia (ortomosaico, modelos digitais e relatórios) para apoiar tomada de decisão, medições, acompanhamento de obra e documentação técnica.",
    howItWorks: [
      "Briefing do objetivo (medição, acompanhamento, inspeção, base para projeto) e definição da área.",
      "Planejamento do voo e checagens operacionais (segurança e restrições locais).",
      "Coleta em campo, com registro e controle de qualidade.",
      "Processamento e geração de produtos (conforme escopo).",
      "Entrega organizada + orientação de uso e, se necessário, comparativos por período.",
    ],
    whenClientsLookForYou: [
      "Necessidade de levantamento rápido de área/elevações.",
      "Acompanhamento periódico do avanço de obra.",
      "Inspeção visual de áreas de difícil acesso.",
      "Base para estudos de implantação e movimentação de terra.",
    ],
    commonSegments: [
      "Construtoras e incorporadoras.",
      "Indústrias e áreas operacionais.",
      "Infraestrutura e obras lineares.",
      "Engenharia e arquitetura (apoio a projeto).",
      "Prefeituras (quando aplicável).",
    ],
    typicalDeliverables: [
      "Ortomosaico e imagens organizadas (quando aplicável).",
      "Modelo digital de superfície/terreno (quando aplicável).",
      "Relatório técnico com metodologia e limitações.",
      "Comparativos de evolução (quando monitoramento periódico).",
    ],
    typicalTimeline:
      "3–10 dias úteis (coleta + processamento; depende de área, clima e escopo).",
    clientProvides: [
      "Endereço/área de interesse.",
      "Restrições locais e pontos de acesso.",
      "Objetivo do levantamento (precisão/escala desejada).",
      "Janela de operação (datas e horários possíveis).",
    ],
    cta: {
      label: "Falar sobre Drone",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para LEVANTAMENTO COM DRONE (mapeamento/monitoramento).`,
    },
    faqs: [
      {
        q: "Vocês operam seguindo as regras vigentes?",
        a: "Sim. A operação é planejada e executada conforme regras aplicáveis e restrições locais (incluindo autorizações quando necessárias).",
      },
      {
        q: "Dá para monitorar evolução por período?",
        a: "Sim. Organizamos capturas comparáveis (padrão de enquadramento/área) para evidenciar avanço de obra e alterações.",
      },
      {
        q: "Clima interfere?",
        a: "Sim. Vento/chuva e visibilidade afetam segurança e qualidade. Se necessário, reagendamos a coleta para manter o padrão de entrega.",
      },
    ],
  },

  {
    slug: "laudos-estabilidade-taludes",
    title: "Laudos de Estabilidade de Taludes",
    short:
      "Diagnóstico e recomendações para reduzir riscos em encostas, cortes/aterros e áreas com sinais de instabilidade.",
    seoTitle: "Laudo de Estabilidade de Taludes e Encostas | J2C",
    seoDescription:
      "Laudos e análises de estabilidade de taludes: vistoria técnica, mapeamento de evidências e recomendações para mitigação de risco. Atendimento nacional e plantão 24h (até 300 km).",
    keywords: [
      "taludes",
      "estabilidade",
      "laudo",
      "risco geotécnico",
      "fator de segurança",
      "encostas",
      "contenção",
    ],
    overview:
      "Trincas, erosões, deformações e surgências são sinais que merecem resposta técnica rápida. O laudo de estabilidade orienta o que é risco imediato, o que é evolução lenta e quais intervenções reduzem probabilidade de escorregamentos. Entregamos diagnóstico com evidências, leitura de mecanismos prováveis e recomendações executáveis, com priorização por risco.",
    howItWorks: [
      "Triagem (sintomas, histórico, chuvas/eventos e contexto da obra).",
      "Vistoria técnica e mapeamento de evidências (fissuras, drenagem, geometria, solo exposto).",
      "Análise e enquadramento do risco (causas prováveis e cenários).",
      "Recomendações: drenagem, contenções, correções geométricas e medidas de controle.",
      "Relatório/laudo com orientações de curto e médio prazo.",
    ],
    whenClientsLookForYou: [
      "Aparecimento de trincas, erosões ou escorregamentos.",
      "Intervenções em corte/aterro que exigem validação técnica.",
      "Obra próxima a encostas com risco geotécnico.",
      "Exigência de laudo por contratantes/seguradoras.",
    ],
    commonSegments: [
      "Construtoras e obras urbanas.",
      "Indústrias e áreas com cortes/aterros.",
      "Condomínios e áreas residenciais.",
      "Prefeituras e infraestrutura (quando aplicável).",
    ],
    typicalDeliverables: [
      "Laudo técnico com diagnóstico e recomendações priorizadas.",
      "Relatório fotográfico e mapeamento de evidências.",
      "Orientações de mitigação (drenagem, contenção, manutenção).",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline:
      "7–20 dias úteis (varia conforme necessidade de dados complementares e escopo).",
    clientProvides: [
      "Endereço e acesso.",
      "Fotos/vídeos e histórico (chuvas, intervenções, ocorrências).",
      "Plantas/projetos existentes (se houver).",
      "Restrições de segurança e contato local.",
    ],

    galeria: [
      {
        src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-02.png",
        alt: "Vista geral do canteiro e das áreas vistoriadas.",
        legenda:
          "Vista geral do canteiro e das áreas vistoriadas (registro aéreo parcial).",
      },
      {
        src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-07.png",
        alt: "Canaleta de drenagem em berma com sinais de fissuras/desgaste.",
        legenda:
          "Canaleta de drenagem em berma: sinais de fissuras e desgaste.",
      },
      {
        src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-08.png",
        alt: "Indícios de trincas e escorregamentos superficiais em talude.",
        legenda:
          "Talude com indícios de trincas e escorregamentos superficiais.",
      },
      {
        src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-05.png",
        alt: "Escada hidráulica com aberturas e avarias nas paredes laterais.",
        legenda:
          "Escada hidráulica: aberturas laterais e avarias observadas em campo.",
      },
      {
        src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-12.png",
        alt: "Poço de retardo em fase de execução (escavação e estruturas iniciais).",
        legenda:
          "Poço de retardo em execução: escavação e estruturas iniciais.",
      },
    ],

    casosPortfolio: [
      {
        id: "inspecao-inicial-drenagem-escada-taludes-2025",
        titulo:
          "Inspeção inicial — Taludes, drenagem de bermas e escada hidráulica",
        periodo: "2025",
        localidadeAproximada: "Região metropolitana de SP",
        resumo:
          "Visita técnica para avaliar a conformidade da execução de terraplenagem e drenagem em andamento, com registro fotográfico terrestre e aéreo (parcial, por condições climáticas). Foram mapeadas patologias compatíveis com escorregamento superficial em taludes, além de avarias e obstruções em elementos de drenagem (canaletas de berma) e na escada hidráulica existente. O resultado foi um parecer técnico preliminar com priorização de manutenção/correções para reduzir risco geotécnico e preservar a eficiência hidráulica.",
        destaques: [
          "Condições adversas (chuva e vento): registro aéreo parcial e necessidade de complementação em nova visita.",
          "Taludes com fissuras longitudinais/transversais, perda de vegetação e pontos com acúmulo de água na base — indícios de instabilidade localizada.",
          "Canaletas de drenagem em bermas com sedimentos, vegetação e rachaduras, comprometendo o escoamento superficial.",
          "Escada hidráulica existente com avarias (desagregação de concreto, armaduras expostas, fissuras e obstruções no canal).",
          "Poço de retardo em fase de execução; interface hidráulica não conclusiva no momento da vistoria.",
        ],
        imagens: [
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-01.png",
            alt: "Mapa de referência das áreas vistoriadas (G100/G200), sem informações sensíveis.",
            legenda:
              "Referência das áreas vistoriadas (G100/G200) e localização das ocorrências observadas.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-02.png",
            alt: "Vista aérea parcial do local inspecionado.",
            legenda:
              "Registro aéreo parcial do local inspecionado (condições climáticas limitaram a operação).",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-03.png",
            alt: "Saída de drenagem com falhas construtivas e indícios de adensamento/compactação inadequada.",
            legenda:
              "Saída de drenagem: ausência de proteção lateral e evidências de compactação/adensamento sobre tubulação.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-04.png",
            alt: "Drenagem de berma e talude com indícios de escorregamento e recomposição superficial.",
            legenda:
              "Drenagem de berma e talude: indícios de escorregamento superficial e recomposição.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-05.png",
            alt: "Escada hidráulica: vista superior, aberturas laterais e avarias em paredes.",
            legenda:
              "Escada hidráulica: aberturas laterais e avarias observadas no trecho vistoriado.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-06.png",
            alt: "Escada hidráulica: rompimento/local sem dissipação e falta de uniformidade geométrica.",
            legenda:
              "Escada hidráulica: trecho sem dissipação e com avarias associadas.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-07.png",
            alt: "Canaleta de berma: sinais de fissuras e pontos de descontinuidade.",
            legenda:
              "Canaleta de berma: sinais de fissuras e descontinuidades.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-08.png",
            alt: "Talude recomposto com indícios de desgaste e escorregamentos.",
            legenda:
              "Talude recomposto: indícios de desgaste e escorregamentos superficiais.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-09.png",
            alt: "Escada hidráulica em construção: registro de execução e trincas pontuais acima do trecho.",
            legenda:
              "Escada hidráulica em construção: registro de execução e condições do entorno.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-10.png",
            alt: "Vista geral do canteiro com indicação de áreas e elementos de drenagem.",
            legenda:
              "Vista geral do canteiro: referências de áreas e elementos de drenagem avaliados.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-11.png",
            alt: "Drenagem pluvial em torno de área de obra (valas/canais).",
            legenda:
              "Drenagem pluvial em torno de área de obra: registros de campo.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-12.png",
            alt: "Poço de retardo 1: fase de execução com acesso e base preparada.",
            legenda: "Poço de retardo 1 em execução: acesso e base do escavo.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-13.png",
            alt: "Poço de retardo 2: fase de concretagem e instalação de manilhas.",
            legenda:
              "Poço de retardo 2: etapa de concretagem e instalação de manilhas.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-14.png",
            alt: "Registros complementares de drenagem e condições de talude no entorno.",
            legenda:
              "Registros complementares do sistema de drenagem e do talude no entorno.",
          },
          {
            src: "/portfolio/laudos-estabilidade-taludes/inspecao-inicial-drenagem-escada-taludes-2025/figura-15.png",
            alt: "Vista geral complementar do canteiro.",
            legenda:
              "Vista geral complementar do canteiro (registro de apoio).",
          },
        ],
      },
    ],

    cta: {
      label: "Falar sobre Taludes",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para LAUDO/AVALIAÇÃO DE TALUDE/ENCOSTA.`,
    },
    faqs: [
      {
        q: "Vocês atendem urgência?",
        a: "Sim. Plantão 24h para emergências em até 300 km de Campinas/SP. Em outros locais, alinhamos logística para atendimento prioritário.",
      },
      {
        q: "O laudo já indica o que fazer primeiro?",
        a: "Sim. Priorizamos medidas de segurança imediata e ações de mitigação que reduzam risco de forma prática.",
      },
      {
        q: "Drenagem entra nas recomendações?",
        a: "Sim. Drenagem é frequentemente crítica em instabilidades; avaliamos sinais e indicamos soluções compatíveis com o caso.",
      },
    ],
  },

  {
    slug: "investigacao-geotecnica",
    title: "Investigação Geotécnica",
    short:
      "Dados do solo para projeto mais seguro e econômico: planejamento, interpretação e relatório geotécnico.",
    seoTitle: "Investigação Geotécnica: dados do solo para projeto | J2C",
    seoDescription:
      "Investigação geotécnica para reduzir risco e incerteza em obras: planejamento, dados de campo e relatório com recomendações. Atendimento nacional.",
    keywords: [
      "investigação geotécnica",
      "sondagem",
      "SPT",
      "perfil de solo",
      "relatório geotécnico",
    ],
    overview:
      "Projetar sem conhecer o solo aumenta risco de custo e retrabalho. A investigação geotécnica define o que existe no subsolo e orienta decisões de fundações, contenções e movimentação de terra. Nosso foco é transformar dados de campo em recomendação: interpretação do perfil, parâmetros e leitura de risco, com relatório objetivo para apoiar o projetista e o planejamento da obra.",
    howItWorks: [
      "Definição do objetivo (tipo de obra, cargas, riscos e decisões que o dado precisa suportar).",
      "Planejamento de pontos/quantidade e logística de campo.",
      "Coleta de dados e controle de qualidade.",
      "Interpretação e consolidação: perfil, camadas, variabilidade e recomendações.",
      "Relatório final com orientações e limitações do escopo.",
    ],
    whenClientsLookForYou: [
      "Início de projeto de fundações/estrutura.",
      "Dúvidas sobre capacidade de suporte do solo.",
      "Necessidade de reduzir incerteza e risco de obra.",
    ],
    commonSegments: [
      "Construtoras e incorporadoras.",
      "Indústrias e infraestrutura.",
      "Projetistas de estruturas e fundações.",
      "Loteamentos e obras urbanas.",
    ],
    typicalDeliverables: [
      "Relatório geotécnico com interpretação e recomendações.",
      "Parâmetros de projeto (quando aplicável).",
      "Orientações para fundações e movimentação de terra (quando aplicável).",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline:
      "10–25 dias úteis (campo + consolidação; varia por logística e volume).",
    clientProvides: [
      "Local e acesso.",
      "Tipo de obra e cargas previstas (se disponível).",
      "Planta de implantação/locação (se houver).",
      "Prazos e restrições de obra.",
    ],
    cta: {
      label: "Falar sobre Investigação",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para INVESTIGAÇÃO GEOTÉCNICA.`,
    },
    faqs: [
      {
        q: "Vocês entregam relatório interpretado (não só dados)?",
        a: "Sim. O foco é transformar dados em decisão: interpretação do perfil e recomendações para o projeto/obra.",
      },
      {
        q: "Preciso ter projeto pronto?",
        a: "Não. Ter informações de uso/cargas ajuda, mas é possível iniciar com dados básicos e refinar conforme o projeto evolui.",
      },
      {
        q: "Dá para adequar escopo ao orçamento?",
        a: "Sim. Ajustamos quantidade de pontos e nível de detalhamento para equilibrar custo e redução de incerteza.",
      },
    ],
  },

  {
    slug: "fundacoes",
    title: "Fundações",
    short:
      "Recomendações e suporte técnico para fundações seguras com base em dados do solo e condições de obra.",
    seoTitle: "Fundações: recomendações técnicas e suporte ao projeto | J2C",
    seoDescription:
      "Fundações com base em dados geotécnicos: recomendações de solução, riscos, memorial e orientações de execução/controle. Atendimento nacional.",
    keywords: [
      "fundações",
      "sapatas",
      "estacas",
      "tubulões",
      "projeto de fundações",
      "memorial",
    ],
    overview:
      "Fundações são decisões de custo e risco. O objetivo aqui é escolher uma solução compatível com o subsolo, com as cargas e com a viabilidade executiva do canteiro. Atuamos com recomendações técnicas, leitura de risco e orientação de controle/execução, para reduzir surpresas em obra e aumentar previsibilidade.",
    howItWorks: [
      "Leitura do contexto: tipo de edificação, cargas, restrições de canteiro e vizinhança.",
      "Análise do subsolo (investigação existente ou necessidade de dados).",
      "Recomendação técnica: alternativas, prós/contras e riscos.",
      "Memorial/orientações e checklist de controle (quando aplicável).",
      "Suporte ao alinhamento com projetista/obra (quando necessário).",
    ],
    whenClientsLookForYou: [
      "Projeto novo exigindo definição do tipo de fundação.",
      "Reforço/adequação de fundação em obra existente.",
      "Inconsistência entre projeto e condições reais de solo.",
    ],
    commonSegments: [
      "Construtoras.",
      "Indústrias.",
      "Projetistas estruturais.",
      "Infraestrutura.",
    ],
    typicalDeliverables: [
      "Memorial descritivo e recomendações técnicas.",
      "Relatório técnico de apoio ao projeto.",
      "Orientações de execução/controle (quando aplicável).",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline:
      "10–20 dias úteis (varia conforme dados disponíveis e interfaces do projeto).",
    clientProvides: [
      "Plantas/projeto estrutural (se houver).",
      "Informações de cargas (quando disponível).",
      "Relatórios geotécnicos existentes (se houver).",
      "Restrições de canteiro (acesso, vizinhança, ruído, etc.).",
    ],
    cta: {
      label: "Falar sobre Fundações",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para FUNDAÇÕES (recomendação/suporte técnico).`,
    },
    faqs: [
      {
        q: "Vocês indicam alternativas de solução?",
        a: "Sim. Sempre que possível comparamos alternativas (execução, custo, risco e restrições) para decisão mais segura.",
      },
      {
        q: "Dá para trabalhar com dados existentes?",
        a: "Sim, desde que tenham qualidade e representatividade. Se houver dúvida, recomendamos complementação pontual.",
      },
      {
        q: "Vocês ajudam a alinhar com o projetista estrutural?",
        a: "Sim. Podemos apoiar tecnicamente para reduzir ruído e acelerar a convergência do projeto.",
      },
    ],
  },

  {
    slug: "aterros-solos-moles",
    title: "Aterros em Solos Moles",
    short:
      "Análise e recomendações para reduzir recalques e riscos em aterros sobre solos compressíveis.",
    seoTitle:
      "Aterros em Solos Moles: recalque, estabilidade e plano de controle | J2C",
    seoDescription:
      "Aterros em solos moles: análise de risco, recalques, alternativas de melhoramento e plano de controle/monitoramento. Atendimento nacional.",
    keywords: [
      "solos moles",
      "aterro",
      "recalque",
      "adensamento",
      "melhoramento de solo",
      "drenos verticais",
    ],
    overview:
      "Aterros sobre solos compressíveis exigem engenharia de previsibilidade: recalque, tempo de adensamento e estabilidade global. Atuamos para definir estratégia (técnicas de aceleração/melhoramento quando aplicável), critérios de controle e um plano de execução compatível com prazo e risco. O foco é reduzir patologias: deformações, rupturas, manutenção recorrente e atrasos.",
    howItWorks: [
      "Coleta de dados: geotecnia, geometria do aterro, volumes e prazos.",
      "Análise de riscos (recalque/tempo/estabilidade) e cenários executivos.",
      "Recomendação técnica: alternativas e critérios de controle.",
      "Plano de execução e monitoramento (quando aplicável).",
      "Acompanhamento pontual em marcos críticos (se contratado).",
    ],
    whenClientsLookForYou: [
      "Aterros com risco de recalque excessivo.",
      "Obra em área com histórico de baixa capacidade de suporte.",
      "Necessidade de plano de execução e controle para cumprir prazo.",
    ],
    commonSegments: [
      "Infraestrutura e obras lineares.",
      "Construtoras e terraplenagem.",
      "Indústrias e pátios.",
      "Loteamentos.",
    ],
    typicalDeliverables: [
      "Relatório técnico com recomendações e critérios.",
      "Plano de controle/monitoramento (quando aplicável).",
      "Orientações de execução por etapa e medidas de mitigação.",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline:
      "10–25 dias úteis (varia conforme dados e necessidade de controles complementares).",
    clientProvides: [
      "Local e croqui/área.",
      "Cotas/volumes previstos.",
      "Histórico do terreno (se houver).",
      "Prazos e restrições de obra.",
    ],
    cta: {
      label: "Falar sobre Solos Moles",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para ATERRO EM SOLO MOLE (recalque/estabilidade).`,
    },
    faqs: [
      {
        q: "Vocês recomendam alternativas de melhoramento?",
        a: "Sim, quando aplicável: estratégia executiva, critérios de controle e alternativas compatíveis com prazo e risco (sempre por escopo).",
      },
      {
        q: "Dá para fazer por etapas?",
        a: "Sim. Em solos moles, execução por etapas e controle são frequentemente a forma mais segura de reduzir risco.",
      },
      {
        q: "Vocês fazem acompanhamento?",
        a: "Podemos fazer acompanhamento pontual em marcos críticos, se fizer sentido no seu cenário e escopo.",
      },
    ],
  },

  {
    slug: "vistoria-imoveis",
    title: "Vistoria de Imóveis (Entrega e Pós-Obra)",
    short:
      "Vistoria técnica em imóveis novos e usados para entrega, compra ou avaliação — com relatório claro, fotos e recomendações.",
    seoTitle: "Vistoria de Imóveis para entrega e compra | J2C",
    seoDescription:
      "Vistoria técnica em imóveis novos e usados para entrega, compra ou avaliação: registro de evidências, recomendações e relatório objetivo. Atendimento nacional.",
    keywords: [
      "vistoria",
      "imóvel",
      "entrega de obra",
      "inspeção",
      "relatório fotográfico",
      "laudo",
    ],
    overview:
      "Na entrega de um imóvel (ou antes de comprar/alugar), o que você precisa é de clareza: o que está conforme, o que é risco, o que exige correção imediata e o que pode ser tratado depois. A vistoria técnica organiza evidências, descreve condições observadas e recomenda próximos passos — com linguagem direta e documentação que ajuda na negociação, na entrega e no histórico do imóvel.",
    howItWorks: [
      "Alinhamento do objetivo (entrega, compra, pós-obra, avaliação) e do nível de detalhe.",
      "Vistoria no local com registro fotográfico e checklist por ambientes/sistemas.",
      "Análise das evidências: severidade, risco e recomendações por prioridade.",
      "Relatório final com fotos, descrição objetiva e próximos passos.",
    ],
    whenClientsLookForYou: [
      "Entrega de apartamento/casa (novo ou reformado).",
      "Antes de comprar/alugar um imóvel (reduzir surpresas).",
      "Avaliação pós-obra para identificar pendências e patologias iniciais.",
    ],
    commonSegments: [
      "Pessoas físicas e famílias.",
      "Investidores e imobiliárias (quando aplicável).",
      "Construtoras (checagem de entrega e pendências).",
    ],
    typicalDeliverables: [
      "Relatório de vistoria com registro fotográfico e descrição objetiva.",
      "Lista de pendências/prioridades (o que fazer primeiro).",
      "Recomendações de correção e mitigação (conforme caso).",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline:
      "3–7 dias úteis (varia por tamanho do imóvel, nível de detalhe e urgência).",
    clientProvides: [
      "Endereço e disponibilidade para acesso.",
      "Objetivo da vistoria (entrega, compra, pós-obra, etc.).",
      "Documentos/plantas (se houver) e prazos de entrega/negociação.",
    ],
    cta: {
      label: "Falar sobre Vistoria",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para VISTORIA DE IMÓVEL (entrega/compra/pós-obra).`,
    },
    faqs: [
      {
        q: "A vistoria serve para entrega de imóvel novo?",
        a: "Sim. O foco é registrar evidências, identificar pendências e orientar prioridades de correção com um relatório claro.",
      },
      {
        q: "Vocês fazem vistoria antes de comprar?",
        a: "Sim. Ajuda a reduzir surpresas e dá base para negociação, principalmente quando há sinais de umidade, trincas, deformações ou histórico desconhecido.",
      },
      {
        q: "Precisa ter plantas do imóvel?",
        a: "Ajuda, mas não é obrigatório. Com acesso ao local e objetivo definido, conseguimos executar a vistoria e documentar as condições observadas.",
      },
    ],
  },

  {
    slug: "muros-de-contencao",
    title: "Muros de Contenção",
    short:
      "Avaliação, recomendações e suporte técnico para contenções e estabilização em obras urbanas e industriais.",
    seoTitle:
      "Muros de Contenção: avaliação, recomendações e suporte técnico | J2C",
    seoDescription:
      "Muros de contenção: diagnóstico, recomendações, drenagem, soluções e suporte técnico para estabilização. Atendimento nacional e plantão 24h (até 300 km).",
    keywords: [
      "muro de contenção",
      "contenção",
      "estabilidade",
      "drenagem",
      "talude",
      "solo reforçado",
    ],
    overview:
      "Contenções falham por combinação de geometria, drenagem e execução — por isso o diagnóstico precisa ser objetivo e baseado em evidências. Atuamos avaliando condições existentes, sinais de patologia (trincas, deslocamentos, saturação) e riscos, para recomendar medidas de correção e soluções compatíveis com o caso (incluindo drenagem e estabilização).",
    howItWorks: [
      "Triagem: sintomas, histórico e urgência.",
      "Vistoria técnica e registro de evidências (geometria, drenagem, patologias).",
      "Análise e enquadramento de risco (causas prováveis e evolução).",
      "Recomendações priorizadas: medidas imediatas e solução de engenharia.",
      "Relatório/laudo e suporte ao planejamento de execução.",
    ],
    whenClientsLookForYou: [
      "Risco de deslizamento em cortes/aterros.",
      "Necessidade de contenção em obra urbana.",
      "Patologias em contenção existente (trincas, deformações, drenagem).",
    ],
    commonSegments: [
      "Construtoras e obras urbanas.",
      "Condomínios.",
      "Indústrias.",
      "Prefeituras (quando aplicável).",
    ],
    typicalDeliverables: [
      "Relatório/laudo técnico (conforme caso).",
      "Memorial e recomendações de intervenção (quando aplicável).",
      "Orientações de drenagem e manutenção.",
      "ART (quando aplicável e solicitado).",
    ],
    typicalTimeline:
      "7–20 dias úteis (varia conforme vistoria, dados disponíveis e necessidade de complementos).",
    clientProvides: [
      "Endereço e acesso.",
      "Fotos/vídeos e histórico de intervenções.",
      "Projetos existentes (se houver).",
      "Informações sobre drenagem (pontos de água, vazamentos, etc.).",
    ],

    galeria: [
      {
        src: "/portfolio/muros-de-contencao/muro-divisa-fiore-gardenia-2025/foto-03-rachaduras-horizontais-muro.png",
        alt: "Rachaduras horizontais no muro de divisa da residência vizinha (porção posterior).",
        legenda:
          "Fissuras horizontais contínuas, indicativas de cisalhamento ou adensamento do solo.",
      },
      {
        src: "/portfolio/muros-de-contencao/muro-divisa-fiore-gardenia-2025/foto-05-ferragens-expostas-corrosao.png",
        alt: "Ferragens expostas e em processo de corrosão no muro de divisa (residência vizinha).",
        legenda:
          "Armaduras aparentes com sinais de oxidação avançada, comprometendo a integridade estrutural.",
      },
      {
        src: "/portfolio/muros-de-contencao/muro-divisa-fiore-gardenia-2025/foto-06-vista-geral-interface-terrenos.png",
        alt: "Vista geral da interface entre os terrenos, com diferença de níveis e contato de solo natural com estrutura enterrada.",
        legenda:
          "Diferença de níveis e presença de solo natural em contato direto com estrutura enterrada.",
      },
    ],

    casosPortfolio: [
      {
        id: "muro-divisa-fiore-gardenia-2025",
        titulo:
          "Avaliação geotécnica e estrutural — muro de divisa",
        periodo: "2025",
        localidadeAproximada: "São Paulo/SP",
        resumo:
          "Laudo técnico preliminar com inspeção e registro fotográfico do muro de divisa entre o Edifício e a residência vizinha. Foram observadas fissuras verticais nos subsolos (mais pronunciadas no 3º subsolo, com continuidade ao 2º) e galgamento/infiltração de água mesmo em período de estiagem. No muro da residência vizinha, identificaram-se rachaduras horizontais contínuas e pontos com armaduras expostas e oxidadas, indicando degradação e potencial risco estrutural.",
        destaques: [
          "Inspeção técnica e registros fotográficos em 19/08/2025.",
          "Fissuras verticais progressivas no edifício, com maior abertura no 3º subsolo e continuidade ao 2º subsolo.",
          "Galgamento/infiltração de água na base do 3º subsolo mesmo em estiagem.",
          "Muro vizinho (~40 m) com rachaduras horizontais contínuas, sugerindo cisalhamento/adensamento do solo.",
          "Armaduras expostas com oxidação avançada: perda de cobrimento e comprometimento de durabilidade/capacidade.",
          "Recomendações: monitoramento, sondagens/ensaios, avaliação estrutural do muro e drenagem para alívio de pressão hidrostática.",
        ],
        imagens: [
          {
            src: "/portfolio/muros-de-contencao/muro-divisa-fiore-gardenia-2025/foto-01-fissura-vertical-3-subsolo.png",
            alt: "Fissura vertical no terceiro subsolo do Edifício, próximo à divisa.",
            legenda:
              "Fissura vertical com abertura estimada em cerca de 2 mm, com continuidade até o segundo subsolo.",
          },
          {
            src: "/portfolio/muros-de-contencao/muro-divisa-fiore-gardenia-2025/foto-02-infiltracao-base-3-subsolo.png",
            alt: "Infiltração de água na base do terceiro subsolo (pé da parede de divisa).",
            legenda:
              "Presença de umidade/possível infiltração proveniente do solo vizinho, mesmo em período de estiagem.",
          },
          {
            src: "/portfolio/muros-de-contencao/muro-divisa-fiore-gardenia-2025/foto-03-rachaduras-horizontais-muro.png",
            alt: "Rachaduras horizontais no muro da residência vizinha (porção posterior).",
            legenda:
              "Fissuras horizontais contínuas, indicativas de cisalhamento ou adensamento do solo.",
          },
          {
            src: "/portfolio/muros-de-contencao/muro-divisa-fiore-gardenia-2025/foto-04-trinca-horizontal-garagens.png",
            alt: "Trinca horizontal no muro com diferença de níveis entre subsolos/garagens.",
            legenda:
              "Diferença de níveis entre áreas (subsolo 1 e subsolo 2) com trinca horizontal visível no muro.",
          },
          {
            src: "/portfolio/muros-de-contencao/muro-divisa-fiore-gardenia-2025/foto-05-ferragens-expostas-corrosao.png",
            alt: "Ferragens expostas e em processo de corrosão no muro de divisa da residência.",
            legenda:
              "Armaduras aparentes com oxidação avançada, comprometendo a integridade estrutural.",
          },
          {
            src: "/portfolio/muros-de-contencao/muro-divisa-fiore-gardenia-2025/foto-06-vista-geral-interface-terrenos.png",
            alt: "Vista geral da interface entre os terrenos (subsolo do edifício e muro da residência).",
            legenda:
              "Diferença de níveis e presença de solo natural em contato direto com estrutura enterrada.",
          },
        ],
      },

      {
        id: "muro-fechamento-contencao-drenagem-2024",
        titulo:
          "Projeto e Memória de Cálculo — Muro de Fechamento com Contenção e Drenagem",
        periodo: "2024",
        localidadeAproximada: "Interior de SP",
        resumo:
          "Memória de cálculo e detalhamento técnico para muro de fechamento com função de contenção, incluindo solução de drenagem e dimensionamento estrutural em concreto armado. O trabalho contemplou definição de geometria, elementos de fundação e armação por trechos, além de estimativa de quantitativos para execução — com objetivo de garantir segurança estrutural e desempenho hidráulico do sistema.",
        destaques: [
          "Solução com muro de concreto armado (~2,0 m), contrafortes e reaterro compactado por camadas.",
          "Integração de drenagem (galeria e canaletas) para controle de água e redução de pressões no maciço.",
          "Dimensionamento estrutural por empuxo de solo e verificação de esforços (momento/cisalhamento) conforme premissas de projeto.",
          "Detalhamento de armação por trechos + fundação com estacas e laje de base (conforme necessidade do local).",
          "Quantitativos de materiais (concreto/aço) para apoiar planejamento e execução.",
        ],
        imagens: [
          {
            src: "/portfolio/muros-de-contencao/muro-fechamento-contencao-drenagem-2024/perfil-3-3-depois.png",
            alt: "Perfil de estabilidade com aumento de margem de segurança após intervenções (sem dados sensíveis).",
            legenda:
              "Comparativo de estabilidade: leitura do fator de segurança após medidas executadas.",
          },
          {
            src: "/portfolio/muros-de-contencao/muro-fechamento-contencao-drenagem-2024/perfil-3-3-antes.png",
            alt: "Perfil de estabilidade antes das intervenções (sem dados sensíveis).",
            legenda:
              "Referência de análise anterior às intervenções para comparação de desempenho.",
          },
          {
            src: "/portfolio/muros-de-contencao/muro-fechamento-contencao-drenagem-2024/prancha-perfil-aa-redigida.png",
            alt: "Prancha técnica com implantação e perfil (informações de contato removidas).",
            legenda:
              "Prancha de implantação/perfil: referências geométricas e de drenagem (com dados sensíveis redigidos).",
          },
        ],
      },
    ],

    cta: {
      label: "Falar sobre Contenção",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para MURO DE CONTENÇÃO/CONTENÇÃO.`,
    },
    faqs: [
      {
        q: "Drenagem entra no diagnóstico?",
        a: "Sim. Drenagem costuma ser fator crítico em contenções; avaliamos sinais e indicamos ações compatíveis com o caso.",
      },
      {
        q: "Vocês atendem urgência?",
        a: "Sim. Plantão 24h para emergências em até 300 km de Campinas/SP.",
      },
      {
        q: "Vocês indicam medidas imediatas e solução final?",
        a: "Sim. Se houver risco, priorizamos medidas de segurança imediata e orientamos o caminho para a solução definitiva.",
      },
    ],
  },
];

export const ordemServicosPrioridade: readonly string[] = [
  "investigacao-geotecnica",
  "laudos-estabilidade-taludes",
  "barragens",
  "muros-de-contencao",
  "fundacoes",
  "aterros-solos-moles",
  "drone-topografia-monitoramento",
  "vistoria-imoveis",
  "regularizacao-prefeitura",
];

function isServiceDefined(service: Service | undefined): service is Service {
  return service !== undefined;
}

export function getServicesEmOrdemPrioritaria(): Service[] {
  const porSlug = new Map(services.map((s) => [s.slug, s] as const));
  const prioridadeSet = new Set(ordemServicosPrioridade);

  const ordenados = ordemServicosPrioridade
    .map((slug) => porSlug.get(slug))
    .filter(isServiceDefined);

  const restantes = services.filter((s) => !prioridadeSet.has(s.slug));

  return [...ordenados, ...restantes];
}

export function getServiceBySlug(slug: string): Service | undefined {
  const normalized = decodeURIComponent(slug).toLowerCase().trim();
  return services.find((s) => s.slug.toLowerCase() === normalized);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
