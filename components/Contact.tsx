"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, FileText } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+90 535 384 91 91", href: "tel:+905353849191" },
  { icon: Mail, label: "E-posta", value: "info@eysizolasyon.com", href: "mailto:info@eysizolasyon.com" },
  { icon: MapPin, label: "Adres", value: "Adnan Menderes Mah. Ender Sk. İzolasyon No: 1A, Kapaklı / Tekirdağ", href: "#" },
];

export default function Contact() {
  return (
    <section id="iletisim" className="w-full flex flex-col items-center py-20 sm:py-32 bg-[#0d1117]">
      <div className="w-full flex flex-col items-center max-w-7xl px-4 sm:px-6 lg:px-8 gap-12 sm:gap-20">
        
        {/* Kesinlikle Ortalanan Başlık */}
        <div className="flex flex-col items-center text-center w-full">
          <span className="block text-xs sm:text-sm font-bold text-[#0ea5e9] uppercase tracking-widest mb-3 sm:mb-4">İletişim</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#f0f4f8] uppercase leading-[1.1] text-center">
            Projenizi<br /><span className="text-[#0ea5e9]">Konuşalım</span>
          </h2>
          <p className="max-w-2xl mt-4 sm:mt-6 text-sm sm:text-base text-[#94a3b8] leading-relaxed text-center px-2">
            Endüstriyel izolasyon ve havalandırma ihtiyaçlarınız için doğru ekip, doğru zaman ve net iletişim.
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full flex flex-col gap-6 sm:gap-10">
          
          {/* İletişim Kutuları */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 w-full">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href !== "#" ? href : undefined} className="flex flex-col items-center text-center gap-4 p-6 sm:p-10 bg-[#161d27] border border-[#2a3a4a] rounded-sm hover:border-[#0ea5e9]/50 hover:bg-[#1e2837] transition-all duration-300 w-full shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#0ea5e9]/10 border border-[#2a3a4a] rounded-full text-[#0ea5e9] mb-1 sm:mb-2">
                  <Icon size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#64748b] uppercase tracking-widest mb-1 sm:mb-2">{label}</p>
                  <p className="text-sm sm:text-base font-medium text-[#cbd5e1] leading-relaxed break-words">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
            
            {/* GERÇEK GOOGLE MAPS WIDGET'I */}
            <div className="relative w-full h-[300px] sm:h-[450px] bg-[#161d27] border border-[#2a3a4a] rounded-sm overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48083.74325791722!2d27.93510526002931!3d41.238475254180425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4cc8e13718eb3%3A0x633d266e7ea81896!2sKapakl%C4%B1%2C%20Tekirda%C4%9F!5e0!3m2!1str!2str!4v1709490000000!5m2!1str!2str" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            {/* Resmi Bilgiler */}
            <div className="flex flex-col p-6 sm:p-10 bg-[#161d27] border border-[#2a3a4a] rounded-sm w-full h-full">
              <div className="flex items-center gap-3 mb-6 sm:mb-10 w-full border-b border-[#2a3a4a] pb-4 sm:pb-6">
                <FileText size={20} className="text-[#0ea5e9] sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg font-bold text-[#0ea5e9] uppercase tracking-widest">Resmi Bilgiler</span>
              </div>
              
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-10 text-sm sm:text-base w-full flex-1">
                <div className="sm:col-span-2 w-full">
                  <dt className="text-[11px] sm:text-xs font-bold text-[#64748b] uppercase tracking-widest mb-1 sm:mb-2">Ticari Ünvan</dt>
                  <dd className="text-[#cbd5e1] leading-relaxed break-words font-medium">EYS İzolasyon ve Havalandırma Sistemleri Limited Şirketi</dd>
                </div>
                <div className="sm:col-span-2 w-full">
                  <dt className="text-[11px] sm:text-xs font-bold text-[#64748b] uppercase tracking-widest mb-1 sm:mb-2">Resmi İş Yeri Adresi</dt>
                  <dd className="text-[#cbd5e1] leading-relaxed break-words">Adnan Menderes Mah. Ender Sk. İzolasyon No: 1A, Kapaklı / Tekirdağ</dd>
                </div>
                <div className="w-full">
                  <dt className="text-[11px] sm:text-xs font-bold text-[#64748b] uppercase tracking-widest mb-1 sm:mb-2">Vergi Dairesi</dt>
                  <dd className="text-[#cbd5e1] font-medium">Kapaklı V.D.</dd>
                </div>
                <div className="w-full">
                  <dt className="text-[11px] sm:text-xs font-bold text-[#64748b] uppercase tracking-widest mb-1 sm:mb-2">Vergi Kimlik No</dt>
                  <dd className="text-[#cbd5e1] font-medium">3830976391</dd>
                </div>
                <div className="sm:col-span-2 w-full">
                  <dt className="text-[11px] sm:text-xs font-bold text-[#64748b] uppercase tracking-widest mb-1 sm:mb-2">Ana Faaliyet Tanımı</dt>
                  <dd className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed break-words">
                    432206 - Bina veya Diğer İnşaat Projelerinde Isıtma, Havalandırma, Soğutma ve İklimlendirme Sistemlerinin Bakım, Onarım ve Montaj İşleri
                  </dd>
                </div>
              </dl>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}