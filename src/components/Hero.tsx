import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/laboratory-hero.jpg";
import { useEffect } from "react";
import { preloadCriticalResources } from "@/utils/performance";

const Hero = () => {
  useEffect(() => {
    // Preload critical resources for better performance
    preloadCriticalResources([heroImage]);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Seksioni kryesor i laboratorit">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Laboratori mjekësor modern me pajisje të avancuara për analizat më të sakta në Prizren"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Laboratori <span className="text-primary-light">Labor</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 opacity-95 leading-relaxed px-4 sm:px-0">
            Analiza profesionale të gjakut dhe shërbime mjekësore me mbi 25 vjet eksperiencë dhe 500,000+ teste të kryera me 99.6% saktësi në Prizren
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4 sm:px-0">
            <div className="flex items-center gap-2 text-sm md:text-lg">
              <MapPin className="h-4 md:h-5 w-4 md:w-5" />
              <span>Gjeravica 30, Prizren 20000</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-lg text-center">
              <Clock className="h-4 md:h-5 w-4 md:w-5" />
              <span className="hidden sm:inline">Hën-Premte 07:00-16:00 | Sht 07:00-13:00</span>
              <span className="sm:hidden">07:00-16:00 (H-P) | 07:00-13:00 (Sht)</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto w-full sm:w-auto"
              onClick={() => window.open('tel:+38344217859', '_self')}
            >
              <Phone className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              Kontaktoni Tash
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shërbimet Tona
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;