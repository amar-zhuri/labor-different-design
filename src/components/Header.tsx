import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Magnetic from "@/components/motion/Magnetic";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "about", key: "nav.about" },
  { id: "services", key: "nav.services" },
  { id: "contact", key: "nav.contact" },
] as const;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-precision",
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container mx-auto">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500 ease-precision",
              scrolled ? "h-16" : "h-20 md:h-24"
            )}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-3 md:gap-4"
              aria-label="Laboratori Labor"
            >
              <img
                src="/lovable-uploads/34c49b4a-27df-4c53-b230-575af90598b4.png"
                alt="Laboratori Labor"
                className={cn(
                  "w-auto brightness-0 invert transition-all duration-500 ease-precision",
                  scrolled ? "h-7" : "h-8 md:h-10"
                )}
              />
              <span className="hidden h-7 w-px bg-border sm:block" />
              <span className="hidden font-mono text-[0.6rem] uppercase leading-tight tracking-widest-2 text-muted-foreground sm:block">
                Prizren
                <br />
                Kosovë
              </span>
            </button>

            <nav className="hidden items-center gap-10 md:flex">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={cn(
                    "link-underline font-mono text-[0.72rem] uppercase tracking-wider-2 transition-colors duration-300",
                    active === item.id
                      ? "text-primary"
                      : "text-foreground/65 hover:text-foreground"
                  )}
                >
                  {t(item.key)}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
              <div className="hidden md:block">
                <Magnetic strength={0.4}>
                  <Button
                    size="sm"
                    onClick={() => window.open("tel:+38344217859", "_self")}
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-mono text-[0.7rem] uppercase tracking-wider-2">
                      {t("hero.contact")}
                    </span>
                  </Button>
                </Magnetic>
              </div>

              <div className="flex items-center gap-1 md:hidden">
                <LanguageSwitcher />
                <button
                  onClick={() => setOpen(true)}
                  className="flex h-11 w-11 items-center justify-center text-foreground"
                  aria-label="Menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-background transition-all duration-500 ease-precision md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="atmosphere" />
        <div className="grid-drift" />
        <div className="container relative mx-auto flex h-20 items-center justify-between">
          <span className="font-display text-xl font-semibold tracking-tight">
            {t("hero.title")}
          </span>
          <button
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="container relative mx-auto mt-4 flex flex-1 flex-col">
          {NAV.map((item, i) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="group flex items-center justify-between border-b border-border py-7 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <span className="font-display text-4xl font-medium tracking-tight">
                  {t(item.key)}
                </span>
              </span>
              <ArrowUpRight className="h-6 w-6 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </button>
          ))}

          <div className="mt-auto space-y-4 py-10">
            <a
              href="tel:+38344217859"
              className="block font-mono text-sm tracking-wide text-muted-foreground"
            >
              +383 44 217 859
            </a>
            <Button
              size="lg"
              className="w-full"
              onClick={() => window.open("tel:+38344217859", "_self")}
            >
              <Phone className="h-5 w-5" />
              {t("hero.contact")}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
