import { PageHero } from "@/components/ui/PageHero";
import { ContactPanel } from "@/components/sections/contact/ContactPanel";
import { ContactMap } from "@/components/sections/contact/ContactMap";
import { contactContent } from "@/lib/content/contact-page";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ebenezer Relief Society in Calgary, Alberta to donate, volunteer, or ask for help. We reply within one business day.",
  alternates: {
    canonical: "/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Ebenezer Relief Society",
  url: `${siteConfig.url}/contact`,
  about: {
    "@type": "NGO",
    name: siteConfig.name,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
  },
};

export default function ContactPage() {
  const { hero } = contactContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            Tell us what you need. We will make sure{" "}
            <span className="text-primary">help arrives</span>.
          </>
        }
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <ContactPanel />
      <ContactMap />
    </>
  );
}
