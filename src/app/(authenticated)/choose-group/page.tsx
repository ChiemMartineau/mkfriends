import CreateGroup from "./CreateGroup";
import JoinGroup from "./JoinGroup";
import { auth0 } from "@/lib/auth0";
import { upsertUser, getAllGroups } from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function ChooseGroup() {
  const session = await auth0.getSession();
  if (!session?.user.email) redirect("/");

  await upsertUser({
    email: session.user.email,
    name: session.user.name,
    profilePicture: session.user.picture,
  });
  if (session.user.group) redirect("/home");

  const allGroups = await getAllGroups();
  const plainGroups = allGroups.map((group) => ({
    _id: group._id.toString(),
    name: group.name,
    score: group.score,
  }));

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-white">
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute top-32 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <header className="flex items-center justify-between px-6 pt-8 pb-4 bg-transparent z-30 sticky top-0 backdrop-blur-sm">
        <div className="flex items-center gap-3"></div>
      </header>

      <main className="flex-1 flex flex-col px-6 pb-10 z-10">
        <div className="mt-4 mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight">
            Choose your
            <span className="text-primary"> Squad </span>
          </h1>
          <p className="mt-3 text-slate-400 text-sm font-medium">
            Join an existing team to compete or start your own journey.
          </p>
        </div>

          <JoinGroup groups={plainGroups} />

        <div className="flex-1" />

        <div className="relative py-6 flex items-center justify-center">
          <div className="w-full h-px bg-slate-100"></div>
          <span className="absolute bg-white px-3 text-xs font-bold text-slate-300 uppercase tracking-widest">
            Or
          </span>
        </div>

        <CreateGroup />
      </main>
    </div>
  );
}
