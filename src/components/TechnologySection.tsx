import { Award, Microscope, Clock, Shield, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TechnologySection = () => {
  const { t } = useLanguage();
  
  const technologies = [
    {
      brand: "Roche",
      description: t('technology.roche')
    },
    {
      brand: "Abbott",
      description: t('technology.abbott')
    },
    {
      brand: "Siemens Healthineers",
      description: t('technology.siemens')
    },
    {
      brand: "Sysmex",
      description: t('technology.sysmex')
    }
  ];

  const qualityFeatures = [
    {
      icon: Shield,
      title: t('technology.quality'),
      description: t('technology.quality.desc')
    },
    {
      icon: Users,
      title: t('technology.training'),
      description: t('technology.training.desc')
    },
    {
      icon: CheckCircle,
      title: t('technology.security'),
      description: t('technology.security.desc')
    }
  ];

  return (
    <section className="py-20 bg-medical-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-medical-blue-foreground">
            {t('technology.title')}
          </h2>
          <p className="text-xl text-medical-blue-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {t('technology.subtitle')}
          </p>
        </div>

        {/* Technology Brands */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-0 shadow-medical hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Microscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{tech.brand}</h3>
                <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Standards */}
        <div className="grid md:grid-cols-3 gap-8">
          {qualityFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-medical-blue-foreground">{feature.title}</h3>
                <p className="text-medical-blue-foreground/80 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold">
            <Award className="h-5 w-5" />
            <span>{t('technology.same')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;