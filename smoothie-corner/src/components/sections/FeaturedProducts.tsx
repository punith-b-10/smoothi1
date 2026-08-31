import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { allMenuItems } from "../../data/menu-data";
import type { MenuItem } from "../../types/menu";
import ProductCard from "../ui/ProductCard";
import ProductModal from "../ui/ProductModal";
import SectionHeading from "../ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProducts() {
  const root = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const featured = allMenuItems.filter((i) => i.featured);

  useGSAP(
    () => {
      gsap.from(".feature-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="py-20 md:py-28 px-5 md:px-8 bg-cream-soft">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Crowd favourites"
          title="Featured this week"
          description="A rotating pick of what's popular at Smoothie Corner right now."
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((item) => (
            <div className="feature-card" key={item.id}>
              <ProductCard item={item} onSelect={setSelected} />
            </div>
          ))}
        </div>
      </div>

      <ProductModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
