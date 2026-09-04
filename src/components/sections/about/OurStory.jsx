import Image from "next/image";
import { Reveal } from "../../ui/Reveal";
import { aboutContent } from "@/lib/content/about";

export function OurStory() {
  const { story } = aboutContent;

  return (
    <section id="our-story" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="flex flex-col gap-8 lg:order-1">
            <div className="flex flex-col gap-5">
              <Reveal>
                <span className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-primary">
                  {story.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-[clamp(2rem,4vw+0.5rem,3.5rem)] leading-[1.05] tracking-tight text-foreground text-balance">
                  A stone raised to mark where <span className="text-primary">help arrived</span>.
                </h2>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              {story.paragraphs.map((paragraph, index) => (
                <Reveal key={index} delay={0.1 + index * 0.05}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="relative lg:order-2 lg:top-8 lg:self-start" y={20}>
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-md">
              <Image
                src={story.image}
                alt={story.imageAlt}
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="mt-5 border-l-2 border-primary pl-5">
              <p className="font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
                &ldquo;Thus far the Lord has helped us.&rdquo; (1 Samuel 7:12)
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
