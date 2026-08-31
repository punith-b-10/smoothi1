import { PartyPopper } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "../../lib/business";

export default function BulkOrderCTA() {
  return (
    <section className="px-5 md:px-8 py-16">
      <div className="mx-auto max-w-6xl bg-leaf text-cream rounded-[32px] px-8 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-cream/10" />
        <div className="relative flex items-start gap-4 max-w-xl">
          <PartyPopper size={32} className="text-honey shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">Bulk Orders &amp; Events</h3>
            <p className="mt-2 text-cream/85">
              Planning an event, office order or bulk requirement?
            </p>
          </div>
        </div>
        <a
          href={whatsappLink(WHATSAPP_MESSAGES.bulk)}
          target="_blank"
          rel="noopener noreferrer"
          className="relative shrink-0 bg-cream text-ink font-display font-semibold px-7 py-3.5 rounded-full shadow-card hover:-translate-y-0.5 transition-transform"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </section>
  );
}
