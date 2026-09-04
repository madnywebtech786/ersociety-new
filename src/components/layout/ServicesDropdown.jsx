"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { services } from "@/lib/content/services";

const CLOSE_DELAY = 150;

export function ServicesDropdown({ mobile = false, dark = false, onNavigate }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  function openNow() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  }

  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  }

  function closeNow(event) {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(false);
    event?.currentTarget?.querySelector("button")?.focus();
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      closeNow(event);
    }
  }

  if (mobile) {
    return (
      <div className="flex flex-col">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          className="flex w-full items-center justify-between py-3 font-display text-3xl text-foreground"
        >
          Services
          <ChevronDown
            className={`h-6 w-6 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-1 pb-2 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={onNavigate}
                    className="py-2.5 font-sans text-base text-foreground/80"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={openNow}
        onClick={() => setOpen((current) => !current)}
        className={`group relative flex items-center gap-1.5 font-sans text-sm font-medium transition-colors duration-500 ${
          dark ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
        }`}
      >
        Services
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
        <span
          className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
            dark ? "bg-primary" : "bg-white"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full mt-3 w-72 rounded-md border border-border bg-surface p-2 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]"
            onFocus={openNow}
          >
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={() => setOpen(false)}
                className="group/item flex flex-col gap-0.5 rounded-md px-4 py-3 transition-colors hover:bg-background"
              >
                <span className="font-sans text-sm font-semibold text-foreground group-hover/item:text-primary">
                  {service.title}
                </span>
                <span className="font-sans text-xs text-muted-foreground">
                  {service.summary}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
