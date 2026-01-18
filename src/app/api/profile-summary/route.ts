import { NextRequest, NextResponse } from "next/server";
import { getUserById, ObjectId } from "@/lib/mongodb";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "userId required" }, { status: 400 });
  }

  try {
    const user = await getUserById(new ObjectId(userId));
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const summary = user.linkedinSummary || "";
    return NextResponse.json({ description: summary });
  } catch (err) {
    console.error("Profile summary error:", err);
    return NextResponse.json({ error: "Failed to fetch summary" }, { status: 500 });
  }
}
