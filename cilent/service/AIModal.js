import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const AIChatSession = model.startChat({
  generationConfig: { maxOutputTokens: 2048 },
  history: [],
});
