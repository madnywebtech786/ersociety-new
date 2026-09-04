import { Reveal } from "../../ui/Reveal";
import { SectionHeading } from "../../ui/SectionHeading";
import { TeamMemberCard } from "../TeamMemberCard";
import { board } from "@/lib/content/board";

export function BoardRoster() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Meet Our Team"
          title={
            <>
              Six directors, <span className="text-primary">one shared purpose</span>.
            </>
          }
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((member, index) => (
            <div key={member.name} className="flex flex-col gap-6">
              <TeamMemberCard name={member.name} title={member.title} image={member.image} index={index} />
              <Reveal delay={Math.min(index * 0.05, 0.3) + 0.05} className="border-t border-border pt-5">
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
                  {member.responsibility}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
