"use client";

import ArtistCarousel from './artist/ArtistCarousel';
import { Tables } from '@/types/supabase'; // Import Supabase table types

// Define types based on your Supabase schema
type Artist = Tables<'artists'>;
type DayData = Tables<'music_days'> & { artists: Artist[] };

interface DayProgramSectionProps {
  dayData: DayData;
  onArtistClick: (artist: Artist) => void;
}

export default function DayProgramSection({ dayData, onArtistClick }: DayProgramSectionProps): React.JSX.Element {
  return (
    <section className={`${dayData.bg_color} ${dayData.text_color} ${dayData.section_class} py-12 md:py-16 px-4 md:px-8`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-exposure">
              {dayData.day}
            </h2>
            <p className="text-sm md:text-base mt-2 max-w-xl">{dayData.description}</p>
          </div>
          <span className={`text-3xl ${dayData.text_color}`}>→</span>
        </div>
        <ArtistCarousel dayData={dayData} onArtistClick={onArtistClick} />
      </div>
    </section>
  );
}
