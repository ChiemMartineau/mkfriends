import { cache } from "react";
import { auth0 } from "./auth0";
// import { getUserByEmail } from "./mongodb";

export const getAuthUser = cache(async function () {
  const session = await auth0.getSession();
  const authUser = session?.user;

  if (!authUser) return null;
});

// export const getDbUser = cache(async function () {
//   const session = await auth0.getSession();
//   const authUser = session?.user;

//   if (!authUser) return null;
//   // const dbUser = getUserByEmail(authUser.email!);
//   if (!dbUser) return null;

//   return dbUser;
// });

// export const getUser = cache(async function () {
//   const session = await auth0.getSession();
//   const authUser = session?.user;

//   if (!authUser) return null;

//   const dbUser = getUserByEmail(authUser.email!);
//   if (!dbUser) return null;

//   return [authUser, dbUser];
// });
