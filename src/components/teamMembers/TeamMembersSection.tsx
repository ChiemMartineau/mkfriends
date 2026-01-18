"use client";

import TeamMemberAvatar from "./TeamMemberAvatar";
import type { TeamMember } from "./types";
import { useState } from "react";
import ProfileModal, { ProfileModalData } from "../ProfileModal";

export default function TeamMembersSection({
  members,
}: {
  members: TeamMember[];
}) {
  const [selectedPerson, setSelectedPerson] = useState<ProfileModalData | null>(null);

  return (
    <section className="mt-2 pl-6 pb-6">
      <div className="flex items-center justify-between pr-6 mb-3">
        <h3 className="text-lg font-bold text-text-dark">Team Members</h3>
      </div>

      <div className="flex overflow-x-auto gap-4 hide-scrollbar pr-6">
        {members.map((m) => (
          <TeamMemberAvatar
            key={m.id}
            member={m}
            onClick={(member) =>
              setSelectedPerson({
                id: member.id,
                name: member.name,
                avatarUrl: member.avatarUrl,
                groupName: member.groupName,
                description: "Profile details coming soon.",
                points: member.points,
              })
            }
          />
        ))}
      </div>

      <ProfileModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </section>
  );
}
