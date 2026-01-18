"use client";
import { usePathname } from "next/navigation";
import { PLAYER_STATS } from "./player_stats";

export default function TopNav() {
  const pathname = usePathname();

  const title = pathname === "/leaderboard" ? "Leaderboard" : "Gallery";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-pale-green transition-colors duration-300">
      <div className="flex items-center p-4 pb-2 justify-between max-w-md mx-auto w-full">
        <div className="flex size-12 shrink-0 items-center">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary shadow-sm"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXvm7N103P2dPKTCQ-xJhPST49OA_5MzxiZWfIi_rh6Bgqf6iwpKegIrf1xP-BHJvGE-RAL_f7Hv6yOgAWKG_JO7Wqx_z-3Tiy6LPIJBp7jDgWbykbGWFP9IVJWuJ2jxOnJauDzOLCcoYBq_lWR5Yo5Fx2gEOxreLdpJWrNre3QjT10EAr6ah8YUf9CcNw9YY7O_NjhgIeYacTbyVrPWUAMCnGgRPZ8zhUTUSZCN2KKmHt77tbZGjpdVgTl3HIJt4Sa0EJuPvxnC-7")',
            }}
          ></div>
        </div>
        <h2 className="text-xl font-extrabold leading-tight tracking-[-0.015em] flex-1 text-center text-green-900">
          {title}
        </h2>
        <div className="flex items-center justify-end gap-1 bg-pale-green-light px-3 py-1.5 rounded-full backdrop-blur-sm border border-pale-green">
          <span className="material-symbols-outlined text-primary text-[20px] fill-1">
            bolt
          </span>
          <p className="text-green-900 text-sm font-bold leading-normal tracking-[0.015em] shrink-0">
            {PLAYER_STATS.points.toLocaleString()}
          </p>
        </div>
      </div>
    </header>
  );
}
