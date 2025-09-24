import { useLanguage } from "@/i18n/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="relative w-16 h-8 bg-muted/50 rounded-full border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 group"
      aria-label="Toggle language"
    >
      <div
        className={`absolute top-0.5 w-7 h-7 bg-background rounded-full shadow-sm transition-transform duration-300 flex items-center justify-center ${
          language === 'pt' ? 'translate-x-0.5' : 'translate-x-8'
        }`}
      >
        <span className="text-xs font-semibold text-foreground">
          {language === 'pt' ? '🇧🇷' : '🇺🇸'}
        </span>
      </div>
      
      {/* Background indicators */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <span className={`text-xs transition-opacity duration-300 ${language === 'pt' ? 'opacity-0' : 'opacity-60'}`}>
          🇧🇷
        </span>
        <span className={`text-xs transition-opacity duration-300 ${language === 'en' ? 'opacity-0' : 'opacity-60'}`}>
          🇺🇸
        </span>
      </div>
    </button>
  );
};