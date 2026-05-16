import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'sq' as Language, name: 'Shqip', short: 'SQ' },
    { code: 'tr' as Language, name: 'Türkçe', short: 'TR' },
    { code: 'bs' as Language, name: 'Bosanski', short: 'BS' },
    { code: 'en' as Language, name: 'English', short: 'EN' },
  ];

  const current = languages.find((l) => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 rounded-sm border border-border px-3 py-2 font-mono text-[0.7rem] uppercase tracking-wider-2 text-foreground/80 transition-colors duration-300 hover:border-foreground hover:text-foreground focus-visible:outline-none"
          aria-label="Language"
        >
          <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span>{current?.short}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[10rem] rounded-sm border-border bg-popover p-1"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              'flex cursor-pointer items-center justify-between gap-3 rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-wider-2',
              language === lang.code && 'text-primary'
            )}
          >
            <span className="flex items-center gap-3">
              <span className="text-[0.62rem] text-muted-foreground">
                {lang.short}
              </span>
              <span className="font-sans text-sm normal-case tracking-normal">
                {lang.name}
              </span>
            </span>
            {language === lang.code && <Check className="h-3.5 w-3.5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
