import type { MenuItem, Ingredient } from "../types/menu";

/**
 * ============================================================
 * SMOOTHIE CORNER — MENU DATA
 * ============================================================
 * This file is the ONLY place product info should live.
 * Every page (Home, Menu, Products, Admin) reads from here.
 *
 * To change a price, calorie count, ingredient list, photo, or
 * availability — edit the object below (or use the /admin page,
 * then paste the exported JSON back in here). Nothing else in
 * the codebase needs to change.
 *
 * IMAGE NOTE: only 4 real product photos were supplied. Items
 * without a confirmed real photo use `image: null`, which
 * renders a clean gradient fallback card instead of a fake or
 * stock photo — see README "Adding product photos".
 * ============================================================
 */

export const DISCLAIMER =
  "* This calories and protein value are estimated values.";

export const SMOOTHIE_BOWL_BASE = {
  size: "200ml",
  base: "Oats + Yogurt Base",
  additional: ["Mix Seeds", "Honey (Extra)", "Granola"],
};

export const menuData: Record<string, MenuItem[]> = {
  smoothieBowls: [
    {
      id: "blueberry-blast",
      name: "Blueberry Blast",
      category: "smoothieBowls",
      price: 99,
      size: "200ml",
      image: "assets/products/blueberry-blast.webp",
      ingredients: [
        "Oats",
        "Yogurt",
        "Blueberry Crush",
        "Mix Seeds",
        "Granola",
        "Honey (Extra)",
      ],
      calories: 320,
      protein: "18g",
      benefits: [
        "Berry-rich",
        "Fiber-containing ingredients",
        "Protein from yogurt",
        "Crunch from seeds and granola",
      ],
      taste: "Fruity • Creamy • Crunchy",
      available: true,
      featured: true,
    },
    {
      id: "strawberry-blast",
      name: "Strawberry Blast",
      category: "smoothieBowls",
      price: 99,
      size: "200ml",
      image: null,
      ingredients: [
        "Oats",
        "Yogurt",
        "Berry Crush",
        "Strawberries",
        "Mix Seeds",
        "Granola",
        "Honey (Extra)",
      ],
      calories: 310,
      protein: "17g",
      benefits: [
        "Strawberry flavour",
        "Yogurt protein",
        "Seeds and granola for texture",
      ],
      taste: "Fruity • Creamy • Crunchy",
      available: true,
      featured: true,
    },
    {
      id: "choco-pb-crunch",
      name: "Choco PB Crunch",
      category: "smoothieBowls",
      price: 99,
      size: "200ml",
      image: "assets/products/choco-pb-crunch.webp",
      ingredients: [
        "Oats",
        "Yogurt",
        "Cocoa Powder",
        "Banana",
        "Peanut Butter",
        "Mix Seeds",
        "Granola",
        "Honey (Extra)",
      ],
      calories: 360,
      protein: "20g",
      benefits: [
        "Cocoa flavour",
        "Peanut butter",
        "Banana",
        "Highest protein among the listed bowls",
      ],
      taste: "Chocolatey • Nutty • Rich",
      available: true,
      featured: true,
    },
    {
      id: "banana-blast",
      name: "Banana Blast",
      category: "smoothieBowls",
      price: 99,
      size: "200ml",
      image: null,
      ingredients: [
        "Oats",
        "Yogurt",
        "Banana",
        "Peanut Butter",
        "Granola",
        "Mix Seeds",
        "Honey (Extra)",
      ],
      calories: 340,
      protein: "17g",
      benefits: ["Creamy banana", "Peanut butter", "Crunchy toppings"],
      taste: "Creamy • Nutty • Sweet",
      available: true,
      featured: false,
    },
    {
      id: "mango-paradise",
      name: "Mango Paradise",
      category: "smoothieBowls",
      price: 99,
      size: "200ml",
      image: "assets/products/mango-paradise.webp",
      ingredients: [
        "Oats",
        "Yogurt",
        "Banana",
        "Peanut Butter",
        "Granola",
        "Mix Seeds",
        "Honey (Extra)",
      ],
      calories: 330,
      protein: "17g",
      benefits: [
        "Tropical mango flavour",
        "Banana",
        "Creamy yogurt base",
        "Crunchy toppings",
      ],
      taste: "Tropical • Creamy • Sweet",
      available: true,
      featured: true,
    },
  ],

  chiaPuddings: [
    {
      id: "strawberry-chia",
      name: "Strawberry Chia",
      category: "chiaPuddings",
      price: 59,
      image: null,
      ingredients: ["Chia Pudding", "Strawberries", "Mix Seeds", "Honey (Extra)"],
      calories: 210,
      protein: "12g",
      benefits: ["Strawberry flavour", "Chia texture", "Light and fresh"],
      taste: "Fruity • Light • Creamy",
      available: true,
      featured: false,
    },
    {
      id: "berry-chia",
      name: "Berry Chia",
      category: "chiaPuddings",
      price: 59,
      image: null,
      ingredients: ["Chia Pudding", "Berry Crush", "Mix Seeds", "Honey (Extra)"],
      calories: 210,
      protein: "12g",
      benefits: ["Berry flavour", "Chia texture", "Light and fresh"],
      taste: "Fruity • Light • Creamy",
      available: true,
      featured: false,
    },
  ],

  quickBites: [
    {
      id: "banana-bread",
      name: "Banana Bread",
      category: "quickBites",
      price: 49,
      image: null,
      description: "Soft. Moist. Naturally Sweet. Made with Love.",
      ingredients: ["Banana Bread"],
      calories: 210,
      protein: "11g",
      benefits: ["Soft and moist", "Naturally sweetened", "Homemade"],
      taste: "Sweet • Soft • Comforting",
      available: true,
      featured: true,
    },
  ],

  combos: [
    {
      id: "bowl-chia-combo",
      name: "Bowl + Chia Pudding",
      category: "combos",
      price: 149,
      savings: 9,
      image: null,
      description: "Any Smoothie Bowl + Any Chia Pudding",
      composedOf: ["Any Smoothie Bowl", "Any Chia Pudding"],
      ingredients: [],
      calories: 0,
      protein: "—",
      benefits: ["Best value pairing", "Mix any bowl with any chia pudding"],
      taste: "Your choice",
      available: true,
      featured: true,
    },
    {
      id: "pb-bread-chia-combo",
      // Menu wording preserved as supplied ("PB Bread"); the underlying
      // product is Banana Bread — see composedOf / README for the note.
      name: "PB Bread + Chia Pudding",
      category: "combos",
      price: 99,
      savings: 9,
      image: null,
      description: "Banana Bread + Any Chia Pudding",
      composedOf: ["Banana Bread", "Any Chia Pudding"],
      ingredients: [],
      calories: 0,
      protein: "—",
      benefits: ["Best value pairing", "Sweet bread with a light chia pudding"],
      taste: "Your choice",
      available: true,
      featured: false,
    },
  ],
};

