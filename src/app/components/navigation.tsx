"use client";

import { motion } from "framer-motion";

const Navigation = () => {
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
    <motion.nav variants={container} initial="hidden" animate="show" className="absolute bottom-0 left-0 w-full h-[50px] flex rounded-t-sm overflow-hidden">
      {["MUSIK", "PARTNERE", "FRIVILLIG", "PRAKTISK", "KØB BILLETTER"].map((text, index) => (
        <motion.div
          variants={item}
          key={index}
          className={`flex-1 flex items-center justify-center border-l border-black/10 first:border-l-0 font-exposure font-extrabold 
          ${index === 4 ? "bg-gradient-to-br from-[#2D2D2D] to-[#1D1D1D] text-white" : "bg-gradient-to-br from-[#E5E5E5] to-[#D9D9D9]"}
          hover:bg-opacity-90 transition-all duration-300 hover:shadow-inner`}
        >
          {text}
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Navigation;
