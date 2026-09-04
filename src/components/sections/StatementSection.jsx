import Image from "next/image";
import { Reveal } from "../ui/Reveal";

export function StatementSection({ pullQuote, paragraphs, image, imageAlt, stickySide = "image" }) {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal
            className={`relative ${stickySide === "image" ? "lg:sticky lg:top-32 lg:self-start" : ""}`}
            y={20}
          >
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-md">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className={`flex flex-col gap-10 ${stickySide === "text" ? "lg:sticky lg:top-32 lg:self-start" : ""}`}>
            <Reveal className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 -top-10 select-none font-display text-[6rem] leading-none text-primary/15 sm:-top-14 sm:text-[8rem]"
              >
                &ldquo;
              </span>
              <p className="relative font-display text-[clamp(1.5rem,2.6vw+0.5rem,2.4rem)] leading-[1.2] text-foreground text-balance">
                {pullQuote}
              </p>
            </Reveal>

            <div className="flex flex-col gap-6 border-t border-border pt-8 font-sans text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={index} delay={0.08 + index * 0.05}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
