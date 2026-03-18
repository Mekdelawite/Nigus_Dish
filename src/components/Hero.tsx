import { motion } from "motion/react";
import { Phone, Calendar, CheckCircle2, Satellite, Award } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-brand-orange text-sm font-bold mb-6 border border-brand-orange/20">
              <Award className="w-4 h-4" />
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-blue leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg font-medium">
              {t.hero.subtitle} <br />
              <span className="text-sm text-slate-500 font-normal italic">{t.hero.note}</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95">
                <Calendar className="w-5 h-5" />
                {t.hero.bookBtn}
              </button>
              <a 
                href="tel:0928546537"
                className="flex items-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-brand-orange hover:text-brand-orange transition-all active:scale-95"
              >
                <Phone className="w-5 h-5" />
                {t.hero.callBtn}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                {t.hero.stats.fast}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                {t.hero.stats.reliable}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                {t.hero.stats.affordable}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1518481852452-9415b262eba4?auto=format&fit=crop&q=80&w=800" 
                alt="Satellite Dish Installation" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-brand-orange">
                  <Satellite className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.hero.floating.title}</div>
                  <div className="text-xs text-slate-500">{t.hero.floating.subtitle}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
