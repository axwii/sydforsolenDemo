"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ZoomParallax from "./zoomparallax";
import ScrollSection from "./ScrollSection";
import { row1Images, row2Images, row3Images, sections } from "./data";

export default function HorizontalScroll() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [zoomProgress, setZoomProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const horizontalSection = horizontalRef.current;
    const mainContainer = mainContainerRef.current;
    if (!horizontalSection || !mainContainer) return;

    gsap.set(horizontalSection, { x: window.innerWidth });

    // Create a timeline for the zoom animation
    const zoomTl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer,
        start: "top top",
        end: "+=800vh",
        scrub: true,
        onUpdate: (self) => {
          setZoomProgress(self.progress);
        }
      }
    });

    // Main horizontal scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer,
        start: "top top",
        end: () => "+=8000",
        pin: true,
        scrub: true,
      },
    });

    // Add initial delay for ZoomParallax to complete
    tl.to({}, {
      duration: 3,
    })
    .to(horizontalSection, {
      x: 0,
      duration: 2
    })
    .to(horizontalSection, {
      x: 0,
      duration: 6
    })
    .to(horizontalSection, {
      x: -window.innerWidth,
      duration: 2
    })
    .to(horizontalSection, {
      x: -window.innerWidth,
      duration: 6
    })
    .to(horizontalSection, {
      x: -(window.innerWidth * 2),
      duration: 2
    })
    .to(horizontalSection, {
      x: -(window.innerWidth * 2),
      duration: 6
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={mainContainerRef} className="relative h-screen min-h-[600px] overflow-hidden">
      <ZoomParallax progress={zoomProgress} />
      
      <div ref={horizontalRef} className="absolute top-0 left-0 h-full z-20 flex bg-grey">
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