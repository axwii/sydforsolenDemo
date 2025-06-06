"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

// Definerer typen for en besked i chatten.
// 'role' kan enten være 'user' for brugerens beskeder eller 'assistant' for bottens svar.
// 'content' indeholder selve tekstindholdet af beskeden.
type Message = {
  role: "user" | "assistant";
  content: string;
};

// Hovedkomponenten for ChatBot.
export default function ChatBot() {
  // State-variabler til at håndtere chatbottens tilstand.
  const [isOpen, setIsOpen] = useState(false); // Styrer om chatvinduet er synligt.
  const [messages, setMessages] = useState<Message[]>([]); // Holder en liste over alle beskeder.
  const [input, setInput] = useState(""); // Styrer teksten i inputfeltet.
  const [isLoading, setIsLoading] = useState(false); // Angiver om botten er ved at generere et svar.
  const bottomRef = useRef<HTMLDivElement>(null); // En reference til bunden af beskedlisten for auto-scroll.

  // useEffect hook til at scrolle til bunden af beskedlisten,
  // når nye beskeder tilføjes eller chatvinduet åbnes.
  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Funktion til at håndtere afsendelse af beskeder.
  async function sendMessage(e: FormEvent) {
    e.preventDefault(); // Forhindrer standard handling for formularafsendelse (sidegenindlæsning).
    const trimmedInput = input.trim(); // Fjerner overflødigt whitespace.
    if (!trimmedInput) return; // Returnerer hvis input er tomt.

    // Tilføjer brugerens besked til beskedlisten.
    const userMessage: Message = { role: "user", content: trimmedInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(""); // Nulstiller inputfeltet.
    setIsLoading(true); // Sætter loading-tilstand til true.

    // Forsøger at sende beskeden til API'en og modtage et svar.
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }), // Sender den nuværende beskedhistorik plus den nye besked.
      });

      // Håndterer fejl hvis API-kaldet ikke er succesfuldt.
      if (!response.ok) {
        throw new Error(`Serveren svarede med status ${response.status}`);
      }

      // Parser svaret fra API'en.
      const data = (await response.json()) as { answer?: string; error?: string };

      // Tilføjer bottens svar eller en fejlbesked til beskedlisten.
      if (data.error) {
        const errorMessageContent: string = data.error || "En ukendt fejl opstod.";
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: errorMessageContent },
        ]);
      } else if (data.answer) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: data.answer! },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: "Modtog et uventet svar fra serveren." },
        ]);
      }
    } catch (error) {
      // Logger fejlen og tilføjer en fejlbesked til chatten.
      console.error("SendMessage Fejl:", error);
      let errorMessageText = "Beklager, der skete en teknisk fejl.";
      if (error instanceof Error) {
        errorMessageText = error.message;
      }
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: errorMessageText },
      ]);
    } finally {
      setIsLoading(false); // Sætter loading-tilstand til false uanset udfaldet.
    }
  }

  // Returnerer JSX for ChatBot komponenten.
  return (
    <>
      {/* Knap til at åbne/lukke chatvinduet. */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-black text-white text-2xl z-[1000] flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-800 transition-colors"
        aria-label={isOpen ? "Luk chat" : "Åbn chat"}
      >
        {isOpen ? "×" : "💬"} {/* Viser et kryds hvis åben, ellers en taleboble. */}
      </button>

      {/* Viser chatvinduet hvis 'isOpen' er true. */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 left-6 sm:left-auto w-auto sm:w-80 max-w-md max-h-[70vh] sm:max-h-[500px] bg-white shadow-xl rounded-lg flex flex-col overflow-hidden z-[1000] font-helvetica">
          {/* Chatvinduets header. */}
          <div className="p-3 bg-black text-white font-helvetica-bold flex justify-between items-center">
            <span>Spørg om Syd for Solen</span>
            {/* Knap til at lukke chatvinduet. */}
            <button
              onClick={() => setIsOpen(false)}
              className="bg-transparent border-none text-white text-xl leading-none cursor-pointer hover:text-gray-300"
              aria-label="Luk chat"
            >
              ×
            </button>
          </div>

          {/* Område hvor beskederne vises. */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-secondary text-sm">
            {/* Mapper igennem 'messages' og viser hver besked. */}
            {messages.map((message, index) => (
              <div
                key={index} // Unik nøgle for hver besked.
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`} // Justering af beskeden baseret på afsender.
              >
                <div
                  className={`p-2 px-3 rounded-lg max-w-[85%] break-words leading-normal shadow ${message.role === "user"
                      ? "bg-black text-white" // Styling for brugerbeskeder.
                      : "bg-grey text-black"}`} // Styling for assistentbeskeder.
                >
                  {message.content}
                </div>
              </div>
            ))}
            {/* Viser en loading-besked hvis botten arbejder. */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="p-2 px-3 rounded-lg bg-grey text-black max-w-[85%] break-words leading-normal shadow italic">
                  GPT skriver…
                </div>
              </div>
            )}
            {/* Usynligt element til at styre scroll-positionen. */}
            <div ref={bottomRef} /> 
          </div>

          {/* Formular til at indtaste og sende beskeder. */}
          <form
            onSubmit={sendMessage}
            className="border-t border-border p-2 flex items-center bg-white"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Skriv dit spørgsmål…"
              disabled={isLoading} // Deaktiveres mens der ventes på svar.
              className="flex-1 border border-input p-2 text-sm outline-none rounded-md mr-2 focus:ring-2 focus:ring-black focus:border-black"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()} // Deaktiveres hvis der ventes på svar eller input er tomt.
              className="border-none bg-black text-white p-2 px-3 rounded-md text-sm cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
            >
              {isLoading ? "…" : "Send"} {/* Viser "…" under loading, ellers "Send". */}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
