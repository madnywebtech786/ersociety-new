import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { SectionHeading } from "../../ui/SectionHeading";
import { aboutContent } from "@/lib/content/about";

const TEASER_IMAGES = [
  { src: "/images/gallery-10.webp", alt: "Volunteers sharing a meal together at an Ebenezer Relief Society event" },
  { src: "/images/gallery-4.webp", alt: "Community members gathered together at an Ebenezer Relief Society celebration" },
  { src: "/images/gallery-12.webp", alt: "Members of the Ebenezer Relief Society community at a gathering" },
  { src: "/images/gallery-5.webp", alt: "Friends and families celebrating together at a community event" },
];

export function GalleryTeaser() {
  const { gallery } = aboutContent;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={gallery.eyebrow}
            title={
              <>
                A glimpse of <span className="text-primary">our community</span> in Calgary.
              </>
            }
            description={gallery.description}
          />
          <Reveal delay={0.1}>
            <Link
              href="/#gallery"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View full gallery
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {TEASER_IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={Math.min(index * 0.06, 0.24)}>
              <div className="group relative aspect-3/4 w-full overflow-hidden rounded-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
