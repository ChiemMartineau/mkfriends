import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";
import { z } from "zod";

const ai = new GoogleGenAI({});

export async function checkImageIsSelfie(imageBlob: Blob): Promise<boolean> {
    const imageFile = await ai.files.upload({
        file: imageBlob,
        config: { mimeType: imageBlob.type },
    });

    const matchSchema = z.object({
        valid: z.boolean().describe("The image is a valid selfie."),
    });

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: createUserContent([
            createPartFromUri(imageFile.uri ?? "", imageFile.mimeType ?? ""),
            `Analyze this selfie containing multiple people. 
Your task is to determine if every person in the image is physically present 
or if any individual is actually a 'picture of a picture' (e.g., someone holding a phone, 
a physical photograph, or a cardboard cutout).

If every person in the image is physically present, then the image is valid. Otherwise, it is not.

Check for these specific red flags:
1. Lighting Inconsistency: Does one person have a different light source/shadow direction?
2. Depth/Focus: Is one person 'flatter' or blurrier than the others in an unnatural way?
3. Bezel/Edges: Look for screen borders or paper edges around any faces.
4. Reflections: Do you see glare on a face that suggests it's behind glass or a screen?`
        ]),
        config: {
            responseMimeType: "application/json",
            responseJsonSchema: z.toJSONSchema(matchSchema),
        },
    });

    const result = JSON.parse(response.text ?? "");
    return result.valid;
}