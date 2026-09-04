import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { StatCounter } from "../ui/StatCounter";
import { Reveal } from "../ui/Reveal";
import { stats } from "@/lib/content/stats";

export function Impact() {
  return (
    <section id="impact" className="bg-accent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-md">
              <Image
                src="/images/gallery-2.webp"
                alt="Community members gathered together outdoors in Calgary"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Our Impact"
              title={
                <>
                  Measured in dollars, hours, and people who no longer{" "}
                  <span className="text-primary">feel alone</span>.
                </>
              }
              className="[&_h2]:text-accent-foreground"
            />

            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.08} className="flex flex-col gap-2 border-l border-white/20 pl-5">
                  <p className="font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-none text-accent-foreground">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="max-w-48 font-sans text-sm text-accent-foreground/70">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
