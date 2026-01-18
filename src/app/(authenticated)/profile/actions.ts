"use server";

import { revalidatePath } from "next/cache";

import { auth0 } from "@/lib/auth0";
import { updateUserProfile, getUserByEmail } from "@/lib/mongodb";
import { getLinkedinProfileImageURL, summarizeLinkedinProfile } from "@/lib/gumloop"

export async function updateProfileAction(formData: FormData) {
  const linkedinUrl = (formData.get("linkedinUrl") as string | null)?.trim() || "";

  const session = await auth0.getSession();
  const email = session?.user.email;

  if (!email) {
    throw new Error("User must be signed in to update profile");
  }

  // If linkedin URL hasn't changed, skip summary generation
  const existingUser = await getUserByEmail(email);
  const urlChanged = linkedinUrl && linkedinUrl !== (existingUser?.linkedinUrl || "");

  let linkedinSummary: string | undefined = undefined;
  if (urlChanged) {
    try {
      linkedinSummary = await summarizeLinkedinProfile(linkedinUrl);
    } catch (e) {
      console.warn("Failed to summarize LinkedIn profile:", e);
    }
  }

  // Optionally update profile picture via Gumloop (kept disabled)
  // const profilePicture = urlChanged ? await getLinkedinProfileImageURL(linkedinUrl) : undefined;

  await updateUserProfile(email, { linkedinUrl, linkedinSummary });

  revalidatePath("/profile");
}

export async function updateProfilePicture(imageUrl: string) {
  const session = await auth0.getSession();
  const email = session?.user.email;

  if (!email) {
    throw new Error("User must be signed in to update profile picture");
  }

  await updateUserProfile(email, { profilePicture: imageUrl });

  revalidatePath("/profile");
}
