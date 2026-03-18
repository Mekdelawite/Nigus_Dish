import { motion } from "motion/react";
import { GraduationCap, Award, ShieldCheck, Clock } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const features = [
    { icon: GraduationCap, ...t.about.features[0], color: "bg-blue-50 text-brand-blue" },
    { icon: Award, ...t.about.features[1], color: "bg-orange-50 text-brand-orange" },
    { icon: Clock, ...t.about.features[2], color: "bg-purple-50 text-purple-600" },
    { icon: ShieldCheck, ...t.about.features[3], color: "bg-green-50 text-green-600" },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800" 
                alt="Nigus - Professional Technician" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-brand-orange text-white p-8 rounded-3xl shadow-xl">
              <div className="text-4xl font-black mb-1">5+</div>
              <div className="text-sm font-bold uppercase tracking-wider">
                {t.language === 'en' ? (
                  <>Years of <br />Experience</>
                ) : (
                  <>የዓመታት <br />ልምድ</>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-bold text-brand-blue uppercase tracking-wider mb-3">{t.about.badge}</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
              {t.about.title} <br />
              <span className="text-brand-orange">{t.about.uni}</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t.about.bio}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-600">
              {t.about.quote}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
