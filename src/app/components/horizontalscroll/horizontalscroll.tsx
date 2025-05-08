"use client";

import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Sample image data
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const horizontalSection = horizontalRef.current;
    const mainContainer = mainContainerRef.current;
    if (!horizontalSection || !mainContainer) return;

    gsap.set(horizontalSection, { x: window.innerWidth });

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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

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
      <div ref={horizontalRef} className="absolute top-0 left-0 h-full z-20 flex">
        {/* First section */}
        <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center relative" style={{ backgroundImage: 'url("/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp")', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative flex flex-col md:flex-row w-full h-full pt-14 px-8 z-[2]">
            <div className="font-exposure font-extrabold text-[clamp(1.5rem,4vw,2.8rem)] text-white max-w-full md:max-w-[65vw]">Velkommen til Syd For Solen.</div>
            <div className="absolute bottom-8 font-extrabold right-8 text-[clamp(1.5rem,4vw,2.8rem)] font-exposure text-white">
              Vi elsker København. <br></br> Vi elsker musikken.
            </div>
          </div>
        </div>

        {/* Second section */}
        <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center relative" style={{ backgroundImage: 'url("/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp")', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative flex flex-col md:flex-row w-full h-full z-[2] pt-14 px-8">
            <div className="font-exposure text-[clamp(1.5rem,4vw,2.8rem)] text-white font-bold max-w-full md:max-w-[65vw] text-left">Syd For Solen er København, når den er allermest levende.</div>
            <div className="absolute bottom-8 md:max-w-[65vw] font-extrabold text-[clamp(1.5rem,4vw,2.8rem)] font-exposure text-white">
              Det bliver stort, det bliver smukt, <br></br> og vi glæder os til at slutte sommeren med dig.
            </div>
          </div>
        </div>

        {/* Third section */}
        <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center relative" style={{ backgroundImage: 'url("/images/1640-Syd-for-Solen-2023-Photo-Morten-Rygaard-All-Copyrights_MRP6708-1-scaled.webp")', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative flex flex-col md:flex-row w-full h-full z-[2] pt-14 px-8">
            <div className="font-exposure text-[clamp(1.5rem,4vw,2.8rem)] text-white font-bold max-w-full md:max-w-[65vw] text-left">Syd For Solen er mere end musik. Det er et fællesskab – og vores partnere er en uundværlig del af den fortælling.</div>
            <div className="absolute bottom-8 font-extrabold right-8 text-[clamp(1.5rem,4vw,2.8rem)] md:max-w-[65vw] font-exposure text-white">Det er ikke bare et logo på et banner. Det er en hånd i ryggen. Et fælles løfte om at gøre noget smukt for København.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
