import { Shield, Users, CheckCircle, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/ui/reveal";
import SectionLabel from "@/components/ui/section-label";
import Marquee from "@/components/motion/Marquee";

const TechnologySection = () => {
  const { t } = useLanguage();

  const technologies = [
    { brand: "Roche", description: t("tech.roche") },
    { brand: "Abbott", description: t("tech.abbott") },
    { brand: "Siemens Healthineers", description: t("tech.siemens") },
    { brand: "Sysmex", description: t("tech.sysmex") },
  ];

  const qualityFeatures = [
    { icon: Shield, title: t("tech.quality"), description: t("tech.quality.desc") },
    { icon: Users, title: t("tech.training"), description: t("tech.training.desc") },
    { icon: CheckCircle, title: t("tech.security"), description: t("tech.security.desc") },
  ];

  return (
    <div className="relative overflow-hidden border-y border-border bg-card/30 py-24 md:py-36">
      <div className="container relative mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionLabel index="02">{t("tech.title.highlight")}</SectionLabel>
            <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
              {t("tech.title")}{" "}
              <span className="italic text-primary glow-text">
                {t("tech.title.highlight")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120} variant="left" className="flex items-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("tech.description")}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Brand marquee */}
      <Reveal className="mt-16 md:mt-24">
        <Marquee speed={32} className="border-y border-border py-7">
          {technologies.map((tech) => (
            <span
              key={tech.brand}
              className="mx-10 flex items-center gap-10 font-display text-3xl font-medium tracking-tight text-foreground/35 md:text-5xl"
            >
              {tech.brand}
              <span className="h-2 w-2 rounded-full bg-primary/50" />
            </span>
          ))}
        </Marquee>
      </Reveal>

      <div className="container relative mx-auto">
        {/* Instrument index */}
        <div className="mt-16 md:mt-24">
          {technologies.map((tech, i) => (
            <Reveal key={i} delay={i * 70} variant="mask">
              <div className="group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-border py-8 transition-colors duration-500 ease-precision hover:bg-card md:grid-cols-[5rem_22rem_1fr] md:gap-10 md:py-10 md:px-6">
                <span className="font-mono text-sm tabular-nums text-primary/70">
                  /0{i + 1}
                </span>
                <h3 className="font-display text-3xl font-medium tracking-tight text-foreground transition-colors duration-500 group-hover:text-primary md:text-[2.6rem]">
                  {tech.brand}
                </h3>
                <div className="col-span-2 flex items-center justify-between gap-6 md:col-span-1">
                  <p className="max-w-lg leading-relaxed text-muted-foreground">
                    {tech.description}
                  </p>
                  <ArrowUpRight
                    className="hidden h-6 w-6 shrink-0 -translate-x-3 text-primary opacity-0 transition-all duration-500 ease-precision group-hover:translate-x-0 group-hover:opacity-100 md:block"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quality */}
        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3 lg:gap-5">
          {qualityFeatures.map((f, i) => (
            <Reveal key={i} delay={i * 110} variant="scale">
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 ease-precision hover:-translate-y-1.5 hover:border-primary/40 md:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background transition-colors duration-500 group-hover:border-primary/40">
                  <f.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </span>
                <h3 className="mt-7 font-mono text-xs uppercase tracking-wider-2 text-foreground">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex items-center justify-center gap-5 md:mt-20">
            <span className="rule-glow hidden w-20 sm:block" />
            <p className="text-center font-mono text-[0.7rem] uppercase tracking-widest-2 text-muted-foreground">
              {t("tech.award")}
            </p>
            <span className="rule-glow hidden w-20 sm:block" />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TechnologySection;
