import { lazy, Suspense, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ingredients } from "../../data/menu-data";
import type { Ingredient } from "../../types/menu";
import SectionHeading from "../ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const IngredientOrbit = lazy(() => import("../3d/IngredientOrbit"));

export default function IngredientsSection() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Ingredient | null>(ingredients[0]);

  useGSAP(
    () => {
      gsap.from(".ing-chip", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative py-20 md:py-28 px-5 md:px-8 bg-ink text-cream overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-grape/20 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What's inside?"
          title="Powered by real ingredients"
          description="Tap or click an ingredient to see what it brings to the bowl."
          light
        />

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="h-[320px] md:h-[420px] order-2 md:order-1">
            <Suspense
              fallback={<div className="w-full h-full flex items-center justify-center text-cream/40">Loading…</div>}
            >
              <IngredientOrbit items={ingredients} active={active} onSelect={setActive} />
            </Suspense>
          </div>

          <div className="order-1 md:order-2">
            {active && (
              <div className="bg-cream/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-cream/10">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-honey">
                  {active.name}
                </h3>
                <p className="mt-3 text-cream/80 leading-relaxed">{active.description}</p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {ingredients.map((ing) => (
                <button
                  key={ing.id}
                  onClick={() => setActive(ing)}
                  className={`ing-chip text-sm font-display font-medium px-4 py-2 rounded-full border transition-colors ${
                    active?.id === ing.id
                      ? "bg-honey text-ink border-honey"
                      : "border-cream/25 text-cream/70 hover:border-cream/60"
                  }`}
                >
                  {ing.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
