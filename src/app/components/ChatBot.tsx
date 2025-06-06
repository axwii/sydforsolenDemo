"use client";

import React, { useState, FormEvent } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1) Add the user’s message to state
    const userMsg: Message = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      // 2) Call our API route
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input.trim() }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // 3) Add the bot’s answer to state
      const botMsg: Message = { sender: "bot", text: data.answer };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: Message = {
        sender: "bot",
        text: "Der skete en fejl. Prøv igen senere.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* 1) The toggle button */}
      <button
        onClick={toggleOpen}
        className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center"
        aria-label={open ? "Luk chat" : "Åbn chat"}
      >
        {open ? (
          // “Close X” icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // “Chat bubble” icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.255-.911L3 20l1.14-4.257A8.093 8.093 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* 2) The popup chat window */}
      {open && (
        <div className="mt-2 w-80 max-h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <span>Chat med os</span>
            <button onClick={toggleOpen} aria-label="Luk chat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Message list */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-gray-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-lg bg-gray-100 text-gray-500">
                  <em>GPT skriver…</em>
                </div>
              </div>
            )}
          </div>

          {/* Input box */}
          <form
            onSubmit={sendMessage}
            className="border-t px-3 py-2 flex items-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Skriv din besked..."
              className="flex-1 border rounded-l-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className={`bg-blue-600 text-white px-3 py-1 rounded-r-md ${
                (loading || !input.trim()) && "opacity-50 cursor-not-allowed"
              }`}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
