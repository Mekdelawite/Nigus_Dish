import { Satellite, Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Satellite className="w-6 h-6 text-brand-blue" />
              <span className="text-lg font-bold tracking-tight text-brand-blue">
                Nigus <span className="text-brand-orange">Satellite</span>
              </span>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              {t.footer.hours} <br />
              <span className="text-brand-orange font-bold">{t.footer.emergency}</span>
            </div>
          </div>

          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#home" className="hover:text-brand-blue transition-colors">{t.nav.home}</a>
            <a href="#services" className="hover:text-brand-blue transition-colors">{t.nav.services}</a>
            <a href="#about" className="hover:text-brand-blue transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-brand-blue transition-colors">{t.nav.contact}</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Nigus Satellite Services. {t.footer.rights}</p>
          <p>{t.footer.designed}</p>
        </div>
      </div>
    </footer>
  );
}
