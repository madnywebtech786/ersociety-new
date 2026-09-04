"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { testimonials } from "@/lib/content/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const active = testimonials[index];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  function goTo(nextIndex) {
    setIndex((nextIndex + testimonials.length) % testimonials.length);
  }

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="flex flex-col justify-between gap-10">
            <SectionHeading
              eyebrow="Testimonials"
              title={
                <>
                  Words from the families we <span className="text-primary">walk with</span>.
                </>
              }
            />

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            <span className="pointer-events-none absolute -top-10 left-0 select-none font-display text-[8rem] leading-none text-primary/10 sm:text-[10rem]">
              &ldquo;
            </span>

            <div className="relative min-h-72 border-l-2 border-primary pl-8 sm:min-h-56 sm:pl-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-8"
                >
                  <p className="font-display text-[clamp(1.4rem,2.2vw+0.6rem,2.15rem)] leading-snug text-foreground text-balance">
                    {active.quote}
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-sans text-sm font-semibold text-foreground">{active.name}</span>
                    <span className="h-px w-6 bg-border-strong" />
                    <span className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {active.location}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-6 pl-8 sm:pl-12 lg:hidden">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex gap-6 pl-8 font-sans text-sm sm:pl-12">
              {testimonials.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => goTo(dotIndex)}
                  className={`border-b pb-1 transition-colors ${
                    dotIndex === index
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {testimonial.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
