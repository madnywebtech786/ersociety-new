import Image from "next/image";
import { Reveal } from "../ui/Reveal";
import { MagneticButton } from "../ui/MagneticButton";
import { StatCounter } from "../ui/StatCounter";
import { stats } from "@/lib/content/stats";

const HIGHLIGHT_STATS = [stats[1], stats[2]];

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="relative lg:sticky lg:top-32 lg:self-start">
            <div
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-md border-2 border-primary sm:block"
              aria-hidden="true"
            />
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-md">
              <Image
                src="/images/gallery-6.webp"
                alt="Elders from the Ebenezer Relief Society community gathered together in Calgary"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden w-52 rounded-md border border-border bg-surface p-5 shadow-[0_20px_60px_-20px_rgba(32,26,22,0.25)] sm:block">
              <p className="font-display text-3xl text-primary">9</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Support programs
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <Reveal>
                <span className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-primary">
                  Who We Are
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-[clamp(2rem,4vw+0.5rem,3.5rem)] leading-[1.05] tracking-tight text-foreground text-balance">
                  A name that means <span className="text-primary">help</span>, and a mission
                  built on it.
                </h2>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              <Reveal delay={0.1}>
                <p>
                  Ebenezer is a Hebrew word meaning &ldquo;stone of help.&rdquo; It comes from the
                  Book of Samuel, where a stone was raised as a lasting reminder that help had
                  come when it was needed most. We carry that name because it describes exactly
                  what we do for immigrant and refugee families across Calgary and Alberta.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Ebenezer Relief Society is a nonprofit organization dedicated to helping
                  individuals and families overcome the challenges of settling in a new country.
                  Our mission is to create a compassionate, inclusive environment where every
                  family can achieve their potential and build a fulfilling life through
                  education, employment, health, and community support.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  We work through collaboration, advocacy, and steady commitment. No one who
                  reaches out to Ebenezer Relief Society is left to navigate settlement in
                  Canada alone.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.22}>
              <div className="grid grid-cols-2 gap-6 border-y border-border py-7 sm:max-w-md">
                {HIGHLIGHT_STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1.5">
                    <p className="font-display text-3xl text-foreground sm:text-4xl">
                      <StatCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="font-sans text-xs leading-snug text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25} className="flex flex-wrap items-center gap-4">
              <MagneticButton href="#contact" variant="primary">
                Donate Today
              </MagneticButton>
              <MagneticButton href="#programs" variant="outline">
                See Our Programs
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
