import Script from "next/script";
import { Suspense } from "react";
import { GoogleAnalyticsPageView } from "@/components/tracking/GoogleAnalyticsPageView";

const idGa4 = process.env.NEXT_PUBLIC_GA4_ID?.trim();

export function GoogleTag() {
  if (!idGa4) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${idGa4}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = window.gtag || gtag;
        gtag('js', new Date());
        gtag('config', '${idGa4}', { send_page_view: false });
      `}</Script>

      <Suspense fallback={null}>
        <GoogleAnalyticsPageView />
      </Suspense>
    </>
  );
}
