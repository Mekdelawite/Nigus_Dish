import { useState } from "react";
import { Calculator, MapPin, Check, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function InteractiveTools() {
  const { t } = useLanguage();
  const [service, setService] = useState("installation");
  const [distance, setDistance] = useState(0);
  const [area, setArea] = useState("");
  const [areaStatus, setAreaStatus] = useState<null | boolean>(null);

  const basePrices: Record<string, number> = {
    installation: 500,
    repair: 300,
    maintenance: 200,
  };

  const calculatePrice = () => {
    const base = basePrices[service] || 0;
    const transport = distance * 10; // 10 ETB per km
    return base + transport;
  };

  const checkArea = () => {
    const availableAreas = ["mekdela", "amba", "addis", "bole", "yeka", "akaki", "lideta", "arada"];
    const isAvailable = availableAreas.some(a => area.toLowerCase().includes(a));
    setAreaStatus(isAvailable);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Price Calculator */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue">{t.tools.calc.title}</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t.tools.calc.serviceLabel}</label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none bg-white"
                >
                  <option value="installation">{t.tools.calc.options.installation}</option>
                  <option value="repair">{t.tools.calc.options.repair}</option>
                  <option value="maintenance">{t.tools.calc.options.maintenance}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t.tools.calc.distanceLabel}</label>
                <input 
                  type="number" 
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none"
                />
              </div>
              <div className="pt-6 border-t border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">{t.tools.calc.estPrice}</span>
                  <span className="text-3xl font-black text-brand-orange">{calculatePrice()} ETB</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-2">{t.tools.calc.note}</p>
              </div>
            </div>
          </div>

          {/* Area Checker */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue">{t.tools.area.title}</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-slate-600 text-sm">{t.tools.area.subtitle}</p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder={t.tools.area.placeholder}
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none"
                />
                <button 
                  onClick={checkArea}
                  className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors"
                >
                  {t.tools.area.btn}
                </button>
              </div>

              {areaStatus !== null && (
                <div className={`p-4 rounded-xl flex items-center gap-3 ${areaStatus ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {areaStatus ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span className="font-bold">{t.tools.area.yes}</span>
                    </>
                  ) : (
                    <>
                      <X className="w-5 h-5" />
                      <span className="font-bold">{t.tools.area.no}</span>
                    </>
                  )}
                </div>
              )}
              
              <div className="pt-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{t.tools.area.popular}</h4>
                <div className="flex flex-wrap gap-2">
                  {["Mekdela Amba", "Bole", "Yeka", "Arada", "Lideta"].map(a => (
                    <span key={a} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
