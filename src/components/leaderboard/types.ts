export type LeaderboardEntry = {
  id: string;
  name: string;
  subtitle: string; // "10 Members" / "Top Contender" / "Your Team"
  avatarUrl?: string; // single avatar (legacy)
  memberAvatars?: string[]; // team member profile pictures (stacked)
  xp: number;
  rank: number;

  // styling flags
  isTop?: boolean; // rank 1 fancy row
  isUserTeam?: boolean; // highlight "Your Team"
};
