"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const MotionLink = motion.create(Link);

const VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  outline: "bg-transparent text-foreground border border-border-strong hover:border-foreground",
  "outline-inverted": "bg-transparent text-white border border-white/40 hover:border-white",
  ghost: "bg-transparent text-accent-foreground",
};

/**
 * A button whose contents drift toward the cursor on hover for a subtle
 * "alive" feel. Disabled automatically when reduced motion is requested.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  strength = 0.35,
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  function handlePointerMove(event) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relativeX = event.clientX - (rect.left + rect.width / 2);
    const relativeY = event.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relativeX * strength, y: relativeY * strength });
  }

  function handlePointerLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const sharedProps = {
    ref,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    animate: { x: offset.x, y: offset.y },
    transition: { type: "spring", stiffness: 200, damping: 15, mass: 0.4 },
    className: `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-sm font-medium tracking-wide transition-colors duration-300 ${VARIANTS[variant]} ${className}`,
  };

  if (href) {
    return (
      <MotionLink href={href} onClick={onClick} {...sharedProps}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...sharedProps}>
      {children}
    </motion.button>
  );
}
