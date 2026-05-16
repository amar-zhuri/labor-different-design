import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Phone, ArrowUpRight, ArrowDown } from "lucide-react";
import heroImage from "@/assets/laboratory-hero.jpg";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/motion/Magnetic";
import Counter from "@/components/motion/Counter";
import { preloadCriticalResources } from "@/utils/performance";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    preloadCriticalResources([heroImage]);
  }, []);

  const title = t("hero.title");
  const sp = title.indexOf(" ");
  const lead = sp > 0 ? title.slice(0, sp) : title;
  const rest = sp > 0 ? title.slice(sp + 1) : "";

  const stats = [
    { to: 25, suffix: "+", label: t("about.experience").replace(/^[\d+,.\s]+/, "") },
    { to: 500000, suffix: "+", group: true, label: t("team.tests") },
    { to: 99.6, suffix: "%", decimals: 1, label: t("team.accuracy") },
  ];

  return (
    <section
      ref={ref}
      className="grain vignette relative flex min-h-screen flex-col overflow-hidden bg-background pt-24 md:pt-28"
      aria-label="Laboratori Labor"
    >
      <div className="atmosphere" />
      <div className="grid-drift" />
      <motion.div
        style={{ opacity: fade }}
        className="pointer-events-none absolute -left-32 top-1/4 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[120px]"
      />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container relative z-10 mx-auto flex flex-1 flex-col"
      >
        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* Type */}
          <div>
            <div
              className="eyebrow animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Laboratori Labor — Prizren, Kosovë
            </div>

            <h1 className="mt-7 font-display text-[clamp(3.2rem,9.5vw,8rem)] font-semibold leading-[0.9] tracking-[-0.03em]">
              <span
                className="block animate-fade-up"
                style={{ animationDelay: "180ms" }}
              >
                {lead}
              </span>
              {rest && (
                <span
                  className="block animate-fade-up italic text-primary glow-text"
                  style={{ animationDelay: "300ms" }}
                >
                  {rest}
                  <span className="text-foreground">.</span>
                </span>
              )}
            </h1>

            <p
              className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-muted-foreground md:text-xl"
              style={{ animationDelay: "440ms" }}
            >
              {t("hero.subtitle")}
            </p>

            <div
              className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "560ms" }}
            >
              <Magnetic strength={0.45}>
                <Button
                  size="lg"
                  className="w-full shadow-glow sm:w-auto"
                  onClick={() => window.open("tel:+38344217859", "_self")}
                >
                  <Phone className="h-5 w-5" />
                  {t("hero.contact")}
                </Button>
              </Magnetic>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.services")}
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </div>

            <div
              className="mt-10 flex animate-fade-up items-center gap-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground"
              style={{ animationDelay: "680ms" }}
            >
              <span className="hidden sm:inline">{t("hero.hours")}</span>
              <span className="sm:hidden">{t("hero.hours.mobile")}</span>
            </div>
          </div>

          {/* Image */}
          <motion.div
            style={{ y: imgY }}
            className="relative animate-fade-up"
          >
            <div
              className="absolute -inset-3 rounded-[1.4rem] opacity-60 blur-2xl"
              style={{ background: "var(--mesh)" }}
            />
            <figure className="group relative overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-medical">
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                <motion.img
                  src={heroImage}
                  alt={t("hero.subtitle")}
                  width={1100}
                  height={1320}
                  loading="eager"
                  decoding="async"
                  style={{ scale: imgScale }}
                  className="absolute inset-0 h-full w-full object-cover contrast-[1.06] brightness-[0.92] saturate-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/45 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_100%_at_75%_15%,transparent_55%,hsl(var(--background)/0.85)_100%)]" />
                <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-gradient-to-tr from-primary/25 to-transparent" />
                {/* analyzer scan line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-signal/15 to-transparent motion-safe:animate-scan" />
              </div>

              <figcaption className="absolute left-5 top-5 font-mono text-[0.6rem] uppercase tracking-widest-2 text-foreground/55">
                FIG.01 — Hematology · Roche · Sysmex
              </figcaption>

              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3.5 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
                </span>
                <span className="font-mono text-[0.7rem] leading-snug text-foreground/85">
                  {t("hero.results247")}
                </span>
              </div>
            </figure>
          </motion.div>
        </div>

        {/* Stat band */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex items-baseline gap-4 bg-background/40 px-6 py-7 backdrop-blur-sm"
            >
              <span className="font-display text-4xl font-semibold tracking-tight text-primary md:text-5xl">
                <Counter
                  to={s.to}
                  suffix={s.suffix}
                  decimals={s.decimals}
                  group={s.group}
                />
              </span>
              <span className="font-mono text-[0.66rem] uppercase leading-tight tracking-wider-2 text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="container relative z-10 mx-auto">
        <div className="flex items-center gap-3 py-6 font-mono text-[0.6rem] uppercase tracking-widest-2 text-muted-foreground">
          <ArrowDown className="h-3.5 w-3.5 motion-safe:animate-bounce" />
          <span>Scroll</span>
          <span className="rule-glow ml-2 hidden flex-1 sm:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
