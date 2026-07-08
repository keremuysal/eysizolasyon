import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Bu satır en kritik olanı
  images: {
    unoptimized: true, // GitHub Pages'te Next.js görsel optimizasyonu çalışmaz, bu yüzden kapatıyoruz
  },
};

export default nextConfig;