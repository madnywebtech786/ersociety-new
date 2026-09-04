import { SectionHeading } from "../ui/SectionHeading";
import { programs } from "@/lib/content/programs";
import { ProgramCard } from "./ProgramCard";

const FEATURED_SLUGS = new Set(["assist-immigrant-families", "sports-development", "medical-and-food-relief"]);

export function Programs() {
  return (
    <section id="programs" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Programs & Services"
          title={
            <>
              Six ways we <span className="text-primary">walk alongside</span> every family.
            </>
          }
          description="Every program below meets a real, specific need we see in Calgary's immigrant and refugee community, from a first English class to a plate of food on a hard week."
          className="mb-14 sm:mb-20"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.slug}
              program={program}
              index={index}
              featured={FEATURED_SLUGS.has(program.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
