import React from "react";
import { FooterContent } from "./FooterContent";

export default function Footer() {
  return (
    <div className="relative h-[515px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="fixed bottom-0 h-[515px] bg-[#D9D9D9] border-t border-black w-full">
        <FooterContent />
      </div>
    </div>
  );
}
