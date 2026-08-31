import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "../ui/WhatsAppButton";
import { BUSINESS } from "../../lib/business";
import MobileMenu from "./MobileMenu";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-card py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
          <NavLink
            to="/"
            className="font-display text-xl md:text-2xl font-bold tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            🍓 {BUSINESS.name}
          </NavLink>

          <ul className="hidden md:flex items-center gap-8 font-display font-medium text-ink/80">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative py-1 transition-colors hover:text-leaf ${
                      isActive ? "text-leaf" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full bg-orange" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <WhatsAppButton variant="solid" />
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-ink/5 text-ink"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={LINKS} />
    </>
  );
}
