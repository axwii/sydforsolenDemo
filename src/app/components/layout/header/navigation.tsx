"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // Adjust this value based on where your navigation initially appears
      const threshold = window.innerHeight - 50; // 50px is the height of the nav
      setIsSticky(latest >= threshold);
    });
  }, [scrollY]);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Controls delay between each item
        delayChildren: 0.3, // Initial delay before starting
      },
    },
  };

  const item = {
    hidden: { y: "100%" },
    show: { y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.nav variants={container} initial="hidden" animate="show" className={`${isSticky ? "fixed top-0" : "absolute bottom-0"} left-0 w-full h-[50px] flex rounded-t-sm overflow-hidden z-50`}>
      {["MUSIK", "PARTNERE", "FRIVILLIG", "GALLERI", "PRAKTISK", "KØB BILLETTER"].map((text, index) => (
        <Link href={text === "KØB BILLETTER" ? "https://www.billetlugen.dk/campaign/sydforsolen/?affiliate=s0l" : `/${text.toLowerCase().replace(" ", "-")}`} key={index} className="flex-1">
          <motion.div variants={item} className="group relative h-full flex items-center justify-center border-l border-black/10 first:border-l-0 font-exposure font-extrabold overflow-hidden">
            {/* Base background */}
            <div className={`absolute inset-0 ${index === 5 ? "bg-gradient-to-br from-[#2D2D2D] to-[#1D1D1D]" : "bg-gradient-to-br from-[#E5E5E5] to-[#D9D9D9]"}`} />
            {/* Hover background that slides in */}
            <div className={`absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out ${index === 5 ? "bg-gradient-to-br from-[#1D1D1D] to-[#0D0D0D]" : "bg-gradient-to-br from-[#D5D5D5] to-[#C9C9C9]"}`} />
            <span className={`relative z-10 ${index === 5 ? "text-white" : "text-black"}`}>{text}</span>
          </motion.div>
        </Link>
      ))}
    </motion.nav>
  );
};

export default Navigation;
