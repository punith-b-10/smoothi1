import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PlusCircle, Tag } from "lucide-react";
import { menuData } from "../../data/menu-data";
import SectionHeading from "../ui/SectionHeading";
import { whatsappLink } from "../../lib/business";

gsap.registerPlugin(ScrollTrigger);

export default function CombosSection() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".combo-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="py-20 md:py-28 px-5 md:px-8 bg-cream-soft">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Best value" title="Best Value Combos" />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {menuData.combos.map((combo) => (
            <div
              key={combo.id}
              className="combo-card relative rounded-[32px] p-8 bg-gradient-to-br from-orange via-pink to-grape text-cream shadow-soft overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
              <Tag size={22} className="mb-4" />
              <h3 className="font-display text-2xl font-bold">{combo.name}</h3>

              <div className="flex items-center gap-2 mt-4 flex-wrap font-display font-medium">
                {combo.composedOf?.map((part, i) => (
                  <span key={part} className="flex items-center gap-2">
                    {i > 0 && <PlusCircle size={16} className="opacity-70" />}
                    <span className="bg-white/15 px-3 py-1.5 rounded-full text-sm">{part}</span>
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="font-display text-4xl font-bold">₹{combo.price}</p>
                  {combo.savings && <p className="text-cream/80 text-sm mt-1">You save ₹{combo.savings}</p>}
                </div>
                <a
                  href={whatsappLink(`Hi Smoothie Corner! I'd like to order the ${combo.name} combo.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cream text-ink font-display font-semibold px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition-transform shadow-card"
                >
                  Order
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
