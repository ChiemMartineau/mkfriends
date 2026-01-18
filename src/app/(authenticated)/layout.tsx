import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";
// import { upsertUser } from "@/lib/user";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth0.getSession();
  if (!session?.user) redirect("/");

  // await upsertUser({
  //   email: session.user.email ?? "",
  //   name: session.user.name,
  //   profilePicture: session.user.picture,
  // });

  return children;
}
