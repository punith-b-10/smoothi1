import { Link } from "react-router-dom";
import { BUSINESS, whatsappLink, WHATSAPP_MESSAGES } from "../../lib/business";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream pt-16 pb-8 px-5 md:px-8">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl font-bold">{BUSINESS.name}</p>
          <p className="font-brush text-xl text-honey mt-1">{BUSINESS.tagline}</p>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-leaf text-cream font-display font-semibold px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition-transform"
          >
            Order on WhatsApp
          </a>
        </div>

        <div>
          <p className="font-display font-semibold text-cream/60 uppercase tracking-wider text-xs mb-4">
            Quick Links
          </p>
          <ul className="space-y-2">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/80 hover:text-honey transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold text-cream/60 uppercase tracking-wider text-xs mb-4">
            Contact
          </p>
          <p className="text-cream/80">{BUSINESS.phoneDisplay}</p>
          <p className="text-cream/80 break-all">{BUSINESS.email}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-cream/10 mt-12 pt-6 text-sm text-cream/40">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}
