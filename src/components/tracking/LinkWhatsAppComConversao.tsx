"use client";

import type React from "react";
import { registrarConversaoWhatsApp } from "@/lib/tracking/googleAds";

type LinkWhatsAppComConversaoProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: React.ReactNode;
};

export function LinkWhatsAppComConversao({
  href,
  children,
  onClick,
  ...props
}: Readonly<LinkWhatsAppComConversaoProps>) {
  return (
    <a
      href={href}
      {...props}
      onClick={(evento) => {
        registrarConversaoWhatsApp();
        onClick?.(evento);
      }}
    >
      {children}
    </a>
  );
}
