"use server";

import { upsertUser } from "@/lib/user";
import { revalidatePath } from "next/cache";

export async function createTestUser(formData: FormData) {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const profilePicture = formData.get("profilePicture") as string;
  const score = parseInt(formData.get("score") as string) || 0;
  const group = formData.get("group") as string;

  console.log("🧪 Creating user with data:", {
    email,
    name,
    profilePicture,
    score,
    group,
  });

  if (!email) {
    console.error("❌ Email is required");
    return;
  }

  try {
    const result = await upsertUser({
      email,
      name,
      profilePicture,
      score,
      group,
    });

    console.log("✅ User created/updated successfully:", result);
    revalidatePath("/home");
  } catch (error) {
    console.error("❌ Error creating user:", error);
    throw error; // Re-throw to see the error in the browser
  }
}
