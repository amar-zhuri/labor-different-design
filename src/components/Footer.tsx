import { MapPin, Phone, Clock, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              {t('hero.title')}
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-4 w-4" />
              <span>{t('footer.license')}</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>{t('hero.address')}</p>
                  <p>Republika e Kosovës</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="text-sm">
                  <p>+383 XX XXX XXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.hours')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t('hours.weekdays').split(':')[0]}</p>
                  <p className="text-primary-foreground/80">07:00 - 16:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t('hours.saturday').split(':')[0]}</p>
                  <p className="text-primary-foreground/80">07:00 - 13:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t('hours.sunday').split(':')[0]}</p>
                  <p className="text-primary-foreground/80">{t('hours.sunday').includes('Closed') ? 'Closed' : t('hours.sunday').includes('Kapalı') ? 'Kapalı' : 'E mbyllur'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              {t('footer.copyright')}
            </div>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
              <span>{t('footer.design')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;