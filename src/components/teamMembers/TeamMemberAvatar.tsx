import type { TeamMember } from "./types";

export default function TeamMemberAvatar({
  member,
  onClick,
  hideName,
}: {
  member: TeamMember;
  onClick?: (member: TeamMember) => void;
  hideName?: boolean;
}) {
  const labelClass = member.isYou
    ? "text-xs font-medium text-text-dark"
    : "text-xs font-medium text-slate-500";

  const avatarClass = member.isYou
    ? "size-14 rounded-full border-2 border-white ring-2 ring-melon-green-light bg-cover bg-center shadow-sm"
    : "size-14 rounded-full border-2 border-white shadow-sm bg-cover bg-center";

  const displayName = (member.name || "").trim().split(/\s+/)[0] || "";

  return (
    <button
      className="flex-shrink-0 flex flex-col gap-2 items-center focus:outline-none"
      onClick={() => onClick?.(member)}
      type="button"
    >
      <div
        className={avatarClass}
        style={{ backgroundImage: `url("${member.avatarUrl}")` }}
      />
      {!hideName && <span className={labelClass}>{displayName}</span>}
    </button>
  );
}
