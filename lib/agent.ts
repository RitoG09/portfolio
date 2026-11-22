import { createAgent } from "langchain";
import { ChatGroq } from "@langchain/groq";
import { scheduleMeetingTool } from "./tools/scheduleMeeting";
import { systemPrompt } from "@/config/ChatbotPrompt";

export const agent = createAgent({
  model: new ChatGroq({
    apiKey: process.env.GROQ_API_KEY!,
    model: "openai/gpt-oss-120b",
    temperature: 0.3,
  }),
  systemPrompt: systemPrompt,
  tools: [scheduleMeetingTool],
});
