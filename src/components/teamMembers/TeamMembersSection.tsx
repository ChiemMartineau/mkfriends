import TeamMemberAvatar from "./TeamMemberAvatar";
import { TEAM_MEMBERS } from "./teamMembersData";

export default function TeamMembersSection() {
  return (
    <section className="mt-2 pl-6 pb-6">
      <div className="flex items-center justify-between pr-6 mb-3">
        <h3 className="text-lg font-bold text-text-dark">Team Members</h3>
      </div>

      <div className="flex overflow-x-auto gap-4 hide-scrollbar pr-6">
        {TEAM_MEMBERS.map((m) => (
          <TeamMemberAvatar key={m.id} member={m} />
        ))}
      </div>
    </section>
  );
}
