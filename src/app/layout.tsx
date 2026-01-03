import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "J2C Engenharia & Geotecnia",
  description:
    "Engenharia e geotecnia com foco em barragens, investigação geotécnica, estabilidade de taludes, fundações e contenções.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

