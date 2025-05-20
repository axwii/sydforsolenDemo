import Image from 'next/image';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { row1Images } from './data';

interface ZoomParallaxProps {
    progress: number;
}

export default function ZoomParallax({ progress }: ZoomParallaxProps) {
    const container = useRef(null);
    const progressMotion = useMotionValue(progress);

    useEffect(() => {
        progressMotion.set(progress);
    }, [progress, progressMotion]);

    const scale4 = useTransform(progressMotion, [0, 1], [1, 4]);
    const scale5 = useTransform(progressMotion, [0, 1], [1, 5]);
    const scale6 = useTransform(progressMotion, [0, 1], [1, 6]);
    const scale8 = useTransform(progressMotion, [0, 1], [1, 8]);
    const scale9 = useTransform(progressMotion, [0, 1], [1, 9]);

    const pictures = [
        {
            src: row1Images[0].src,
            scale: scale4
        },
        {
            src: row1Images[1].src,
            scale: scale5
        },
        {
            src: row1Images[2].src,
            scale: scale6
        },
        {
            src: row1Images[3].src,
            scale: scale5
        },
        {
            src: row1Images[4].src,
            scale: scale6
        },
        {
            src: row1Images[0].src,
            scale: scale8
        },
        {
            src: row1Images[1].src,
            scale: scale9
        }
    ]

    return (
        <div ref={container} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen overflow-hidden">
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className="absolute top-0 w-full h-full flex items-center justify-center">
                            <div className={`relative ${index === 1 ? 'w-[35vw] h-[30vh] -top-[30vh] left-[5vw]' : 
                                           index === 2 ? 'w-[20vw] h-[45vh] -top-[10vh] -left-[25vw]' :
                                           index === 3 ? 'w-[25vw] h-[25vh] left-[27.5vw]' :
                                           index === 4 ? 'w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]' :
                                           index === 5 ? 'w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]' :
                                           index === 6 ? 'w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]' :
                                           'w-[25vw] h-[25vh]'}`}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}