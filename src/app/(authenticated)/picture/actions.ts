"use server";

import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

import { auth0 } from "@/lib/auth0";
import { checkImageIsSelfie } from "@/lib/genai";

import * as s3 from "@/lib/s3";
import crypto from "crypto";
import { getAllUsers, insertSelfie } from "@/lib/mongodb";

import fetch from "node-fetch";
import { deepface } from "@/lib/deepface";

async function imageUrlToBase64(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${res.statusText}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  const contentType = res.headers.get("content-type") ?? "image/jpeg";

  return `data:${contentType};base64,${buffer.toString("base64")}`;
}

async function blobToBase64(blob: Blob): Promise<string> {
  const buffer = Buffer.from(await blob.arrayBuffer());
  const base64 = buffer.toString("base64");
  return base64;
}

export async function uploadImage(blob: Blob) {
  const session = await auth0.getSession();
  console.log(session?.user);

  //console.log(await checkImageIsSelfie(blob));

  const key = `/selfies/${crypto.randomUUID()}`;
  s3.uploadImage(key, blob);

  let users = [];
  (await getAllUsers()).forEach(async (user) => {
    deepface
      .verify(
        await blobToBase64(blob),
        await imageUrlToBase64(user.profilePicture),
      )
      .then((res) => {});
  });

  //await insertSelfie(key, [])

  return { url: s3.getPublicUrl(key) };
}
