"use client";

import React from "react";
import Image from "next/image";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative w-32 h-32 animate-pulse">
        <Image src="/images/sydforsolenlogo.svg" alt="Loading..." fill className="object-contain" priority />
      </div>
    </div>
  );
};

export default LoadingSpinner;
