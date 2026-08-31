interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`font-brush text-2xl md:text-3xl ${
            light ? "text-honey" : "text-pink"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-1 font-display text-3xl md:text-5xl font-semibold leading-tight brush-underline ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg ${light ? "text-cream/80" : "text-ink/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
