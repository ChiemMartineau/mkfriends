import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const { DO_SPACES_ACCESS_KEY, DO_SPACES_SECRET_KEY } = process.env;

if (!DO_SPACES_ACCESS_KEY || !DO_SPACES_SECRET_KEY) {
  throw new Error("Missing DigitalOcean Spaces credentials");
}

const s3 = new S3Client({
  region: "us-east-1", // REQUIRED but ignored by Spaces
  endpoint: "https://tor1.digitaloceanspaces.com",
  credentials: {
    accessKeyId: DO_SPACES_ACCESS_KEY,
    secretAccessKey: DO_SPACES_SECRET_KEY,
  },
});

export async function uploadImage(key: string, imageBlob: Blob) {
  const ALLOWED = ["image/png", "image/jpeg", "image/webp", "image/avif"];

  if (!ALLOWED.includes(imageBlob.type)) {
    throw new Error("Invalid image type");
  }

  const arrayBuffer = await imageBlob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await s3.send(
    new PutObjectCommand({
      Bucket: "mkfriends",
      Key: key,
      Body: buffer,
      ContentType: imageBlob.type,
      ACL: "public-read", // or omit for private
      CacheControl: "public, max-age=31536000",
    }),
  );
}

export async function getImage(key: string): Promise<Blob> {
  const response = await s3.send(
    new GetObjectCommand({
      Bucket: "mkfriends",
      Key: key,
    }),
  );

  if (!response.Body) throw new Error("Response body is empty");

  const byteArray = await response.Body.transformToByteArray();
  return new Blob([new Uint8Array(byteArray)], {
    type: response.ContentType,
  });
}

export function getPublicUrl(key: string) {
  return `https://mkfriends.tor1.cdn.digitaloceanspaces.com/${key}`;
}
