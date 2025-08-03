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
    'hero.subtitle': 'Analiza profesionale të gjakut dhe shërbime mjekësore me mbi 25 vjet eksperiencë dhe 500,000+ teste të kryera me 99.6% saktësi në Prizren',
    'hero.address': 'Gjeravica 30, Prizren 20000',
    'hero.hours': 'Hën-Premte 07:00-16:00 | Sht 07:00-13:00',
    'hero.hours.mobile': '07:00-16:00 (H-P) | 07:00-13:00 (Sht)',
    'hero.contact': 'Kontaktoni Tash',
    'hero.services': 'Shërbimet Tona',
    'hero.results247': 'Rezultatet elektronike 24/7 - Lexoni rezultatet tuaja kudo dhe kurdo',
    
    // About Section
    'about.title': 'Pse të Zgjidhni',
    'about.title.highlight': 'Laboratorin Labor',
    'about.description': 'Me mbi 25 vjet eksperiencë në fushën e analizave mjekësore, ne jemi partneri juaj i besueshëm për shëndetin dhe mirëqenien tuaj. Laboratori Labor ka kryer mbi 500,000 teste me 99.6% saktësi, duke ofruar shërbime të specializuara me teknologjinë më të re dhe stafin më të kualifikuar në Prizren.',
    'about.experience': '25+ Vjet Eksperiencë',
    'about.experience.desc': 'Dy dekadë shërbimi të besueshëm dhe profesional me mbi 500,000 teste të kryera me 99.6% saktësi',
    'about.security': 'Siguri dhe Cilësi',
    'about.security.desc': 'Përdorimi i teknologjisë më të avancuar dhe standardeve ndërkombëtare të sigurisë',
    'about.team': 'Staf i Kualifikuar',
    'about.team.desc': 'Ekip profesional i trajnuar me përvojë të gjatë në fushën e laboratorisë mjekësore',
    'about.speed': 'Rezultate të Shpejta',
    'about.speed.desc': 'Rezultate brenda disa orëve - përpunim dhe dorëzim i shpejtë me saktësi të lartë',
    'about.license': 'I Licensuar dhe i Certifikuar nga Autoritetet Shëndetësore të Kosovës',
    
    // Services Section
    'services.title': 'Shërbimet',
    'services.title.highlight': 'Tona',
    'services.description': 'Ofrojmë analizë të specializuara të gjakut dhe shërbime mjekësore me teknologjinë më të re, standardet më të larta të cilësisë dhe rezultate brenda disa orëve',
    'services.advanced.title': 'Analizat më të Avancuara të Gjakut',
    'services.advanced.description': 'Me teknologjinë më moderne dhe stafin më të kualifikuar, ne sigurojmë rezultate të sakta dhe të shpejta për të gjitha analizat e gjakut. Çdo test kryhet sipas standardeve ndërkombëtare dhe me kujdesin më të madh për detajet.',
    'services.online247': 'Rezultate Online 24/7',
    'services.online247.desc': 'Lexoni rezultatet tuaja në çdo kohë nga telefoni, tableti ose kompjuteri.',
    'services.tech': 'Teknologji e Re',
    'services.reports': 'Raporte të Detajuara',
    
    // Service Items
    'service.blood.title': 'Analiza e Gjakut të Plotë',
    'service.blood.desc': 'Analiza komplekse të gjakut që përfshijnë numërimin e qelizave, nivelet e hemoglobinës dhe parametra të tjerë të rëndësishëm',
    'service.cardiac.title': 'Profili Kardiak',
    'service.cardiac.desc': 'Teste specialë për vlerësimin e shëndetit të zemrës, kolesterolit dhe triglicerideve',
    'service.hormonal.title': 'Teste Hormonale',
    'service.hormonal.desc': 'Analiza të nivelit të hormoneve të ndryshme për diagnostikimin e çrregullimeve endokrine',
    'service.biochemistry.title': 'Biokimia Klinike',
    'service.biochemistry.desc': 'Analiza të enzimave, proteinave dhe substancave kimike në gjak për vlerësimin e funksionit të organeve',
    'service.infectious.title': 'Teste për Sëmundje Infektive',
    'service.infectious.desc': 'Diagnostikim i saktë për HIV, Hepatit A/B/C, dhe sëmundje të tjera infektive',
    'service.tumor.title': 'Markerë Tumoralë',
    'service.tumor.desc': 'Teste të specializuara për zbulimin e hershëm të kancerit dhe monitorimin e trajtimit',
    'service.allergy.title': 'Panele Alergjike',
    'service.allergy.desc': 'Identifikimi i alergjive të ndryshme për një jetë më të shëndetshme',
    'service.electronic.title': 'Rezultate Elektronike 24/7',
    'service.electronic.desc': 'Merrni rezultatet tuaja online në çdo kohë të ditës dhe natës, nga çdo pajisje me qasje në internet',
    'service.detailed.title': 'Raporte të Detajuara',
    'service.detailed.desc': 'Raporte të plota mjekësore me interpretim profesional dhe rekomandime për hapat e mëtejshëm',
    
    // Contact
    'contact.title': 'Kontaktoni',
    'contact.title.highlight': 'Me Ne',
    'contact.description': 'Jemi këtu për t\'ju ndihmuar me të gjitha pyetjet tuaja rreth shërbimeve tona mjekësore. Kontaktoni me ne për informata shtesë ose për të rezervuar një vizitë.',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefoni',
    'contact.hours': 'Orari i Punës',
    'contact.email': 'Email',
    'contact.visit': 'Na Vizitoni në Laboratorin Tonë',
    'contact.visit.desc': 'Laboratori Labor ndodhet në qendër të Prizrenit, në një lokacion të lehtë për t\'u arritur. Ofrojmë një ambient të rehatshëm dhe profesional për të gjithë pacientët tanë.',
    'contact.phone.desc': 'Për informata dhe pyetje',
    'contact.email.desc': 'Për komunikim elektronik',
    'contact.closed': 'E mbyllur',
    'contact.parking': 'Parkingje i disponueshëm pranë laboratorit',
    'contact.call': 'Telefononi Tani',
    'contact.whatsapp': 'WhatsApp',
    'contact.directions': 'Merr Udhëzimet në Google Maps',
    
    // Working Hours
    'hours.weekdays': 'Hënë - Premte: 07:00 - 16:00',
    'hours.saturday': 'Shtunë: 07:00 - 13:00',
    'hours.sunday': 'E Diel: E mbyllur',
    'hours.short': 'Hënë-Premte: 07:00-16:00 | Shtunë: 07:00-13:00',
    
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
    'hero.subtitle': 'Profesionalne analize krvi i medicinske usluge sa preko 25 godina iskustva i 500,000+ testova izvršenih sa 99.6% tačnošću u Prizrenu',
    'hero.address': 'Đeravica 30, Prizren 20000',
    'hero.hours': 'Pon-Pet 07:00-16:00 | Sub 07:00-13:00',
    'hero.hours.mobile': '07:00-16:00 (P-P) | 07:00-13:00 (Sub)',
    'hero.contact': 'Kontaktirajte nas sada',
    'hero.services': 'Naše usluge',
    'hero.results247': 'Elektronski rezultati 24/7 - Čitajte rezultate bilo gde i bilo kada',
    
    // About Section
    'about.title': 'Zašto izabrati',
    'about.title.highlight': 'Laboratoriju Labor',
    'about.description': 'Sa preko 25 godina iskustva u oblasti medicinskih analiza, mi smo vaš pouzdan partner za zdravlje i blagostanje. Laboratorija Labor je izvršila preko 500,000 testova sa 99.6% tačnošću, pružajući specijalizovane usluge najnovijom tehnologijom i najkvalifikovanijim osobljem u Prizrenu.',
    'about.experience': '25+ godina iskustva',
    'about.experience.desc': 'Dve decenije pouzdane i profesionalne usluge sa preko 500,000 testova izvršenih sa 99.6% tačnošću',
    'about.security': 'Bezbednost i kvalitet',
    'about.security.desc': 'Korišćenje najnaprednijih tehnologija i međunarodnih standarda bezbednosti',
    'about.team': 'Kvalifikovano osoblje',
    'about.team.desc': 'Profesionalni tim obučen sa dugogodišnjim iskustvom u oblasti medicinske laboratorije',
    'about.speed': 'Brzi rezultati',
    'about.speed.desc': 'Rezultati u roku od nekoliko sati - brza obrada i isporuka sa visokom tačnošću',
    'about.license': 'Licenciran i sertifikovan od strane zdravstvenih vlasti Kosova',
    
    // Services Section
    'services.title': 'Naše',
    'services.title.highlight': 'usluge',
    'services.description': 'Pružamo specijalizovane analize krvi i medicinske usluge najnovijom tehnologijom, najvišim standardima kvaliteta i rezultatima u roku od nekoliko sati',
    'services.advanced.title': 'Najnaprednije analize krvi',
    'services.advanced.description': 'Najmodernijom tehnologijom i najkvalifikovanijim osobljem, garantujemo tačne i brze rezultate za sve analize krvi. Svaki test se izvršava prema međunarodnim standardima i najvećom pažnjom prema detaljima.',
    'services.online247': 'Online rezultati 24/7',
    'services.online247.desc': 'Čitajte rezultate bilo kada sa telefona, tableta ili računara.',
    'services.tech': 'Nova tehnologija',
    'services.reports': 'Detaljni izveštaji',
    
    // Service Items
    'service.blood.title': 'Kompletna analiza krvi',
    'service.blood.desc': 'Kompleksne analize krvi koje uključuju brojanje ćelija, nivoe hemoglobina i druge važne parametre',
    'service.cardiac.title': 'Srčani profil',
    'service.cardiac.desc': 'Specijalni testovi za procenu zdravlja srca, holesterola i triglicerida',
    'service.hormonal.title': 'Hormonski testovi',
    'service.hormonal.desc': 'Analize nivoa različitih hormona za dijagnostikovanje endokrinih poremećaja',
    'service.biochemistry.title': 'Klinička biohemija',
    'service.biochemistry.desc': 'Analize enzima, proteina i hemijskih supstanci u krvi za procenu funkcije organa',
    'service.infectious.title': 'Testovi za infektivne bolesti',
    'service.infectious.desc': 'Tačna dijagnoza za HIV, Hepatitis A/B/C i druge infektivne bolesti',
    'service.tumor.title': 'Tumorski markeri',
    'service.tumor.desc': 'Specijalizovani testovi za rano otkrivanje raka i praćenje lečenja',
    'service.allergy.title': 'Alergijski paneli',
    'service.allergy.desc': 'Identifikacija različitih alergija za zdraviji život',
    'service.electronic.title': 'Elektronski rezultati 24/7',
    'service.electronic.desc': 'Dobijte rezultate online bilo kada tokom dana i noći, sa bilo kog uređaja sa pristupom internetu',
    'service.detailed.title': 'Detaljni izveštaji',
    'service.detailed.desc': 'Kompletni medicinski izveštaji sa profesionalnim tumačenjem i preporukama za dalje korake',
    
    // Contact
    'contact.title': 'Kontaktirajte',
    'contact.title.highlight': 'nas',
    'contact.description': 'Tu smo da vam pomognemo sa svim pitanjima o našim medicinskim uslugama. Kontaktirajte nas za dodatne informacije ili da zakažete posetu.',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefon',
    'contact.hours': 'Radno vreme',
    'contact.email': 'Email',
    'contact.visit': 'Posetite nas u našoj laboratoriji',
    'contact.visit.desc': 'Laboratorija Labor se nalazi u centru Prizrena, na lako dostupnoj lokaciji. Pružamo udobnu i profesionalnu atmosferu za sve naše pacijente.',
    'contact.phone.desc': 'Za informacije i pitanja',
    'contact.email.desc': 'Za elektronsku komunikaciju',
    'contact.closed': 'Zatvoreno',
    'contact.parking': 'Parking dostupan pored laboratorije',
    'contact.call': 'Pozovite sada',
    'contact.whatsapp': 'WhatsApp',
    'contact.directions': 'Dobijte uputstva u Google Maps',
    
    // Working Hours
    'hours.weekdays': 'Ponedeljak - Petak: 07:00 - 16:00',
    'hours.saturday': 'Subota: 07:00 - 13:00',
    'hours.sunday': 'Nedelja: Zatvoreno',
    'hours.short': 'Ponedeljak-Petak: 07:00-16:00 | Subota: 07:00-13:00',
    
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
    'hero.subtitle': 'Professional blood analysis and medical services with over 25 years of experience and 500,000+ tests performed with 99.6% accuracy in Prizren',
    'hero.address': 'Gjeravica 30, Prizren 20000',
    'hero.hours': 'Mon-Fri 07:00-16:00 | Sat 07:00-13:00',
    'hero.hours.mobile': '07:00-16:00 (M-F) | 07:00-13:00 (Sat)',
    'hero.contact': 'Contact Us Now',
    'hero.services': 'Our Services',
    'hero.results247': 'Electronic results 24/7 - Read your results anywhere, anytime',
    
    // About Section
    'about.title': 'Why Choose',
    'about.title.highlight': 'Laboratory Labor',
    'about.description': 'With over 25 years of experience in medical analysis, we are your trusted partner for health and wellness. Laboratory Labor has performed over 500,000 tests with 99.6% accuracy, providing specialized services with the latest technology and the most qualified staff in Prizren.',
    'about.experience': '25+ Years of Experience',
    'about.experience.desc': 'Two decades of reliable and professional service with over 500,000 tests performed with 99.6% accuracy',
    'about.security': 'Security and Quality',
    'about.security.desc': 'Using the most advanced technology and international safety standards',
    'about.team': 'Qualified Staff',
    'about.team.desc': 'Professional team trained with extensive experience in the medical laboratory field',
    'about.speed': 'Fast Results',
    'about.speed.desc': 'Results within hours - fast processing and delivery with high accuracy',
    'about.license': 'Licensed and Certified by Kosovo Health Authorities',
    
    // Services Section
    'services.title': 'Our',
    'services.title.highlight': 'Services',
    'services.description': 'We provide specialized blood analysis and medical services with the latest technology, highest quality standards, and results within hours',
    'services.advanced.title': 'Most Advanced Blood Analysis',
    'services.advanced.description': 'With the most modern technology and qualified staff, we ensure accurate and fast results for all blood analyses. Every test is performed according to international standards and with the greatest attention to detail.',
    'services.online247': 'Online Results 24/7',
    'services.online247.desc': 'Read your results anytime from phone, tablet, or computer.',
    'services.tech': 'New Technology',
    'services.reports': 'Detailed Reports',
    
    // Service Items
    'service.blood.title': 'Complete Blood Analysis',
    'service.blood.desc': 'Comprehensive blood tests including cell count, hemoglobin levels, and other important parameters',
    'service.cardiac.title': 'Cardiac Profile',
    'service.cardiac.desc': 'Special tests for heart health assessment, cholesterol, and triglycerides',
    'service.hormonal.title': 'Hormonal Tests',
    'service.hormonal.desc': 'Analysis of various hormone levels for diagnosing endocrine disorders',
    'service.biochemistry.title': 'Clinical Biochemistry',
    'service.biochemistry.desc': 'Analysis of enzymes, proteins, and chemical substances in blood for organ function assessment',
    'service.infectious.title': 'Infectious Disease Tests',
    'service.infectious.desc': 'Accurate diagnosis for HIV, Hepatitis A/B/C, and other infectious diseases',
    'service.tumor.title': 'Tumor Markers',
    'service.tumor.desc': 'Specialized tests for early cancer detection and treatment monitoring',
    'service.allergy.title': 'Allergy Panels',
    'service.allergy.desc': 'Identification of various allergies for a healthier life',
    'service.electronic.title': 'Electronic Results 24/7',
    'service.electronic.desc': 'Get your results online anytime day or night, from any device with internet access',
    'service.detailed.title': 'Detailed Reports',
    'service.detailed.desc': 'Complete medical reports with professional interpretation and recommendations for next steps',
    
    // Contact
    'contact.title': 'Contact',
    'contact.title.highlight': 'Us',
    'contact.description': 'We are here to help you with all your questions about our medical services. Contact us for additional information or to schedule a visit.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.hours': 'Working Hours',
    'contact.email': 'Email',
    'contact.visit': 'Visit Us at Our Laboratory',
    'contact.visit.desc': 'Laboratory Labor is located in the center of Prizren, in an easily accessible location. We provide a comfortable and professional environment for all our patients.',
    'contact.phone.desc': 'For information and questions',
    'contact.email.desc': 'For electronic communication',
    'contact.closed': 'Closed',
    'contact.parking': 'Parking available near the laboratory',
    'contact.call': 'Call Now',
    'contact.whatsapp': 'WhatsApp',
    'contact.directions': 'Get Directions on Google Maps',
    
    // Working Hours
    'hours.weekdays': 'Monday - Friday: 07:00 - 16:00',
    'hours.saturday': 'Saturday: 07:00 - 13:00',
    'hours.sunday': 'Sunday: Closed',
    'hours.short': 'Monday-Friday: 07:00-16:00 | Saturday: 07:00-13:00',
    
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