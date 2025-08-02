import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Laboratori <span className="text-foreground">Labor</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Rreth Nesh
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Shërbimet
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kontakti
            </button>
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Gjeravica 30, Prizren</span>
            </div>
            <Button size="sm" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Kontaktoni</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Rreth Nesh
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Shërbimet
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Kontakti
              </button>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>Gjeravica 30, Prizren</span>
                </div>
                <Button size="sm" className="w-full flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Kontaktoni</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;