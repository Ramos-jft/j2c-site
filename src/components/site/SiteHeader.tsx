"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type ItemMenu = { href: string; label: string };

const ITENS_MENU: readonly ItemMenu[] = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contato", label: "Contato" },
];

function isHrefAtivo(caminhoAtual: string, href: string) {
  if (href === "/") return caminhoAtual === "/";
  return caminhoAtual === href || caminhoAtual.startsWith(`${href}/`);
}

function MenuLinks({ caminhoAtual }: Readonly<{ caminhoAtual: string }>) {
  return (
    <>
      {ITENS_MENU.map((item) => {
        const ativo = isHrefAtivo(caminhoAtual, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={ativo ? "page" : undefined}
            className={[
              "j2c-menu-link",
              ativo ? "j2c-menu-link--active" : "",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function SiteHeader() {
  const caminhoAtual = usePathname();

  const hrefWhatsApp = buildWhatsAppLink(
    siteConfig.contacts.whatsapp,
    "Olá! Vim pelo site e gostaria de um orçamento.",
  );

  const hrefInstagram = siteConfig.contacts.instagramUrl;
  const hrefEmail = `mailto:${siteConfig.contacts.email}`;

  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto max-w-6xl px-4 py-4">
        {/* UM ÚNICO GRID: evita desalinhamento entre “parte de cima/baixo” */}
        <div className="grid items-center gap-4 grid-cols-[1fr,auto] sm:grid-cols-[auto,1fr,auto]">
          {/* Esquerda: logo + (desktop) responsável/CREA */}
          <div className="col-start-1 row-start-1 flex items-center gap-3">
            <Link
              href="/"
              aria-label="Ir para a página inicial"
              className="inline-flex items-center"
            >
              <Image
                src="/brand/j2c-logo-v2.png"
                alt="J2C Engenharia & Geotecnia"
                width={200}
                height={80}
                priority
              />
            </Link>

            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold text-slate-900">
                {siteConfig.responsible}
              </p>
              <div className="mt-1 flex items-center gap-2 text-xs text-slate-600">
                <span>
                  CREA-{siteConfig.crea.uf} {siteConfig.crea.number}
                </span>
              </div>
            </div>
          </div>

          {/* Direita: ícones (sempre na 1ª linha) */}
          <div className="col-start-2 row-start-1 justify-self-end sm:col-start-3 sm:justify-self-end">
            <div className="flex items-center gap-3">
              <a
                href={hrefWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="j2c-header-icone-link"
                aria-label="Chamar no WhatsApp"
                title="WhatsApp"
              >
                <Image
                  src="/brand/whatsapp-v2.png"
                  alt=""
                  width={28}
                  height={28}
                  className="j2c-header-icone-img"
                />
                <span className="sr-only">WhatsApp</span>
              </a>

              <a
                href={hrefInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="j2c-header-icone-link"
                aria-label="Abrir Instagram"
                title="Instagram"
              >
                <Image
                  src="/brand/instagram.png"
                  alt=""
                  width={28}
                  height={28}
                  className="j2c-header-icone-img"
                />
                <span className="sr-only">Instagram</span>
              </a>

              <a
                href={hrefEmail}
                className="j2c-header-icone-link"
                aria-label="Enviar e-mail"
                title="E-mail"
              >
                <Image
                  src="/brand/email.png"
                  alt=""
                  width={28}
                  height={28}
                  className="j2c-header-icone-img"
                />
                <span className="sr-only">E-mail</span>
              </a>
            </div>
          </div>

          {/* Menu:
              - Mobile: 2ª linha, span 2 colunas, centralizado
              - Desktop: 1ª linha, coluna do meio, centralizado */}
          <nav
            aria-label="Menu principal"
            className="col-span-2 row-start-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:col-span-1 sm:col-start-2 sm:row-start-1"
          >
            <MenuLinks caminhoAtual={caminhoAtual} />
          </nav>
        </div>
      </div>
    </header>
  );
}
