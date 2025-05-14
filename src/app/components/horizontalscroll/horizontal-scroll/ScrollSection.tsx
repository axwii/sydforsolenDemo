"use client";

import { useRef, useEffect } from "react";
import { ScrollSectionProps } from "./types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ScrollSection({ backgroundImage, mainText, bottomText, className }: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mainText = sectionRef.current?.querySelector(".main-text");
    const bottomText = sectionRef.current?.querySelector(".bottom-text");

    if (mainText && bottomText) {
      gsap.set([mainText, bottomText], { opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        onEnter: () => {
          gsap.to([mainText, bottomText], {
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
          });
        },
        once: true,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-screen h-screen flex-shrink-0 flex items-center justify-center relative ${className}`}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex flex-col md:flex-row w-full h-full z-[2] pt-14 px-8">
        <div className="main-text font-exposure text-[clamp(1.5rem,4vw,2.8rem)] text-white font-bold max-w-full md:max-w-[65vw] text-left">
          {mainText}
        </div>
        <div className="bottom-text absolute bottom-8 font-extrabold right-8 text-[clamp(1.5rem,4vw,2.8rem)] font-exposure text-white">
          {bottomText}
        </div>
      </div>
    </div>
  );
} 