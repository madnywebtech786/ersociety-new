import { PageHero } from "@/components/ui/PageHero";
import { EventTimeline } from "@/components/sections/activities/EventTimeline";
import { InvolvementGrid } from "@/components/sections/activities/InvolvementGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { activitiesContent } from "@/lib/content/activities-page";

export const metadata = {
  title: "Activities",
  description:
    "See upcoming Ebenezer Relief Society activities in Calgary, from study sessions to sports days, and find out how to attend, volunteer, or suggest one.",
  alternates: {
    canonical: "/activities",
  },
};

export default function ActivitiesPage() {
  const { hero, cta } = activitiesContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            Where our community <span className="text-primary">shows up</span> for each other.
          </>
        }
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <EventTimeline />
      <InvolvementGrid />
      <CtaBand
        title={
          <>
            Want a <span className="text-primary">reminder</span> before the next activity?
          </>
        }
        description={cta.description}
      />
    </>
  );
}
