import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="bg-card/50 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img 
              src="/logo.png" 
              alt="ZRocket Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ZRocket
            </span>
          </div>

          {/* Locations */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{t('footer.locations')}</h3>
            </div>
            <p className="text-muted-foreground text-lg">
              {t('footer.locationsText')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Phone className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{t('footer.contacts')}</h3>
            </div>
            <p className="text-muted-foreground">
              {t('footer.phone')}
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=5511969192223&text&type=phone_number&app_absent=0", "_blank")}
              className="hero-button px-8 py-4 rounded-full font-semibold"
            >
              {t('footer.ctaButton')}
            </button>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};