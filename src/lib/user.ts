import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";

export type UserDoc = {
  _id?: ObjectId;
  email: string;
  name?: string;
  profilePicture?: string;
  selfiePictures?: string[];
  score?: number;
  group?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

function getDbName(): string {
  return process.env.MONGODB_DB || "app";
}

async function getUsersCollection() {
  const client = await clientPromise;
  const db = client.db(getDbName());
  const collection = db.collection<UserDoc>("users");
  // Ensure indexes (idempotent)
  await collection.createIndex({ email: 1 }, { unique: true });
  await collection.createIndex({ score: -1 });
  return collection;
}

export async function upsertUser(user: Partial<UserDoc> & { email: string }) {
  const collection = await getUsersCollection();
  const now = new Date();
  const set: Partial<UserDoc> = { email: user.email, updatedAt: now };
  const setOnInsert: Partial<UserDoc> = { createdAt: now };

  if (user.name !== undefined) set.name = user.name;
  if (user.profilePicture !== undefined)
    set.profilePicture = user.profilePicture;
  if (user.group !== undefined) set.group = user.group;

  if (user.selfiePictures !== undefined) {
    set.selfiePictures = user.selfiePictures;
  } else {
    setOnInsert.selfiePictures = [];
  }

  if (user.score !== undefined) {
    set.score = user.score;
  } else {
    setOnInsert.score = 0;
  }

  await collection.updateOne(
    { email: user.email },
    {
      $set: set,
      $setOnInsert: setOnInsert,
    },
    { upsert: true },
  );
  return collection.findOne({ email: user.email });
}

export async function getUserByEmail(email: string) {
  const collection = await getUsersCollection();
  return collection.findOne({ email });
}

export async function updateUserProfile(
  email: string,
  profile: Partial<Pick<UserDoc, "name" | "profilePicture" | "group">>,
) {
  const collection = await getUsersCollection();
  await collection.updateOne(
    { email },
    { $set: { ...profile, updatedAt: new Date() } },
  );
  return collection.findOne({ email });
}

export async function addSelfie(email: string, selfieUrl: string) {
  const collection = await getUsersCollection();
  await collection.updateOne(
    { email },
    {
      $set: { updatedAt: new Date() },
      $push: { selfiePictures: selfieUrl },
    },
    { upsert: true },
  );
  return collection.findOne({ email });
}

export async function removeSelfie(email: string, selfieUrl: string) {
  const collection = await getUsersCollection();
  await collection.updateOne(
    { email },
    {
      $set: { updatedAt: new Date() },
      $pull: { selfiePictures: selfieUrl },
    },
  );
  return collection.findOne({ email });
}

export async function updateUserScore(email: string, delta: number) {
  const collection = await getUsersCollection();
  await collection.updateOne(
    { email },
    {
      $inc: { score: delta },
      $set: { updatedAt: new Date() },
    },
    { upsert: true },
  );
  return collection.findOne({ email });
}

export async function setUserScore(email: string, score: number) {
  const collection = await getUsersCollection();
  await collection.updateOne(
    { email },
    {
      $set: { score, updatedAt: new Date() },
    },
    { upsert: true },
  );
  return collection.findOne({ email });
}

export async function listLeaderboard(limit = 20) {
  const collection = await getUsersCollection();
  return collection
    .find(
      {},
      {
        projection: {
          email: 1,
          name: 1,
          profilePicture: 1,
          score: 1,
          group: 1,
        },
      },
    )
    .sort({ score: -1 })
    .limit(limit)
    .toArray();
}
