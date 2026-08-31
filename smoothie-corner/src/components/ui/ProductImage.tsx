import { ImageOff } from "lucide-react";

interface ProductImageProps {
  src: string | null;
  alt: string;
  className?: string;
  gradient?: string;
}

export default function ProductImage({
  src,
  alt,
  className = "",
  gradient = "from-orange via-pink to-grape",
}: ProductImageProps) {
  if (!src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${gradient} text-cream/90 ${className}`}
        role="img"
        aria-label={`${alt} — photo coming soon`}
      >
        <ImageOff size={28} strokeWidth={1.5} />
        <span className="font-display text-xs font-medium tracking-wide text-center px-4">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <img
      src={`${import.meta.env.BASE_URL}${src}`}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`object-cover ${className}`}
    />
  );
}
