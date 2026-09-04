import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { services } from "@/lib/content/services";
import { servicesPageContent } from "@/lib/content/services-page";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Our Services",
  description:
    "Explore Ebenezer Relief Society's mental health awareness, youth, and spiritual guidance services supporting immigrant and refugee families in Calgary, Alberta.",
  alternates: {
    canonical: "/services",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  })),
};

export default function ServicesPage() {
  const { hero, cta } = servicesPageContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            Care for the <span className="text-primary">whole person</span>, not just the
            paperwork.
          </>
        }
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="All Services"
            title={
              <>
                <span className="text-primary">Three ways</span> we support the whole family.
              </>
            }
            description="Beyond our core programs, these services meet emotional, generational, and spiritual needs."
            className="mb-14 sm:mb-20"
          />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <ProgramCard key={service.slug} program={service} index={index} basePath="/services" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Find the support that{" "}
            <span className="text-primary">fits your family's needs</span>.
          </>
        }
        description={cta.description}
      />
    </>
  );
}
