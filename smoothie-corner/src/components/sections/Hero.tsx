import { lazy, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Leaf, Sparkles, MoveRight } from "lucide-react";
import WhatsAppButton from "../ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "../../lib/business";

const HeroScene = lazy(() => import("../3d/HeroScene"));

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title span", { y: 60, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.3")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .from(".hero-badge", { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(2)" }, "-=0.3");
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 md:pt-16"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-honey/40 rounded-blob animate-blob blur-2xl" />
      <div className="absolute bottom-0 -right-20 w-[28rem] h-[28rem] bg-pink/25 rounded-blob-2 animate-blob blur-2xl" />

      <div className="relative mx-auto max-w-7xl w-full px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="hero-eyebrow inline-flex items-center gap-2 bg-leaf-light text-leaf-dark font-display font-semibold text-sm px-4 py-1.5 rounded-full">
            <Leaf size={14} /> Fresh. Homemade. Delicious.
          </span>

          <h1 className="hero-title font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-ink leading-[0.95] mt-5">
            <span className="block overflow-hidden"><span className="inline-block">SMOOTHIE</span></span>
            <span className="block overflow-hidden">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange via-pink to-grape">
                CORNER
              </span>
            </span>
          </h1>

          <p className="hero-sub mt-6 text-lg md:text-xl text-ink/70 font-brush">
            Eat Healthy, Be Healthy
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/menu" className="hero-cta">
              <span className="inline-flex items-center gap-2 bg-ink text-cream font-display font-semibold px-7 py-3.5 rounded-full shadow-card hover:-translate-y-0.5 transition-transform">
                Explore Menu <MoveRight size={18} />
              </span>
            </Link>
            <div className="hero-cta">
              <WhatsAppButton message={WHATSAPP_MESSAGES.general} label="Order on WhatsApp" />
            </div>
          </div>
        </div>

        <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center text-ink/30 font-display">
                Loading scene…
              </div>
            }
          >
            <HeroScene />
          </Suspense>

          <div className="hero-badge absolute top-4 right-2 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-card flex items-center gap-2">
            <Sparkles size={16} className="text-honey" />
            <span className="font-display text-sm font-semibold">Real fruit, real flavour</span>
          </div>
          <div className="hero-badge absolute bottom-8 left-0 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-card">
            <span className="font-display text-sm font-semibold">From ₹49</span>
          </div>
        </div>
      </div>
    </section>
  );
}
