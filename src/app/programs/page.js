import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { programs } from "@/lib/content/programs";
import { programsPageContent } from "@/lib/content/programs-page";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Our Programs",
  description:
    "Explore all nine Ebenezer Relief Society programs supporting immigrant and refugee families in Calgary, Alberta, from settlement support to sports, health, and youth programs.",
  alternates: {
    canonical: "/programs",
  },
};

const programsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: programs.map((program, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: program.title,
      description: program.summary,
      url: `${siteConfig.url}/programs/${program.slug}`,
    },
  })),
};

export default function ProgramsPage() {
  const { hero, cta } = programsPageContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(programsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            <span className="text-primary">Nine ways</span> we walk alongside every family.
          </>
        }
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="All Programs"
            title={
              <>
                Every program, <span className="text-primary">one place</span>.
              </>
            }
            description="Browse the full list of ways we support immigrant and refugee families across Calgary."
            className="mb-14 sm:mb-20"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={program.slug} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Find the program that{" "}
            <span className="text-primary">fits your family's needs</span>.
          </>
        }
        description={cta.description}
      />
    </>
  );
}
