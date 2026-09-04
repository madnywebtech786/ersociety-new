import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { StatementSection } from "@/components/sections/StatementSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/site-config";

function getService(slug) {
  return services.find((service) => service.slug === slug);
}

function getRelatedServices(service) {
  return services.filter((item) => item.slug !== service.slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.summary,
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
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${siteConfig.url}/services/${service.slug}` },
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
        eyebrow={`Service ${service.number} · Services`}
        title={service.title}
        description={service.summary}
        image="/images/programs-banner.webp"
        imageAlt="Ebenezer Relief Society volunteers and community members working together"
      />

      <StatementSection
        pullQuote={service.summary}
        paragraphs={[service.intro]}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
        stickySide="text"
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="What This Service Offers"
            title={
              <>
                Ways we <span className="text-primary">support</span> {service.title.toLowerCase()}.
              </>
            }
            className="mb-14 sm:mb-16"
          />
          <div className="flex flex-col">
            {service.services.map((item, index) => (
              <Reveal key={item.title} delay={Math.min(index * 0.06, 0.3)} y={16}>
                <div className="grid grid-cols-1 items-start gap-3 border-t-2 border-primary py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl leading-snug text-foreground text-balance sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="max-w-2xl font-sans text-base leading-relaxed text-muted-foreground text-pretty">
                      {item.description}
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
                Explore <span className="text-primary">more services</span>.
              </>
            }
            className="mb-14 sm:mb-16"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {relatedServices.map((relatedService, index) => (
              <ProgramCard
                key={relatedService.slug}
                program={relatedService}
                index={index}
                basePath="/services"
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to <span className="text-primary">get involved</span> with this service?
          </>
        }
        description="Reach out to learn how to join, volunteer, or support this service directly."
      />
    </>
  );
}
