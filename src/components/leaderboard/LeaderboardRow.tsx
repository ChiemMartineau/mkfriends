import type { LeaderboardEntry } from "./types";

function formatXp(xp: number) {
  return xp.toLocaleString(); // 15420 -> 15,420
}

export default function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  const isTop = !!entry.isTop;
  const isUser = !!entry.isUserTeam;

  const rowClass = isTop
    ? "group flex items-center gap-4 p-4 bg-gradient-to-r from-melon-green-pale to-white relative"
    : isUser
      ? "flex items-center gap-4 p-4 bg-pastel-pink-light border-l-4 border-l-primary"
      : "flex items-center gap-4 p-4 bg-white";

  const rankClass = isTop
    ? "flex items-center justify-center w-8 text-melon-green-dark font-black text-xl italic"
    : isUser
      ? "flex items-center justify-center w-7 text-primary font-black text-xl italic"
      : "flex items-center justify-center w-8 text-melon-green font-black text-xl italic";

  const avatarClass = isUser
    ? "size-12 rounded-full bg-cover bg-center border-2 border-primary"
    : "size-12 rounded-full bg-cover bg-center border border-slate-200";

  const xpClass = isUser
    ? "text-primary font-bold font-mono"
    : "text-text-dark font-bold font-mono";

  return (
    <div className={rowClass}>
      {isTop && (
        <div className="absolute right-0 top-0 p-2 opacity-10">
          <span className="material-symbols-outlined text-[64px] text-melon-green">
            emoji_events
          </span>
        </div>
      )}

      <div className={rankClass}>{entry.rank}</div>

      <div className="relative">
        <div
          className={avatarClass}
          style={{ backgroundImage: `url("${entry.avatarUrl}")` }}
        />
        {isTop && (
          <div className="absolute -bottom-1 -right-1 bg-melon-green text-white rounded-full p-0.5 border border-white">
            <span className="material-symbols-outlined text-[12px] block">
              crown
            </span>
          </div>
        )}
      </div>

      <div className="flex-1 z-10">
        <h4 className="text-text-dark font-bold text-base leading-tight">
          {entry.name}
        </h4>

        {isUser ? (
          <div className="flex items-center gap-1">
            <span className="text-primary text-xs font-medium">Your Team</span>
            <span className="size-1.5 rounded-full bg-primary" />
          </div>
        ) : (
          <p className="text-slate-400 text-xs font-medium">{entry.subtitle}</p>
        )}
      </div>

      <div className="text-right z-10">
        <p className={xpClass}>{formatXp(entry.xp)}</p>
        <p className="text-slate-400 text-[10px] uppercase">XP Points</p>
      </div>
    </div>
  );
}
