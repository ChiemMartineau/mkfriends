"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth0 } from "@/lib/auth0";
import { ObjectId, insertGroup, upsertUser } from "@/lib/mongodb";

export async function createGroupAction(formData: FormData) {
	const name = (formData.get("groupName") as string | null)?.trim();

	if (!name) {
		throw new Error("Group name is required");
	}

	const session = await auth0.getSession();
	const email = session?.user.email;

	if (!email) {
		throw new Error("User must be signed in to create a group");
	}

	const groupId = new ObjectId();
	await insertGroup({ _id: groupId, name, score: 0 });

	await upsertUser({ email, group: groupId });

	revalidatePath("/choose-group");
	redirect("/home");
}

export async function joinGroupAction(formData: FormData) {
	const groupId = formData.get("groupId") as string | null;

	if (!groupId) {
		throw new Error("Group ID is required");
	}

	const session = await auth0.getSession();
	const email = session?.user.email;

	if (!email) {
		throw new Error("User must be signed in to join a group");
	}

	await upsertUser({ email, group: new ObjectId(groupId) });

	revalidatePath("/choose-group");
	redirect("/home");
}
