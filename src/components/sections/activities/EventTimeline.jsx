import { SectionHeading } from "../../ui/SectionHeading";
import { Reveal } from "../../ui/Reveal";
import { events } from "@/lib/content/events";
import { activitiesContent } from "@/lib/content/activities-page";

export function EventTimeline() {
  const { intro } = activitiesContent;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={intro.eyebrow}
          title={
            <>
              Every activity is open to{" "}
              <span className="text-primary">members and their families</span>.
            </>
          }
          description={intro.description}
          className="mb-16 sm:mb-20"
        />

        <ol className="relative flex flex-col">
          <div aria-hidden="true" className="absolute left-[5.5rem] top-2 bottom-2 hidden w-px bg-border sm:block" />
          {events.map((event, index) => (
            <li key={event.title}>
              <Reveal delay={Math.min(index * 0.08, 0.3)}>
                <div className="grid grid-cols-1 items-start gap-3 border-t border-border py-10 sm:grid-cols-[7rem_1fr] sm:gap-8 sm:py-12">
                  <div className="relative flex items-center gap-3 sm:justify-end sm:pr-2">
                    <span
                      aria-hidden="true"
                      className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-primary sm:block"
                    />
                    <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-primary">
                      {event.date}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-display text-xl text-foreground sm:text-2xl">{event.title}</h3>
                    <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
