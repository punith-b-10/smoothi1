import { Flame, Beef } from "lucide-react";
import type { MenuItem } from "../../types/menu";
import ProductImage from "./ProductImage";

interface ProductCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export default function ProductCard({ item, onSelect }: ProductCardProps) {
  return (
    <button
      onClick={() => onSelect(item)}
      className="group relative flex flex-col text-left bg-white/70 backdrop-blur-sm rounded-[28px]
                 overflow-hidden shadow-card border border-ink/5 transition-all duration-300
                 hover:-translate-y-1.5 hover:shadow-soft focus-visible:-translate-y-1.5 w-full"
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <ProductImage
          src={item.image}
          alt={item.name}
          className="w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        {item.featured && (
          <span className="absolute top-3 left-3 bg-honey text-ink text-xs font-display font-bold px-3 py-1 rounded-full shadow-card">
            Featured
          </span>
        )}
        {!item.available && (
          <div className="absolute inset-0 bg-ink/60 flex items-center justify-center">
            <span className="text-cream font-display font-semibold tracking-wide">
              Currently unavailable
            </span>
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-cream text-ink font-display font-bold px-3 py-1 rounded-full shadow-card">
          ₹{item.price}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-display text-lg font-semibold text-ink">{item.name}</h3>
        {item.calories > 0 && (
          <div className="flex items-center gap-4 text-sm text-ink/60">
            <span className="flex items-center gap-1">
              <Flame size={15} className="text-orange" /> {item.calories} cal
            </span>
            <span className="flex items-center gap-1">
              <Beef size={15} className="text-pink" /> {item.protein}
            </span>
          </div>
        )}
        <p className="text-sm text-ink/50 mt-auto pt-2">{item.taste}</p>
      </div>
    </button>
  );
}
