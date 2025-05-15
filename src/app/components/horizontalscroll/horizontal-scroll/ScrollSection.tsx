"use client";

import { ScrollSectionProps } from "./types";
import { motion } from "framer-motion";

export default function ScrollSection({ backgroundImage, mainText, bottomText, className }: ScrollSectionProps) {
  return (
    <div className="w-screen h-screen">
      <div
        className={`w-full h-full flex-shrink-0 p-10  flex items-center justify-center relative m-auto ${className}`}
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex flex-col md:flex-row w-full h-full z-[2] pt-14 px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="main-text font-exposure text-[clamp(1.5rem,4vw,2.8rem)] text-white font-bold max-w-full md:max-w-[65vw] text-left"
          >
            {mainText}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="bottom-text absolute bottom-8 font-extrabold text-[clamp(1.5rem,4vw,2.8rem)] font-exposure md:max-w-[85vw] text-white"
          >
            {bottomText}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 