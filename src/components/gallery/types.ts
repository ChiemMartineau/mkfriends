export type GalleryItem = {
  id: string;
  imageUrl: string;
  name: string;
  dateLabel: string;
  pointsLabel: string;
  status?: "verified" | "pending";
};
