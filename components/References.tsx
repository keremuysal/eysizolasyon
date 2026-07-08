"use client";
import { motion } from "framer-motion";
import { Building2, Star } from "lucide-react";

const references = [
  "Tuna Aluminium", "Yüncüler Creation of Fabrics", "YKK Metal ve Plastik Ürünleri San. ve Tic. A.Ş.", "Eczacıbaşı Monrol", "Özen Mensucat", "Gülle", "Ulkar Kimya", "Exeltis", "Tristone",
  "Vibracoustic", "Essel", "Heaş / Limak", "Artesa Fabrics", "Henateks Boya ve Apre San. Tic. A.Ş.", "İnan Makina (MTB)", "Botaş (Nehir Tekstil Boya Emprime)", "Öztek", "Uğurteks", "Kaptan Grup",
  "Beks", "Buyruk Tekstil", "Vastaş Valves & Actuators", "Asaş", "Elpa Elastiki İplikler",
  "Indorama Ventures", "Berkosan", "Idee Mimarlık İnşaat A.Ş.", "Pehlivanoğlu Kağıt & Ambalaj"
];

const sectors = [
  { name: "Tekstil & Konfeksiyon" }, { name: "Kimya & İlaç" }, { name: "Otomotiv Yan Sanayi" },
  { name: "Metal & Alüminyum" }, { name: "Enerji" }, { name: "İnşaat & Yapı Malzemeleri" },
];

export default function References() {
  return (
    <section id="referanslar" className="w-full flex flex-col items-center py-20 sm:py-32 bg-[#161d27]">
      <div className="w-full flex flex-col items-center max-w-7xl px-4 sm:px-6 lg:px-8 gap-20 sm:gap-32">
        
        {/* Referans Listesi */}
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center text-center w-full mb-10 sm:mb-16">
                      <div className="h-3 sm:h-5 w-full"></div>
            <span className="block text-xs sm:text-sm font-bold text-[#0ea5e9] uppercase tracking-widest mb-3 sm:mb-4">Güven Veren İsimler</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#f0f4f8] uppercase leading-[1.1] text-center">
              Referans<br /><span className="text-[#0ea5e9]">Listesi</span>
            </h2>
            <p className="max-w-2xl mt-4 sm:mt-6 text-sm sm:text-base text-[#94a3b8] leading-relaxed text-center px-2">
              Uzun yıllardan bu yana Türkiye'nin önde gelen sanayi kuruluşlarına hizmet vermenin gururunu yaşıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            {references.map((ref, i) => (
              <motion.div key={ref} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: (i % 8) * 0.05, ease: "easeOut" }} className="flex items-center gap-3 sm:gap-4 bg-[#0d1117] border border-[#2a3a4a] hover:border-[#0ea5e9]/50 hover:bg-[#1e2837] p-3 sm:p-6 rounded-sm transition-all duration-200 w-full">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#161d27] border border-[#2a3a4a] rounded-sm text-[#0ea5e9]">
                  <Building2 size={18} className="sm:w-5 sm:h-5" />
                </div>
                {/* Taşan metinleri tutan min-w-0 flex sarmalayıcısı */}
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] sm:text-base font-medium text-[#94a3b8] transition-colors leading-snug break-words block">{ref}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sektörler */}
        <div className="w-full flex flex-col items-center border-t border-b border-[#2a3a4a] py-16 sm:py-20">
          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-16 text-center w-full">
            <Star size={28} className="text-[#f59e0b] sm:w-8 sm:h-8" />
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f0f4f8] uppercase tracking-wide px-2 break-words text-center">
              Hizmet Verdiğimiz Sektörler
            </h3>
          </div>
                    <div className="h-3 sm:h-5 w-full"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 w-full">
            {sectors.map(({ name }) => (
              <div key={name} className="flex flex-col items-center justify-center text-center gap-3 sm:gap-5 p-3 sm:p-8 bg-[#0d1117] border border-[#2a3a4a] rounded-sm hover:border-[#0ea5e9]/40 hover:bg-[#1e2837] transition-colors w-full min-w-0">
                <Building2 size={24} className="text-[#0ea5e9] sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="text-[11px] sm:text-sm font-medium text-[#94a3b8] leading-snug break-words">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Çağrı Kutusu */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full flex flex-col items-center bg-[#0d1117] border border-[#2a3a4a] rounded-sm p-6 sm:p-16 shadow-lg">
          <p className="font-display font-bold text-2xl sm:text-4xl text-[#f0f4f8] uppercase text-balance max-w-3xl leading-tight text-center break-words">
            Siz de Firmamız Bünyesindeki Çözüm Tekliflerini Bekliyoruz
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-[#94a3b8] text-center">Koşulsuz hizmet ve müşteri memnuniyeti politikamızla yanınızdayız.</p>
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