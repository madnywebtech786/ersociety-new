import { SectionHeading } from "../../ui/SectionHeading";
import { Reveal } from "../../ui/Reveal";
import { activitiesContent } from "@/lib/content/activities-page";

export function InvolvementGrid() {
  const { involvement } = activitiesContent;

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={involvement.eyebrow}
          title={
            <>
              <span className="text-primary">Three ways</span> to take part.
            </>
          }
          className="mb-14 sm:mb-16"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
          {involvement.items.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.3)}>
              <div className="flex flex-col gap-3 border-t-2 border-primary pt-5">
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                <p className="font-sans text-base leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
