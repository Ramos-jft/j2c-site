import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { CreaPublicLink } from "@/components/site/CreaPublicLink";

const nav = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-black/20 bg-[var(--j2c-graphite)]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/j2c-logo.jpeg"
            alt="J2C Engenharia & Geotecnia"
            width={140}
            height={56}
            priority
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">
              {siteConfig.responsible}
            </p>

            <div className="mt-1 flex items-center gap-2 text-xs text-white/70">
              <span>
                CREA-{siteConfig.crea.uf} {siteConfig.crea.number}
              </span>

              <span className="text-white/40">•</span>

              <CreaPublicLink className="text-xs font-semibold text-[var(--j2c-gold)] hover:brightness-110" />
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--j2c-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--j2c-graphite)]"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
