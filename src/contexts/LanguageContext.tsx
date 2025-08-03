import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'sq' | 'sr' | 'en'; // Albanian, Serbian, English

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  sq: {
    // Navigation
    'nav.about': 'Rreth Nesh',
    'nav.services': 'Shërbimet',
    'nav.contact': 'Kontakti',
    
    // Hero Section
    'hero.title': 'Laboratori Labor',
    'hero.subtitle': 'Analizat më të Sakta në Kosovë',
    'hero.description': 'Me mbi 25 vjet përvojë në analizat mjekësore, ne jemi të angazhuar për të ofruar rezultate të sakta dhe të shpejta për të gjithë pacientët tanë.',
    'hero.address': 'Rruga Dëshmorët e Kombit, Ferizaj',
    'hero.hours': 'Hën-Premte 07:00-16:00 | Sht 07:00-13:00',
    'hero.contact': 'Kontaktoni Tash',
    'hero.services': 'Shërbimet Tona',
    
    // About Section
    'about.title': 'Pse të na Zgjidhni Ne?',
    'about.description': 'Me mbi 25 vjet përvojë në fushën e analizave mjekësore, ne jemi një nga laboratoritë më të besuara në Kosovë.',
    'about.experience': 'Vite Përvojë',
    'about.experience.desc': 'Këshillim profesional dhe rezultate të sakta',
    'about.technology': 'Teknologji e Avancuar',
    'about.technology.desc': 'Pajisje më të fundit për rezultate të përpikta',
    'about.speed': 'Rezultate të Shpejta',
    'about.speed.desc': 'Rezultatet e shumicës së analizave brenda ditës',
    'about.team': 'Ekip Ekspert',
    'about.team.desc': 'Staf me kualifikime dhe përvojë të gjatë',
    'about.license': 'Licencuar nga Ministria e Shëndetësisë',
    
    // Contact
    'contact.title': 'Na Kontaktoni',
    'contact.description': 'Jemi këtu për t\'iu përgjigjur çdo pyetjeje që mund të keni.',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefoni',
    'contact.hours': 'Orari i Punës',
    'contact.email': 'Email',
    'contact.visit': 'Na Vizitoni',
    'contact.visit.desc': 'Gjeni lokacionin tonë dhe orarin e punës',
    
    // Working Hours
    'hours.weekdays': 'Hënë - Premte: 07:00 - 16:00',
    'hours.saturday': 'Shtunë: 07:00 - 13:00',
    'hours.sunday': 'E Diel: E mbyllur',
    
    // Footer
    'footer.description': 'Laboratori Labor - Analizat më të sakta në Kosovë me mbi 25 vjet përvojë.',
    'footer.license': 'Licencuar nga Ministria e Shëndetësisë së Kosovës',
    'footer.copyright': '© 2024 Laboratori Labor. Të gjitha të drejtat e rezervuara.',
    'footer.design': 'Dizajni i faqes nga Lovable.'
  },
  
  sr: {
    // Navigation
    'nav.about': 'O nama',
    'nav.services': 'Usluge',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Laboratorija Labor',
    'hero.subtitle': 'Najprecizniji testovi u Kosovu',
    'hero.description': 'Sa preko 25 godina iskustva u medicinskim analizama, posvećeni smo pružanju tačnih i brzih rezultata za sve naše pacijente.',
    'hero.address': 'Ulica Dešmoret e Kombit, Uroševac',
    'hero.hours': 'Pon-Pet 07:00-16:00 | Sub 07:00-13:00',
    'hero.contact': 'Kontaktirajte nas',
    'hero.services': 'Naše usluge',
    
    // About Section
    'about.title': 'Zašto izabrati nas?',
    'about.description': 'Sa preko 25 godina iskustva u oblasti medicinskih analiza, mi smo jedna od najpouzdanijih laboratorija u Kosovu.',
    'about.experience': 'Godine iskustva',
    'about.experience.desc': 'Stručno savetovanje i tačni rezultati',
    'about.technology': 'Napredna tehnologija',
    'about.technology.desc': 'Najnovija oprema za precizne rezultate',
    'about.speed': 'Brzi rezultati',
    'about.speed.desc': 'Rezultati većine analiza u toku dana',
    'about.team': 'Stručni tim',
    'about.team.desc': 'Osoblje sa kvalifikacijama i dugogodišnjim iskustvom',
    'about.license': 'Licenciran od strane Ministarstva zdravlja',
    
    // Contact
    'contact.title': 'Kontaktirajte nas',
    'contact.description': 'Tu smo da odgovorimo na svako pitanje koje možda imate.',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefon',
    'contact.hours': 'Radno vreme',
    'contact.email': 'Email',
    'contact.visit': 'Posetite nas',
    'contact.visit.desc': 'Pronađite našu lokaciju i radno vreme',
    
    // Working Hours
    'hours.weekdays': 'Ponedeljak - Petak: 07:00 - 16:00',
    'hours.saturday': 'Subota: 07:00 - 13:00',
    'hours.sunday': 'Nedelja: Zatvoreno',
    
    // Footer
    'footer.description': 'Laboratorija Labor - Najprecizniji testovi u Kosovu sa preko 25 godina iskustva.',
    'footer.license': 'Licenciran od strane Ministarstva zdravlja Kosova',
    'footer.copyright': '© 2024 Laboratorija Labor. Sva prava zadržana.',
    'footer.design': 'Dizajn stranice od Lovable.'
  },
  
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Laboratory Labor',
    'hero.subtitle': 'Most Accurate Tests in Kosovo',
    'hero.description': 'With over 25 years of experience in medical analyses, we are committed to providing accurate and fast results for all our patients.',
    'hero.address': 'Dëshmorët e Kombit Street, Ferizaj',
    'hero.hours': 'Mon-Fri 07:00-16:00 | Sat 07:00-13:00',
    'hero.contact': 'Contact Us Now',
    'hero.services': 'Our Services',
    
    // About Section
    'about.title': 'Why Choose Us?',
    'about.description': 'With over 25 years of experience in the field of medical analyses, we are one of the most trusted laboratories in Kosovo.',
    'about.experience': 'Years of Experience',
    'about.experience.desc': 'Professional advice and accurate results',
    'about.technology': 'Advanced Technology',
    'about.technology.desc': 'Latest equipment for precise results',
    'about.speed': 'Fast Results',
    'about.speed.desc': 'Results for most analyses within the day',
    'about.team': 'Expert Team',
    'about.team.desc': 'Staff with qualifications and long experience',
    'about.license': 'Licensed by the Ministry of Health',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.description': 'We are here to answer any questions you may have.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.hours': 'Working Hours',
    'contact.email': 'Email',
    'contact.visit': 'Visit Us',
    'contact.visit.desc': 'Find our location and working hours',
    
    // Working Hours
    'hours.weekdays': 'Monday - Friday: 07:00 - 16:00',
    'hours.saturday': 'Saturday: 07:00 - 13:00',
    'hours.sunday': 'Sunday: Closed',
    
    // Footer
    'footer.description': 'Laboratory Labor - Most accurate tests in Kosovo with over 25 years of experience.',
    'footer.license': 'Licensed by the Ministry of Health of Kosovo',
    'footer.copyright': '© 2024 Laboratory Labor. All rights reserved.',
    'footer.design': 'Website design by Lovable.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sq'); // Default to Albanian

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};