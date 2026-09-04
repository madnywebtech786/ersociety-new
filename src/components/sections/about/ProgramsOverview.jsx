import { SectionHeading } from "../../ui/SectionHeading";
import { ProgramCard } from "../ProgramCard";
import { aboutContent } from "@/lib/content/about";
import { programs } from "@/lib/content/programs";

const FEATURED_SLUGS = new Set(["assist-immigrant-families", "sports-development"]);

export function ProgramsOverview() {
  const { programsOverview } = aboutContent;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={programsOverview.eyebrow}
          title={
            <>
              Six programs, <span className="text-primary">one mission</span>.
            </>
          }
          description={programsOverview.description}
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
