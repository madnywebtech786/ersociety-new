import Image from "next/image";

export function PageHero({ eyebrow, title, description, image, imageAlt }) {
  return (
    <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden bg-foreground">
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/15 to-black/75" />
      <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/5 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:px-8 sm:pb-20 lg:px-12">
        <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm">
          {eyebrow}
        </span>

        <h1 className="max-w-2xl font-display text-[clamp(2.25rem,3.4vw+1rem,3.75rem)] leading-[1.06] tracking-tight text-white text-balance">
          {title}
        </h1>

        {description ? (
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-white/85 text-pretty sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
