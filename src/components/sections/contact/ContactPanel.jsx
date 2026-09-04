import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { SectionHeading } from "../../ui/SectionHeading";
import { ContactForm } from "../ContactForm";
import { contactContent } from "@/lib/content/contact-page";

const ICONS = { "Email us": Mail, "Call us": Phone, "Find us": MapPin };

export function ContactPanel() {
  const { channels } = contactContent;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Reach Us Directly"
              title={
                <>
                  <span className="text-primary">Three ways</span> to get in touch.
                </>
              }
            />

            <div className="flex flex-col gap-4">
              {channels.map((channel, index) => {
                const Icon = ICONS[channel.label];
                const content = (
                  <>
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="flex flex-col">
                        <span className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="font-sans text-sm font-medium text-foreground">
                          {channel.value}
                        </span>
                      </div>
                    </div>
                    {channel.href ? (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    ) : null}
                  </>
                );

                return (
                  <Reveal key={channel.label} delay={Math.min(index * 0.06, 0.2)}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-6 py-5 transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-6 py-5">
                        {content}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
