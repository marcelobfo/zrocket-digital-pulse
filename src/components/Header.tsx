import { DarkModeToggle } from "./DarkModeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";

export const Header = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="ZRocket Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ZRocket
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
          >
            {t('header.services')}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
          >
            {t('header.contact')}
          </button>
        </nav>

        {/* Language and Dark Mode Toggles */}
        <div className="flex items-center space-x-3">
          <LanguageToggle />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};