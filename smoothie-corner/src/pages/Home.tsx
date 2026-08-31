import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import BrandIntro from "../components/sections/BrandIntro";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import IngredientsSection from "../components/sections/IngredientsSection";
import WhySmoothieCorner from "../components/sections/WhySmoothieCorner";
import CategoryStrip from "../components/sections/CategoryStrip";
import CombosSection from "../components/sections/CombosSection";
import BulkOrderCTA from "../components/sections/BulkOrderCTA";
import ContactSection from "../components/sections/ContactSection";
import { menuData } from "../data/menu-data";

export default function Home() {
  useEffect(() => {
    document.title = "Smoothie Corner — Eat Healthy, Be Healthy";
  }, []);

  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedProducts />
      <IngredientsSection />
      <WhySmoothieCorner />
      <CategoryStrip
        eyebrow="Light & fresh"
        title="Chia Pudding"
        description="A lighter option, prepped the night before and finished with fresh toppings."
        items={menuData.chiaPuddings}
      />
      <CategoryStrip
        eyebrow="Grab & go"
        title="Quick Bites"
        description="Something to go with your bowl, or a snack on its own."
        items={menuData.quickBites}
        tint="bg-cream-soft"
      />
      <CombosSection />
      <BulkOrderCTA />
      <ContactSection />
    </>
  );
}
