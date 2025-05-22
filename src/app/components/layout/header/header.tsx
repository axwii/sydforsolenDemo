"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuOverlay from "../menu/MenuOverlay";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full top-0 left-0 z-50 block bg-grey">
        <div className="container mx-auto h-full flex items-center justify-between px-5">
          <Link href="/">
            <Image src="/images/sydforsolenlogo.svg" alt="Syd For Solen Logo" width={50} height={50} className="h-10 w-auto" />
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="p-5 z-50" aria-label="Menu">
            <div className="w-11 h-6 flex flex-col justify-center gap-1.5">
              <span className={`block w-full h-[1px] bg-black transition-all duration-300 ${isOpen ? "rotate-[15deg] translate-y-[8px]" : ""}`}></span>
              <span className={`block w-full h-[1px] bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-full h-[1px] bg-black transition-all duration-300 ${isOpen ? "-rotate-[15deg] -translate-y-[6px]" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
