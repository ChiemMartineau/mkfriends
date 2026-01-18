import LeaderboardRow from "./LeaderboardRow";
import { LEADERBOARD_ENTRIES } from "./leaderboardData";

export default function LeaderboardList() {
  return (
    <div className="flex flex-col px-4 py-4">
      <div className="bg-white rounded-3xl shadow-soft border border-divider-grey overflow-hidden flex flex-col divide-y divide-divider-green">
        {LEADERBOARD_ENTRIES.map((entry) => (
          <LeaderboardRow key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
