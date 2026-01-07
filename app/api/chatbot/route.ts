import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { systemPrompt } from "@/config/ChatbotPrompt";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("models/gemini-1.5-flash"),
    system: systemPrompt,
    messages,
    temperature: 0.4,
  });

  return result.toTextStreamResponse();
}
