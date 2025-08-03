import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'sq' | 'sr' | 'en' | 'tr'; // Albanian, Serbian, English, Turkish

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
    'footer.design': 'Website design by Lovable.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer specialized blood tests and medical services with the latest technology and highest quality standards',
    'services.advanced.title': 'Most Advanced Blood Tests',
    'services.advanced.description': 'With the most modern technology and qualified staff, we ensure accurate and fast results for all blood tests. Each test is performed according to international standards with utmost care for details.',
    'services.new.technology': 'New Technology',
    'services.detailed.reports': 'Detailed Reports',
    
    // About
    'about.title.full': 'Why Choose Laboratory Labor?',
    'about.description.full': 'With over 25 years of experience in medical analyses, we are your trusted partner for health and wellness. Laboratory Labor offers specialized services with the latest technology and most qualified staff in Ferizaj.',
    'about.features.experience': 'Years of Experience',
    'about.features.experience.desc': 'One and a half decades of reliable and professional service in medical analysis',
    'about.features.security': 'Security and Quality',
    'about.features.security.desc': 'Use of most advanced technology and international safety standards',
    'about.features.staff': 'Qualified Staff',
    'about.features.staff.desc': 'Professional team trained with long experience in medical laboratory',
    'about.features.speed': 'Fast Results',
    'about.features.speed.desc': 'Fast processing and delivery of results with high accuracy and on time',
    
    // Technology
    'technology.title': 'Most Advanced Technology',
    'technology.subtitle': 'We invest in the latest technology from leading global companies to ensure the most accurate and fastest results for our patients',
    'technology.roche': 'Advanced systems for biochemical and immunological analysis',
    'technology.abbott': 'Modern technology for accurate and fast diagnosis',
    'technology.siemens': 'Semi-automatic equipment for reliable results',
    'technology.sysmex': 'World-leading technology for blood analysis and hematology',
    'technology.quality': 'Quality Control',
    'technology.quality.desc': 'Participation in international quality control programs',
    'technology.training': 'International Training',
    'technology.training.desc': 'Our staff regularly participates in international training',
    'technology.security': 'Process Security',
    'technology.security.desc': 'Certified quality assurance and daily calibration processes',
    'technology.same': 'Same technology used in the best European hospitals',
    
    // Expert Team
    'team.title': 'Most Qualified Team',
    'team.subtitle': 'Our staff consists of doctors and technicians with high qualifications and long experience in medical laboratory',
    'team.doctors': 'Experienced Doctors and Technicians',
    'team.doctors.desc': 'Qualified medical team of doctors and technicians with decades of experience',
    'team.doctors.detail': 'Most staff have over 15 years of experience',
    'team.international': 'International Training',
    'team.international.desc': 'Regular participation in international training and conferences',
    'team.international.detail': 'Continuous knowledge updates',
    'team.standards': 'European Standards',
    'team.standards.desc': 'Implementation of European laboratory protocols and standards',
    'team.standards.detail': 'Quality at EU level',
    'team.supervision': 'Medical Supervision',
    'team.supervision.desc': 'All results are reviewed by specialized doctors',
    'team.supervision.detail': 'Double check for maximum accuracy',
    'team.certifications': 'Certifications and Qualifications',
    'team.certifications.desc': 'We continuously invest in education and training of our staff to ensure we keep up with the latest developments in laboratory medicine.',
    'team.expertise': 'Recognized Expertise',
    'team.expertise.desc': 'Our laboratory is recognized throughout the region for service quality and staff expertise.',
    'team.years': 'Years Experience',
    'team.trained': 'Trained Staff'
  },
  
  tr: {
    // Navigation
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.contact': 'İletişim',
    
    // Hero Section
    'hero.title': 'Laboratuvar Labor',
    'hero.subtitle': 'Kosova\'da En Doğru Testler',
    'hero.description': '25 yılı aşkın tıbbi analiz deneyimi ile tüm hastalarımız için doğru ve hızlı sonuçlar sağlamaya kararlıyız.',
    'hero.address': 'Dëshmorët e Kombit Caddesi, Ferizaj',
    'hero.hours': 'Pzt-Cuma 07:00-16:00 | Cmt 07:00-13:00',
    'hero.contact': 'Şimdi İletişime Geçin',
    'hero.services': 'Hizmetlerimiz',
    
    // About Section
    'about.title': 'Neden Bizi Seçmelisiniz?',
    'about.description': '25 yılı aşkın tıbbi analiz alanında deneyimi ile Kosova\'nın en güvenilir laboratuvarlarından biriyiz.',
    'about.experience': 'Yıllık Deneyim',
    'about.experience.desc': 'Profesyonel danışmanlık ve doğru sonuçlar',
    'about.technology': 'İleri Teknoloji',
    'about.technology.desc': 'Kesin sonuçlar için en son ekipman',
    'about.speed': 'Hızlı Sonuçlar',
    'about.speed.desc': 'Çoğu analizin sonuçları gün içinde',
    'about.team': 'Uzman Ekip',
    'about.team.desc': 'Nitelikli ve uzun deneyimli personel',
    'about.license': 'Sağlık Bakanlığı tarafından lisanslanmıştır',
    
    // Contact
    'contact.title': 'İletişime Geçin',
    'contact.description': 'Sahip olabileceğiniz herhangi bir soruyu yanıtlamak için buradayız.',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.hours': 'Çalışma Saatleri',
    'contact.email': 'E-posta',
    'contact.visit': 'Bizi Ziyaret Edin',
    'contact.visit.desc': 'Konumumuzu ve çalışma saatlerimizi bulun',
    
    // Working Hours
    'hours.weekdays': 'Pazartesi - Cuma: 07:00 - 16:00',
    'hours.saturday': 'Cumartesi: 07:00 - 13:00',
    'hours.sunday': 'Pazar: Kapalı',
    
    // Footer
    'footer.description': 'Laboratuvar Labor - 25 yılı aşkın deneyimle Kosova\'da en doğru testler.',
    'footer.license': 'Kosova Sağlık Bakanlığı tarafından lisanslanmıştır',
    'footer.copyright': '© 2024 Laboratuvar Labor. Tüm hakları saklıdır.',
    'footer.design': 'Web sitesi tasarımı Lovable tarafından.',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'En son teknoloji ve en yüksek kalite standartları ile özel kan testleri ve tıbbi hizmetler sunuyoruz',
    'services.advanced.title': 'En Gelişmiş Kan Testleri',
    'services.advanced.description': 'En modern teknoloji ve kalifiye personel ile tüm kan testleri için doğru ve hızlı sonuçlar sağlıyoruz. Her test uluslararası standartlara göre ve detaylara en büyük özenle yapılır.',
    'services.new.technology': 'Yeni Teknoloji',
    'services.detailed.reports': 'Detaylı Raporlar',
    
    // About
    'about.title.full': 'Neden Laboratuvar Labor\'u Seçmelisiniz?',
    'about.description.full': '25 yılı aşkın tıbbi analiz deneyimi ile sağlık ve wellness\'ınız için güvenilir ortağınızız. Laboratuvar Labor, Ferizaj\'da en son teknoloji ve en kalifiye personel ile özel hizmetler sunar.',
    'about.features.experience': 'Yıllık Deneyim',
    'about.features.experience.desc': 'Tıbbi analizde andırılmaz güvenilir ve profesyonel hizmet',
    'about.features.security': 'Güvenlik ve Kalite',
    'about.features.security.desc': 'En gelişmiş teknoloji ve uluslararası güvenlik standartlarının kullanımı',
    'about.features.staff': 'Kalifiye Personel',
    'about.features.staff.desc': 'Tıbbi laboratuvarda uzun deneyime sahip eğitimli profesyonel ekip',
    'about.features.speed': 'Hızlı Sonuçlar',
    'about.features.speed.desc': 'Yüksek doğruluk ve zamanında hızlı işleme ve sonuç teslimi',
    
    // Technology
    'technology.title': 'En Gelişmiş Teknoloji',
    'technology.subtitle': 'Hastalarımız için en doğru ve en hızlı sonuçları sağlamak için önde gelen küresel şirketlerden en son teknolojiye yatırım yapıyoruz',
    'technology.roche': 'Biyokimyasal ve immünolojik analiz için gelişmiş sistemler',
    'technology.abbott': 'Doğru ve hızlı tanı için modern teknoloji',
    'technology.siemens': 'Güvenilir sonuçlar için yarı otomatik ekipman',
    'technology.sysmex': 'Kan analizi ve hematoloji için dünya lideri teknoloji',
    'technology.quality': 'Kalite Kontrolü',
    'technology.quality.desc': 'Uluslararası kalite kontrol programlarına katılım',
    'technology.training': 'Uluslararası Eğitim',
    'technology.training.desc': 'Personelimiz düzenli olarak uluslararası eğitimlere katılır',
    'technology.security': 'Süreç Güvenliği',
    'technology.security.desc': 'Sertifikalı kalite güvencesi ve günlük kalibrasyon süreçleri',
    'technology.same': 'En iyi Avrupa hastanelerinde kullanılan aynı teknoloji',
    
    // Expert Team
    'team.title': 'En Kalifiye Ekip',
    'team.subtitle': 'Personelimiz tıbbi laboratuvarda yüksek nitelikleri ve uzun deneyimi olan doktorlar ve teknisyenlerden oluşur',
    'team.doctors': 'Deneyimli Doktorlar ve Teknisyenler',
    'team.doctors.desc': 'Onlarca yıllık deneyime sahip kalifiye tıbbi doktor ve teknisyen ekibi',
    'team.doctors.detail': 'Personelin çoğu 15 yıldan fazla deneyime sahip',
    'team.international': 'Uluslararası Eğitim',
    'team.international.desc': 'Uluslararası eğitim ve konferanslara düzenli katılım',
    'team.international.detail': 'Sürekli bilgi güncellemesi',
    'team.standards': 'Avrupa Standartları',
    'team.standards.desc': 'Avrupa laboratuvar protokolleri ve standartlarının uygulanması',
    'team.standards.detail': 'AB düzeyinde kalite',
    'team.supervision': 'Tıbbi Denetim',
    'team.supervision.desc': 'Tüm sonuçlar uzman doktorlar tarafından gözden geçirilir',
    'team.supervision.detail': 'Maksimum doğruluk için çift kontrol',
    'team.certifications': 'Sertifikalar ve Nitelikler',
    'team.certifications.desc': 'Laboratuvar tıbbındaki en son gelişmelerle ayak uydurmamızı sağlamak için personelimizin eğitimi ve öğretimine sürekli yatırım yapıyoruz.',
    'team.expertise': 'Tanınan Uzmanlık',
    'team.expertise.desc': 'Laboratuvarımız hizmet kalitesi ve personel uzmanlığı açısından tüm bölgede tanınmaktadır.',
    'team.years': 'Yıl Deneyim',
    'team.trained': 'Eğitimli Personel'
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