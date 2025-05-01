'use client';

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryImageSection from "../components/GalleryImageSection";

gsap.registerPlugin(ScrollTrigger);

const imageSets = [
    [
        '/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp',
        '/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp',
        '/images/Jonathan_Damslund_Atmosphere_Saturday0039-scaled.webp'
    ],
    [
        '/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp',
        '/images/Jonathan_Damslund_Atmosphere_Saturday0039-scaled.webp',
        '/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp'
    ],
    [
        '/images/Jonathan_Damslund_Atmosphere_Saturday0039-scaled.webp',
        '/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp',
        '/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp'
    ],
    [
        '/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp',
        '/images/Jonathan_Damslund_Atmosphere_Saturday0039-scaled.webp',
        '/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp'
    ]
];

export default function ParallaxScroll() {
    const container = useRef<HTMLDivElement>(null);
    const title1 = useRef<HTMLHeadingElement>(null);
    const lettersRef = useRef<HTMLSpanElement[]>([]);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            lettersRef.current.forEach((letter, i) => {
                tl.to(letter, {
                    top: Math.floor(Math.random() * -75) - 25,
                }, 0)
            })
        });

        return () => context.revert();
    }, []);

    return (
        <div ref={container} className="min-h-screen bg-gradient-to-br from-gray-800 via-white to-gray-800">
            <div className="top-0 z-10">
                <div className="ml-[10vw] py-4">
                    <h1 ref={title1} className="m-0 text-[5vw] leading-[5vw] uppercase font-exposure">Gallery</h1>
                    <h1 className="m-0 text-[5vw] leading-[5vw] uppercase font-exposure">Scroll</h1>
                </div>
            </div>

            <div className="mt-[10vh]">
                {imageSets.map((images, index) => (
                    <GalleryImageSection
                        key={`section_${index}`}
                        images={images}
                        containerRef={container}
                        titleRef={title1}
                        lettersRef={lettersRef}
                        sectionIndex={index}
                    />
                ))}
            </div>
        </div>
    );
}
