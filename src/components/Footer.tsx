import { MapPin, Phone, Clock, Award, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 text-center md:text-left">
            <img 
              src="/lovable-uploads/6e44207e-0580-48ea-a530-d5f391e4f8d2.png" 
              alt="Laboratori Labor Logo"
              className="h-12 md:h-16 w-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-primary-foreground/80 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Me mbi 25 vjet eksperiencë në fushën e analizave mjekësore, Laboratori Labor 
              është partneri juaj i besueshëm për shëndetin dhe mirëqenien tuaj në Prizren.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm">
              <Award className="h-3 md:h-4 w-3 md:w-4" />
              <span className="text-center md:text-left">I Licensuar dhe i Certifikuar nga Autoritetet Shëndetësore</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Informata Kontakti</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start gap-2 md:gap-3 justify-center md:justify-start">
                <MapPin className="h-3 md:h-4 w-3 md:w-4 mt-1 flex-shrink-0" />
                <div className="text-xs md:text-sm">
                  <p>Gjeravica 30</p>
                  <p>Prizren 20000</p>
                  <p>Republika e Kosovës</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                <Phone className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0" />
                <div className="text-xs md:text-sm">
                  <p>+383 44 217 859</p>
                  <p>+383 49 767 705</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-4 md:mt-6">
              <h4 className="text-xs md:text-sm font-semibold mb-2 md:mb-3">Na ndiqni</h4>
              <div className="flex gap-2 md:gap-3 justify-center md:justify-start">
                <a 
                  href="https://www.facebook.com/lablabor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 md:p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors touch-manipulation min-w-[44px] min-h-[44px] md:min-w-auto md:min-h-auto flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 md:h-4 w-4 md:w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/laboratori_labor/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 md:p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors touch-manipulation min-w-[44px] min-h-[44px] md:min-w-auto md:min-h-auto flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 md:h-4 w-4 md:w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Orari i Punës</h3>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                <Clock className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Hënë - Premte</p>
                  <p className="text-primary-foreground/80">07:00 - 16:00</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                <Clock className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Shtunë</p>
                  <p className="text-primary-foreground/80">07:00 - 13:00</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                <Clock className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">E Diel</p>
                  <p className="text-primary-foreground/80">E mbyllur</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-xs md:text-sm text-primary-foreground/80 mb-3 md:mb-0">
              © 2024 Laboratori Labor. Të gjitha të drejtat e rezervuara.
            </div>
            <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-primary-foreground/80">
              <span>Dizajnuar dhe zhvilluar me kujdes për pacientët tanë</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;