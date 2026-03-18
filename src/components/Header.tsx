import { motion } from "motion/react";
import { Phone, Satellite, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Satellite className="w-7 h-7 text-brand-blue" />
              <span className="text-xl font-bold tracking-tight text-brand-blue">
                Nigus <span className="text-brand-orange">Satellite</span>
              </span>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-9">
              {t.tagline}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "en" ? "am" : "en")}
              className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-brand-blue transition-colors uppercase"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "Amharic" : "English"}
            </button>

            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                <Phone className="w-4 h-4 text-brand-orange" />
                0928546537
              </div>
            </div>
            <button className="bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95">
              {t.nav.bookNow}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "am" : "en")}
              className="p-2 text-slate-500"
            >
              <Globe className="w-6 h-6" />
            </button>
            <a href="tel:0928546537" className="p-2 text-brand-orange">
              <Phone className="w-6 h-6" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-slate-900 hover:text-brand-blue"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <button className="w-full bg-brand-blue text-white py-3 rounded-xl font-semibold">
              {t.nav.bookNow}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
