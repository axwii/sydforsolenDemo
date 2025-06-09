'use client';

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryImageSection from "../components/GalleryImageSection";
import PageTitle from "../components/ui/PageTitle";
import { useEffect, useState } from "react";
import { GalleriImageSet } from '@/types/contentful';
import { getGalleryData } from '../actions/gallery';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxScroll() {
    const container = useRef<HTMLDivElement>(null);
    const title1 = useRef<HTMLHeadingElement>(null);
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    const [galleriData, setGalleriData] = useState<GalleriImageSet[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getGalleryData();
                setGalleriData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load gallery data');
            }
        };
        loadData();
    }, []);

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

    if (error) {
        return (
            <section className="min-h-screen bg-gradient-to-br from-gray-800 via-white to-gray-800">
                <PageTitle title="Galleri" baseFontSize={170} />
                <div className="min-h-screen py-20 flex items-center justify-center">
                    <div className="text-red-500 text-center">
                        <h2 className="text-2xl font-bold mb-4">Error Loading Gallery</h2>
                        <p>{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-800 via-white to-gray-800">
            <PageTitle title="Galleri" baseFontSize={170} />
            <div className="min-h-screen py-20">
                <div>
                    {galleriData.map((imageSet, index) => (
                        <GalleryImageSection
                            key={`section_${index}`}
                            images={imageSet.images.map(img => img.image.startsWith('//') ? `https:${img.image}` : img.image)}
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
