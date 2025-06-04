// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { askOpenAI, Message } from "@/lib/openai";

type ChatResponse = {
  answer?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Kun POST er tilladt" });
  }

  try {
    const body = req.body as { messages?: Message[] };
    if (!body.messages || !Array.isArray(body.messages)) {
      return res
        .status(400)
        .json({ error: "Ugyldig request: 'messages' skal være et array af Message" });
    }

    // Kald funktionen fra lib/openai.ts
    const answer = await askOpenAI(body.messages);
    return res.status(200).json({ answer });
  } catch (err) {
    console.error("Fejl i API/chat:", err);
    return res.status(500).json({ error: "Noget gik galt hos OpenAI" });
  }
}
