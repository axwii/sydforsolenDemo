// src/components/ChatBot.tsx  (eller hvor du har din komponent)
"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Message } from "@/lib/openai";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
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
        throw new Error(`Status ${res.status}`);
      }

      const data = (await res.json()) as { answer?: string; error?: string };
      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Beklager, der skete en fejl." },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.answer! },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Beklager, der skete en fejl. Prøv igen senere.",
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
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#0070f3",
          border: "none",
          color: "#fff",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 1000,
        }}
        aria-label={isOpen ? "Luk chat" : "Åbn chat"}
      >
        {isOpen ? "×" : "💬"}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            width: "320px",
            maxHeight: "500px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              padding: "12px",
              backgroundColor: "#0070f3",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Spørg om Syd for Solen
          </div>

          <div
            style={{
              flex: 1,
              padding: "8px",
              overflowY: "auto",
              backgroundColor: "#f5f5f5",
              fontSize: "14px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "8px",
                  textAlign: m.role === "user" ? "right" : "left",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px",
                    borderRadius: "12px",
                    backgroundColor: m.role === "user" ? "#0070f3" : "#e0e0e0",
                    color: m.role === "user" ? "#fff" : "#000",
                    maxWidth: "80%",
                    wordBreak: "break-word",
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={sendMessage}
            style={{ display: "flex", borderTop: "1px solid #ddd" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Skriv dit spørgsmål…"
              disabled={isLoading}
              style={{
                flex: 1,
                border: "none",
                padding: "8px",
                fontSize: "14px",
                outline: "none",
              }}
            />
            <button
              type="submit"
              disabled={isLoading}
              style={{
                border: "none",
                backgroundColor: "#0070f3",
                color: "#fff",
                padding: "0 12px",
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
            >
              {isLoading ? "…" : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
