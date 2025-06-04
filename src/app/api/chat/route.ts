import { NextRequest, NextResponse } from "next/server";
import { askOpenAI, Message } from "@/lib/openai";

type ChatResponse = {
  answer?: string;
  error?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { messages?: Message[] };
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: "Ugyldig request: 'messages' skal være et array af Message" },
        { status: 400 }
      );
    }

    // Kald funktionen fra lib/openai.ts
    const answer = await askOpenAI(body.messages);
    return NextResponse.json({ answer });
  } catch (err) {
    console.error("Fejl i API/chat:", err);
    return NextResponse.json(
      { error: "Noget gik galt hos OpenAI" },
      { status: 500 }
    );
  }
}
