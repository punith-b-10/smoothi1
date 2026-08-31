import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function BrandIntro() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".intro-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="intro-reveal relative order-2 md:order-1 rounded-[32px] overflow-hidden shadow-soft aspect-[4/5] max-w-sm mx-auto md:mx-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/brand/brand-berry-bowl.webp`}
            alt="A Smoothie Corner style berry smoothie bowl topped with blackberries, blueberries, banana and granola"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        </div>

        <div className="order-1 md:order-2">
          <span className="intro-reveal font-brush text-2xl text-pink">Made with real ingredients</span>
          <h2 className="intro-reveal font-display text-3xl md:text-5xl font-semibold text-ink mt-2 brush-underline">
            Small-batch bowls, made fresh to order
          </h2>
          <p className="intro-reveal mt-5 text-ink/70 text-base md:text-lg leading-relaxed">
            Smoothie Corner blends oats, fruit, yogurt and honest toppings into
            bowls, chia puddings and quick bites you can feel good about. No
            shortcuts, no gimmicks — just real ingredients, thoughtfully put
            together, every single day.
          </p>
          <div className="intro-reveal mt-6 flex flex-wrap gap-3">
            {["Homemade daily", "Real fruit toppings", "Order in minutes on WhatsApp"].map((t) => (
              <span key={t} className="bg-cream-deep text-ink/70 text-sm font-medium px-4 py-2 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
