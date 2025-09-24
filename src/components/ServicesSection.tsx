import { 
  Globe, 
  Megaphone, 
  Bot, 
  Users, 
  Sparkles, 
  Share2 
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const services = [
  {
    icon: Globe,
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Megaphone,
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Bot,
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Sparkles,
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Share2,
    color: "from-teal-500 to-blue-500"
  }
];

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 fade-in">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('services.title')}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in stagger-1">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const serviceItems = t('services.items');
            const serviceData = serviceItems[index] || {};
            return (
              <div
                key={index}
                className={`service-card fade-in stagger-${index + 1}`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 mx-auto md:mx-0`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {serviceData.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {serviceData.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in stagger-6">
          <p className="text-lg text-muted-foreground mb-6">
            {t('services.cta.text')}
          </p>
          <button
            onClick={() => window.open("https://api.whatsapp.com/send/?phone=5511969192223&text&type=phone_number&app_absent=0", "_blank")}
            className="hero-button px-8 py-4 rounded-full font-semibold text-lg"
          >
            {t('services.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
};