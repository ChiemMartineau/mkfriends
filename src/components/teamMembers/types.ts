export type TeamMember = {
  id: string;
  name: string;
  avatarUrl: string;
  isYou?: boolean;
  groupName?: string;
  points?: number;
  linkedinUrl?: string;
  linkedinSummary?: string;
};
