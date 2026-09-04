import { Reveal } from "../../ui/Reveal";
import { StatCounter } from "../../ui/StatCounter";
import { stats } from "@/lib/content/stats";

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06} className="flex flex-col gap-2">
              <p className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-none text-primary">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="max-w-40 font-sans text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
