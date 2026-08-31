import { useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WhatsAppButton from "../ui/WhatsAppButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { to: string; label: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!panelRef.current) return;
    const items = panelRef.current.querySelectorAll("li");
    if (open) {
      gsap.set(panelRef.current, { display: "flex" });
      gsap.fromTo(
        panelRef.current,
        { clipPath: "circle(0% at 100% 0%)" },
        { clipPath: "circle(150% at 100% 0%)", duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        items,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, delay: 0.15, ease: "power2.out" }
      );
    } else if (panelRef.current) {
      gsap.to(panelRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.45,
        ease: "power2.in",
        onComplete: () => gsap.set(panelRef.current, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-40 hidden flex-col bg-gradient-to-br from-orange via-pink to-grape text-cream md:hidden"
      style={{ clipPath: "circle(0% at 100% 0%)" }}
    >
      <ul className="flex flex-col gap-2 px-8 pt-28 text-4xl font-display font-semibold">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} onClick={onClose} className="inline-block py-3">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="px-8 mt-8">
        <WhatsAppButton variant="outline" className="!bg-cream !text-ink !border-cream w-full justify-center" />
      </div>
    </div>
  );
}
