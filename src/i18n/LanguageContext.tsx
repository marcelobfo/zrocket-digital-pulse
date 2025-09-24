import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation function to get nested values from translation object
const getTranslation = (translations: any, key: string): string => {
  return key.split('.').reduce((obj, k) => obj?.[k], translations) || key;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');
  const [translations, setTranslations] = useState<any>({});

  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const ptTranslations = await import('./translations/pt.json');
        const enTranslations = await import('./translations/en.json');
        setTranslations({
          pt: ptTranslations.default,
          en: enTranslations.default
        });
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();
  }, []);

  // Initialize language from localStorage or browser
  useEffect(() => {
    const savedLanguage = localStorage.getItem('zrocket-language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      const detectedLang = browserLang.startsWith('en') ? 'en' : 'pt';
      setLanguageState(detectedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('zrocket-language', lang);
  };

  const t = (key: string): any => {
    if (!translations[language]) return key;
    const result = getTranslation(translations[language], key);
    // If the result is an array from JSON, return it directly
    if (Array.isArray(result)) return result;
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};