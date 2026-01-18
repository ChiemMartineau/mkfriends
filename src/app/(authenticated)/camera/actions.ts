"use server";

import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

import { auth0 } from "@/lib/auth0";
import { checkImageIsSelfie } from "@/lib/genai";

import { GumloopClient } from "gumloop";

import * as s3 from "@/lib/s3";
import crypto from "crypto";

export async function uploadImage(blob: Blob) {
  const session = await auth0.getSession();
  console.log(session?.user);

  console.log(await checkImageIsSelfie(blob));

  const key = `/selfies/${crypto.randomUUID()}`;
  s3.uploadImage(key, blob);

  return { url: s3.getPublicUrl(key) };

  // const bytes = await blob.arrayBuffer();
  // const buffer = Buffer.from(bytes);
  // const uploadsDir = path.join(process.cwd(), "public", "uploads");
  // const filename = `${randomUUID()}.jpg`;
  // const filePath = path.join(uploadsDir, filename);

  // await mkdir(uploadsDir, { recursive: true });
  // await writeFile(filePath, buffer);

  // return { url: `/uploads/${filename}` };
}
