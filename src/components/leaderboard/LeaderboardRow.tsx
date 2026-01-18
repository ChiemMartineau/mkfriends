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

  const xpClass = isUser
    ? "text-primary font-bold font-mono"
    : "text-text-dark font-bold font-mono";

  // Stacked member avatars (like Audi rings)
  const memberAvatars = entry.memberAvatars || [];
  const maxVisible = 3; // Show max 3 avatars, rest are indicated by +N badge

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

      <div className="flex-1 z-10">
        <h4 className="text-text-dark font-bold text-xl leading-tight">
          {entry.name}
        </h4>

        {/* Stacked Avatar Container under team name */}
        <div className="relative w-24 h-8 mt-1">
          {memberAvatars.slice(0, maxVisible).map((avatar, idx) => (
            <div
              key={idx}
              className="absolute rounded-full bg-cover bg-center border-2 border-white shadow-sm"
              style={{
                width: "28px",
                height: "28px",
                backgroundImage: `url("${avatar}")`,
                left: `${idx * 16}px`,
                zIndex: maxVisible - idx,
              }}
            />
          ))}
          {memberAvatars.length > maxVisible && (
            <div
              className="absolute w-7 h-7 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold text-slate-600"
              style={{
                left: `${maxVisible * 16}px`,
                zIndex: 0,
              }}
            >
              +{memberAvatars.length - maxVisible}
            </div>
          )}
        </div>
      </div>

      <div className="text-right z-10">
        <p className={xpClass}>{formatXp(entry.xp)}</p>
        <p className="text-slate-400 text-[10px] uppercase">XP Points</p>
      </div>
    </div>
  );
}
