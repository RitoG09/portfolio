import { createAgent } from "langchain";
import { ChatGroq } from "@langchain/groq";
import { scheduleMeetingTool } from "./tools/scheduleMeeting";
import { systemPrompt } from "@/config/ChatbotPrompt";

export const agent = createAgent({
  model: new ChatGroq({
    apiKey: process.env.GROQ_API_KEY!,
    model: "llama-3.3-70b-versatile",
    temperature: 0.3,
  }),
  systemPrompt: systemPrompt,
  tools: [scheduleMeetingTool],
});
