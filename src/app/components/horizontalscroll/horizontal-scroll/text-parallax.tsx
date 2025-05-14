'use client'
import { useScroll, useTransform, motion } from 'framer-motion';

import Image from 'next/image';
import { useRef } from 'react';

export default function TextParallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  return (
    <main className="overflow-hidden">
      <div className='h-[100vh]'/>
      <div ref={container}>
        <Slide src="/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp" direction={'left'} left={"-40%"} progress={scrollYProgress}/>
        <Slide src="/images/1640-Syd-for-Solen-2023-Photo-Morten-Rygaard-All-Copyrights_MRP6708-1-scaled.webp" direction={'right'} left={"-25%"} progress={scrollYProgress}/>
        <Slide src="/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp" direction={'left'}  left={"-75%"} progress={scrollYProgress}/>
      </div>
      <div className='h-[100vh]' />
    </main>
  );
}

const Slide = (props: { src: string; direction: string; left: string; progress: any }) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction]);
  
  // Define different images for each line
  const images = [
    ["/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp", "/images/1640-Syd-for-Solen-2023-Photo-Morten-Rygaard-All-Copyrights_MRP6708-1-scaled.webp", "/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp"],
    ["/images/1640-Syd-for-Solen-2023-Photo-Morten-Rygaard-All-Copyrights_MRP6708-1-scaled.webp", "/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp", "/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp"],
    ["/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp", "/images/JoakimZuger_Sydforsolen2024_Loerdag-4-2048x1365.webp", "/images/1640-Syd-for-Solen-2023-Photo-Morten-Rygaard-All-Copyrights_MRP6708-1-scaled.webp"]
  ];

  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase srcs={images[0]}/>
      <Phrase srcs={images[1]}/>
      <Phrase srcs={images[2]}/>
    </motion.div>
  )
}

const Phrase = ({ srcs }: { srcs: string[] }) => {
  return (
    <div className={" flex items-center"}>
      {srcs.map((src, index) => (
        <span key={index} className="relative h-[15vw] m-2 aspect-[4/2] overflow-hidden">
          <Image style={{objectFit: "cover"}} src={src} alt={`image ${index + 1}`} fill/>
        </span>
      ))}
    </div>
  )
}