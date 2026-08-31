import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "../../lib/business";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "solid" | "outline" | "floating";
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  message = WHATSAPP_MESSAGES.general,
  variant = "solid",
  label = "Order on WhatsApp",
  className = "",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-display font-semibold tracking-wide transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0";

  const styles: Record<string, string> = {
    solid:
      "bg-leaf text-cream px-6 py-3 rounded-full shadow-card hover:bg-leaf-dark",
    outline:
      "border-2 border-ink/15 text-ink px-6 py-3 rounded-full hover:border-leaf hover:text-leaf bg-white/60",
    floating:
      "bg-leaf text-cream w-14 h-14 rounded-full shadow-soft justify-center hover:bg-leaf-dark",
  };

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <MessageCircle size={variant === "floating" ? 26 : 20} strokeWidth={2.2} />
      {variant !== "floating" && <span>{label}</span>}
    </a>
  );
}
