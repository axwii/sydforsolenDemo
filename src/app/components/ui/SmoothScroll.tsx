"use client";

import React from "react";

interface SmoothScrollProps {
  href: string;
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return <span onClick={handleClick}>{children}</span>;
};

export default SmoothScroll;
