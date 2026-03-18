import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    {
      url: "https://images.unsplash.com/photo-1518481852452-9415b262eba4?auto=format&fit=crop&q=80&w=400",
      title: t.gallery.items[0].title,
      category: t.gallery.items[0].category,
    },
    {
      url: "https://images.unsplash.com/photo-1550159930-40066082a4fc?auto=format&fit=crop&q=80&w=400",
      title: t.gallery.items[1].title,
      category: t.gallery.items[1].category,
    },
    {
      url: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400",
      title: t.gallery.items[2].title,
      category: t.gallery.items[2].category,
    },
    {
      url: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=400",
      title: t.gallery.items[3].title,
      category: t.gallery.items[3].category,
    },
    {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400",
      title: t.gallery.items[4].title,
      category: t.gallery.items[4].category,
    },
    {
      url: "https://images.unsplash.com/photo-1520867014606-f3d94f170c2b?auto=format&fit=crop&q=80&w=400",
      title: t.gallery.items[5].title,
      category: t.gallery.items[5].category,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-blue mb-4">{t.gallery.title}</h2>
          <p className="text-slate-600">{t.gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest mb-1">{img.category}</span>
                <h4 className="text-white font-bold text-sm">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
