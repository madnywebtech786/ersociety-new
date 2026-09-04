import { PageHero } from "@/components/ui/PageHero";
import { StatementSection } from "@/components/sections/StatementSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { missionContent } from "@/lib/content/mission";

export const metadata = {
  title: "Our Mission",
  description:
    "Ebenezer Relief Society's mission is to help immigrant and refugee families in Calgary, Alberta build fulfilling lives through education, employment, health, and community support.",
  alternates: {
    canonical: "/mission",
  },
};

export default function MissionPage() {
  const { hero, statementImage, statementImageAlt, pullQuote, paragraphs, pillars, cta } = missionContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            We help immigrant and refugee families in Calgary build{" "}
            <span className="text-primary">fulfilling lives</span>.
          </>
        }
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <StatementSection
        pullQuote={pullQuote}
        paragraphs={paragraphs}
        image={statementImage}
        imageAlt={statementImageAlt}
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow={pillars.eyebrow}
            title={
              <>
                <span className="text-primary">Five pillars</span> behind every program we run.
              </>
            }
            className="mb-14 sm:mb-16"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.items.map((item, index) => (
              <Reveal key={item} delay={Math.min(index * 0.06, 0.3)}>
                <div className="flex flex-col gap-3 border-t-2 border-primary pt-5">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg leading-snug text-foreground text-balance">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Our mission only works with{" "}
            <span className="text-primary">people like you</span> behind it.
          </>
        }
        description={cta.description}
      />
    </>
  );
}
