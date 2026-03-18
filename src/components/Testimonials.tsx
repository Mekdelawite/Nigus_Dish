import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-blue mb-4">{t.testimonials.title}</h2>
          <p className="text-slate-600">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial: any, index: number) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < 5 ? 'text-brand-orange fill-brand-orange' : 'text-slate-200'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic">"{testimonial.comment}"</p>
              <div>
                <h4 className="font-bold text-brand-blue">{testimonial.name}</h4>
                <p className="text-xs text-brand-orange font-medium">{testimonial.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
