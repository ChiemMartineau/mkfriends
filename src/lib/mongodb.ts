import { get } from "http";
import { MongoClient, ObjectId } from "mongodb";

export { ObjectId } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("app");

export type GroupDoc = {
  _id: ObjectId;
  name: string;
  score: number;
};
const groupsCollection = db.collection<GroupDoc>("groups");

export type UserDoc = {
  _id: ObjectId;
  email: string;
  name: string;
  profilePicture: string;
  usersSeen: ObjectId[];
  score: number;
  group: ObjectId;
};
const usersCollection = db.collection<UserDoc>("users");

export type SelfieDoc = {
  _id: ObjectId;
  url: string;
  users: ObjectId[];
};
const selfiesCollection = db.collection<SelfieDoc>("selfies");

export async function getUserByEmail(email: string): Promise<UserDoc | null> {
  return await usersCollection.findOne({ email });
}

export async function upsertUser(
  user: Partial<UserDoc> & { email: string },
): Promise<UserDoc | null> {
  await usersCollection.updateOne(
    { email: user.email },
    {
      $set: { ...user },
      $setOnInsert: { score: 0, usersSeen: [] },
    },
    { upsert: true },
  );
  return await getUserByEmail(user.email);
}

export async function getSelfiesForUser(
  userId: ObjectId,
): Promise<SelfieDoc[]> {
  return await selfiesCollection.find({ users: userId }).toArray();
}

export async function getAllUsers(): Promise<UserDoc[]> {
  return await usersCollection.find().toArray();
}

export async function getAllGroups(): Promise<GroupDoc[]> {
  return await groupsCollection.find().toArray();
}

export async function getGroupForUser(user: UserDoc): Promise<GroupDoc | null> {
  return await groupsCollection.findOne({ _id: user.group });
}

export async function insertSelfie(
  image: string,
  users: ObjectId[],
): Promise<void> {
  await selfiesCollection.insertOne({
    _id: new ObjectId(),
    url: image,
    users: users,
  });
}

export async function insertGroup(group: GroupDoc): Promise<void> {
  await groupsCollection.insertOne(group);
}
