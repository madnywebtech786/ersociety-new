import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const GALLERY_IMAGES = [
  { src: "/images/gallery-9.webp", alt: "Community members dancing together at an Ebenezer Relief Society gathering", aspect: "aspect-3/4" },
  { src: "/images/gallery-2.webp", alt: "A group of community members smiling together outdoors in Calgary", aspect: "aspect-4/3" },
  { src: "/images/gallery-6.webp", alt: "Elders from the community seated together at an Ebenezer Relief Society event", aspect: "aspect-square" },
  { src: "/images/gallery-13.webp", alt: "Youth playing basketball through the Ebenezer Relief Society sports program", aspect: "aspect-4/3" },
  { src: "/images/gallery-1.webp", alt: "Families and children gathered together at a community picnic", aspect: "aspect-3/4" },
  { src: "/images/gallery-3.webp", alt: "Friends in traditional dress smiling together at an Ebenezer Relief Society celebration", aspect: "aspect-square" },
  { src: "/images/gallery-7.webp", alt: "Community members sharing a meal at an Ebenezer Relief Society event", aspect: "aspect-4/3" },
  { src: "/images/gallery-10.webp", alt: "Volunteers sharing a meal together at an Ebenezer Relief Society event", aspect: "aspect-3/4" },
  { src: "/images/gallery-8.webp", alt: "Community members clapping and celebrating together", aspect: "aspect-square" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-8 sm:mb-20 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                Moments from <span className="text-primary">our community</span>.
              </>
            }
            description="A look at the people, celebrations, and everyday work behind Ebenezer Relief Society."
          />
          <Reveal delay={0.1}>
            <span className="inline-flex w-fit cursor-not-allowed items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-sans text-sm font-medium text-muted-foreground">
              Full gallery coming soon
            </span>
          </Reveal>
        </div>

        <div className="columns-2 gap-4 sm:columns-3 sm:gap-5">
          {GALLERY_IMAGES.map((image, index) => (
            <Reveal
              key={image.src}
              delay={Math.min(index * 0.04, 0.24)}
              className="mb-4 break-inside-avoid sm:mb-5"
            >
              <div className={`group relative w-full overflow-hidden rounded-md ${image.aspect}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
