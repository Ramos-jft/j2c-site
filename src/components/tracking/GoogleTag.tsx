import Script from "next/script";

const idTagGoogle =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_ID?.trim() || "AW-939266234";

export function GoogleTag() {
  if (!idTagGoogle) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${idTagGoogle}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${idTagGoogle}');
      `}</Script>
    </>
  );
}
