import { SectionHeading } from "../../ui/SectionHeading";
import { TeamMemberCard } from "../TeamMemberCard";
import { aboutContent } from "@/lib/content/about";
import { team } from "@/lib/content/team";

export function TeamSection() {
  const { team: teamCopy } = aboutContent;

  return (
    <section id="team" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={teamCopy.eyebrow}
          title={
            <>
              Meet the people <span className="text-primary">steering</span> Ebenezer Relief
              Society.
            </>
          }
          description={teamCopy.description}
          className="mb-14 sm:mb-20"
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {team.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
