import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export function ProgramCard({ program, index, featured = false, alignEnd = false, basePath = "/programs" }) {
  return (
    <Reveal
      delay={Math.min(index * 0.05, 0.3)}
      y={20}
      className={`group h-full ${featured ? "sm:col-span-2" : ""} ${alignEnd ? "lg:col-start-2" : ""}`}
    >
      <a
        href={`${basePath}/${program.slug}`}
        className={`relative flex h-full min-h-88 flex-col justify-end overflow-hidden rounded-md ${
          featured ? "sm:min-h-104" : ""
        }`}
      >
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

        <div className="relative flex flex-col gap-2.5 p-6 sm:p-7">
          <span className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/60">
            {program.number}
          </span>
          <div className="flex items-end justify-between gap-3">
            <h3 className="font-display text-2xl leading-tight text-white text-balance">
              {program.title}
            </h3>
            <ArrowUpRight
              className="mb-1 h-5 w-5 shrink-0 text-white/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              aria-hidden="true"
            />
          </div>
          <p className="max-w-md font-sans text-sm leading-relaxed text-white/75 text-pretty">
            {program.summary}
          </p>
        </div>
      </a>
    </Reveal>
  );
}
