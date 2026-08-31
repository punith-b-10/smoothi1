import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { MenuItem } from "../../types/menu";
import ProductCard from "../ui/ProductCard";
import ProductModal from "../ui/ProductModal";
import SectionHeading from "../ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

interface CategoryStripProps {
  eyebrow: string;
  title: string;
  description?: string;
  items: MenuItem[];
  tint?: string;
}

export default function CategoryStrip({ eyebrow, title, description, items, tint = "bg-cream" }: CategoryStripProps) {
  const root = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<MenuItem | null>(null);

  useGSAP(
    () => {
      gsap.from(".strip-card", {
        x: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className={`py-20 md:py-28 px-5 md:px-8 ${tint}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <div className="strip-card" key={item.id}>
              <ProductCard item={item} onSelect={setSelected} />
            </div>
          ))}
        </div>
      </div>

      <ProductModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
