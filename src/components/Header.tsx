import { DarkModeToggle } from "./DarkModeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { LogoComponent } from "./LogoComponent";
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
        <div className="flex items-center">
          <LogoComponent className="h-12 w-auto object-contain" />
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