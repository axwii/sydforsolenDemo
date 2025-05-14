"use client";

import Marquee from "react-fast-marquee";
import { ImageData } from "./types";

interface FilmRollProps {
  row1Images: ImageData[];
  row2Images: ImageData[];
  row3Images: ImageData[];
}

export default function FilmRoll({ row1Images, row2Images, row3Images }: FilmRollProps) {
  return (
    <div className="absolute top-0 pt-4 left-0 h-full w-full z-10 bg-black">
      <div className="gap-4 grid grid-rows-3">
        <Marquee speed={20} direction="right" className="h-full flex items-center">
          <div className="flex gap-4 pr-4">
            {row1Images.map((img) => (
              <img key={`row1-${img.id}`} src={img.src} alt={img.alt} className="object-cover h-[33vh] w-auto" style={{ aspectRatio: "3/2" }} />
            ))}
          </div>
        </Marquee>
        <Marquee speed={20} direction="left" className="h-full flex items-center">
          <div className="flex gap-4 pr-4">
            {row2Images.map((img) => (
              <img key={`row2-${img.id}`} src={img.src} alt={img.alt} className="object-cover h-[33vh] w-auto" style={{ aspectRatio: "3/2" }} />
            ))}
          </div>
        </Marquee>
        <Marquee speed={20} direction="right" className="h-full flex items-center">
          <div className="flex gap-4 pr-4">
            {row3Images.map((img) => (
              <img key={`row3-${img.id}`} src={img.src} alt={img.alt} className="object-cover h-[33vh] w-auto" style={{ aspectRatio: "3/2" }} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
} 