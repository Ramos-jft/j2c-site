"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

const idGa4 = process.env.NEXT_PUBLIC_GA4_ID?.trim();

function obterGtag(): ((...args: unknown[]) => void) | null {
  const gtag = (globalThis as unknown as { gtag?: unknown }).gtag;
  return typeof gtag === "function"
    ? (gtag as (...args: unknown[]) => void)
    : null;
}

export function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const url = useMemo(() => {
    const qs = searchParams?.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!idGa4) return;
    const gtag = obterGtag();
    if (!gtag) return;

    // Page view manual (SPA)
    gtag("event", "page_view", {
      page_path: url,
    });
  }, [url]);

  return null;
}
