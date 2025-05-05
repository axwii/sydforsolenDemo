"use client";

import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

// Sample image data - replace with your actual images
const row1Images = [
  { id: 1, src: "/images/@karlstenstroem_Syd-For-Solen_Stemningsfotos-1-scaled.webp", alt: "Image 1" },
  { id: 2, src: "/images/2_Slowdive_Mathias-Bak-Larsen©-12-scaled-e1697733326397.webp", alt: "Image 2" },
  { id: 3, src: "/images/1640-Syd-for-Solen-2023-Photo-Morten-Rygaard-All-Copyrights_MRP6708-1-scaled.webp", alt: "Image 3" },
  { id: 4, src: "/images/Jonathan_Damslund_Atmosphere_Saturday0039-scaled.webp", alt: "Image 4" },
  { id: 5, src: "/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp", alt: "Image 5" },
];

const row2Images = [
  { id: 6, src: "/images/Jonathan_Damslund_Atmosphere_Saturday0039-scaled.webp", alt: "Image 6" },
  { id: 7, src: "/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp", alt: "Image 7" },
  { id: 8, src: "/images/@karlstenstroem_Syd-For-Solen_Stemningsfotos-1-scaled.webp", alt: "Image 8" },
  { id: 9, src: "/images/2_Slowdive_Mathias-Bak-Larsen©-12-scaled-e1697733326397.webp", alt: "Image 9" },
  { id: 10, src: "/images/1640-Syd-for-Solen-2023-Photo-Morten-Rygaard-All-Copyrights_MRP6708-1-scaled.webp", alt: "Image 10" },
];

const row3Images = [
  { id: 11, src: "/images/1640-Syd-for-Solen-2023-Photo-Morten-Rygaard-All-Copyrights_MRP6708-1-scaled.webp", alt: "Image 11" },
  { id: 12, src: "/images/@karlstenstroem_Syd-For-Solen_Stemningsfotos-1-scaled.webp", alt: "Image 12" },
  { id: 13, src: "/images/Jonathan_Damslund_Atmosphere_Saturday0039-scaled.webp", alt: "Image 13" },
  { id: 14, src: "/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp", alt: "Image 14" },
  { id: 15, src: "/images/2_Slowdive_Mathias-Bak-Larsen©-12-scaled-e1697733326397.webp", alt: "Image 15" },
];

