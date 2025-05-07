"use client";

import type { DayData, Artist } from '../../lib/musicData'; // Updated import path
import ArtistCarousel from './ArtistCarousel';

interface DayProgramSectionProps {
  dayData: DayData;
  onArtistClick: (artist: Artist) => void;
}

export default function DayProgramSection({ dayData, onArtistClick }: DayProgramSectionProps): React.JSX.Element {
  return (
    <section className={`${dayData.bgColor} ${dayData.textColor} ${dayData.sectionClass} py-12 md:py-16 px-4 md:px-8`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-exposure">
            {dayData.day}
          </h2>
          <span className={`text-3xl ${dayData.textColor}`}>→</span>
        </div>
        <ArtistCarousel dayData={dayData} onArtistClick={onArtistClick} />
      </div>
    </section>
  );
}
