import LoginButton from "@/components/LoginButton";
import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth0.getSession();
  if (session) redirect("/choose-group");

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden max-w-md mx-auto bg-bg-melon">
      <div className="flex flex-col items-center justify-center p-6 pt-12 pb-4 gap-3">
        <div className="flex items-center justify-center size-32 rounded-full bg-primary/10 text-primary">
          <img src="/mkfriends.png" alt="MkFriends Logo" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">
          <span className="text-green-500">Mk</span>
          <span className="text-red-500">Friends</span>
        </h2>
      </div>

      <>
        <div className="flex flex-col px-8 pt-4 pb-8">
          <h1 className="text-text-main text-[28px] font-extrabold leading-tight text-center tracking-tight">
            Welcome Back!
          </h1>
          <p className="text-text-muted text-[15px] font-medium leading-relaxed pt-2 text-center">
            Log in to track your selfie score and connect with your team.
          </p>
        </div>

        <div className="flex flex-col gap-5 px-6 pb-8 w-full mt-6">
          <LoginButton />
        </div>
      </>
    </div>
  );
}