export default function HorizontalScroll() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const filmRollRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const textSections = useRef<HTMLDivElement[]>([]);
  const [typedText, setTypedText] = useState("");
  const [showOverlayImage, setShowOverlayImage] = useState(false);
  const [typewriterStarted, setTypewriterStarted] = useState(false);

  // --- State for second section ---
  const [typedText2a, setTypedText2a] = useState("");
  const [typedText2b, setTypedText2b] = useState("");
  const [showOverlayImages2, setShowOverlayImages2] = useState(false);

  // --- Texts and images for second section ---
  const typewriter2TextA = "Syd For Solen er København, når den er allermest levende. En festival midt i byen, under trækroner og over forventninger.";
  const typewriter2TextB = "Det bliver stort, det bliver smukt, og vi glæder os til at slutte sommeren med dig.";
  const overlayImages2 = [row2Images[1].src, row2Images[2].src, row2Images[3].src];

  const typewriterFullText = "Velkommen til \n Syd For Solen";
  const typewriterImage = row1Images[0].src;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const filmRollSection = filmRollRef.current;
    const horizontalSection = horizontalRef.current;
    const mainContainer = mainContainerRef.current;

    if (!filmRollSection || !horizontalSection || !mainContainer) return;

    // Calculate the scale needed to make one column fill the screen height
    const targetScale = window.innerHeight / (window.innerHeight / 3);

    // --- Main timeline ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer,
        start: "top top",
        end: () => "+=5000",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // --- REMOVE any fade-in for the first text section here ---
    // (No .to(textSections.current[0], { opacity: 1 }) call)

    tl.to(textSections.current[3], {
      opacity: 1,
    })
      .to(
        horizontalSection,
        {
          opacity: 1,
          onStart: () => {
            setTypewriterStarted(true);
          },
        },
        "<"
      )
      // ... existing code ...

      // --- PAUSE for first typewriter effect ---
      .addPause()
      // --- Second text section fade in and typewriter ---
      .to(
        textSections.current[1],
        {
          opacity: 1,
          onStart: () => {
            // Instantly set text and show images for second section
            setTypedText2a(typewriter2TextA);
            setTypedText2b(typewriter2TextB);
            setShowOverlayImages2(true);
          },
        },
        "<"
      )
      // --- Horizontal scroll for all three sections ---
      .to(horizontalSection, {
        x: () => -(horizontalSection.scrollWidth - window.innerWidth),
        duration: 2,
        ease: "none",
      });
    // ... existing code ...
    // --- Text animations (unchanged) ---
    textSections.current.forEach((section) => {
      const lines = section.querySelectorAll("[data-text]");
      lines.forEach((line, index) => {
        const text = new SplitType(line, { types: "chars" });
        gsap.set(text.chars, { opacity: 0, y: 20 });
        gsap.to(text.chars, {
          scrollTrigger: {
            trigger: section,
            containerAnimation: tl,
            start: "left center",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.03,
          stagger: 0.02,
          delay: 0.3 + index * 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // --- First typewriter effect ---
  useEffect(() => {
    if (!typewriterStarted) return;
    let i = 0;
    setTypedText("");
    setShowOverlayImage(false);
    function typeNextChar() {
      if (i <= typewriterFullText.length) {
        setTypedText(typewriterFullText.slice(0, i));
        i++;
        setTimeout(typeNextChar, 40);
      } else {
        setTimeout(() => {
          setShowOverlayImage(true);
          setTimeout(() => {
            // Resume timeline after image fade-in
            const triggers = ScrollTrigger.getAll();
            const mainTl = triggers.find((t) => t.vars && t.vars.pin);
            if (mainTl && mainTl.animation) {
              mainTl.animation.play();
            }
          }, 800);
        }, 500);
      }
    }
    typeNextChar();
  }, [typewriterStarted]);

  return (
    <div ref={mainContainerRef} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Film roll section */}
      <div ref={filmRollRef} className="absolute top-0 left-0 h-full w-full z-10 bg-black">
        <div className="gap-4 grid grid-rows-3">
          <Marquee speed={10} direction="right" className="h-full flex items-center">
            <div className="flex gap-4 pr-4">
              {row1Images.map((img) => (
                <img key={`row1-${img.id}`} src={img.src} alt={img.alt} className="object-cover h-[33vh] w-auto" style={{ aspectRatio: "3/2" }} />
              ))}
            </div>
          </Marquee>
          <Marquee speed={10} direction="left" className="h-full flex items-center">
            <div className="flex gap-4 pr-4">
              {row2Images.map((img) => (
                <img key={`row2-${img.id}`} src={img.src} alt={img.alt} className="object-cover h-[33vh] w-auto" style={{ aspectRatio: "3/2" }} />
              ))}
            </div>
          </Marquee>
          <Marquee speed={10} direction="right" className="h-full flex items-center">
            <div className="flex gap-4 pr-4">
              {row3Images.map((img) => (
                <img key={`row3-${img.id}`} src={img.src} alt={img.alt} className="object-cover h-[33vh] w-auto" style={{ aspectRatio: "3/2" }} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* Horizontal scroll section */}
      <div
        ref={horizontalRef}
        className="absolute top-0 left-0 h-full flex items-center z-20 opacity-0"
        style={{
          width: "max-content",
          minWidth: "100vw",
        }}
      >
        {/* FIRST TEXT SECTION */}
        <div
          ref={(el) => {
            if (el) {
              textSections.current[0] = el;
            }
          }}
          className="w-screen h-screen flex flex-col px-[60px] text-center items-center justify-center relative bg-[#F2E47F]"
        >
          <div className="font-exposure font-extrabold overflow-hidden whitespace-pre-line text-[120px] relative z-[1] text-[#CC4624]" data-text="line1">
            {typedText}
          </div>
          {showOverlayImage && (
            <img
              src={typewriterImage}
              alt="Overlay"
              className="absolute top-1/2 left-1/2 w-[400px] h-auto opacity-100 transition-opacity duration-800 z-[2] pointer-events-none"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </div>

        {/* SECOND TEXT SECTION */}
        <div
          ref={(el) => {
            if (el) {
              textSections.current[1] = el;
            }
          }}
          className="w-screen h-screen flex flex-col items-center justify-center relative bg-[#E70000] transition-opacity py-8 md:py-16"
        >
          {/* Responsive text and images container */}
          <div className="relative flex flex-col md:flex-row w-full h-full items-center justify-center z-[2] px-4 md:px-16 gap-8 md:gap-0">
            {/* Texts */}
            <div className="flex-1 flex flex-col justify-between h-full w-full md:w-auto">
              {/* Top left text */}
              <div className="font-exposure text-[clamp(1.5rem,4vw,2.8rem)] text-[#FFCDE8] font-bold max-w-full md:max-w-[65vw] text-left mb-6 md:mb-0 !shadow-none">{typedText2a}</div>
              {/* Bottom left text */}
              <div className="font-exposure text-[clamp(1.5rem,4vw,2.8rem)] text-[#FFCDE8] font-bold max-w-full md:max-w-[40vw] text-left mt-6 md:mt-0 !shadow-none">{typedText2b}</div>
            </div>
            {/* Images */}
            {showOverlayImages2 && (
              <div className="flex flex-row md:flex-col items-center justify-center gap-4 md:gap-8 flex-shrink-0">
                {/* Bottom left (on mobile: left) */}
                <img src={overlayImages2[0]} alt="Overlay0" className="w-[clamp(120px,30vw,240px)] max-w-[90vw] h-auto shadow-2xl opacity-100 transition-opacity duration-800 z-[3] pointer-events-none rotate-[-8deg]" />
                {/* Center diagonal */}
                <img src={overlayImages2[1]} alt="Overlay1" className="w-[clamp(120px,32vw,260px)] max-w-[90vw] h-auto shadow-2xl opacity-100 transition-opacity duration-800 z-[4] pointer-events-none rotate-[6deg] -translate-y-2 md:-translate-y-8" />
                {/* Top right (on mobile: right) */}
                <img src={overlayImages2[2]} alt="Overlay2" className="w-[clamp(120px,28vw,220px)] max-w-[90vw] h-auto shadow-2xl opacity-100 transition-opacity duration-800 z-[2] pointer-events-none rotate-[12deg]" />
              </div>
            )}
          </div>
        </div>

        {/* THIRD TEXT SECTION */}
        <div
          ref={(el) => {
            if (el) {
              textSections.current[2] = el;
            }
          }}
          className="w-screen h-screen flex flex-col items-center justify-center relative bg-[#FFFAE0] py-8 md:py-16"
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10 z-[1] pointer-events-none" />

          {/* Responsive text container */}
          <div className="relative flex flex-col md:flex-row w-full h-full items-center justify-center z-[2] px-4 md:px-16 gap-8 md:gap-0">
            <div className="flex-1 flex flex-col justify-between h-full w-full md:w-auto">
              {/* Top left text */}
              <div className="font-exposure text-[clamp(1.5rem,4vw,2.8rem)] text-[#0074C9] font-bold max-w-full md:max-w-[65vw] text-left mb-6 md:mb-0">Syd For Solen er mere end musik. Det er et fællesskab – og vores partnere er en uundværlig del af den fortælling.</div>
              {/* Bottom left text (was right, now left) */}
              <div className="font-exposure text-[clamp(1.5rem,4vw,2.8rem)] text-[#0074C9] font-bold max-w-full md:max-w-[40vw] text-left mt-6 md:mt-0">Det er ikke bare et logo på et banner. Det er en hånd i ryggen. Et fælles løfte om at gøre noget smukt for København.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
