"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MagneticButton } from "../ui/MagneticButton";
import { heroSlides } from "@/lib/content/hero-slides";

const SLIDE_DURATION = 6500;

export function Hero() {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-foreground">
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={prefersReducedMotion ? {} : { scale: 1.08 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1.4, ease: "linear" }}
            className="relative h-full w-full"
          >
            <Image
              src={heroSlides[active].image}
              alt={heroSlides[active].alt}
              fill
              preload={active === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/10 to-black/70" />
      <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/5 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm"
        >
          Calgary, Alberta
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl font-display text-[clamp(2.25rem,3.4vw+1rem,3.75rem)] leading-[1.06] tracking-tight text-white text-balance"
        >
          Building <span className="text-primary">hope</span> and changing lives for immigrant
          families in Calgary.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-lg font-sans text-base leading-relaxed text-white/85 text-pretty sm:text-lg"
        >
          Language training, employment guidance, medical and food relief, and community
          programs that give every newcomer family a real path to stability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#contact" variant="primary">
            Donate Today
          </MagneticButton>
          <MagneticButton href="#programs" variant="outline-inverted">
            Explore Our Programs
          </MagneticButton>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-10 z-10 flex items-center justify-center gap-3 sm:bottom-12">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            className="group py-2"
          >
            <span
              className={`block h-1 rounded-full transition-all duration-500 ${
                index === active ? "w-10 bg-white" : "w-5 bg-white/35 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
