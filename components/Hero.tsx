"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Award, Shield } from "lucide-react";

const slides = [
  { src: "/images/proje-vinc-baca-montaj.jpg", alt: "Vinç ile yüksek irtifada endüstriyel baca montajı" },
  { src: "/images/proje-fabrika-ic-kanallar.jpg", alt: "Fabrika içi boru ve kanal hattı izolasyonu" },
  { src: "/images/proje-cephe-bacalar.jpg", alt: "Bina cephesinde paslanmaz çelik baca sistemleri" },
];

const stats = [
  { value: "39+", label: "Yıllık Tecrübe", icon: Clock },
  { value: "500+", label: "Tamamlanan Proje", icon: Award },
  { value: "100%", label: "Müşteri Memnuniyeti", icon: Shield },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden" aria-label="Ana hero bölümü">
      {/* Arka Planlar */}
      <div className="absolute inset-0 w-full h-full md:hidden">
        <Image src={slides[0].src} alt={slides[0].alt} fill className="object-cover" priority={true} sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-[#0d1117]/75" />
      </div>

      <div className="absolute inset-0 w-full h-full hidden md:grid md:grid-cols-3">
        {slides.map((slide, i) => (
          <div key={i} className="relative overflow-hidden w-full h-full">
            <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={true} sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="absolute inset-0" style={{ background: i === 1 ? "rgba(13,17,23,0.70)" : "rgba(13,17,23,0.60)" }} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/60 via-[#0d1117]/30 to-[#0d1117]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/80 via-transparent to-[#0d1117]/40" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex flex-col items-center text-center max-w-5xl"
        >
          <span className="inline-block mb-6 sm:mb-8 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#0d1117]/85 backdrop-blur-sm border border-[#0ea5e9]/45 shadow-[0_0_0_1px_rgba(14,165,233,0.12)] text-[#7dd3fc] text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-[0.2em] rounded-full">
            1987'den Bu Yana Çerkezköy OSB
          </span>
          <div className="h-3 sm:h-5 w-full"></div>
          
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#f0f4f8] leading-[1.15] uppercase tracking-tight text-center w-full">
            Endüstriyel
            <br />
            <span className="text-[#0ea5e9]">İzolasyon</span> &{" "}
            <br className="hidden sm:block" />
            Havalandırma
          </h1>
          
          <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-[#94a3b8] leading-relaxed max-w-2xl text-center px-2">
            Isı izolasyonu, havalandırma kanalları ve paslanmaz çelik baca
            sistemlerinde 39 yıllık tecrübeyle Türkiye genelinde kusursuz 
            çözümler sunuyoruz.
          </p>
          <div className="h-3 sm:h-5 w-full"></div>
          
          <div className="mt-10 sm:mt-12 mb-16 sm:mb-24 flex justify-center w-full">
            <button onClick={() => handleScroll("#hizmetler")} className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold uppercase tracking-wider text-xs sm:text-sm transition-colors duration-200 rounded-sm">
              Hizmetlerimiz
            </button>
          </div>
        </motion.div>
        
        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-5xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center justify-start gap-4 sm:gap-5 rounded-sm border border-[#2a3a4a] bg-[#0d1117]/60 backdrop-blur-md p-5 sm:p-6 overflow-hidden">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-sm bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex-shrink-0">
                  <Icon size={24} className="text-[#0ea5e9]" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-display font-bold text-2xl sm:text-3xl text-[#f0f4f8] leading-none">{value}</p>
                  <p className="text-[12px] sm:text-sm font-medium text-[#94a3b8] uppercase tracking-wider mt-1.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}