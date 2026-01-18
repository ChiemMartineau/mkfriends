import type { TeamMember } from "./types";

export default function TeamMemberAvatar({ member }: { member: TeamMember }) {
  const labelClass = member.isYou
    ? "text-xs font-medium text-text-dark"
    : "text-xs font-medium text-slate-500";

  const avatarClass = member.isYou
    ? "size-14 rounded-full border-2 border-white ring-2 ring-melon-green-light bg-cover bg-center shadow-sm"
    : "size-14 rounded-full border-2 border-white shadow-sm bg-cover bg-center";

  return (
    <div className="flex-shrink-0 flex flex-col gap-2 items-center">
      <div
        className={avatarClass}
        style={{ backgroundImage: `url("${member.avatarUrl}")` }}
      />
      <span className={labelClass}>{member.name}</span>
    </div>
  );
}
