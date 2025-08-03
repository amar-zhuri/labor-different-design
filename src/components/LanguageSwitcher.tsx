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
    
    // Simple approach: trigger Google Translate by setting language in URL
    const currentUrl = new URL(window.location.href);
    if (langCode === 'sq') {
      // Remove translation parameters to show original content
      currentUrl.searchParams.delete('tl');
      currentUrl.searchParams.delete('sl');
      currentUrl.hash = '';
    } else {
      // Add Google Translate parameters
      currentUrl.searchParams.set('tl', langCode);
      currentUrl.searchParams.set('sl', 'sq');
    }
    
    // Reload page with new language settings
    setTimeout(() => {
      window.location.href = currentUrl.toString();
    }, 100);
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