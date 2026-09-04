"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { galleryImages } from "@/lib/content/gallery-page";

export function GalleryWall() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((current) => (current + 1) % galleryImages.length),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    function handleKeyDown(event) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close, showPrev, showNext]);

  const activeImage = isOpen ? galleryImages[activeIndex] : null;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="columns-2 gap-4 sm:columns-3 sm:gap-5">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={Math.min(index * 0.03, 0.24)}
              className="mb-4 break-inside-avoid sm:mb-5"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View larger image: ${image.alt}`}
                className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-md ${image.aspect}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/92 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            onClick={close}
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                close();
              }}
              aria-label="Close image"
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <motion.div
              key={activeImage.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[70vh] w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="90vw"
                className="object-contain"
                preload
              />
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:right-8"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
