import { PageHero } from "@/components/ui/PageHero";
import { StatementSection } from "@/components/sections/StatementSection";
import { BoardRoster } from "@/components/sections/board/BoardRoster";
import { CtaBand } from "@/components/sections/CtaBand";
import { boardContent, board } from "@/lib/content/board";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Board of Directors",
  description:
    "Meet the six volunteer directors who govern Ebenezer Relief Society and keep every program accountable to Calgary's immigrant and refugee community.",
  alternates: {
    canonical: "/board",
  },
};

const boardJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: board.map((member, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Person",
      name: member.name,
      jobTitle: member.title,
      worksFor: {
        "@type": "NGO",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  })),
};

export default function BoardPage() {
  const { hero, intro, cta } = boardContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(boardJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            Six people who carry Ebenezer Relief Society{" "}
            <span className="text-primary">forward</span>.
          </>
        }
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <StatementSection
        pullQuote={intro.title}
        paragraphs={intro.paragraphs}
        image={intro.image}
        imageAlt={intro.imageAlt}
        stickySide="text"
      />
      <BoardRoster />
      <CtaBand
        title={
          <>
            Interested in <span className="text-primary">joining our board</span> or volunteering
            your expertise?
          </>
        }
        description={cta.description}
      />
    </>
  );
}
