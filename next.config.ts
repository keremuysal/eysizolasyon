import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/eysizolasyon",
  assetPrefix: "/eysizolasyon/", // BU SATIR ÇOK ÖNEMLİ
  images: {
    unoptimized: true,
  },
};

const basePath = "/eysizolasyon";
export const getPath = (path: string) => `${basePath}${path}`;

// Kullanımı:
<img src={getPath("/images/eys-logo.png")} />

export default nextConfig;