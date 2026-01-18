import Link from "next/link";
import { auth0 } from "@/lib/auth0";
import { getUserByEmail } from "@/lib/mongodb";

export default async function TopNav({ title }: { title: string }) {
  const session = await auth0.getSession();
  const user = session!.user!;

  const dbUser = await getUserByEmail(user.email!);
  const userScore = dbUser?.score || 0;
  const profilePicture = dbUser?.profilePicture || user.picture;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-pale-green transition-colors duration-300" style={{paddingTop: 'env(safe-area-inset-top)'}}>
      <div className="flex items-center p-4 pb-2 justify-between max-w-md mx-auto w-full">
        <Link href="/profile" className="flex size-12 shrink-0 items-center">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary shadow-sm"
            style={{
              backgroundImage: profilePicture
                ? `url("${profilePicture}")`
                : 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27128%27 height=%27128%27 viewBox=%270 0 100 100%27%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2750%27 fill=%27%23d1d5db%27/%3E%3Cpath d=%27M50 45c7.5 0 13.64-6.14 13.64-13.64S57.5 17.72 50 17.72s-13.64 6.14-13.64 13.64S42.5 45 50 45zm0 6.82c-9.09 0-27.28 4.56-27.28 13.64v3.41c0 1.88 1.53 3.41 3.41 3.41h47.74c1.88 0 3.41-1.53 3.41-3.41v-3.41c0-9.08-18.19-13.64-27.28-13.64z%27 fill=%27%23fff%27/%3E%3C/svg%3E")',
            }}
          ></div>
        </Link>
        <h2 className="text-xl font-extrabold leading-tight tracking-[-0.015em] flex-1 text-center text-green-900">
          {title}
        </h2>
        <div className="flex items-center justify-end gap-1 bg-pale-green-light px-3 py-1.5 rounded-full backdrop-blur-sm border border-pale-green">
          <span className="material-symbols-outlined text-primary text-[20px] fill-1">
            bolt
          </span>
          <p className="text-green-900 text-sm font-bold leading-normal tracking-[0.015em] shrink-0">
            {userScore.toLocaleString()}
          </p>
        </div>
      </div>
    </header>
  );
}
