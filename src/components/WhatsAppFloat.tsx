import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppFloat = () => {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/38344217859"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("contact.whatsapp")}
      className="group fixed bottom-5 right-5 z-50 flex items-center md:bottom-8 md:right-8"
    >
      <span className="pointer-events-none mr-3 hidden translate-x-3 items-center rounded-full border border-border bg-card/80 px-4 py-2.5 font-mono text-[0.66rem] uppercase tracking-wider-2 text-foreground opacity-0 backdrop-blur-md transition-all duration-300 ease-precision group-hover:translate-x-0 group-hover:opacity-100 md:flex">
        {t("contact.whatsapp")}
      </span>

      <span className="glow-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 ease-precision group-hover:scale-105 group-hover:brightness-110 md:h-16 md:w-16">
        <span className="absolute inset-0 rounded-full bg-primary opacity-50 motion-safe:animate-pulse-ring" />
        <MessageSquare className="relative h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} />
      </span>
    </a>
  );
};

export default WhatsAppFloat;
