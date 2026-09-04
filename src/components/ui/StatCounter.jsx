"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useReducedMotion } from "motion/react";

/**
 * Animates a number counting up from 0 once it scrolls into view.
 * With reduced motion requested, the final value renders immediately.
 */
export function StatCounter({ value, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value, duration, prefersReducedMotion]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-CA")}
      {suffix}
    </motion.span>
  );
}
