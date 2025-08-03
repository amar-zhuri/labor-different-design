import { GraduationCap, Users, Award, Stethoscope, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExpertTeam = () => {
  const teamHighlights = [
    {
      icon: Users,
      title: "Mjekë dhe Teknikë me Eksperiencë",
      description: "Ekip i kvalifikuar mjekësor dhe teknikësh me dekada eksperiencë",
      detail: "Shumica e stafit ka mbi 15 vjet eksperiencë"
    },
    {
      icon: GraduationCap,
      title: "Trajnime Ndërkombëtare",
      description: "Pjesëmarrje e rregullt në trajnime dhe konferenca ndërkombëtare",
      detail: "Përditësim i vazhdueshëm i njohurive"
    },
    {
      icon: Globe,
      title: "Standarde Evropiane",
      description: "Zbatimi i protokolleve dhe standardeve evropiane të laboratorisë",
      detail: "Cilësi në nivel me vendet e BE-së"
    },
    {
      icon: Stethoscope,
      title: "Mbikëqyrje Mjekësore",
      description: "Të gjitha rezultatet rishikohen nga mjekë të specializuar",
      detail: "Kontroll i dyfishtë për saktësi maksimale"
    }
  ];

  const certifications = [
    "Kontroll i Cilësisë Ndërkombëtar",
    "Trajnime nga Roche Diagnostics",
    "Programe Siemens Healthineers",
    "Trajnime nga Sysmex Corporation"
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ekipi më i <span className="text-primary-light">Kualifikuar</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Stafi ynë përbëhet nga mjekë dhe teknikë me kualifikime të larta dhe eksperiencë 
            të gjatë në fushën e laboratorisë mjekësore
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamHighlights.map((highlight, index) => (
            <Card key={index} className="border-0 shadow-medical bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-primary-light" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-3">{highlight.description}</p>
                <p className="text-xs text-primary-light font-medium">{highlight.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Certifikime dhe Kualifikime
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Investojmë vazhdimisht në arsimimin dhe trajnimin e stafit tonë për të 
                siguruar që të jemi në hap me zhvillimet më të reja në mjekësi laboratorike.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary-light flex-shrink-0" />
                    <span className="text-sm text-primary-foreground/90">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-primary-light/20 rounded-xl p-8">
                <Award className="h-16 w-16 text-primary-light mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">Ekspertizë e Njohur</h4>
                <p className="text-primary-foreground/90 mb-6">
                  Laboratori ynë është i njohur në të gjithë rajonin për cilësinë 
                  e shërbimeve dhe ekspertizën e stafit.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary-light">25+</div>
                    <div className="text-sm text-primary-foreground/80">Vjet Eksperiencë</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-light">100%</div>
                    <div className="text-sm text-primary-foreground/80">Staf i Trajnuar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;