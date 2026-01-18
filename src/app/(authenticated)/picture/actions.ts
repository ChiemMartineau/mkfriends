"use server";

import { auth0 } from "@/lib/auth0";

import * as s3 from "@/lib/s3";
import crypto from "crypto";
import { getAllUsers, updateUser, insertSelfie, ObjectId } from "@/lib/mongodb";

import { deepface } from "@/lib/deepface";
import { checkImageIsSelfie } from "@/lib/genai";

function getExtensionFromBlob(blob: Blob): string | null {
  if (!blob.type) return null;
  return blob.type.split("/")[1];
}

export async function uploadImage(blob: Blob) {
  const session = await auth0.getSession();
  console.log(session?.user);

  const isValidSelfie = await checkImageIsSelfie(blob);
  if (!isValidSelfie) {
    console.log("The uploaded image does not contain real people.");
  }

  const key = `selfies/${crypto.randomUUID()}.${getExtensionFromBlob(blob)}`;
  const s3UploadPromise = await s3.uploadImage(key, blob);

  const matchedUsers: ObjectId[] = [];
  const users = await getAllUsers();

  await s3UploadPromise;

  for (const user of users) {
    console.log(s3.getPublicUrl(key), user.profilePicture);
    const isVerified = await deepface.verify(
      s3.getPublicUrl(key),
      user.profilePicture,
    );

    console.log("Deepface result with user" + user.email + ":", isVerified);
    if (isVerified) {
      matchedUsers.push(user._id);
    }
  }

  for (const userId of matchedUsers) {
    for (const otherUserId of matchedUsers) {
      if (userId.equals(otherUserId)) continue;

      const user = users.find((u) => u._id.equals(userId));

      if (user && !user.usersSeen.some((id) => id.equals(otherUserId))) {
        user.usersSeen.push(otherUserId);
        user.score += 10;
      }
    }
  }

  for (const user of users) {
    if (matchedUsers.some((id) => id.equals(user._id))) {
      await updateUser(user);
    }
  }

  await insertSelfie(key, matchedUsers);

  return { url: s3.getPublicUrl(key) };
}
