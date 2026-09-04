import { Reveal } from "./Reveal";

/**
 * Consistent section label + heading pattern used across the landing page.
 * `as` controls the heading level to keep the document's heading hierarchy correct.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: HeadingTag = "h2",
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow ? (
        <Reveal>
          <span className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-primary">
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <HeadingTag className="font-display text-[clamp(2rem,4vw+0.5rem,3.75rem)] leading-[1.05] tracking-tight text-foreground text-balance">
          {title}
        </HeadingTag>
      </Reveal>
      {description ? (
        <Reveal delay={0.1} className={align === "center" ? "max-w-2xl" : "max-w-xl"}>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
