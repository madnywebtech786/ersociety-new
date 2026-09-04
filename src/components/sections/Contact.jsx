import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative bg-accent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          <div className="flex flex-col justify-between gap-14">
            <div className="flex flex-col gap-6">
              <Reveal>
                <span className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-primary">
                  Get In Touch
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-[clamp(1.9rem,3vw+0.5rem,2.75rem)] leading-[1.1] tracking-tight text-accent-foreground text-balance">
                  Ebenezer means a stone raised to mark where{" "}
                  <span className="text-primary">help arrived</span>.
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="max-w-sm font-sans text-base leading-relaxed text-accent-foreground/75 text-pretty">
                  Send a message, and we will make sure help arrives for you too.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="flex flex-col gap-4">
              <a
                href="mailto:info@ersociety.ca"
                className="group flex items-center justify-between gap-4 rounded-xl bg-surface px-6 py-5 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.5)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Email us
                    </span>
                    <span className="font-sans text-sm font-medium text-foreground">info@ersociety.ca</span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>

              <div className="flex items-center gap-4 rounded-xl bg-surface px-6 py-5 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.5)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="flex flex-col">
                  <span className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Find us
                  </span>
                  <span className="font-sans text-sm font-medium text-foreground">
                    Calgary, Alberta, Canada
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
