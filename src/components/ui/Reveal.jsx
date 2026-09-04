"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Fades and lifts children into view once, when they enter the viewport.
 * Falls back to a plain instant appearance when reduced motion is requested.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className,
  as: Component = motion.div,
  once = true,
  amount = 0.3,
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
