import { Droplet, Heart, Activity, TestTube, Microscope, FileText, Bug, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LazyImage from "@/components/ui/lazy-image";
import bloodTestingImage from "@/assets/blood-testing.jpg";

const Services = () => {
  const services = [
    {
      icon: Droplet,
      title: "Analiza e Gjakut të Plotë",
      description: "Analiza komplekse të gjakut që përfshijnë numërimin e qelizave, nivelet e hemoglobinës dhe parametra të tjerë të rëndësishëm"
    },
    {
      icon: Heart,
      title: "Profili Kardiak",
      description: "Teste specialë për vlerësimin e shëndetit të zemrës, kolesterolit dhe triglicerideve"
    },
    {
      icon: Activity,
      title: "Teste Hormonale",
      description: "Analiza të nivelit të hormoneve të ndryshme për diagnostikimin e çrregullimeve endokrine"
    },
    {
      icon: TestTube,
      title: "Biokimia Klinike",
      description: "Analiza të enzimave, proteinave dhe substancave kimike në gjak për vlerësimin e funksionit të organeve"
    },
    {
      icon: FileText,
      title: "Raporte të Detajuara",
      description: "Raporte të plota mjekësore me interpretim profesional dhe rekomandime për hapat e mëtejshëm"
    },
    {
      icon: Bug,
      title: "Teste për Sëmundje Infektive",
      description: "Diagnostikim i saktë për HIV, Hepatit A/B/C, dhe sëmundje të tjera infektive"
    },
    {
      icon: AlertTriangle,
      title: "Markerë Tumoralë",
      description: "Teste të specializuara për zbulimin e hershëm të kancerit dhe monitorimin e trajtimit"
    },
    {
      icon: Activity,
      title: "Panele Alergjike",
      description: "Identifikimi i alergjive të ndryshme për një jetë më të shëndetshme"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Shërbimet <span className="text-primary">Tona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrojmë analizë të specializuara të gjakut dhe shërbime mjekësore me teknologjinë më të re, 
            standardet më të larta të cilësisë dhe rezultate brenda disa orëve
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <LazyImage 
              src={bloodTestingImage} 
              alt="Analizat e gjakut - pajisje moderne për testimin e gjakut në Laboratorin Labor në Prizren"
              className="rounded-2xl shadow-medical w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Analizat më të Avancuara të Gjakut
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Me teknologjinë më moderne dhe stafin më të kualifikuar, ne sigurojmë rezultate të sakta 
              dhe të shpejta për të gjitha analizat e gjakut. Çdo test kryhet sipas standardeve ndërkombëtare 
              dhe me kujdesin më të madh për detajet.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Microscope className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Teknologji e Re</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Raporte të Detajuara</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;