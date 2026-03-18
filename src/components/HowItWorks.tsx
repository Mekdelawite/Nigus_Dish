import { motion } from "motion/react";
import { PhoneCall, FileText, Home } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      ...t.howItWorks.steps[0],
      icon: PhoneCall,
    },
    {
      ...t.howItWorks.steps[1],
      icon: FileText,
    },
    {
      ...t.howItWorks.steps[2],
      icon: Home,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-blue mb-4">{t.howItWorks.title}</h2>
          <p className="text-slate-600">{t.howItWorks.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
