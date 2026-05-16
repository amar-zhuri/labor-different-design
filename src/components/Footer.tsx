import { MapPin, Phone, Clock, Award, Facebook, Instagram, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="grain relative overflow-hidden border-t border-border bg-background">
      <div className="atmosphere opacity-70" />
      <div className="grid-drift opacity-40" />

      <div className="container relative mx-auto">
        <div className="flex flex-col gap-8 border-b border-border py-14 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <img
              src="/lovable-uploads/6e44207e-0580-48ea-a530-d5f391e4f8d2.png"
              alt="Laboratori Labor"
              className="h-12 w-auto brightness-0 invert md:h-14"
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-3 self-start font-mono text-[0.7rem] uppercase tracking-widest-2 text-muted-foreground transition-colors hover:text-foreground md:self-end"
          >
            <span className="link-underline">Back to top</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary">
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-10 border-b border-border py-12 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="font-mono text-[0.66rem] uppercase tracking-widest-2 text-primary">
              {t("footer.contact")}
            </h3>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                <div className="font-mono text-sm leading-relaxed text-foreground/80">
                  <p>Gjeravica 30</p>
                  <p>Prizren 20000</p>
                  <p>{t("footer.country")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                <div className="font-mono text-sm leading-relaxed">
                  <a href="tel:+38344217859" className="block text-foreground/80 transition-colors hover:text-primary">
                    +383 44 217 859
                  </a>
                  <a href="tel:+38349767705" className="block text-foreground/80 transition-colors hover:text-primary">
                    +383 49 767 705
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[0.66rem] uppercase tracking-widest-2 text-primary">
              {t("footer.hours")}
            </h3>
            <div className="mt-6 space-y-4">
              {[t("hours.weekdays"), t("hours.saturday"), t("hours.sunday")].map((line, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                  <span className="font-mono text-sm text-foreground/80">{line}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[0.66rem] uppercase tracking-widest-2 text-primary">
              {t("footer.follow")}
            </h3>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/lablabor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/laboratori_labor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
            <div className="mt-8 inline-flex items-start gap-2.5">
              <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
              <span className="font-mono text-[0.62rem] uppercase leading-relaxed tracking-wider-2 text-muted-foreground">
                {t("footer.license")}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 py-8 md:flex-row md:items-center">
          <p className="font-mono text-[0.62rem] uppercase tracking-wider-2 text-muted-foreground">
            {t("footer.copyright")}
          </p>
          <p className="font-mono text-[0.62rem] uppercase tracking-wider-2 text-muted-foreground">
            {t("footer.designed")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
