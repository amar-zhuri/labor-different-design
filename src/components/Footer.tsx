import { MapPin, Phone, Clock, Award, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/34c49b4a-27df-4c53-b230-575af90598b4.png" 
              alt="Laboratori Labor Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Me mbi 25 vjet eksperiencë në fushën e analizave mjekësore, Laboratori Labor 
              është partneri juaj i besueshëm për shëndetin dhe mirëqenien tuaj në Prizren.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-4 w-4" />
              <span>I Licensuar dhe i Certifikuar nga Autoritetet Shëndetësore</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informata Kontakti</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>Gjeravica 30</p>
                  <p>Prizren 20000</p>
                  <p>Republika e Kosovës</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="text-sm">
                  <p>+383 44 217 859</p>
                  <p>+383 49 767 705</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Na ndiqni</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/lablabor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/laboratori_labor/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Orari i Punës</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Hënë - Premte</p>
                  <p className="text-primary-foreground/80">07:00 - 16:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Shtunë</p>
                  <p className="text-primary-foreground/80">07:00 - 13:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">E Diel</p>
                  <p className="text-primary-foreground/80">E mbyllur</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 Laboratori Labor. Të gjitha të drejtat e rezervuara.
            </div>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
              <span>Dizajnuar dhe zhvilluar me kujdes për pacientët tanë</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;