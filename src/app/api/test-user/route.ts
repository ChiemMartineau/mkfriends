import { NextResponse } from "next/server";
import { upsertUser, getUserByEmail } from "@/lib/user";

export async function GET(request: Request) {
  try {
    // Create a test user
    const testEmail = "test@example.com";

    console.log("Creating test user...");
    const created = await upsertUser({
      email: testEmail,
      name: "Test User",
      score: 100,
      group: "test-group",
    });

    console.log("Fetching test user...");
    const fetched = await getUserByEmail(testEmail);

    return NextResponse.json({
      success: true,
      created,
      fetched,
      dbName: process.env.MONGODB_DB || "app",
      uri: process.env.MONGODB_URI ? "Set" : "Not Set",
    });
  } catch (error: any) {
    console.error("Test failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: error.stack,
      },
      { status: 500 },
    );
  }
}
