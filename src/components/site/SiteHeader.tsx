"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { CreaPublicLink } from "@/components/site/CreaPublicLink";

const nav = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

function isPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10 bg-[var(--j2c-graphite)]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          {/* Somente o logo é clicável */}
          <Link
            href="/"
            aria-label="Ir para a página inicial"
            className="inline-flex items-center"
          >
            <Image
              src="/brand/j2c-logo.jpeg"
              alt="J2C Engenharia & Geotecnia"
              width={140}
              height={56}
              priority
            />
          </Link>

          {/* Nome + CREA NÃO clicáveis */}
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-semibold text-white">
              {siteConfig.responsible}
            </p>

            <div className="mt-1 flex items-center gap-2 text-xs text-white/70">
              <span>
                CREA-{siteConfig.crea.uf} {siteConfig.crea.number}
              </span>

              <span className="text-white/40">•</span>

              {/* Consulta pública: dourado, sem underline, cursor de link */}
              <CreaPublicLink className="cursor-pointer text-xs font-semibold text-[var(--j2c-gold)] no-underline hover:brightness-110 hover:no-underline" />
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((i) => {
            const active = isPathActive(pathname, i.href);

            return (
              <Link
                key={i.href}
                href={i.href}
                className={[
                  "j2c-menu-pill text-sm font-semibold",
                  active ? "j2c-menu-pill--active" : "",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
