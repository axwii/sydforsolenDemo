"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

// Define Message type directly in the component
type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  async function sendMessage(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = (await res.json()) as { answer?: string; error?: string };
      if (data.error) {
        const errorMessageContent: string = data.error || "En ukendt fejl opstod.";
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: errorMessageContent },
        ]);
      } else if (data.answer) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.answer! }, // data.answer is string here due to the if condition
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Modtog et uventet svar fra serveren." },
        ]);
      }
    } catch (err) {
      console.error("SendMessage Error:", err);
      let errorMessage = "Beklager, der skete en teknisk fejl.";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-black text-white text-2xl z-[1000] flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-800 transition-colors"
        aria-label={isOpen ? "Luk chat" : "Åbn chat"}
      >
        {isOpen ? "×" : "💬"}
      </button>

      {isOpen && (
        <div
          className="fixed bottom-24 right-6 left-6 sm:left-auto w-auto sm:w-80 max-w-md max-h-[70vh] sm:max-h-[500px] bg-white shadow-xl rounded-lg flex flex-col overflow-hidden z-[1000] font-helvetica"
        >
          <div
            className="p-3 bg-black text-white font-helvetica-bold flex justify-between items-center"
          >
            <span>Spørg om Syd for Solen</span>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-transparent border-none text-white text-xl leading-none cursor-pointer hover:text-gray-300"
              aria-label="Luk chat"
            >
              ×
            </button>
          </div>

          <div
            className="flex-1 p-3 space-y-3 overflow-y-auto bg-secondary text-sm"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-2 px-3 rounded-lg max-w-[85%] break-words leading-normal shadow ${m.role === "user"
                      ? "bg-black text-white"
                      : "bg-grey text-black"}`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="p-2 px-3 rounded-lg bg-grey text-black max-w-[85%] break-words leading-normal shadow italic"
                >
                  GPT skriver…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={sendMessage}
            className="border-t border-border p-2 flex items-center bg-white"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Skriv dit spørgsmål…"
              disabled={isLoading}
              className="flex-1 border border-input p-2 text-sm outline-none rounded-md mr-2 focus:ring-2 focus:ring-black focus:border-black"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="border-none bg-black text-white p-2 px-3 rounded-md text-sm cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
            >
              {isLoading ? "…" : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
