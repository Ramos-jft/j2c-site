# J2C Engenharia & Geotecnia — Site institucional (Serviços + Portfólio + SEO) | Projeto real Sites Turbo

Este repositório faz parte do meu **portfólio** como desenvolvedor e também representa um **trabalho real**, desenvolvido por mim no contexto do meu trabalho autônomo na **Sites Turbo** (meu serviço de criação e evolução de sites orientados a performance, SEO e conversão).

> ✅ Importante: este repositório está público para avaliação por **professores** e **recrutadores**.  
> 🔒 Qualquer informação sensível do cliente (dados pessoais/contatos específicos) deve permanecer **anonimizada** no repositório.

---

## Sobre a Sites Turbo (meu trabalho autônomo)

A **Sites Turbo** é meu trabalho como desenvolvedor autônomo, onde eu construo e evoluo sites para profissionais e pequenos negócios com foco em:

- **UX/UI** (clareza, confiança e navegação)
- **Conversão** (CTAs, fluxos de contato e redução de fricção)
- **SEO on-page** (estrutura, metadados e dados estruturados)
- **Performance e responsividade**
- Entrega com base em **briefing**, validação e melhoria contínua

🔗 Mais sobre meu trabalho: `https://www.sitesturbo.com.br`

---

## Contexto do projeto (cliente real)

Este site foi desenvolvido para um(a) profissional/empresa da área de **Engenharia e Geotecnia**, com a necessidade de:

1. Explicar serviços técnicos de forma **objetiva** (para leigos e contratantes).
2. Transmitir **credibilidade** (responsável técnico e informações verificáveis).
3. Gerar **contatos qualificados** via WhatsApp/E-mail.
4. Organizar e apresentar **portfólio** de trabalhos por categoria de serviço.
5. Garantir base sólida de **SEO** (para presença orgânica e compartilhamento).

---

## Meu papel neste projeto (o que eu fiz)

Atuei de ponta a ponta como desenvolvedor (no meu trabalho autônomo), incluindo:

- **Arquitetura do projeto** (estrutura por rotas, componentes e camada de conteúdo tipada)
- Implementação das páginas: Home, Quem Somos, Serviços, Serviço detalhado, Portfólio e Contato
- Implementação dos **CTAs de contato** com foco em conversão
- Implementação de **portfólio por serviço** + galeria ampliável
- Implementação de **SEO técnico** (metadata, OG, sitemap, robots, JSON-LD)
- Padronização visual e usabilidade (acessibilidade básica, foco/teclado, responsividade)
- Organização do conteúdo para manutenção simples (sem CMS)

> Este projeto demonstra como eu trabalho: **código limpo, organização, foco no usuário e no objetivo do negócio**.

---

## Funcionalidades (o que está pronto)

### 1) Rotas e páginas
- `/` — Home: proposta de valor, seções estratégicas, lista de serviços e FAQ
- `/quem-somos` — credenciais e informações institucionais (com referência de verificação)
- `/servicos` — lista de serviços em ordem de prioridade
- `/servicos/[slug]` — página detalhada por serviço (SEO por rota + CTA + conteúdo completo)
- `/portfolio` — casos organizados por serviço, com filtro por querystring (`?servico=slug`)
- `/contato` — canais de contato e CTA

### 2) Conteúdo “content-driven” (sem CMS) + tipado em TS
O site foi pensado para ser fácil de manter: novos serviços/casos entram como **conteúdo**, não como refatoração.

- `src/content/site.ts` — dados globais do site
- `src/content/services.ts` — serviços, FAQs, CTAs, galerias e casos de portfólio
- `src/content/faq.ts` — FAQ geral

### 3) CTAs orientados a conversão (WhatsApp e E-mail)
- **WhatsApp**: link gerado com mensagem **curta e direta** (reduz fricção)
- **E-mail**: `mailto:` sem corpo pré-escrito (somente **assunto**)
- **Fallback no desktop**: quando o cliente de e-mail não abre, o usuário consegue **copiar o e-mail** e seguir

### 4) Portfólio por serviço + galeria ampliável
- Portfólio agrupado por serviço
- Galeria com modos de exibição (grade/carrossel) e ampliação via `<dialog>`
- Estrutura pronta para crescimento: adicionar casos e imagens sem alterar páginas

### 5) SEO técnico
- Metadados por página e por serviço
- Open Graph (compartilhamento)
- `robots` e `sitemap`
- JSON-LD (Organização/Serviço/FAQ) para melhorar entendimento por buscadores

---

## Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- ESLint + configuração moderna do projeto

---

## Estrutura de pastas (visão rápida)

## Estrutura do projeto

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    contato/page.tsx
    portfolio/page.tsx
    quem-somos/page.tsx
    servicos/
      page.tsx
      [slug]/page.tsx
    robots.ts
    sitemap.ts

  components/
    contato/
    home/
    site/
    ui/

  content/
    site.ts
    services.ts
    faq.ts

  lib/
    whatsapp.ts
    email.ts
    seo/
      jsonld.ts

public/
  portfolio/
  brand/
Como rodar localmente
Use os scripts do seu package.json (padrão Next.js). Exemplos:

1) Instalar dependências
npm install
2) Rodar em desenvolvimento
npm run dev
Acesse: http://localhost:3000

3) Build/produção
npm run build
npm start
Variáveis de ambiente (quando aplicável)
Exemplo de controle de indexação em ambientes de preview:

ROBOTS_INDEX=true
Como editar / reutilizar (padrão Sites Turbo)
Este projeto foi estruturado para ser reaproveitável no meu trabalho autônomo:

Alterar dados do site
Edite:

src/content/site.ts

Criar/editar serviços
Edite:

src/content/services.ts

Criar/editar casos do portfólio + imagens
Casos: dentro do serviço (casosPortfolio) em src/content/services.ts

Imagens: public/portfolio/...

Privacidade e repositório público
Como este é um projeto real de cliente:

Remova/anonimize telefone, e-mail, endereços, documentos e quaisquer identificadores

Se necessário, mova informações sensíveis para variáveis de ambiente

Por que este repositório está público
Portfólio de carreira: demonstra minhas habilidades em um projeto real (não é “toy project”)

Portfólio de serviços (Sites Turbo): demonstra o tipo de entrega que eu faço para clientes

Facilita avaliação por professores e profissionais de contratação

Autor
Lucas — Desenvolvedor (Sites Turbo)

Portfólio/serviços: https://www.sitesturbo.com.br

Contato profissional: (19) 99835-6054

LinkedIn: https://www.linkedin.com/in/lucas-ramos-dev/
