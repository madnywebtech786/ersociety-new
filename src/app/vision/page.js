import { PageHero } from "@/components/ui/PageHero";
import { StatementSection } from "@/components/sections/StatementSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { visionContent } from "@/lib/content/vision";

export const metadata = {
  title: "Our Vision",
  description:
    "Ebenezer Relief Society envisions a Calgary, Alberta where every immigrant and refugee family has the resources and support needed to thrive.",
  alternates: {
    canonical: "/vision",
  },
};

export default function VisionPage() {
  const { hero, statementImage, statementImageAlt, pullQuote, paragraphs, changes, cta } = visionContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            A Calgary where every newcomer family has what they need to{" "}
            <span className="text-primary">thrive</span>.
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

      <section className="overflow-hidden bg-foreground py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow={changes.eyebrow}
            title={
              <>
                The shift we work toward with{" "}
                <span className="text-primary">every family</span>.
              </>
            }
            className="mb-16 sm:mb-24 [&_h2]:text-white"
          />

          <div className="flex flex-col">
            {changes.items.map((item, index) => (
              <Reveal key={item.from} delay={index * 0.08} y={16}>
                <div className="group grid grid-cols-1 items-center gap-3 border-t border-white/15 py-8 sm:grid-cols-[1fr_auto_2fr] sm:gap-8 sm:py-10">
                  <span className="font-sans text-base text-white/40 line-through decoration-white/30 decoration-1 sm:text-lg">
                    {item.from}
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden h-px w-10 bg-primary transition-all duration-500 group-hover:w-16 sm:block"
                  />
                  <span className="font-display text-3xl leading-none text-white sm:text-5xl lg:text-6xl">
                    {item.to}
                  </span>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-white/15" />
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Help us build the <span className="text-primary">Calgary we envision</span>.
          </>
        }
        description={cta.description}
      />
    </>
  );
}
