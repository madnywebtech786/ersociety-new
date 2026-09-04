import { PageHero } from "@/components/ui/PageHero";
import { OurStory } from "@/components/sections/about/OurStory";
import { StatsStrip } from "@/components/sections/about/StatsStrip";
import { ProgramsOverview } from "@/components/sections/about/ProgramsOverview";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { GalleryTeaser } from "@/components/sections/about/GalleryTeaser";
import { CtaBand } from "@/components/sections/CtaBand";
import { aboutContent } from "@/lib/content/about";

export const metadata = {
  title: "About Us",
  description:
    "Ebenezer Relief Society is a Calgary, Alberta nonprofit helping immigrant and refugee families settle and thrive. Learn the story behind our name and meet our team.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const { hero, cta } = aboutContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            Ebenezer Relief Society helps immigrant and refugee families in Calgary{" "}
            <span className="text-primary">settle and thrive</span>.
          </>
        }
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <OurStory />
      <StatsStrip />
      <ProgramsOverview />
      <TeamSection />
      <GalleryTeaser />
      <CtaBand
        title={
          <>
            Ready to help a family in Calgary{" "}
            <span className="text-primary">take the next step</span>?
          </>
        }
        description={cta.description}
      />
    </>
  );
}
