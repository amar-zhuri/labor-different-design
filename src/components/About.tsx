import { Award, Users, ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/ui/reveal";
import SectionLabel from "@/components/ui/section-label";

const About = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Award, title: t("about.experience"), description: t("about.experience.desc") },
    { icon: ShieldCheck, title: t("about.security"), description: t("about.security.desc") },
    { icon: Users, title: t("about.team"), description: t("about.team.desc") },
    { icon: Clock, title: t("about.speed"), description: t("about.speed.desc") },
  ];

  return (
    <div className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="atmosphere opacity-60" />

      <div className="container relative mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionLabel index="01">{t("nav.about")}</SectionLabel>
            <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
              {t("about.title")}{" "}
              <span className="italic text-primary glow-text">
                {t("about.title.highlight")}
              </span>
              ?
            </h2>
          </Reveal>

          <Reveal delay={120} variant="left" className="flex flex-col justify-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("about.description")}
            </p>
            <div className="glass mt-8 inline-flex w-fit items-center gap-3 rounded-full px-5 py-3">
              <BadgeCheck className="h-5 w-5 shrink-0 text-signal" />
              <span className="font-mono text-[0.68rem] uppercase leading-snug tracking-wider-2 text-foreground/80">
                {t("about.license")}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 110} variant="scale">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 ease-precision hover:-translate-y-1.5 hover:border-primary/40">
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background transition-colors duration-500 group-hover:border-primary/40 group-hover:text-primary">
                    <f.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="mt-8 font-display text-xl font-medium leading-snug tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
