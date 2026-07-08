import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/eysizolasyon",
  assetPrefix: "/eysizolasyon/", // BU SATIR ÇOK ÖNEMLİ
  images: {
    unoptimized: true,
  },
};

export default nextConfig;