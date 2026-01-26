export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceCta = {
  label: string;
  whatsappMessage: string;
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
    cta: {
      label: "Falar no WhatsApp sobre Barragens",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para BARRAGENS (apoio técnico/inspeção).

Para agilizar, por favor envie na próxima mensagem:
- Cidade/UF e local do empreendimento
- Objetivo (inspeção de rotina, pós-chuva/evento, auditoria/contratante, etc.)
- Prazo desejado
- Fotos/vídeos e relatórios anteriores (se houver)
- Se é emergência (plantão 24h até 300 km de Campinas/SP)`,
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
      label: "Falar no WhatsApp sobre Regularização",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para REGULARIZAÇÃO junto à Prefeitura.

Para agilizar, por favor envie na próxima mensagem:
- Município/UF
- Tipo de imóvel/obra
- Se já existe processo/exigência (sim/não)
- Prazo desejado
- Documentos e exigências recebidas (se houver)
- Plantas/arquivos existentes (se houver)`,
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
      label: "Falar no WhatsApp sobre Drone",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para LEVANTAMENTO COM DRONE (mapeamento/monitoramento).

Para agilizar, por favor envie na próxima mensagem:
- Cidade/UF e local/área
- Objetivo (mapeamento, monitoramento de obra, inspeção visual, etc.)
- Área aproximada / extensão
- Prazo desejado
- Restrições de acesso/horários (se houver)
- Um print/mapa da área (se possível)`,
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
    cta: {
      label: "Falar no WhatsApp sobre Taludes",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para LAUDO/AVALIAÇÃO DE TALUDE/ENCOSTA.

Para agilizar, por favor envie na próxima mensagem:
- Cidade/UF e local
- Sinais observados (trincas, erosão, deslocamento, água/surgência, etc.)
- Prazo desejado
- Fotos/vídeos atuais
- Se há risco imediato (e se é emergência – plantão 24h até 300 km de Campinas/SP)`,
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
      label: "Falar no WhatsApp sobre Investigação",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para INVESTIGAÇÃO GEOTÉCNICA.

Para agilizar, por favor envie na próxima mensagem:
- Cidade/UF e local
- Tipo de obra (residencial, industrial, infraestrutura, etc.)
- Prazo desejado
- Se já existe projeto/implantação (se houver, envie)
- Se há histórico de sondagens/relatórios anteriores (se houver, envie)`,
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
      label: "Falar no WhatsApp sobre Fundações",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para FUNDAÇÕES (recomendação/suporte técnico).

Para agilizar, por favor envie na próxima mensagem:
- Cidade/UF e local
- Tipo de obra e informações de carga (se houver)
- Prazo desejado
- Se existe investigação do solo/relatórios (se houver, envie)
- Restrições de canteiro/vizinhança (se houver)`,
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
      label: "Falar no WhatsApp sobre Solos Moles",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para ATERRO EM SOLO MOLE (recalque/estabilidade).

Para agilizar, por favor envie na próxima mensagem:
- Cidade/UF e local
- Altura/volume aproximado do aterro
- Prazo desejado
- Histórico do terreno/recalques (se houver)
- Fotos e croqui/implantação (se possível)`,
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
      label: "Falar no WhatsApp sobre Vistoria",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para VISTORIA DE IMÓVEL (entrega/compra/pós-obra).

Para agilizar, por favor envie na próxima mensagem:
- Cidade/UF e endereço (ou bairro)
- Tipo e tamanho do imóvel (apto/casa; m² ou nº de cômodos)
- Objetivo (entrega, compra, pós-obra, avaliação)
- Prazo desejado
- Se tem plantas/documentos (se houver, envie)`,
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
    cta: {
      label: "Falar no WhatsApp sobre Contenção",
      whatsappMessage: `Olá! Gostaria de solicitar um orçamento para MURO DE CONTENÇÃO/CONTENÇÃO.

Para agilizar, por favor envie na próxima mensagem:
- Cidade/UF e local
- Sintomas (trincas, deslocamento, água/saturação, etc.)
- Prazo desejado
- Fotos/vídeos
- Se há risco imediato (e se é emergência – plantão 24h até 300 km de Campinas/SP)`,
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
