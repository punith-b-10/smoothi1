import { Phone, MessageCircle, Mail } from "lucide-react";
import { BUSINESS, whatsappLink, telLink, mailLink, WHATSAPP_MESSAGES } from "../../lib/business";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Get in touch" title="Say hi to Smoothie Corner" />

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          <a
            href={telLink()}
            className="flex flex-col items-center text-center gap-3 bg-white/70 rounded-3xl p-8 shadow-card border border-ink/5 hover:-translate-y-1.5 transition-transform"
          >
            <span className="w-14 h-14 rounded-full bg-orange/15 text-orange flex items-center justify-center">
              <Phone size={24} />
            </span>
            <p className="font-display font-semibold">Call Now</p>
            <p className="text-sm text-ink/60">{BUSINESS.phoneDisplay}</p>
          </a>

          <a
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center gap-3 bg-leaf text-cream rounded-3xl p-8 shadow-card hover:-translate-y-1.5 transition-transform"
          >
            <span className="w-14 h-14 rounded-full bg-cream/15 flex items-center justify-center">
              <MessageCircle size={24} />
            </span>
            <p className="font-display font-semibold">WhatsApp</p>
            <p className="text-sm text-cream/80">{BUSINESS.phoneDisplay.replace("+91 ", "")}</p>
          </a>

          <a
            href={mailLink()}
            className="flex flex-col items-center text-center gap-3 bg-white/70 rounded-3xl p-8 shadow-card border border-ink/5 hover:-translate-y-1.5 transition-transform"
          >
            <span className="w-14 h-14 rounded-full bg-grape/15 text-grape flex items-center justify-center">
              <Mail size={24} />
            </span>
            <p className="font-display font-semibold">Email</p>
            <p className="text-sm text-ink/60 break-all">{BUSINESS.email}</p>
          </a>
        </div>

      </div>
    </section>
  );
}
