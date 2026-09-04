import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { MagneticButton } from "../ui/MagneticButton";
import { events } from "@/lib/content/events";

export function Events() {
  return (
    <section id="events" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Upcoming Events"
          title={
            <>
              Join us <span className="text-primary">in person</span> around Calgary.
            </>
          }
          description="Every event is a chance to learn together, celebrate together, and grow a stronger, more connected community."
          className="mb-14 sm:mb-20"
        />

        <div className="flex flex-col gap-10 sm:gap-12">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={index * 0.06}>
              <div className="grid grid-cols-1 gap-4 border-b border-border pb-10 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:pb-12">
                <p className="font-display text-2xl text-primary sm:text-3xl">{event.date}</p>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-display text-xl text-foreground sm:text-2xl">{event.title}</h3>
                  <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                    {event.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 flex justify-center sm:mt-16">
          <MagneticButton href="#contact" variant="outline">
            Get In Touch About Events
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
