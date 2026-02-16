
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userPrompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  if (!API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    You are the 'Dream Immigration AI Assistant' based in Bardoli, Gujarat. 
    Your goal is to guide students and professionals interested in moving abroad.
    Services you cover: Student Visas, PR (Permanent Residency), Visitor Visas, Flight Bookings, and IELTS/PTE coaching.
    Key Countries: USA, Australia, Canada, UK, and Germany.
    Tone: Professional, helpful, encouraging, and knowledgeable.
    Mention that the office is located in Bardoli for local visitors.
    If asked about specific visa fees, advise them to book a consultation as they vary.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw error;
  }
};
