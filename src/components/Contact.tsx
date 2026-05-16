import { MapPin, Phone, Clock, Mail, MessageSquare, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/ui/reveal";
import SectionLabel from "@/components/ui/section-label";
import Magnetic from "@/components/motion/Magnetic";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: MapPin, title: t("contact.address"), lines: [t("hero.address"), t("footer.country")] },
    { icon: Phone, title: t("contact.phone"), lines: ["+383 44 217 859", "+383 49 767 705"], note: t("contact.phone.desc") },
    { icon: Clock, title: t("contact.hours"), lines: [t("hours.weekdays"), t("hours.saturday"), t("hours.sunday")] },
    { icon: Mail, title: t("contact.email"), lines: ["laboratorilabor@gmail.com"], note: t("contact.email.desc") },
  ];

  return (
    <div className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="atmosphere opacity-60" />
      <div className="container relative mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionLabel index="05">{t("nav.contact")}</SectionLabel>
            <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
              {t("contact.title")}{" "}
              <span className="italic text-primary glow-text">
                {t("contact.title.highlight")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120} variant="left" className="flex items-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("contact.description")}
            </p>
          </Reveal>
        </div>

        {/* Data sheet */}
        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {contactInfo.map((info, i) => (
            <Reveal key={i} delay={i * 100} variant="scale">
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 ease-precision hover:-translate-y-1.5 hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.66rem] uppercase tracking-wider-2 text-muted-foreground">
                    {info.title}
                  </span>
                  <info.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                </div>
                <div className="mt-6 space-y-1.5">
                  {info.lines.map((line, idx) => (
                    <p key={idx} className="font-mono text-sm leading-relaxed text-foreground">
                      {line}
                    </p>
                  ))}
                </div>
                {info.note && (
                  <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                    {info.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Visit + map */}
        <Reveal variant="scale">
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-border md:mt-16 lg:grid-cols-2">
            <div className="flex flex-col bg-card p-8 md:p-14">
              <h3 className="font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                {t("contact.visit")}
              </h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {t("contact.visit.desc")}
              </p>

              <dl className="mt-9 space-y-3">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-background/40 p-5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  <div>
                    <dt className="font-mono text-sm text-foreground">{t("hero.address")}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{t("contact.parking")}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-background/40 p-5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  <div>
                    <dt className="font-mono text-sm text-foreground">{t("contact.hours")}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{t("hours.short")}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Magnetic strength={0.35} className="w-full sm:flex-1">
                    <Button
                      size="lg"
                      className="w-full"
                      onClick={() => window.open("tel:+38344217859", "_self")}
                    >
                      <Phone className="h-5 w-5" />
                      {t("contact.call")}
                    </Button>
                  </Magnetic>
                  <Button
                    size="lg"
                    variant="signal"
                    className="w-full sm:flex-1"
                    onClick={() => window.open("https://wa.me/38344217859", "_blank")}
                  >
                    <MessageSquare className="h-5 w-5" />
                    {t("contact.whatsapp")}
                  </Button>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/dir/?api=1&destination=Laboratori+Labor,+Gjeravica+30,+Prizren+20000,+Kosovo",
                      "_blank"
                    )
                  }
                >
                  <Navigation className="h-5 w-5" />
                  {t("contact.directions")}
                </Button>
              </div>
            </div>

            <figure className="relative min-h-[24rem] bg-card lg:min-h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.0560376088933!2d20.72960357640207!3d42.21324694436382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135395b4f6c36203%3A0xfdf75eb84c8de2a4!2zTGFib3JhdG9yaSAiTGFib3LigJ0!5e0!3m2!1sen!2s!4v1754234412301!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laboratori Labor Location"
                className="opacity-90 [filter:invert(0.92)_hue-rotate(170deg)_brightness(0.95)_contrast(0.95)_saturate(0.7)]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border" />
              <figcaption className="pointer-events-none absolute left-5 top-5 rounded-md bg-background/70 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-widest-2 text-foreground/80 backdrop-blur-sm">
                42.2135° N · 20.7397° E
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
