import LeaderboardRow from "./LeaderboardRow";
import type { LeaderboardEntry } from "./types";

export default function LeaderboardList({
  entries,
}: {
  entries: LeaderboardEntry[];
}) {
  return (
    <div className="flex flex-col px-4 py-4">
      <div className="bg-white rounded-3xl shadow-soft border border-divider-grey overflow-hidden flex flex-col divide-y divide-divider-green">
        {entries.map((entry) => (
          <LeaderboardRow key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
