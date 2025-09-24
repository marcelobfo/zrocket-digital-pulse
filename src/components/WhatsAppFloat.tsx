import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=5511969192223&text&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float"
      aria-label="Contatar via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
};