"use client";

import { useState } from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

interface VolunteerSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VolunteerSignupModal({ isOpen, onClose }: VolunteerSignupModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: Implement the actual submission logic here
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error submitting volunteer form:", error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative bg-white p-8 rounded-lg w-full max-w-md mx-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" aria-label="Close modal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 font-exposure">Tilmeld dig som frivillig</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input className="w-full border-b border-black bg-transparent text-black placeholder:text-black py-2" type="text" placeholder="NAVN" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className="w-full border-b border-black bg-transparent text-black placeholder:text-black py-2" type="email" placeholder="E-MAIL" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full border-b border-black bg-transparent text-black placeholder:text-black py-2" type="tel" placeholder="TELEFON" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          <InteractiveHoverButton variant="dark" className="w-full mt-4" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "SENDER..." : "SEND TILMELDING"}
          </InteractiveHoverButton>

          {status === "success" && <p className="text-green-600 mt-2">Tak for din tilmelding! Vi vender tilbage til dig snart.</p>}
          {status === "error" && <p className="text-red-600 mt-2">Der opstod en fejl. Prøv igen senere.</p>}
        </form>
      </div>
    </div>
  );
}
