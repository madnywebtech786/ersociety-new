import { SectionHeading } from "../ui/SectionHeading";
import { MagneticButton } from "../ui/MagneticButton";

export function CtaBand({ title, description }) {
  return (
    <section className="bg-accent py-24 sm:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center sm:px-8">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          className="[&_h2]:text-accent-foreground [&_p]:text-accent-foreground/75"
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/contact" variant="primary">
            Donate Today
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline-inverted">
            Get In Touch
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
