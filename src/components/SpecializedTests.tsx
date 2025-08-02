import { TestTube, Bug, Activity, AlertTriangle, Timer, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SpecializedTests = () => {
  const specializedServices = [
    {
      icon: Bug,
      title: "Teste për Sëmundje Infektive",
      description: "Diagnostikim i saktë për HIV, Hepatit A/B/C, dhe sëmundje të tjera infektive",
  
      urgent: false
    },
    {
      icon: AlertTriangle,
      title: "Markerë Tumoralë",
      description: "Teste të specializuara për zbulimin e hershëm të kancerit dhe monitorimin e trajtimit",
      features: ["PSA", "CEA", "CA 19-9", "CA 125", "AFP"],
      urgent: false
    },
    {
      icon: Activity,
      title: "Panele Alergjike",
      description: "Identifikimi i alergjive të ndryshme për një jetë më të shëndetshme",
      features: ["Alergjitë ushqimore", "Alergjitë respiratore", "Alergjitë kontakti", "IgE specifike"],
      urgent: false
    }
  ];

  const advantages = [
    {
      icon: Timer,
      title: "Rezultate të Shpejta",
      description: "Shumica e testeve gati brenda disa orëve",
      highlight: "Disa orë"
    },
    {
      icon: CheckCircle,
      title: "Dorëzim Fleksibël",
      description: "Rezultatet dërgohen elektronikisht ose me telefon",
      highlight: "24/7 Qasje"
    },
    {
      icon: TestTube,
      title: "Teste STAT",
      description: "Shërbim urgjent për raste emergjente mjekësore",
      highlight: "Urgjent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Teste të <span className="text-primary">Specializuara</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrojmë disa nga testet më të avancuara mjekësore që rrallë gjenden në laboratorët e tjerë në Kosovë
          </p>
        </div>

        {/* Specialized Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {specializedServices.map((service, index) => (
            <Card key={index} className="border-0 shadow-medical hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {service.urgent && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive" className="text-xs">URGJENT</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground mb-3">Teste të Disponueshme:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Advantages */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-0 shadow-soft bg-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{advantage.description}</p>
                <Badge variant="outline" className="text-primary border-primary">
                  {advantage.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold">
            <TestTube className="h-5 w-5" />
            <span>Të vetmit në Prizren që ofrojnë këto teste të specializuara</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedTests;
