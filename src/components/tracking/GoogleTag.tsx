import Script from "next/script";
import { Suspense } from "react";
import { GoogleAnalyticsPageView } from "@/components/tracking/GoogleAnalyticsPageView";

const idGa4 = process.env.NEXT_PUBLIC_GA4_ID?.trim();
const idGoogleAds = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();

function normalizarId(valor?: string) {
  const v = (valor ?? "").trim();
  return v.length > 0 ? v : null;
}

export function GoogleTag() {
  const ga4 = normalizarId(idGa4);
  const ads = normalizarId(idGoogleAds);

  // Se não houver nenhum ID configurado, não injeta tag.
  if (!ga4 && !ads) return null;

  // Carrega o gtag.js com um ID “principal” (qualquer um funciona).
  const idPrincipal = ga4 ?? ads;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${idPrincipal}`}
        strategy="afterInteractive"
      />

      <Script id="google-tag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = window.gtag || gtag;

        gtag('js', new Date());

        ${ga4 ? `gtag('config', '${ga4}', { send_page_view: false });` : ""}

        ${ads ? `gtag('config', '${ads}');` : ""}
      `}</Script>

      {/* Page view manual para App Router (SPA) */}
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView />
      </Suspense>
    </>
  );
}
