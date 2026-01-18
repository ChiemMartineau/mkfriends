export type GalleryItem = {
  id: string;
  imageUrl: string;
  name: string;
  dateLabel: string;
  points: number;
  status?: "verified" | "pending";
};
