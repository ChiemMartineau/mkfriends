"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  const isGallery = pathname === "/home";
  const isLeaderboard = pathname === "/leaderboard";

  const base =
    "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors";
  const active = "text-primary";
  const inactive = "text-green-700/60 hover:text-green-900";
  return (
    <div>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-pale-green pb-safe">
        <div className="flex items-center justify-around h-16 max-w-md mx-auto w-full">
          <Link
            href="/home"
            className={`${base} ${isGallery ? active : inactive}`}
          >
            <span className="material-symbols-outlined text-[26px]">
              grid_view
            </span>
            <span
              className={`text-[10px] ${isGallery ? "font-bold" : "font-medium"}`}
            >
              Gallery
            </span>
          </Link>
          {/* <button className="flex flex-col items-center justify-center w-full h-full gap-1 text-green-700/60 hover:text-green-900 transition-colors">
            <span className="material-symbols-outlined text-[26px]">
              leaderboard
            </span>
            <span className="text-[10px] font-medium">Rank</span>
          </button> */}
          <div className="relative -top-6">
            <Link
              href="/picture"
              className="flex items-center justify-center size-18 rounded-full bg-primary border-4 border-white text-white shadow-lg active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[28px]">
                photo_camera
              </span>
            </Link>
          </div>

          <Link
            href="/leaderboard"
            className={`${base} ${isLeaderboard ? active : inactive}`}
          >
            <span className="material-symbols-outlined text-[26px]">
              leaderboard
            </span>
            <span
              className={`text-[10px] ${isLeaderboard ? "font-bold" : "font-medium"}`}
            >
              Leaderboard
            </span>
          </Link>
          {/* <button className="flex flex-col items-center justify-center w-full h-full gap-1 text-green-700/60 hover:text-green-900 transition-colors">
            <span className="material-symbols-outlined text-[26px]">
              person
            </span>
            <span className="text-[10px] font-medium">Profile</span>
          </button> */}
        </div>
      </nav>

      <div className="h-6"></div>
    </div>
  );
}
