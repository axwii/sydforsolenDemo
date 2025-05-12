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
        <Link href={`/${text.toLowerCase().replace(" ", "-")}`} key={index} className="flex-1">
          <motion.div
            variants={item}
            className={`h-full flex items-center justify-center border-l border-black/10 first:border-l-0 font-exposure font-extrabold 
            ${index === 5 ? "bg-gradient-to-br from-[#2D2D2D] to-[#1D1D1D] text-white" : "bg-gradient-to-br from-[#E5E5E5] to-[#D9D9D9]"}
            hover:bg-opacity-90 transition-all duration-300 hover:shadow-inner`}
          >
            {text}
          </motion.div>
        </Link>
      ))}
    </motion.nav>
  );
};

export default Navigation;
