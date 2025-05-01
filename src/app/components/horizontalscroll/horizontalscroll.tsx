"use client";

import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

// Sample image data - replace with your actual images
const imageData = [
  { id: 1, src: "/images/@karlstenstroem_Syd-For-Solen_Stemningsfotos-1-scaled.webp", alt: "Image 1" },
  { id: 2, src: "/images/2_Slowdive_Mathias-Bak-Larsen©-12-scaled-e1697733326397.webp", alt: "Image 2" },
  { id: 3, src: "/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp", alt: "Image 3" },
  // Add more images as needed
];

export default function HorizontalScroll() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const filmRollRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const textSections = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const filmRollSection = filmRollRef.current;
    const horizontalSection = horizontalRef.current;
    const mainContainer = mainContainerRef.current;

    if (!filmRollSection || !horizontalSection || !mainContainer) return;

    // Main timeline
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer,
        start: "top top",
        end: "+=5000",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Calculate the scale needed to make one column fill the screen height
    const targetScale = window.innerHeight / (window.innerHeight / 3);

    mainTimeline
      // Initial zoom animation
      .to(filmRollSection, {
        scale: targetScale,
        duration: 1,
      })
      // Immediately show horizontal section and hide film roll
      .set(filmRollSection, {
        display: "none",
      })
      .set(
        horizontalSection,
        {
          opacity: 1,
        },
        "<"
      )
      // Horizontal scroll
      .to(horizontalSection, {
        x: -(horizontalSection.scrollWidth - window.innerWidth),
        duration: 2,
        ease: "none",
      });

    // Text animations
    textSections.current.forEach((section) => {
      const text = new SplitType(section, { types: "chars" });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: section,
          containerAnimation: mainTimeline,
          start: "left center",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        stagger: 0.02,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={mainContainerRef} className="relative h-screen overflow-hidden">
      {/* Film roll section */}
      <div ref={filmRollRef} className="absolute top-0 left-0 h-screen w-full z-10 bg-black py-4">
        <div className="h-full flex flex-col gap-4">
          <Marquee speed={50} direction="right" className="flex-1 flex items-center">
            {imageData.map((img) => (
              <img key={`row1-${img.id}`} src={img.src} alt={img.alt} className="object-cover mx-4" style={{ width: "500px", height: "300px" }} />
            ))}
          </Marquee>
          <Marquee speed={40} direction="left" className="flex-1 flex items-center">
            {imageData.map((img) => (
              <img key={`row2-${img.id}`} src={img.src} alt={img.alt} className="object-cover mx-4" style={{ width: "500px", height: "300px" }} />
            ))}
          </Marquee>
          <Marquee speed={60} direction="right" className="flex-1 flex items-center">
            {imageData.map((img) => (
              <img key={`row3-${img.id}`} src={img.src} alt={img.alt} className="object-cover mx-4" style={{ width: "500px", height: "300px" }} />
            ))}
          </Marquee>
        </div>
      </div>

      {/* Horizontal scroll section */}
      <div
        ref={horizontalRef}
        className="absolute top-0 left-0 h-screen flex items-center z-20 opacity-0"
        style={{
          width: "300vw",
        }}
      >
        <div
          ref={(el) => {
            if (el) {
              textSections.current[0] = el;
            }
          }}
          className="w-screen h-screen flex items-center justify-center text-6xl font-bold text-white"
          style={{
            backgroundImage: `url(${imageData[0].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          First Text Section
        </div>
        <div
          ref={(el) => {
            if (el) {
              textSections.current[1] = el;
            }
          }}
          className="w-screen h-screen flex items-center justify-center text-6xl font-bold bg-black text-white"
        >
          Second Text Section
        </div>
        <div
          ref={(el) => {
            if (el) {
              textSections.current[2] = el;
            }
          }}
          className="w-screen h-screen flex items-center justify-center text-6xl font-bold bg-black text-white"
        >
          Third Text Section
        </div>
      </div>
    </div>
  );
}
