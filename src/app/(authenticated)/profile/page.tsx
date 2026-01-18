import LogoutButton from "@/components/LogoutButton";
import BackButton from "@/components/BackButton";
import ProfilePictureEditor from "@/components/ProfilePictureEditor";
import { auth0 } from "@/lib/auth0";
import { getUserByEmail, getGroupForUser } from "@/lib/mongodb";
import { redirect } from "next/navigation";
import ProfileForm from "@/components/ProfileForm";

export default async function Profile() {
  const session = await auth0.getSession();
  if (!session?.user.email) redirect("/");

  const dbUser = await getUserByEmail(session.user.email);

  if (!dbUser) {
    redirect("/");
  }

  const group = dbUser.group ? await getGroupForUser(dbUser) : null;

  const displayName = session.user.name;
  const email = session.user.email;
  const profilePicture = dbUser.profilePicture;
  const teamName = group?.name || "No Team";
  const userScore = dbUser.score || 0;
  const linkedinUrl = dbUser.linkedinUrl || "";

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-white">
      <div className="absolute top-0 right-0 w-full h-96 bg-linear-to-b from-pastel-pink/10 to-transparent z-0 pointer-events-none"></div>

      <header className="flex items-center justify-between px-6 pt-8 pb-4 bg-transparent z-30 sticky top-0 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <BackButton />
          <h2 className="text-slate-800 text-xl font-bold">My Profile</h2>
        </div>
        <div className="flex items-center justify-end gap-1 bg-pale-green-light px-3 py-1.5 rounded-full backdrop-blur-sm border border-pale-green">
          <span className="material-symbols-outlined text-primary text-[20px] fill-1">
            bolt
          </span>
          <p className="text-green-900 text-sm font-bold leading-normal tracking-[0.015em] shrink-0">
            {userScore.toLocaleString()}
          </p>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-6 pb-40 z-10">
        <ProfilePictureEditor currentPicture={profilePicture} />

        <div className="flex flex-col gap-5 mb-8">
          <div className="group">
            <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
              Display Name
            </label>
            <div className="relative">
              <input
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3.5 text-slate-700 font-bold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-card"
                type="text"
                defaultValue={displayName}
                disabled={true}
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                person
              </span>
            </div>
          </div>

          <div className="group">
            <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
              Email Address
            </label>
            <div className="relative">
              <input
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3.5 text-slate-700 font-bold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-card"
                type="email"
                defaultValue={email}
                disabled={true}
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                mail
              </span>
            </div>
          </div>

          <div className="group">
            <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
              Current Team
            </label>
            <div className="flex items-center justify-between w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 shadow-card">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-pastel-pink flex items-center justify-center text-white shadow-md">
                  <span className="material-symbols-outlined text-xl">
                    diversity_3
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-800 font-bold">{teamName}</span>
                  <span className="text-slate-400 text-xs font-semibold">
                    Team Member
                  </span>
                </div>
              </div>
              {/* <div className="flex items-center gap-2">
                <button
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    edit
                  </span>
                </button>
                <button
                  className="text-xs font-bold text-red-400 hover:text-red-500 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-xl transition-colors"
                  type="button"
                >
                  Leave
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <ProfileForm initialLinkedinUrl={linkedinUrl} />

        <div className="flex flex-col gap-3 mt-2">
          <div className="w-full">
            <LogoutButton />
          </div>
        </div>
      </main>
    </div>
  );
}
