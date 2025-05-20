"use client";

import { memo } from "react";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/app/components/ui/accordion";
import { Tables } from '@/types/supabase';

type LineupData = Tables<'festival_lineups'>[];

interface EarlierYearAccordionProps {
  year: string;
  lineupData: LineupData;
}

// Separate component for artist list to prevent unnecessary re-renders
const ArtistList = memo(({ day, artists }: { day: string; artists: string[] }) => (
  <div className="space-y-4">
    <h6 className="text-xl font-bold mb-4 font-exposure">{day}</h6>
    <ul className="space-y-2 font-bold font-exposure">
      {artists.map((artist) => (
        <li key={`${day}-${artist}`}>{artist}</li>
      ))}
    </ul>
  </div>
));

ArtistList.displayName = "ArtistList";

// Main component with memo
export const EarlierYearAccordion = memo(function EarlierYearAccordion({ year, lineupData }: EarlierYearAccordionProps) {
  return (
    <AccordionItem value={year} className="bg-[#D9D9D9] px-6">
      <AccordionTrigger className="font-exposure font-bold text-[1.5rem]">SYD FOR SOLEN {year}</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {lineupData.map((day) => (
            <ArtistList 
              key={day.id}
              day={day.day_display}
              artists={day.artists}
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
});
