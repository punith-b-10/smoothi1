import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { allMenuItems, DISCLAIMER, CATEGORY_LABELS } from "../data/menu-data";
import type { MenuItem, MenuCategory } from "../types/menu";
import ProductCard from "../components/ui/ProductCard";
import ProductModal from "../components/ui/ProductModal";

const CATEGORIES: (MenuCategory | "all")[] = [
  "all",
  "smoothieBowls",
  "chiaPuddings",
  "quickBites",
  "combos",
];

export default function Menu() {
  const [category, setCategory] = useState<MenuCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Menu — Smoothie Corner";
  }, []);

  const filtered = useMemo(() => {
    return allMenuItems.filter((item) => {
      const inCategory = category === "all" || item.category === category;
      const q = query.trim().toLowerCase();
      const inSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.ingredients.some((i) => i.toLowerCase().includes(q));
      return inCategory && inSearch;
    });
  }, [category, query]);

  useGSAP(
    () => {
      if (!gridRef.current) return;
      gsap.from(gridRef.current.children, {
        y: 24,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      });
    },
    { dependencies: [category, query], scope: gridRef }
  );

  return (
    <main className="pt-28 pb-24 px-5 md:px-8 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-brush text-2xl text-pink">The full lineup</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-1 brush-underline">
            Our Menu
          </h1>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`font-display font-medium text-sm px-4 py-2 rounded-full border transition-colors ${
                  category === cat
                    ? "bg-ink text-cream border-ink"
                    : "border-ink/15 text-ink/70 hover:border-ink/40"
                }`}
              >
                {cat === "all" ? "All" : CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>

          <label className="relative w-full md:w-64">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search e.g. banana"
              aria-label="Search menu"
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/70 border border-ink/10 text-sm focus:outline-none"
            />
          </label>
        </div>

        <div
          ref={gridRef}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 min-h-[200px]"
        >
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} onSelect={setSelected} />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-ink/50 py-16">
              No items match "{query}". Try a different search.
            </p>
          )}
        </div>

        <p className="mt-12 text-center text-xs text-ink/40 italic max-w-xl mx-auto">
          {DISCLAIMER}
        </p>
      </div>

      <ProductModal item={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
