import { useEffect } from "react";
import ContactSection from "../components/sections/ContactSection";
import BulkOrderCTA from "../components/sections/BulkOrderCTA";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — Smoothie Corner";
  }, []);

  return (
    <main className="pt-16 min-h-screen">
      <ContactSection />
      <BulkOrderCTA />
    </main>
  );
}
