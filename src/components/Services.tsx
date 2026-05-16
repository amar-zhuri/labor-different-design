import {
  Droplet, Heart, Activity, TestTube, Microscope, FileText,
  Bug, AlertTriangle, Pill, Zap, Shield, Beaker, FlaskConical, ArrowUpRight,
} from "lucide-react";
import bloodTestingImage from "@/assets/blood-testing.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/ui/reveal";
import SectionLabel from "@/components/ui/section-label";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Droplet, title: t("service.blood.title"), description: t("service.blood.desc") },
    { icon: Heart, title: t("service.cardiac.title"), description: t("service.cardiac.desc") },
    { icon: Activity, title: t("service.hormonal.title"), description: t("service.hormonal.desc") },
    { icon: TestTube, title: t("service.biochemistry.title"), description: t("service.biochemistry.desc") },
    { icon: Bug, title: t("service.infectious.title"), description: t("service.infectious.desc") },
    { icon: AlertTriangle, title: t("service.tumor.title"), description: t("service.tumor.desc") },
    { icon: Activity, title: t("service.allergy.title"), description: t("service.allergy.desc") },
    { icon: Pill, title: t("service.diabetes.title"), description: t("service.diabetes.desc") },
    { icon: Zap, title: t("service.thyroid.title"), description: t("service.thyroid.desc") },
    { icon: Heart, title: t("service.vitamin.title"), description: t("service.vitamin.desc") },
    { icon: Shield, title: t("service.autoimmune.title"), description: t("service.autoimmune.desc") },
    { icon: Beaker, title: t("service.heavymetals.title"), description: t("service.heavymetals.desc") },
    { icon: FlaskConical, title: t("service.urine.title"), description: t("service.urine.desc") },
    { icon: FileText, title: t("service.electronic.title"), description: t("service.electronic.desc") },
    { icon: Microscope, title: t("service.detailed.title"), description: t("service.detailed.desc") },
  ];

  return (
    <div className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="atmosphere opacity-50" />
      <div className="container relative mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionLabel index="03">{t("nav.services")}</SectionLabel>
            <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
              {t("services.title")}{" "}
              <span className="italic text-primary glow-text">
                {t("services.title.highlight")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120} variant="left" className="flex items-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("services.description")}
            </p>
          </Reveal>
        </div>

        {/* Featured */}
        <Reveal variant="scale">
          <div className="mt-16 grid items-stretch overflow-hidden rounded-2xl border border-border md:mt-24 lg:grid-cols-2">
            <figure className="relative min-h-[22rem] overflow-hidden">
              <img
                src={bloodTestingImage}
                alt={t("services.advanced.title")}
                width={1000}
                height={800}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover brightness-[0.9] contrast-[1.05] saturate-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-card lg:to-card" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-gradient-to-tr from-primary/25 to-transparent" />
              <figcaption className="absolute left-5 top-5 font-mono text-[0.6rem] uppercase tracking-widest-2 text-foreground/60">
                FIG.02 — Hematology
              </figcaption>
            </figure>

            <div className="flex flex-col justify-center bg-card p-8 md:p-14">
              <h3 className="font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                {t("services.advanced.title")}
              </h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {t("services.advanced.description")}
              </p>

              <div className="glow-signal mt-8 flex items-start gap-3 rounded-xl border border-signal/30 bg-signal/[0.06] px-5 py-4">
                <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider-2 text-foreground">
                    {t("services.online247")}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {t("services.online247.desc")}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 font-mono text-[0.66rem] uppercase tracking-wider-2">
                <span className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-foreground/80">
                  <Microscope className="h-3.5 w-3.5 text-primary" />
                  {t("services.tech")}
                </span>
                <span className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-foreground/80">
                  <FileText className="h-3.5 w-3.5 text-primary" />
                  {t("services.reports")}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Catalog */}
        <div className="mt-16 md:mt-24">
          <Reveal>
            <div className="flex items-end justify-between border-b border-border pb-5">
              <span className="font-mono text-[0.7rem] uppercase tracking-widest-2 text-muted-foreground">
                Index — {services.length} {t("nav.services")}
              </span>
              <span className="hidden font-mono text-[0.7rem] uppercase tracking-widest-2 text-muted-foreground sm:block">
                01—{services.length}
              </span>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={index}
                delay={(index % 3) * 90}
                className="group relative border-b border-r border-border"
              >
                <div className="relative h-full overflow-hidden p-7 transition-colors duration-500 ease-precision hover:bg-card md:p-8">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tabular-nums text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <service.icon
                      className="h-5 w-5 text-primary transition-transform duration-500 ease-precision group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium leading-snug tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ArrowUpRight
                    className="mt-6 h-4 w-4 text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    strokeWidth={1.5}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* More */}
        <Reveal variant="scale">
          <div className="crosshair mt-16 overflow-hidden rounded-2xl border border-border bg-card p-10 text-center md:mt-24 md:p-16">
            <div className="pointer-events-none absolute inset-0 opacity-40 bg-mesh" />
            <h3 className="relative mx-auto max-w-2xl font-display text-2xl font-medium tracking-tight md:text-4xl">
              {t("services.more.title")}
            </h3>
            <p className="relative mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              {t("services.more.description")}
            </p>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="link-underline relative mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest-2 text-primary"
            >
              {t("nav.contact")}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Services;
