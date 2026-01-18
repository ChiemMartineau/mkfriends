import { GalleryItem } from "./types";

export default function GalleryCard({
  item,
  isFeatured,
}: {
  item: GalleryItem;
  isFeatured?: boolean;
}) {
  const isPending = item.status === "pending";

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-transform active:scale-[0.98] border-2 border-pale-green bg-white ${
        isFeatured ? "w-full aspect-3/4" : "aspect-3/4"
      }`}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 ${
          isFeatured ? "" : ""
        }`}
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* <div
        className={`absolute top-3 right-3 rounded-full p-1.5 flex items-center justify-center border shadow-sm backdrop-blur-md bg-white/90
          ${
            isPending
              ? "border-gray-200 text-gray-400"
              : "border-primary/20 text-primary shadow-[0_0_10px_rgba(255,77,77,0.3)]"
          }`}
      >
        <span className="material-symbols-outlined text-[18px] font-bold">
          {isPending ? "hourglass_top" : "check_circle"}
        </span>
      </div> */}

      <div className="absolute bottom-0 left-0 w-full p-3.5 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p className="text-white text-base font-bold leading-tight line-clamp-1">
            {item.name}
          </p>
          <span className="text-primary font-black text-xs bg-white/90 px-1.5 py-0.5 rounded shadow-sm">
            +{item.points} pts
          </span>
          {/* {isPending ? (
            <span className="text-gray-400 bg-white/90 px-1.5 py-0.5 rounded shadow-sm text-xs font-bold italic">
              +{item.points} pts
            </span>
          ) : (
            <span className="text-primary font-black text-xs bg-white/90 px-1.5 py-0.5 rounded shadow-sm">
              +{item.points} pts
            </span>
          )} */}
        </div>

        <p className="text-gray-200 text-xs font-medium">{item.dateLabel}</p>
      </div>
    </div>
  );
}
