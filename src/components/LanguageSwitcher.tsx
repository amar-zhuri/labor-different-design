import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

const LanguageSwitcher: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState('sq');

  const languages = [
    { code: 'sq', name: 'Shqip', flag: '🇽🇰' },
    { code: 'sr', name: 'Српски', flag: '🇷🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    
    // Wait for Google Translate to be available
    const triggerTranslation = () => {
      if (window.google && window.google.translate) {
        const gtCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (gtCombo) {
          gtCombo.value = langCode;
          gtCombo.dispatchEvent(new Event('change'));
        }
      } else {
        // If Google Translate isn't ready yet, try again
        setTimeout(triggerTranslation, 500);
      }
    };
    
    triggerTranslation();
  };

  const selectedLanguage = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{selectedLanguage.name}</span>
          <span className="sm:hidden">{selectedLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center gap-2 ${currentLanguage === lang.code ? 'bg-accent' : ''}`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;