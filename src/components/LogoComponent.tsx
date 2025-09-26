import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoComponentProps {
  className?: string;
  alt?: string;
}

export const LogoComponent = ({ className = "h-10 w-auto object-contain", alt = "ZRocket Logo" }: LogoComponentProps) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder during SSR/hydration
    return <div className={className} />;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  const logoSrc = isDark 
    ? "https://technedigital.com.br/wp-content/uploads/2025/09/02-ZROCKET_Logo-Fundo-Preto_Transparente.png"
    : "https://technedigital.com.br/wp-content/uploads/2025/09/02-ZROCKET_Logo-Fundo-Branco_Transparente.png";

  return (
    <img 
      src={logoSrc}
      alt={alt}
      className={`${className} transition-all duration-300`}
      loading="eager"
    />
  );
};