import { PageHero } from "@/components/ui/PageHero";
import { GalleryWall } from "@/components/sections/gallery/GalleryWall";
import { CtaBand } from "@/components/sections/CtaBand";
import { galleryContent } from "@/lib/content/gallery-page";

export const metadata = {
  title: "Gallery",
  description:
    "Photos of Ebenezer Relief Society programs, events, and the immigrant and refugee families we support across Calgary, Alberta.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  const { hero, cta } = galleryContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            Moments from <span className="text-primary">our community</span> in Calgary.
          </>
        }
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <GalleryWall />
      <CtaBand
        title={
          <>
            Want to be part of the <span className="text-primary">next gathering</span>?
          </>
        }
        description={cta.description}
      />
    </>
  );
}
