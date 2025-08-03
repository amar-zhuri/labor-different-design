import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/laboratory-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Laboratori <span className="text-primary-light">Labor</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Analiza profesionale të gjakut dhe shërbime mjekësore me mbi 25 vjet eksperiencë dhe 500,000+ teste të kryera me 99.6% saktësi në Prizren
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5" />
              <span>Gjeravica 30, Prizren 20000</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5" />
              <span>Hën-Premte 07:00-16:00 | Sht 07:00-13:00</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
              <Phone className="mr-2 h-5 w-5" />
              Kontaktoni Tash
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-primary">
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