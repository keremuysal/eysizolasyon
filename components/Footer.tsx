"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
  {
    heading: "Hizmetler",
    links: [
      { label: "Havalandırma Sistemleri", href: "#hizmetler" },
      { label: "Isıtma & Soğutma", href: "#hizmetler" },
      { label: "Toz Toplama", href: "#hizmetler" },
      { label: "Paslanmaz Çelik Baca", href: "#hizmetler" },
      { label: "Hava Kanalı İmalatı", href: "#hizmetler" },
    ],
  },
  {
    heading: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "#hakkimizda" },
      { label: "Projelerimiz", href: "#projeler" },
      { label: "Referanslar", href: "#referanslar" },
      { label: "İletişim", href: "#iletisim" },
    ],
  },
];

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full flex flex-col items-center bg-[#161d27] border-t border-[#2a3a4a] pt-20 pb-10" role="contentinfo">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 w-full">
          
          <div className="lg:col-span-2 w-full">
            <div className="relative h-14 w-48 mb-8">
              <Image src="/images/eys-logo.png" alt="EYS İzolasyon ve Havalandırma Sistemleri" fill className="object-contain object-left" sizes="192px" />
            </div>
            <p className="text-base text-[#64748b] leading-relaxed max-w-sm">
              1987'den bu yana endüstriyel ısı izolasyonu ve havalandırma sistemleri alanında kaliteli, güvenilir ve zamanında hizmet sunuyoruz. Çerkezköy OSB merkezli ulusal hizmet ağımızla her ölçekte projeye çözüm üretiyoruz.
            </p>
            <div className="mt-10 flex flex-col gap-5 w-full">
              <a href="tel:+902820000000" className="flex items-center gap-3 text-base text-[#64748b] hover:text-[#0ea5e9] transition-colors">
                <Phone size={18} /> +90 282 XXX XX XX
              </a>
              <a href="mailto:info@eysizolasyon.com" className="flex items-center gap-3 text-base text-[#64748b] hover:text-[#0ea5e9] transition-colors">
                <Mail size={18} /> info@eysizolasyon.com
              </a>
              <div className="flex items-start gap-3 text-base text-[#64748b]">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                Adnan Menderes Mah. Ender Sk. İzolasyon No: 1A, Kapaklı / Tekirdağ
              </div>
            </div>
          </div>

          {footerLinks.map(({ heading, links }) => (
            <div key={heading} className="w-full">
              <h3 className="text-sm font-bold text-[#f0f4f8] uppercase tracking-widest mb-8">{heading}</h3>
              <ul className="flex flex-col gap-5 w-full">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} onClick={(e) => handleNav(e, href)} className="text-base text-[#64748b] hover:text-[#0ea5e9] transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-[#2a3a4a] flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <p className="text-sm text-[#64748b] text-center sm:text-left w-full">
            © {new Date().getFullYear()} EYS İzolasyon ve Havalandırma Sistemleri Ltd. Şti. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-[#64748b] text-center sm:text-right w-full">
            Çerkezköy OSB — Tekirdağ, Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}