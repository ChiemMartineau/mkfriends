export type GalleryItem = {
  id: string;
  imageUrl: string;
  name: string;
  dateLabel: string;
  points: number;
  status?: "verified" | "pending";
  people?: Array<{
    id: string;
    name: string;
    avatarUrl: string;
    isYou?: boolean;
    linkedinUrl?: string;
    linkedinSummary?: string;
  }>;
};
