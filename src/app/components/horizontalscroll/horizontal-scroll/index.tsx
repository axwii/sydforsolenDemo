"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FilmRoll from "./FilmRoll";
import ScrollSection from "./ScrollSection";
import { row1Images, row2Images, row3Images, sections } from "./data";

export default function HorizontalScroll() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const horizontalSection = horizontalRef.current;
    const mainContainer = mainContainerRef.current;
    if (!horizontalSection || !mainContainer) return;

    gsap.set(horizontalSection, { x: window.innerWidth });

    // Main horizontal scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer,
        start: "top top",
        end: () => "+=3000",
        pin: true,
        scrub: true,
      },
    });

    tl.to(horizontalSection, {
      x: 0,
    })
      .to(horizontalSection, {
        x: -window.innerWidth,
      })
      .to(horizontalSection, {
        x: -(window.innerWidth * 2),
      });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={mainContainerRef} className="relative h-screen min-h-[600px] overflow-hidden">
      <FilmRoll row1Images={row1Images} row2Images={row2Images} row3Images={row3Images} />
      
      <div ref={horizontalRef} className="absolute top-0 left-0 h-full z-20 flex">
        {sections.map((section, index) => (
          <ScrollSection
            key={index}
            backgroundImage={section.backgroundImage}
            mainText={section.mainText}
            bottomText={section.bottomText}
          />
        ))}
      </div>
    </div>
  );
} 