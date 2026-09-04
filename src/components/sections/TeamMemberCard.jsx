import Image from "next/image";
import { Reveal } from "../ui/Reveal";

export function TeamMemberCard({ name, title, image, index = 0 }) {
  const useAccent = index % 2 === 1;

  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)} y={20} className="flex flex-col gap-4">
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-md">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center ${
              useAccent ? "bg-accent" : "bg-primary"
            }`}
          >
            <Image
              src="/images/logo.webp"
              alt=""
              aria-hidden="true"
              width={72}
              height={72}
              className="h-16 w-16 object-contain opacity-90 mix-blend-luminosity brightness-200 sm:h-20 sm:w-20"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-display text-lg text-foreground">{name}</p>
        <p className="font-sans text-sm text-muted-foreground">{title}</p>
      </div>
    </Reveal>
  );
}
