import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-bold text-brand-orange uppercase tracking-wider mb-3">{t.contact.badge}</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
              {t.contact.title} <br />
              <span className="text-brand-blue">{t.contact.highlight}</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10">
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-orange">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1 font-medium">{t.contact.labels.call}</div>
                  <a href="tel:0928546537" className="text-xl font-bold block hover:text-brand-orange transition-colors">0928546537</a>
                  <a href="https://wa.me/251928546537?text=Hi%20Nigus,%20I%20need%20satellite%20service" className="text-brand-orange font-bold text-sm mt-1 inline-block hover:underline">{t.contact.labels.chat}</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-blue">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1 font-medium">{t.contact.labels.email}</div>
                  <div className="text-xl font-bold">nigus.satellite@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-green-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1 font-medium">{t.contact.labels.area}</div>
                  <div className="text-xl font-bold">{t.contact.labels.areaDetail}</div>
                  <div className="text-slate-300">{t.contact.labels.doorstep}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 text-slate-900"
          >
            <h4 className="text-2xl font-bold mb-6 text-brand-blue">{t.contact.form.title}</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">{t.contact.form.phone}</label>
                  <input 
                    type="tel" 
                    placeholder="09..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">{t.contact.form.address}</label>
                <input 
                  type="text" 
                  placeholder="Area, Street, House No."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none transition-all text-sm"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">{t.contact.form.service}</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none transition-all bg-white text-sm">
                    {t.contact.form.options.map((option: string) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">{t.contact.form.dateTime}</label>
                  <input 
                    type="datetime-local" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <button className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 flex items-center justify-center gap-2 active:scale-95 mt-4">
                <Send className="w-5 h-5" />
                {t.contact.form.submit}
              </button>
              <p className="text-[10px] text-center text-slate-400 mt-4">{t.contact.form.note}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
