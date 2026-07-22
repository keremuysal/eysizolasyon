import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "EYS İzolasyon | Endüstriyel İzolasyon ve Havalandırma Sistemleri",
  description: "1987'den bu yana endüstriyel ısı izolasyonu ve havalandırma sistemleri alanında kaliteli çözümler.",
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="bg-[#1e293b] w-full">
      <body className="m-0 p-0 min-h-screen w-full bg-[#1e293b] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}