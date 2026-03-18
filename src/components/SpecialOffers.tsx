import { motion } from "motion/react";
import { Gift, Star, Zap } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function SpecialOffers() {
  const { t } = useLanguage();

  const offers = [
    {
      ...t.specialOffers.items[0],
      icon: Star,
    },
    {
      ...t.specialOffers.items[1],
      icon: Gift,
    },
    {
      ...t.specialOffers.items[2],
      icon: Zap,
    },
  ];

  return (
    <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4">{t.specialOffers.title}</h2>
          <p className="text-blue-100">{t.specialOffers.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                {offer.badge}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <offer.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-bold text-brand-orange mb-6">{t.specialOffers.emergency}</p>
          <button className="bg-white text-brand-blue px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all active:scale-95 shadow-xl">
            {t.specialOffers.claimBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
