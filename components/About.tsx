"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Target, Eye } from "lucide-react";

const highlights = [
  "Birinci sınıf kalite malzeme kullanımı",
  "Alanında deneyimli ve sertifikalı uzman kadro",
  "Türkiye genelinde ulusal hizmet ağı",
  "Koşulsuz müşteri memnuniyeti politikası",
  "Enerji verimli ve sürdürülebilir çözümler",
  "Zamanında teslimat ve güvenilir proje yönetimi",
];

export default function About() {
  return (
    <section id="hakkimizda" className="w-full flex flex-col items-center py-20 sm:py-36 bg-[#161d27]" aria-labelledby="about-heading">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 items-center w-full">
          
          {/* x: -30 YERİNE y: 30 YAPILDI (Ekranı yırtmaması için) */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative w-full">
            <div className="relative aspect-[4/4.5] md:aspect-[4/5] rounded-sm overflow-hidden w-full">
              <Image src="/images/proje-dirsek-kanal.jpg" alt="EYS İzolasyon - Paslanmaz çelik baca ve havalandırma sistemi" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161d27]/60 to-transparent" />
            </div>
            <div className="hidden md:block absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#0ea5e9]/40" />
          </motion.div>
          
          {/* x: 30 YERİNE y: 30 YAPILDI */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} className="text-center lg:text-left w-full">
            <span className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest">Hakkımızda</span>
            <h2 id="about-heading" className="mt-2 font-display font-bold text-3xl sm:text-5xl text-[#f0f4f8] uppercase leading-none text-balance">
              39 Yıllık<br /><span className="text-[#0ea5e9]">Deneyim</span> ve Güven
            </h2>
            <div className="h-3 sm:h-5 w-full"></div>
            <p className="mt-4 sm:mt-6 text-sm text-[#94a3b8] leading-relaxed w-full">
              Firmamızın kurucusu Sedat Türk tarafından 1987&apos;de <strong className="text-[#f0f4f8]">ÖZTÜRK İZOLASYON</strong> adı altında başlayan serüvenimiz, 2024 yılında <strong className="text-[#f0f4f8]">EYS İzolasyon ve Havalandırma</strong> adıyla sürmektedir. Çerkezköy OSB merkezli olarak ülkemizin farklı illerinde ısı izolasyonu ve havalandırma alanında faaliyet gösteriyoruz.
            </p>
            <div className="h-3 sm:h-5 w-full"></div>
            <p className="mt-3 sm:mt-4 text-sm text-[#94a3b8] leading-relaxed w-full">
              Her projede müşteri memnuniyetini öncelikli hedef olarak belirliyor; profesyonel ekibimizle işin her aşamasında titiz bir yaklaşım sergiliyoruz.
            </p>
            <div className="h-3 sm:h-5 w-full"></div>
            <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left w-full">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#94a3b8] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="h-3 sm:h-5 w-full"></div>
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full">
              <div className="p-5 bg-[#0d1117] border border-[#2a3a4a] rounded-sm w-full">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Eye size={16} className="text-[#0ea5e9]" />
                  <span className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider">Vizyonumuz</span>
                </div>
                <div className="h-3 sm:h-5 w-full"></div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Teknolojik yenilikleri en etkin şekilde uygulayarak sektörümüzde lider konuma ulaşmak ve sürdürülebilir, enerji verimli çözümler sunmak.
                </p>
              </div>
              <div className="p-5 bg-[#0d1117] border border-[#2a3a4a] rounded-sm w-full">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Target size={16} className="text-[#0ea5e9]" />
                  <span className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider">Misyonumuz</span>
                </div>
                <div className="h-3 sm:h-5 w-full"></div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Müşterilerimizin ihtiyaçlarını anlayarak özelleştirilmiş çözümler üretmek ve projeleri zamanında, kaliteli biçimde teslim etmek.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}