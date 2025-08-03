import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresa",
      details: ["Gjeravica 30", "Prizren 20000", "Republika e Kosovës"]
    },
    {
      icon: Phone,
      title: "Telefoni",
      details: ["+383 44 217 859", "+383 49 767 705", "Për informata dhe pyetje"]
    },
    {
      icon: Clock,
      title: "Orari i Punës",
      details: ["Monday - Friday: 07:00 - 16:00", "Shtunë: 07:00 - 13:00", "E Diel: E mbyllur"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@laboratorilabor.com", "Për komunikim elektronik"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Kontaktoni <span className="text-primary">Me Ne</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jemi këtu për t'ju ndihmuar me të gjitha pyetjet tuaja rreth shërbimeve tona mjekësore. 
            Kontaktoni me ne për informata shtesë ose për të rezervuar një vizitë.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medical transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-medical p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Na Vizitoni në Laboratorin Tonë
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Laboratori Labor ndodhet në qendër të Prizrenit, në një lokacion të lehtë për t'u arritur. 
                Ofrojmë një ambient të rehatshëm dhe profesional për të gjithë pacientët tanë.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Gjeravica 30, Prizren 20000</p>
                    <p className="text-sm text-muted-foreground">Parkingje i disponueshëm pranë laboratorit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Orari i Punës</p>
                    <p className="text-sm text-muted-foreground">Monday-Friday: 07:00-16:00 | Shtunë: 07:00-13:00</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Telefononi Tani
              </Button>
            </div>
            <div className="rounded-xl h-80 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.0560376088933!2d20.72960357640207!3d42.21324694436382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135395b4f6c36203%3A0xfdf75eb84c8de2a4!2zTGFib3JhdG9yaSAiTGFib3LigJ0!5e0!3m2!1sen!2s!4v1754234412301!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laboratori Labor Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;