import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const duration = reducedMotion ? 300 : 1200;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setHidden(true);
          setTimeout(onDone, 400);
        }, 150);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone, reducedMotion]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-opacity duration-400 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-ink/10" />
        <div
          className="absolute inset-0 rounded-full border-4 border-orange border-t-transparent"
          style={{
            transform: `rotate(${progress * 3.6}deg)`,
            transition: reducedMotion ? "none" : "transform 0.1s linear",
          }}
        />
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-pink via-orange to-honey animate-pulse-soft" />
      </div>
      <p className="font-display text-2xl font-bold tracking-wide text-ink">Smoothie Corner</p>
      <p className="font-brush text-xl text-pink mt-1">Eat Healthy, Be Healthy</p>
      <p className="mt-4 text-sm text-ink/40 font-display">{Math.round(progress)}%</p>
    </div>
  );
}
