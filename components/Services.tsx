"use client";
import { motion } from "framer-motion";
import { Wind, Thermometer, Filter, Layers, Flame, Wrench, Car, Fan } from "lucide-react";

const services = [
  { icon: Wind, title: "Havalandırma Sistemleri", description: "Endüstriyel tesisler için imalat, montaj ve projelendirme hizmetleri. Her ölçekte tesise özel çözümler." },
  { icon: Thermometer, title: "Isıtma & Soğutma Sistemleri", description: "Enerji verimli ısıtma ve soğutma çözümleri. Tesislerinizin termal konforunu en optimum şekilde sağlıyoruz." },
  { icon: Filter, title: "Toz Toplama Sistemleri", description: "Endüstriyel ortamlarda toz kontrolü ve hava kalitesini iyileştiren profesyonel sistemler." },
  { icon: Fan, title: "Hava Kanalı İmalatı", description: "Her boyut ve konfigürasyonda galvaniz ve paslanmaz çelik havalandırma kanalı imalatı ve montajı." },
  { icon: Layers, title: "Havalandırma İzolasyonu", description: "Enerji kayıplarını minimize eden üst düzey ısı ve ses izolasyonu uygulamaları." },
  { icon: Flame, title: "Paslanmaz Çelik Baca", description: "Her tür endüstriyel bacada imalat, uygulama ve montaj. Uzun ömürlü ve dayanıklı çözümler." },
  { icon: Wind, title: "Dumansız Hava Sistemleri", description: "Yangın güvenliği standartlarına uygun duman tahliye ve temiz hava sistemleri." },
  { icon: Wrench, title: "Aspiratör & Fan Sistemleri", description: "Hücreli aspiratörler, eksenel ve radyal fanlar, tam montaj ve devreye alma hizmetleri." },
  { icon: Car, title: "Otopark & Sığınak Havalandırması", description: "Kapalı otopark ve sığınaklara özel jet fan sistemleri ve mekanik havalandırma projelendirmesi." },
];

export default function Services() {
  return (
    <section id="hizmetler" className="w-full flex flex-col items-center py-20 sm:py-32 bg-[#0d1117]">
      <div className="w-full flex flex-col items-center max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center w-full mb-16 sm:mb-24">
          <span className="block text-xs sm:text-sm font-bold text-[#0ea5e9] uppercase tracking-widest mb-3 sm:mb-4">
            Ne Yapıyoruz?
          </span>
          <div className="h-3 sm:h-5 w-full"></div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#f0f4f8] uppercase leading-[1.1] text-center">
            Hizmet<br /><span className="text-[#0ea5e9]">Alanlarımız</span>
          </h2>
          <p className="max-w-2xl mt-4 sm:mt-6 text-sm sm:text-base text-[#94a3b8] leading-relaxed text-center px-2">
            Firmamız 1987'den bu yana geniş bir yelpazede uzmanlaştığı alanlarda kaliteli ve güvenilir hizmet vermektedir.
          </p>
        </div>
        
        <div className="h-3 sm:h-5 w-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 w-full">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div 
              key={title} 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col h-full bg-[#161d27] hover:bg-[#1e2837] p-6 sm:p-10 border border-[#2a3a4a] hover:border-[#0ea5e9]/50 rounded-sm transition-all duration-300 w-full shadow-md overflow-hidden"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-sm bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 group-hover:bg-[#0ea5e9]/20 group-hover:scale-110 transition-all duration-300">
                <Icon size={28} className="text-[#0ea5e9] sm:w-8 sm:h-8" />
              </div>
              <div className="flex-1 flex flex-col mt-6 sm:mt-8 min-w-0">
                <h3 className="font-display font-bold text-lg sm:text-2xl text-[#f0f4f8] uppercase tracking-wide leading-tight">{title}</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-[#94a3b8] leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}