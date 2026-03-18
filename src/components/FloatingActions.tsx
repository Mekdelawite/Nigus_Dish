import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/251928546537?text=Hi%20Nigus,%20I%20need%20satellite%20service"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:0928546537"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand-orange text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-orange-600 transition-colors md:hidden"
      >
        <Phone className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
