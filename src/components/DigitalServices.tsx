import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Clock, Shield, Download, Mail, Bell } from "lucide-react";

const DigitalServices = () => {
  const digitalFeatures = [
    {
      icon: Clock,
      title: "Rezultate 24/7",
      description: "Merrni rezultatet tuaja elektronike në çdo kohë të ditës dhe natës, pa pritur oraret e punës"
    },
    {
      icon: Smartphone,
      title: "Qasje Mobile",
      description: "Lexoni rezultatet nga telefoni, tableti ose kompjuteri - kudo që të jeni"
    },
    {
      icon: Shield,
      title: "Siguri e Plotë",
      description: "Të dhënat tuaja janë të mbrojtura me enkriptim të nivelit bankar dhe protokolle sigurie"
    },
    {
      icon: Download,
      title: "Download PDF",
      description: "Shkarkoni rezultatet në format PDF për t'i ruajtur ose për t'i dërguar mjekut tuaj"
    },
    {
      icon: Mail,
      title: "Email Automatik",
      description: "Merrni njoftim në email sapo rezultatet të jenë gati për lexim"
    },
    {
      icon: Bell,
      title: "Njoftime të Menjëhershme",
      description: "Njoftimet push në telefon që rezultatet janë të gatshme për lexim"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50" aria-label="Shërbimet dixhitale">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Rezultate <span className="text-primary">Elektronike 24/7</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Përfitoni nga teknologjia më e re për të marrë rezultatet tuaja të analizave në çdo moment. 
            Sistemi ynë dixhital ju mundëson qasje të sigurt dhe të menjëhershme në të gjitha rezultatet e testeve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Qasje të Përshtatshme për Kohën Tuaj
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Rezultatet online brenda 2-4 orëve:</strong> Për analizat standarde të gjakut, 
                rezultatet janë të disponueshme online brenda 2-4 orëve nga marrja e mostrave.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Qasje 24/7 nga çdo pajisje:</strong> Lexoni rezultatet tuaja nga kompjuteri, 
                telefoni ose tableti, në shtëpi, në punë ose gjatë udhëtimit.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Historiku i plotë i testeve:</strong> Të gjitha rezultatet e mëparshme 
                janë të ruajtura në sistemin tonë dixhital për krahasim dhe reference.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6 h-auto">
                <Mail className="mr-2 h-5 w-5" />
                Regjistrohu për Rezultate Online
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto">
                <Download className="mr-2 h-5 w-5" />
                Shkarko Aplikacionin
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Rezultatet Gati!</h4>
                  <p className="text-sm text-muted-foreground">Analiza e gjakut të plotë</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Data e testit:</span>
                  <span className="font-medium">Sot, 14:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Koha e rezultatit:</span>
                  <span className="font-medium text-green-600">18:45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium text-green-600">✓ I gatshëm</span>
                </div>
              </div>
              <Button className="w-full mt-6" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Shkarko PDF
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Si të Regjistroheni për Rezultate Online?</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">1</div>
                <h4 className="font-semibold mb-2">Regjistrimi</h4>
                <p className="text-sm text-muted-foreground">Regjistrohuni në recepcionist me numrin e telefonit dhe email-in tuaj</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">2</div>
                <h4 className="font-semibold mb-2">Konfirmimi</h4>
                <p className="text-sm text-muted-foreground">Do të merrni SMS dhe email me të dhënat për qasje në sistem</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">3</div>
                <h4 className="font-semibold mb-2">Qasja</h4>
                <p className="text-sm text-muted-foreground">Lexoni rezultatet 24/7 nga çdo pajisje me internet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;