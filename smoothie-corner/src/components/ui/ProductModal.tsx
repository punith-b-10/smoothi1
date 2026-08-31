import { useEffect, useRef } from "react";
import { X, Flame, Beef, Phone } from "lucide-react";
import type { MenuItem } from "../../types/menu";
import ProductImage from "./ProductImage";
import { whatsappLink, WHATSAPP_MESSAGES, telLink } from "../../lib/business";
import { DISCLAIMER } from "../../data/menu-data";

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ProductModal({ item, onClose }: ProductModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-ink/60 backdrop-blur-sm p-0 md:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-cream w-full md:max-w-2xl md:rounded-[32px] rounded-t-[32px] max-h-[92vh] overflow-y-auto shadow-soft"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center shadow-card"
        >
          <X size={20} />
        </button>

        <ProductImage src={item.image} alt={item.name} className="w-full h-64 md:h-80" />

        <div className="p-6 md:p-8 flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id="product-modal-title" className="font-display text-3xl font-semibold text-ink">
                {item.name}
              </h3>
              <p className="text-ink/50 mt-1">{item.taste}</p>
            </div>
            <span className="font-display text-2xl font-bold text-orange shrink-0">₹{item.price}</span>
          </div>

          {item.description && <p className="text-ink/70">{item.description}</p>}

          {item.composedOf && item.composedOf.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.composedOf.map((c) => (
                <span key={c} className="bg-leaf-light text-leaf-dark text-sm font-medium px-3 py-1 rounded-full">
                  {c}
                </span>
              ))}
              {item.savings && (
                <span className="bg-honey/30 text-ink text-sm font-semibold px-3 py-1 rounded-full">
                  Save ₹{item.savings}
                </span>
              )}
            </div>
          )}

          {item.calories > 0 && (
            <div className="flex gap-6 border-y border-ink/10 py-4">
              <div className="flex items-center gap-2">
                <Flame className="text-orange" size={20} />
                <div>
                  <p className="font-display font-bold">{item.calories}</p>
                  <p className="text-xs text-ink/50">calories</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Beef className="text-pink" size={20} />
                <div>
                  <p className="font-display font-bold">{item.protein}</p>
                  <p className="text-xs text-ink/50">protein</p>
                </div>
              </div>
              {item.size && (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-leaf" />
                  <div>
                    <p className="font-display font-bold">{item.size}</p>
                    <p className="text-xs text-ink/50">size</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {item.ingredients.length > 0 && (
            <div>
              <p className="font-display font-semibold mb-2">Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((i) => (
                  <span key={i} className="bg-ink/5 text-ink/70 text-sm px-3 py-1 rounded-full">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.benefits.length > 0 && (
            <div>
              <p className="font-display font-semibold mb-2">Nutrition highlights</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-ink/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-leaf shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-xs text-ink/40 italic">{DISCLAIMER}</p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.product(item.name))}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!item.available}
              className={`flex-1 text-center font-display font-semibold px-6 py-3 rounded-full shadow-card transition-transform hover:-translate-y-0.5 ${
                item.available
                  ? "bg-leaf text-cream hover:bg-leaf-dark"
                  : "bg-ink/10 text-ink/40 pointer-events-none"
              }`}
            >
              {item.available ? "Order on WhatsApp" : "Currently unavailable"}
            </a>
            <a
              href={telLink()}
              className="flex items-center justify-center gap-2 border-2 border-ink/15 px-6 py-3 rounded-full font-display font-medium hover:border-leaf hover:text-leaf transition-colors"
            >
              <Phone size={18} /> Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
