import { useEffect, useState } from "react";
import { allMenuItems } from "../data/menu-data";
import type { MenuItem } from "../types/menu";
import ProductCard from "../components/ui/ProductCard";
import ProductModal from "../components/ui/ProductModal";
import SectionHeading from "../components/ui/SectionHeading";

export default function Products() {
  const [selected, setSelected] = useState<MenuItem | null>(null);

  useEffect(() => {
    document.title = "Products — Smoothie Corner";
  }, []);

  const featured = allMenuItems.filter((i) => i.featured);
  const rest = allMenuItems.filter((i) => !i.featured);

  return (
    <main className="pt-28 pb-24 px-5 md:px-8 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Every product"
          title="Products"
          description="Real photos where we have them, an honest placeholder where we don't. Click any card for full nutrition details."
        />

        {featured.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-xl font-semibold text-ink/70 mb-5">Featured</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featured.map((item) => (
                <ProductCard key={item.id} item={item} onSelect={setSelected} />
              ))}
            </div>
          </div>
        )}

        {rest.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-xl font-semibold text-ink/70 mb-5">Everything else</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {rest.map((item) => (
                <ProductCard key={item.id} item={item} onSelect={setSelected} />
              ))}
            </div>
          </div>
        )}
      </div>

      <ProductModal item={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
