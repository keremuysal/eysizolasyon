"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#projeler", label: "Projeler" },
  { href: "#referanslar", label: "Referanslar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/95 backdrop-blur-md border-b border-[#2a3a4a]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 w-full">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative h-10 w-32 sm:w-40">
              <Image
                src="/images/eys-logo.png"
                alt="EYS İzolasyon"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 128px, 160px"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Ana navigasyon">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold text-[#94a3b8] hover:text-[#0ea5e9] transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+905353849191"
              className="flex items-center gap-2 text-sm font-bold text-[#94a3b8] hover:text-[#0ea5e9] transition-colors"
            >
              <Phone size={16} />
              <span>+90 535 384 91 91</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-[#94a3b8] hover:text-[#f0f4f8] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden w-full bg-[#161d27] border-t border-[#2a3a4a] overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1 w-full" aria-label="Mobil navigasyon">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-4 text-base font-bold text-[#94a3b8] hover:text-[#0ea5e9] hover:bg-[#1e2837] rounded-sm transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}