import { GumloopClient } from "gumloop";
import { z } from "zod";

const gum = new GumloopClient({
  apiKey: "c9708d6c6ef74b6fb8c443b45c93e8bd",
  userId: "LDL5isDwqOWJ6XqMEcGNzdyDJ9F2",
});

export async function summarizeLinkedinProfile(linkedinProfile: string) {
  const output = await gum.runFlow("qv9FmRwosJiCgwZWSCNmwR", {
    linkedinProfile,
  });

  const summarySchema = z.object({
    linkedinSummary: z.string(),
  });

  return summarySchema.parse(output).linkedinSummary;
}
