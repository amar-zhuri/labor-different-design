import { Award, Users, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "25+ Vjet Eksperiencë",
      description: "Një dekadë e gjysmë shërbimi të besueshëm dhe profesional në fushën e analizave mjekësore"
    },
    {
      icon: Shield,
      title: "Siguri dhe Cilësi",
      description: "Përdorimi i teknologjisë më të avancuar dhe standardeve ndërkombëtare të sigurisë"
    },
    {
      icon: Users,
      title: "Staf i Kualifikuar",
      description: "Ekip profesional i trajnuar me përvojë të gjatë në fushën e laboratorisë mjekësore"
    },
    {
      icon: Clock,
      title: "Rezultate të Shpejta",
      description: "Përpunim dhe dorëzim i shpejtë i rezultateve me saktësi të lartë dhe në kohë"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pse të Zgjidhni <span className="text-primary">Laboratorin Labor</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Me mbi 25 vjet eksperiencë në fushën e analizave mjekësore, ne jemi partneri juaj i besueshëm 
            për shëndetin dhe mirëqenien tuaj. Laboratori Labor ofron shërbime të specializuara me 
            teknologjinë më të re dhe stafin më të kualifikuar në Prizren.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-medical hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold">
            <Award className="h-5 w-5" />
            <span>I Licensuar dhe i Certifikuar nga Autoritetet Shëndetësore të Kosovës</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;