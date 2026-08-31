import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "../../lib/business";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(WHATSAPP_MESSAGES.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-0 hover:gap-3
                 rounded-full bg-leaf text-cream shadow-soft transition-all duration-300
                 hover:pl-5 hover:pr-6 h-14 pl-[14px] pr-[14px] overflow-hidden"
    >
      <span className="absolute inset-0 rounded-full bg-leaf animate-pulse-soft -z-10" />
      <MessageCircle size={26} strokeWidth={2.2} className="shrink-0" />
      <span
        className="max-w-0 group-hover:max-w-[160px] overflow-hidden whitespace-nowrap
                   font-display text-sm font-semibold transition-all duration-300"
      >
        Order on WhatsApp
      </span>
    </a>
  );
}
