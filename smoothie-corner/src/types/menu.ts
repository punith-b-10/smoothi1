export type MenuCategory =
  | "smoothieBowls"
  | "chiaPuddings"
  | "quickBites"
  | "combos";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  /** e.g. "200ml". Optional — not every item has a stated size. */
  size?: string;
  /**
   * Path relative to /public with NO leading slash, e.g.
   * "assets/products/mango-paradise.webp" — rendered as
   * `${import.meta.env.BASE_URL}${image}` so it works under any
   * GitHub Pages subpath. `null` means no verified real product
   * photo is available yet — the UI renders the clean fallback
   * card, never a stock/AI image.
   */
  image: string | null;
  description?: string;
  ingredients: string[];
  calories: number;
  protein: string;
  benefits: string[];
  taste: string;
  available: boolean;
  featured: boolean;
  /** Free-form note, e.g. combo composition. */
  composedOf?: string[];
  savings?: number;
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
}