export const allMenuItems: MenuItem[] = Object.values(menuData).flat();

export const ingredients: Ingredient[] = [
  { id: "oats", name: "Oats", description: "Provides carbohydrates and fiber and helps make the bowl satisfying." },
  { id: "yogurt", name: "Yogurt", description: "A creamy dairy base that contributes protein and calcium." },
  { id: "banana", name: "Banana", description: "Naturally sweet and a source of carbohydrates and potassium." },
  { id: "blueberry", name: "Blueberry", description: "A vibrant berry that adds natural sweetness, colour and fibre." },
  { id: "strawberry", name: "Strawberry", description: "A juicy, tangy-sweet berry with vitamin C and fibre." },
  { id: "mango", name: "Mango", description: "A tropical fruit prized for its sweetness, colour and vitamin C." },
  { id: "peanut-butter", name: "Peanut Butter", description: "Adds protein, healthy fats and a rich nutty flavor." },
  { id: "cocoa", name: "Cocoa", description: "Unsweetened cocoa brings a rich chocolate flavour and plant compounds." },
  { id: "chia", name: "Chia Seeds", description: "Contains fiber, plant-based protein and healthy fats." },
  { id: "mixed-seeds", name: "Mixed Seeds", description: "A crunchy seed mix that adds texture, healthy fats and plant protein." },
  { id: "granola", name: "Granola", description: "Toasted oats and clusters that add crunch and steady energy." },
  { id: "honey", name: "Honey", description: "A natural sweetener used in small amounts for a touch of extra sweetness." },
];

export const CATEGORY_LABELS: Record<string, string> = {
  smoothieBowls: "Smoothie Bowls",
  chiaPuddings: "Chia Pudding",
  quickBites: "Quick Bites",
  combos: "Combos",
};
