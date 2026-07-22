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
    <section id="hakkimizda" className="w-full flex flex-col items-center py-20 sm:py-36 bg-[#1e293b]" aria-labelledby="about-heading">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 items-center w-full">
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative w-full">
            <div className="relative aspect-[4/4.5] md:aspect-[4/5] rounded-sm overflow-hidden w-full">
              <Image src="/images/proje-dirsek-kanal.jpg" alt="EYS İzolasyon - Paslanmaz çelik baca ve havalandırma sistemi" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 to-transparent" />
            </div>
            <div className="hidden md:block absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#0ea5e9]/40" />
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} className="text-center lg:text-left w-full">
            <span className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest">Hakkımızda</span>
            <h2 id="about-heading" className="mt-2 font-display font-bold text-3xl sm:text-5xl text-[#f8fafc] uppercase leading-none text-balance">
              39 Yıllık<br /><span className="text-[#0ea5e9]">Deneyim</span> ve Güven
            </h2>
            <div className="h-3 sm:h-5 w-full"></div>
            <p className="mt-4 sm:mt-6 text-sm text-[#cbd5e1] leading-relaxed w-full">
              Şirketimizin kurucusu SEDAT TÜRK  olarak 1987&apos;de <strong className="text-[#f8fafc]">TÜRK İZOLASYON</strong> adı altında İzolasyon ve Havalandırma İşleri ile İlgili olarak faaliyete başlamıştır. Faaliyetine 2024 yılında kurduğu  <strong className="text-[#f8fafc]">EYS İzolasyon & Havalandırma Limited ve Ticaret Şirketi</strong> adı ile devam etmektedir. Kurucumuz Sedat Türk'ün vizyonu ve liderliği ile başladığımız bu yolculukta, siz değerli müşterilerimize en kaliteli çözümleri sunmayı amaçlamaktayız.
            </p>
            <div className="h-3 sm:h-5 w-full"></div>
            <p className="mt-3 sm:mt-4 text-sm text-[#cbd5e1] leading-relaxed w-full">
              EYS İzolasyon olarak, her projede öncelikli olarak müşteri memnuniyetini hedeflemekteyiz. İşimizin her aşamasında profesyonel bir yaklaşım sergileyerek, müşterilerimizin beklentilerini en iyi şekilde karşılamak için çalışıyoruz.
            </p>
            <p className="mt-3 sm:mt-4 text-sm text-[#cbd5e1] leading-relaxed w-full">
              EYS izolasyon hizmetleri kapsamlı ve doğru projelendirilmesi gereken bir sistem olarak kabul edilmelidir. Dış izolasyonu ve İç tadilat izolasyonu konusunda 1987  den beri bir çok iş yeri ile çalışmış tecrübeli bir firma olan EYS aradığınız hizmeti size kusursuz bir şekilde sağlamaktadır.            
            </p>
            <p className="mt-3 sm:mt-4 text-sm text-[#cbd5e1] leading-relaxed w-full">
            Firmamız, geniş bir yelpazede uzmanlaştığı alanlarda hizmet vermektedir.
            </p>
            <div className="h-3 sm:h-5 w-full"></div>
            <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left w-full">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#cbd5e1] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="h-3 sm:h-5 w-full"></div>
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full">
              <div className="p-5 bg-[#334155] border border-[#475569] rounded-sm w-full">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Eye size={16} className="text-[#0ea5e9]" />
                  <span className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider">Vizyonumuz</span>
                </div>
                <div className="h-3 sm:h-5 w-full"></div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                Sektördeki gelişmeleri yakından takip ederek teknolojik yenilikleri en etkin şekilde uygulamak ve müşterilerimize sürdürülebilir, enerji verimli ve maliyet-etkin çözümler sunmaktır. Amacımız, EYS İzolasyon olarak sektörümüzde lider bir konuma ulaşmak ve müşterilerimiz için değer yaratmaya devam etmektir.
                </p>
              </div>
              <div className="p-5 bg-[#334155] border border-[#475569] rounded-sm w-full">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Target size={16} className="text-[#0ea5e9]" />
                  <span className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider">Misyonumuz</span>
                </div>
                <div className="h-3 sm:h-5 w-full"></div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                Müşterilerimizin ihtiyaçlarını anlamak, onlara özelleştirilmiş çözümler sunmak ve projelerini başarıyla tamamlamaktır. Profesyonel ekibimizle birlikte, her projeye özenle yaklaşarak zamanında ve kaliteli bir şekilde tamamlanmasını sağlamak için çaba gösteriyoruz.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}