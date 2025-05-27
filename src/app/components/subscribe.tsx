import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { useState } from "react";
import { updateEmailService } from "@/lib/lib";

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const { error } = await updateEmailService(name, email);
      
      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message);
      }

      setStatus("success");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full h-screen bg-grey font-helvetica-roman">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold max-w-[700px] text-center font-exposure">Tilmeld dig vores nyhedsbrev og modtag nyheder om Syd For Solen 2025.</h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 pt-14">
          <input 
            className="w-[350px] border-b border-black bg-transparent text-black placeholder:text-black" 
            type="text" 
            placeholder="NAVN"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input 
            className="w-[350px] border-b border-black bg-transparent text-black placeholder:text-black" 
            type="email" 
            placeholder="E-MAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <InteractiveHoverButton 
            variant="dark" 
            className="w-[350px] mt-4"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "SENDER..." : "SKRIV MIG PÅ LISTEN, TAK!"}
          </InteractiveHoverButton>

          {status === "success" && (
            <p className="mt-2">Tak for din tilmelding!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-2">Der opstod en fejl. Prøv igen senere.</p>
          )}
        </form>
      </div>
    </div>
  );
}
