"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuOverlay from "../menu/MenuOverlay";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[100px] bg-transparent fixed top-0 left-0 z-50">
        <div className="container mx-auto h-full flex items-center justify-between px-2">
          <Link href="/">
            <Image 
              src="/images/sydforsolenlogo.svg" 
              alt="Syd For Solen Logo" 
              width={50} 
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-5 z-50"
            aria-label="Menu"
          >
            <div className="w-9 h-6 flex flex-col justify-between group">
              <span className={`block w-full h-0.5 bg-black transition-all duration-300 relative overflow-hidden group-hover:before:content-[''] group-hover:before:absolute group-hover:before:left-0 group-hover:before:top-0 group-hover:before:w-full group-hover:before:h-full group-hover:before:bg-red group-hover:before:animate-[slideRight_0.3s_ease-in-out] ${isOpen ? 'rotate-45 translate-y-[11.3px]' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-black transition-all duration-300 relative overflow-hidden group-hover:before:content-[''] group-hover:before:absolute group-hover:before:left-0 group-hover:before:top-0 group-hover:before:w-full group-hover:before:h-full group-hover:before:bg-red group-hover:before:animate-[slideRight_0.4s_ease-in-out] ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-black transition-all duration-300 relative overflow-hidden group-hover:before:content-[''] group-hover:before:absolute group-hover:before:left-0 group-hover:before:top-0 group-hover:before:w-full group-hover:before:h-full group-hover:before:bg-red group-hover:before:animate-[slideRight_0.5s_ease-in-out] ${isOpen ? '-rotate-45 -translate-y-[10.5px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

