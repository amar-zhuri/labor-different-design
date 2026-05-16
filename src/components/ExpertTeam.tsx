import { GraduationCap, Users, Award, Stethoscope, Globe, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/ui/reveal";
import SectionLabel from "@/components/ui/section-label";
import Counter from "@/components/motion/Counter";

const ExpertTeam = () => {
  const { t } = useLanguage();

  const teamHighlights = [
    { icon: Users, title: t("team.experience"), description: t("team.experience.desc"), detail: t("team.experience.detail") },
    { icon: GraduationCap, title: t("team.international"), description: t("team.international.desc"), detail: t("team.international.detail") },
    { icon: Globe, title: t("team.standards"), description: t("team.standards.desc"), detail: t("team.standards.detail") },
    { icon: Stethoscope, title: t("team.supervision"), description: t("team.supervision.desc"), detail: t("team.supervision.detail") },
  ];

  const certifications = [t("team.cert1"), t("team.cert2"), t("team.cert3"), t("team.cert4")];

  return (
    <div className="grain relative overflow-hidden border-y border-border bg-gradient-hero py-24 md:py-36">
      <div className="atmosphere" />
      <div className="grid-drift opacity-50" />

      <div className="container relative mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionLabel index="04">{t("team.title.highlight")}</SectionLabel>
            <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
              {t("team.title")}{" "}
              <span className="italic text-primary glow-text">
                {t("team.title.highlight")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120} variant="left" className="flex items-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("team.description")}
            </p>
          </Reveal>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {teamHighlights.map((h, i) => (
            <Reveal key={i} delay={i * 110} variant="scale">
              <div className="group glass h-full rounded-2xl p-8 transition-all duration-500 ease-precision hover:-translate-y-1.5 hover:border-primary/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/40 transition-colors duration-500 group-hover:border-primary/40">
                  <h.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </span>
                <h3 className="mt-7 font-display text-xl font-medium leading-snug tracking-tight">
                  {h.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {h.description}
                </p>
                <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-wider-2 text-primary/80">
                  {h.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications + figures */}
        <div className="mt-16 grid gap-5 md:mt-24 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal variant="left">
            <div className="glass h-full rounded-2xl p-9 md:p-14">
              <h3 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                {t("team.certifications")}
              </h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {t("team.certifications.desc")}
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/30 p-5"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-signal" strokeWidth={2} />
                    <span className="text-sm text-foreground/85">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} variant="right">
            <div className="glow-ring relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-primary/30 bg-card p-9 md:p-14">
              <div className="pointer-events-none absolute inset-0 opacity-50 bg-mesh" />
              <Award className="relative h-10 w-10 text-primary" strokeWidth={1.25} />
              <div className="relative mt-10">
                <h4 className="font-display text-2xl font-medium tracking-tight">
                  {t("team.expertise")}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t("team.expertise.desc")}
                </p>
              </div>
              <div className="relative mt-10 grid grid-cols-2 gap-5">
                <div>
                  <div className="font-display text-4xl font-semibold tracking-tight text-primary glow-text">
                    <Counter to={500} suffix="K+" />
                  </div>
                  <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-wider-2 text-muted-foreground">
                    {t("team.tests")}
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl font-semibold tracking-tight text-primary glow-text">
                    <Counter to={99.6} decimals={1} suffix="%" />
                  </div>
                  <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-wider-2 text-muted-foreground">
                    {t("team.accuracy")}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ExpertTeam;
