'use client';

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryImageSection from "../components/GalleryImageSection";
import PageTitle from "../components/ui/PageTitle"; // Added import

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
        <section className="min-h-screen bg-gradient-to-br from-gray-800 via-white to-gray-800">
            <PageTitle title="Galleri" baseFontSize={170} />
            <div className="min-h-screen py-20">

            <div>
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
        </section>
    );
}
