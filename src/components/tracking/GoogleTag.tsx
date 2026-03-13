import Script from "next/script";
import { Suspense } from "react";
import { GoogleAnalyticsPageView } from "@/components/tracking/GoogleAnalyticsPageView";

const idGa4 = process.env.NEXT_PUBLIC_GA4_ID?.trim();
const idGoogleAds = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();

const idTagPrincipal = idGa4 || idGoogleAds;

export function GoogleTag() {
  if (!idTagPrincipal) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${idTagPrincipal}`}
        strategy="afterInteractive"
      />

      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;

          gtag('js', new Date());

          ${
            idGa4
              ? `gtag('config', '${idGa4}', { send_page_view: false });`
              : ""
          }

          ${idGoogleAds ? `gtag('config', '${idGoogleAds}');` : ""}
        `}
      </Script>

      {idGa4 ? (
        <Suspense fallback={null}>
          <GoogleAnalyticsPageView />
        </Suspense>
      ) : null}
    </>
  );
}
