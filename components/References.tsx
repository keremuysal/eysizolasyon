"use client";

import { motion } from "framer-motion";
import { Building2, Star } from "lucide-react";

const references = [
  "Tuna Alüminyum Plastik Sanayi ve Ticaret A.Ş.",
  "Yünler Dokuma Tekstil Sanayi ve Ticaret A.Ş.",
  "YKK Metal ve Plastik Ürünleri Sanayi ve Ticaret A.Ş.",
  "Eczacıbaşı-Monrol Nükleer Ürünler Sanayi ve Ticaret A.Ş.",
  "Özen Mensucat Boya ve Terbiye İşletmeleri A.Ş.",
  "Gülle Entegre Tekstil İşletmeleri A.Ş.",
  "Ulkar Kimya Sanayii ve Ticaret A.Ş.",
  "Exeltis İlaç Sanayi ve Ticaret A.Ş.",
  "Tristone Flowtech İstanbul Otomotiv Sanayi ve Ticaret A.Ş.",
  "Vibracoustic Çerkezköy Otomotiv Sanayi ve Ticaret A.Ş.",
  "Essel Selüloz ve Kağıt Sanayi Ticaret A.Ş.",
  "Havaalanı İşletme ve Havacılık Endüstrileri A.Ş. / Limak İnşaat Sanayi ve Ticaret A.Ş.",
  "Artesa Kumaşçılık Sanayi ve Ticaret A.Ş.",
  "Henateks Boya ve Apre Sanayi Ticaret A.Ş.",
  "İnan Makina Sanayi ve Ticaret A.Ş.",
  "Botaş Nehir Tekstil Boya Emprime Sanayi ve Ticaret A.Ş.",
  "Öztek Tekstil Terbiye Tesisleri Sanayi ve Ticaret A.Ş.",
  "Uğurteks Tekstil Ürünleri Sanayi ve Ticaret A.Ş.",
  "Kaptan Demir Çelik Endüstrisi ve Ticaret A.Ş.",
  "Beks Çorap ve İç Giyim Sanayi ve Ticaret A.Ş.",
  "Buyruk Tekstil Sanayi ve Ticaret A.Ş.",
  "Vastaş Valf Armatür Sanayi Ticaret A.Ş.",
  "Asaş Alüminyum Sanayi ve Ticaret A.Ş.",
  "Elpa Elastiki İplikler Sanayi ve İhracat A.Ş.",
  "Indorama Ventures Çorlu PET Sanayi A.Ş.",
  "Berkosan Yalıtım ve Tecrit Maddeleri Üretim ve Ticaret A.Ş.",
  "Idee Mimarlık İnşaat A.Ş.",
  "Pehlivanoğlu Ambalaj Kağıt Selüloz Sanayi ve Ticaret A.Ş.",
];

const sectors = [
  { name: "Tekstil & Konfeksiyon" }, { name: "Kimya & İlaç" }, { name: "Otomotiv Yan Sanayi" },
  { name: "Metal & Alüminyum" }, { name: "Enerji" }, { name: "İnşaat & Yapı Malzemeleri" },
];

export default function References() {
  return (
    <section id="referanslar" className="w-full flex flex-col items-center py-20 sm:py-32 bg-[#1e293b]">
      <div className="w-full flex flex-col items-center max-w-7xl px-4 sm:px-6 lg:px-8 gap-20 sm:gap-32">
        
        {/* Referans Listesi */}
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center text-center w-full mb-10 sm:mb-16">
            <div className="h-3 sm:h-5 w-full"></div>
            <span className="block text-xs sm:text-sm font-bold text-[#0ea5e9] uppercase tracking-widest mb-3 sm:mb-4">Güven Veren İsimler</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#f8fafc] uppercase leading-[1.1] text-center">
              Referans<br /><span className="text-[#0ea5e9]">Listesi</span>
            </h2>
            <p className="max-w-2xl mt-4 sm:mt-6 text-sm sm:text-base text-[#cbd5e1] leading-relaxed text-center px-2">
              Uzun yıllardan bu yana Türkiye'nin önde gelen sanayi kuruluşlarına hizmet vermenin gururunu yaşıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            {references.map((ref, i) => (
              <motion.div key={ref} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: (i % 8) * 0.05, ease: "easeOut" }} className="flex items-center gap-3 sm:gap-4 bg-[#334155] border border-[#475569] hover:border-[#0ea5e9]/50 hover:bg-[#475569] p-3 sm:p-6 rounded-sm transition-all duration-200 w-full shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#1e293b] border border-[#475569] rounded-sm text-[#0ea5e9]">
                  <Building2 size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] sm:text-base font-medium text-[#cbd5e1] transition-colors leading-snug break-words block">{ref}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sektörler */}
        <div className="w-full flex flex-col items-center border-t border-b border-[#475569] py-16 sm:py-20">
          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-16 text-center w-full">
            <Star size={28} className="text-[#f59e0b] sm:w-8 sm:h-8" />
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f8fafc] uppercase tracking-wide px-2 break-words text-center">
              Hizmet Verdiğimiz Sektörler
            </h3>
          </div>
          
          <div className="h-3 sm:h-5 w-full"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 w-full">
            {sectors.map(({ name }) => (
              <div key={name} className="flex flex-col items-center justify-center text-center gap-3 sm:gap-5 p-3 sm:p-8 bg-[#334155] border border-[#475569] rounded-sm hover:border-[#0ea5e9]/40 hover:bg-[#475569] transition-colors w-full min-w-0 shadow-sm">
                <Building2 size={24} className="text-[#0ea5e9] sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="text-[11px] sm:text-sm font-medium text-[#cbd5e1] leading-snug break-words">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* İletişim Kutusu */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full flex flex-col items-center bg-[#334155] border border-[#475569] rounded-sm p-6 sm:p-16 shadow-md">
          <p className="font-display font-bold text-2xl sm:text-4xl text-[#f8fafc] uppercase text-balance max-w-3xl leading-tight text-center break-words">
            Siz de Firmamızın Bünyesindeki Çözüm Tekliflerini Bekliyoruz
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-[#cbd5e1] text-center">Koşulsuz hizmet ve müşteri memnuniyeti politikamızla yanınızdayız.</p>
          
          <div className="h-3 sm:h-5 w-full"></div>
          <a href="#iletisim" onClick={(e) => { e.preventDefault(); document.querySelector("#iletisim")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-6 sm:mt-10 px-8 sm:px-12 py-4 sm:py-5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold uppercase tracking-wider text-sm sm:text-base transition-colors duration-200 rounded-sm shadow-md text-center">
            Bizimle İletişime Geçin
          </a>
          <div className="h-3 sm:h-5 w-full"></div>
        </motion.div>
      </div>
    </section>
  );
}