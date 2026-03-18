import { motion } from "motion/react";
import { Wrench, Tv, Signal, Settings, Satellite, Zap } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      ...t.services.items[0],
      icon: Satellite,
      color: "bg-blue-50 text-brand-blue",
    },
    {
      ...t.services.items[1],
      icon: Signal,
      color: "bg-orange-50 text-brand-orange",
    },
    {
      ...t.services.items[2],
      icon: Wrench,
      color: "bg-slate-50 text-slate-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-brand-orange uppercase tracking-wider mb-3">{t.services.badge}</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t.services.title}
          </p>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="text-brand-blue font-black text-lg">{service.price}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-brand-blue rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">{t.services.custom.title}</h3>
            <p className="text-blue-100">{t.services.custom.subtitle}</p>
          </div>
          <button className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
            {t.services.custom.btn}
          </button>
        </div>
      </div>
    </section>
  );
}
