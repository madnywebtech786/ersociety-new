import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { StatementSection } from "@/components/sections/StatementSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { programs } from "@/lib/content/programs";
import { siteConfig } from "@/lib/site-config";

function getProgram(slug) {
  return programs.find((program) => program.slug === slug);
}

function getRelatedPrograms(program) {
  const currentIndex = programs.findIndex((item) => item.slug === program.slug);
  const related = [];
  for (let offset = 1; related.length < 3; offset += 1) {
    const candidate = programs[(currentIndex + offset) % programs.length];
    if (candidate.slug !== program.slug) related.push(candidate);
  }
  return related;
}

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.summary,
    alternates: {
      canonical: `/programs/${program.slug}`,
    },
  };
}

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const relatedPrograms = getRelatedPrograms(program);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: program.title,
    name: program.title,
    description: program.summary,
    provider: {
      "@type": "NGO",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: "Calgary",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Programs", item: `${siteConfig.url}/programs` },
      { "@type": "ListItem", position: 3, name: program.title, item: `${siteConfig.url}/programs/${program.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow={`Program ${program.number} · Programs`}
        title={program.title}
        description={program.summary}
        image="/images/programs-banner.webp"
        imageAlt="Ebenezer Relief Society volunteers and community members working together"
      />

      <StatementSection
        pullQuote={program.summary}
        paragraphs={[program.intro]}
        image={program.heroImage}
        imageAlt={program.heroImageAlt}
        stickySide="text"
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="What This Program Offers"
            title={
              <>
                Ways we <span className="text-primary">support</span> {program.title.toLowerCase()}.
              </>
            }
            className="mb-14 sm:mb-16"
          />
          <div className="flex flex-col">
            {program.services.map((service, index) => (
              <Reveal key={service.title} delay={Math.min(index * 0.06, 0.3)} y={16}>
                <div className="grid grid-cols-1 items-start gap-3 border-t-2 border-primary py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl leading-snug text-foreground text-balance sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="max-w-2xl font-sans text-base leading-relaxed text-muted-foreground text-pretty">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Keep Exploring"
            title={
              <>
                Explore <span className="text-primary">more programs</span>.
              </>
            }
            className="mb-14 sm:mb-16"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {relatedPrograms.map((relatedProgram, index) => (
              <ProgramCard key={relatedProgram.slug} program={relatedProgram} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to <span className="text-primary">get involved</span> with this program?
          </>
        }
        description="Reach out to learn how to join, volunteer, or support this program directly."
      />
    </>
  );
}
