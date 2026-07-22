"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const projects = [
  { src: "/images/proje-vinc-baca-montaj.jpg", alt: "Vinç ile yüksek irtifada endüstriyel baca montajı", title: "Yüksek İrtifa Baca Montajı", category: "Baca Sistemleri" },
  { src: "/images/proje-fabrika-ic-kanallar.jpg", alt: "Fabrika içi boru ve kanal hattı", title: "Büyük Boru ve Kanal Hattı", category: "Isı İzolasyonu" },
  { src: "/images/proje-havalandirma-santrali.jpg", alt: "Modüler havalandırma santrali üniteleri", title: "Modüler Havalandırma Santrali", category: "Havalandırma Sistemleri" },
  { src: "/images/proje-cephe-bacalar.jpg", alt: "Cephede paslanmaz çelik egzoz bacaları", title: "Cephe Baca Sistemleri", category: "Paslanmaz Çelik Baca" },
  { src: "/images/proje-dirsek-kanal.jpg", alt: "Fabrika sahasında büyük izoleli hava kanalı", title: "Sahada İzoleli Hava Kanalı", category: "Havalandırma Sistemleri" },
  { src: "/images/proje-cephe-y-baca.jpg", alt: "Cephede Y bağlantılı paslanmaz çelik egzoz bacaları", title: "Y-Tipi Baca Sistemi", category: "Baca Sistemleri" },
];

export default function ProjectsGallery() {
  const [lightbox, setLightbox] = useState<null | (typeof projects)[0]>(null);

  return (
    <section id="projeler" className="w-full flex flex-col items-center py-20 sm:py-36 bg-[#1e293b]" aria-labelledby="projects-heading">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 mb-12 sm:mb-16 w-full">
          <div>
            <span className="text-[11px] sm:text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest">Tamamlanan İşlerimiz</span>
            <h2 id="projects-heading" className="mt-2 font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#f8fafc] uppercase leading-none text-balance">
              Proje<br /><span className="text-[#0ea5e9]">Galerimiz</span>
            </h2>
          </div>
          <p className="max-w-sm mx-auto text-xs sm:text-sm text-[#cbd5e1] leading-relaxed px-2">
            Türkiye&apos;nin dört bir yanında tamamladığımız endüstriyel izolasyon ve havalandırma projelerinden seçkiler.
          </p>
        </div>
        
        <div className="h-3 sm:h-5 w-full"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }} className={`group relative overflow-hidden bg-[#334155] border border-[#475569] cursor-pointer rounded-sm w-full ${i === 0 ? "sm:row-span-2" : ""} ${i === 1 ? "sm:col-span-2" : ""}`} style={{ minHeight: i === 0 ? "350px" : "240px" }} onClick={() => setLightbox(project)} role="button" tabIndex={0} aria-label={`${project.title} - büyüt`}>
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i === 0} 
              />
              <div className="absolute inset-0 bg-[#1e293b]/0 group-hover:bg-[#1e293b]/80 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={28} className="text-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 pt-4 pb-4 sm:pb-5 bg-gradient-to-t from-[#1e293b]/95 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[9px] sm:text-[10px] text-[#0ea5e9] uppercase tracking-widest font-semibold">{project.category}</span>
                <p className="text-sm sm:text-base font-display font-semibold text-[#f8fafc] uppercase tracking-wide mt-1">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center w-full h-full p-4 bg-[#1e293b]/95 backdrop-blur-sm" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label={lightbox.title}>
            <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.25 }} className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              
              <button className="absolute -top-12 right-0 sm:-top-4 sm:-right-4 w-10 h-10 flex items-center justify-center bg-[#334155] border border-[#475569] rounded-full text-[#cbd5e1] hover:text-[#f8fafc] hover:border-[#0ea5e9] transition-colors shadow-sm z-[101]" onClick={() => setLightbox(null)} aria-label="Kapat">
                <X size={18} />
              </button>
              <div className="relative w-full h-[60vh] sm:h-[70vh]">
                <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" sizes="90vw" />
              </div>
              <div className="mt-4 w-full text-center">
                <span className="text-[10px] sm:text-xs text-[#0ea5e9] uppercase tracking-widest font-semibold">{lightbox.category}</span>
                <p className="text-base sm:text-lg font-display font-bold text-[#f8fafc] uppercase tracking-wide">{lightbox.title}</p>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}