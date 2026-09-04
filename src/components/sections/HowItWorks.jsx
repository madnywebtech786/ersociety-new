import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Send a message",
    description: "Tell us whether you want to donate, volunteer, or need help settling in.",
  },
  {
    number: "02",
    title: "We reach out",
    description: "A member of our team reads every message and responds directly.",
  },
  {
    number: "03",
    title: "Help arrives",
    description: "Whatever you need, we connect you to the right program or person.",
  },
];

export function HowItWorks() {
  return (
    <section className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              Reaching us is <span className="text-primary">three steps</span> away.
            </>
          }
          description="From your first message to help actually arriving, here is what happens."
          className="mb-16 sm:mb-24"
        />

        <div className="flex flex-col">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1} y={16}>
              <div
                className="group relative grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-t border-border py-8 sm:grid-cols-[10rem_auto_1fr] sm:items-center sm:gap-x-10 sm:py-10 lg:grid-cols-[12rem_auto_1fr]"
                style={{ marginLeft: `${index * 2.5}%` }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none col-span-2 row-start-1 -mb-2 font-display text-6xl leading-none text-primary/10 transition-colors duration-500 group-hover:text-primary/20 sm:col-span-1 sm:mb-0 sm:text-7xl lg:text-8xl"
                >
                  {step.number}
                </span>

                <p className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                  {step.title}
                </p>

                <p className="col-span-2 max-w-sm font-sans text-sm leading-relaxed text-muted-foreground text-pretty sm:col-span-1 sm:text-base">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" style={{ marginLeft: `${STEPS.length * 2.5}%` }} />
        </div>
      </div>
    </section>
  );
}
