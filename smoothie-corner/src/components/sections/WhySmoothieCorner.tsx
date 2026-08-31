import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sprout, Clock3, HeartHandshake, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  {
    icon: Sprout,
    title: "Real ingredients",
    text: "Oats, fresh fruit, yogurt and honest toppings — nothing you can't pronounce.",
  },
  {
    icon: Clock3,
    title: "Made to order",
    text: "Every bowl and pudding is put together fresh when you order it.",
  },
  {
    icon: HeartHandshake,
    title: "Made with love",
    text: "Small-batch, homemade, and cared about — not mass-produced.",
  },
  {
    icon: Sparkles,
    title: "Simple, honest menu",
    text: "No confusing options — just bowls, puddings and bites that taste good.",
  },
];

export default function WhySmoothieCorner() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".why-card", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why us" title="Why Smoothie Corner" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="why-card bg-white/70 rounded-3xl p-6 shadow-card border border-ink/5 hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-leaf-light flex items-center justify-center text-leaf-dark mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink">{title}</h3>
              <p className="text-sm text-ink/60 mt-2 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
