import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GalleryImageSectionProps {
    images: string[];
    containerRef: React.RefObject<HTMLDivElement | null>;
    titleRef: React.RefObject<HTMLHeadingElement | null>;
    lettersRef: React.RefObject<HTMLSpanElement[] | null>;
    sectionIndex: number;
}

export default function GalleryImageSection({ 
    images,
    sectionIndex 
}: GalleryImageSectionProps) {
    const imagesRef = useRef<HTMLDivElement[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            tl.to(imagesRef.current[1], {y: -150}, 0)
              .to(imagesRef.current[2], {y: -255}, 0);
        });

        return () => context.revert();
    }, []);

    return (
        <div ref={sectionRef} className="flex w-full justify-center relative min-h-screen">
            {images.map((image, i) => (
                <div 
                    key={`section_${sectionIndex}_image_${i}`} 
                    ref={(el) => {
                        if (el) imagesRef.current[i] = el;
                    }}
                    className={`absolute ${
                        i === 0 ? 'h-[35vh] w-[30vh] md:h-[45vh] md:w-[40vh] lg:h-[60vh] lg:w-[50vh] z-[1]' :
                        i === 1 ? 'left-[65vw] top-[10vh] md:left-[58vw] md:top-[15vh] lg:left-[60vw] lg:top-[15vh] h-[20vh] w-[15vh] md:h-[30vh] md:w-[25vh] lg:h-[40vh] lg:w-[30vh] z-[2]' :
                        'left-[10vw] top-[30vh] md:left-[25vw] md:top-[37vh] lg:left-[27.5vw] lg:top-[40vh] h-[19vh] w-[15vh] md:h-[20vh] md:w-[15vh] lg:h-[25vh] lg:w-[20vh] z-[3]'
                    }`}
                >
                    <Image 
                        src={image}
                        alt="image"
                        fill
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
} 