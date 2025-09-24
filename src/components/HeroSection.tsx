import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const handleWhatsAppContact = () => {
    window.open("https://api.whatsapp.com/send/?phone=5511969192223&text&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8 fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Marketing Digital de Alto Impacto</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in stagger-1">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Transforme Sua
            </span>
            <br />
            <span className="text-foreground">Presença Digital</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in stagger-2">
            Somos uma agência de marketing digital especializada em soluções inovadoras. 
            Do Brasil aos EUA, levamos sua marca ao próximo nível com tecnologia de ponta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in stagger-3">
            <Button 
              onClick={handleWhatsAppContact}
              className="hero-button px-8 py-6 text-lg font-semibold rounded-full"
              size="lg"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-full glass-card border-primary/20 hover:border-primary/40"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in stagger-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Países</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};