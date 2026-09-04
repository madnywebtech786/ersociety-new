"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "../ui/MagneticButton";
import { AboutDropdown } from "./AboutDropdown";
import { ProgramsDropdown } from "./ProgramsDropdown";
import { ServicesDropdown } from "./ServicesDropdown";

const NAV_LINKS = [
  { label: "Activities", href: "/activities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const showDarkText = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/85 backdrop-blur-md"
          : "bg-linear-to-b from-black/45 via-black/10 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.webp"
            alt="Ebenezer Relief Society logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            preload
          />
          <span
            className={`font-display text-lg leading-none tracking-tight transition-colors duration-500 ${
              showDarkText ? "text-foreground" : "text-white"
            }`}
          >
            Ebenezer
            <span
              className={`block text-[0.65rem] font-sans font-medium uppercase tracking-[0.25em] transition-colors duration-500 ${
                showDarkText ? "text-muted-foreground" : "text-white/75"
              }`}
            >
              Relief Society
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          <AboutDropdown dark={showDarkText} />
          <Link
            href="/board"
            className={`group relative font-sans text-sm font-medium transition-colors duration-500 ${
              showDarkText ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
            }`}
          >
            Board of Directors
            <span
              className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                showDarkText ? "bg-primary" : "bg-white"
              }`}
            />
          </Link>
          <ProgramsDropdown dark={showDarkText} />
          <ServicesDropdown dark={showDarkText} />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative font-sans text-sm font-medium transition-colors duration-500 ${
                showDarkText ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                  showDarkText ? "bg-primary" : "bg-white"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="/contact" variant="primary">
            Donate
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full transition-colors duration-300 lg:hidden ${
            menuOpen
              ? "bg-foreground"
              : showDarkText
                ? "bg-foreground/8"
                : "bg-white/15 backdrop-blur-sm"
          }`}
        >
          <span
            className={`h-px w-5 transition-all duration-300 ${
              menuOpen ? "translate-y-0.75 rotate-45 bg-white" : showDarkText ? "bg-foreground" : "bg-white"
            }`}
          />
          <span
            className={`h-px w-5 transition-all duration-300 ${
              menuOpen ? "-translate-y-0.75 -rotate-45 bg-white" : showDarkText ? "bg-foreground" : "bg-white"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm lg:hidden"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-40 flex h-dvh w-full flex-col overflow-y-auto bg-surface sm:w-96 lg:hidden"
            >
              <div className="flex flex-1 flex-col justify-center gap-1 px-8 pb-24 pt-28">
                <AboutDropdown mobile onNavigate={() => setMenuOpen(false)} />
                <Link
                  href="/board"
                  onClick={() => setMenuOpen(false)}
                  className="py-3 font-display text-3xl text-foreground"
                >
                  Board of Directors
                </Link>
                <ProgramsDropdown mobile onNavigate={() => setMenuOpen(false)} />
                <ServicesDropdown mobile onNavigate={() => setMenuOpen(false)} />
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 font-display text-3xl text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-8">
                  <MagneticButton href="/contact" variant="primary" className="w-full" onClick={() => setMenuOpen(false)}>
                    Donate
                  </MagneticButton>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
