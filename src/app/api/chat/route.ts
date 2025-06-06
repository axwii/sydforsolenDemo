import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import fs from "fs/promises";
import path from "path";

// 1) Initialize OpenAI with your environment variable.
//    Make sure you have set OPENAI_API_KEY in your .env.local (or environment).
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper function to read the festival FAQ from a file
async function getFestivalInfo(): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), "src", "app", "api", "chat", "festival-faq.txt");
    const fileContent = await fs.readFile(filePath, "utf-8");
    return fileContent;
  } catch (error) {
    console.error("Error reading festival FAQ file:", error);
    // Fallback or default FAQ content if file reading fails
    return "Sorry, I'm currently unable to access the festival information.";
  }
}

// 2) The model will only use this information to answer. If a question falls outside,
//    we’ll instruct it to say “Sorry, I can only answer based on the festival info.”

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid request: 'messages' array is missing or empty." }, { status: 400 });
    }

    const FESTIVAL_INFO = await getFestivalInfo();

    // 3) Construct the prompt for the OpenAI API.
    //    We'll include the festival FAQ and the user's message history.
    const prompt = `
      You are a helpful assistant for the Syd for Solen festival.
      Answer the user's questions based ONLY on the following information:
      --- FESTIVAL FAQ START ---
      ${FESTIVAL_INFO}
      --- FESTIVAL FAQ END ---
      If the user asks a question that cannot be answered from the FAQ, respond with:
      "Beklager, jeg kan kun svare på spørgsmål baseret på festivalinformationen."
      Be concise and friendly.
    `;

    // 4) Call the OpenAI API with the constructed prompt and message history.
    //    We use the gpt-3.5-turbo model for this example.
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-nano",
      messages: [
        { role: "system", content: prompt },
        ...messages, // Spread the existing messages (user and assistant)
      ],
      temperature: 0.2, // Adjust for creativity vs. factuality
      max_tokens: 250,  // Limit the length of the response
    });

    // 5) Extract the assistant's reply from the API response.
    const assistantReply = response.choices[0]?.message?.content?.trim();

    if (!assistantReply) {
      return NextResponse.json({ error: "Failed to get a response from the AI." }, { status: 500 });
    }

    // 6) Return the assistant's reply in the API response.
    return NextResponse.json({ answer: assistantReply });

  } catch (error) {
    console.error("Error in /api/chat:", error);
    let errorMessage = "An unexpected error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    // It's good practice to not expose raw error messages to the client in production
    return NextResponse.json({ error: "Sorry, something went wrong on our end." }, { status: 500 });
  }
}
