import type { NextConfig } from "next";

const politicaSegurancaConteudo = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://www.googleadservices.com https://www.google.com https://google.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net;
  connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://pagead2.googlesyndication.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://google.com;
  img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.com https://google.com https://www.googleadservices.com https://pagead2.googlesyndication.com;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data:;
  frame-src 'self' https://www.googletagmanager.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`
  .replaceAll(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: politicaSegurancaConteudo,
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
