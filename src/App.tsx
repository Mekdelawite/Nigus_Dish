import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import SpecialOffers from "./components/SpecialOffers";
import InteractiveTools from "./components/InteractiveTools";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

import { LanguageProvider } from "./LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-orange-100 selection:text-brand-orange">
        <Header />
        <main>
          <Hero />
          <Services />
          <HowItWorks />
          <SpecialOffers />
          <InteractiveTools />
          <Gallery />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
