"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArtistPopup from "../components/musik/artist/ArtistPopup";
import DayProgramSection from "../components/musik/DayProgramSection";
import type { Artist, DayData } from "../../lib/musicData";
// import { musicProgram as initialMusicProgram } from "../../lib/musicData"; // Removed placeholder
import { getDaysWithArtists } from "../../lib/lib"; // Added import for Supabase function
import PageTitle from "../components/ui/PageTitle";

export default function Music() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [programData, setProgramData] = useState<DayData[]>([]); // State for program data
  const [isLoading, setIsLoading] = useState(true); // Optional: for loading state
  const [error, setError] = useState<string | null>(null); // Optional: for error state

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true); // Initial state is true, so this is redundant here
      setError(null); // Reset error state before a new fetch attempt
      try {
        const { data: daysFromDb, error: dbError } = await getDaysWithArtists();

        if (dbError) {
          console.error("Error fetching music program:", dbError);
          setError("Failed to load music program. Please try again later.");
          // programData will remain as its initial empty array or previous state.
          return; // Exit if there's a database error, similar to praktisk/page.tsx
        }

        // If daysFromDb is null (and no dbError), this block is skipped.
        // programData remains as its initial empty array, which is fine.
        if (daysFromDb) {
          const transformedProgramData: DayData[] = daysFromDb.map((dbDay: any) => {
            // Ensure dbDay.artists is an array, default to empty if not
            const artistsArray = Array.isArray(dbDay.artists) ? dbDay.artists : [];
            return {
              day: dbDay.day || "Unknown Day",
              description: dbDay.description || "",
              bgColor: dbDay.bg_color || "bg-gray-200", // Default background
              textColor: dbDay.text_color || "text-black", // Default text color
              sectionClass: dbDay.section_class || undefined,
              artists: artistsArray.map((dbArtist: any) => ({
                id: String(dbArtist.id),
                name: dbArtist.name || "Unknown Artist",
                description: dbArtist.description || "", // Assuming this maps correctly or is placeholder
                image: dbArtist.image || "/images/placeholder.webp", // Default placeholder image
                // Populate required fields for Artist type from musicData.ts
                day: dbDay.day || "Unknown Day", // These fields might be for the Artist type definition
                bgColor: dbDay.bg_color || "bg-gray-200",
                textColor: dbDay.text_color || "text-black",
              })),
            };
          });
          setProgramData(transformedProgramData);
        }
        // No explicit 'else { setProgramData([]) }' to align with praktisk/page.tsx's pattern.
        // If daysFromDb is null/undefined and no error, programData remains as initialized (empty array).
      } catch (e: any) {
        // Catch unexpected errors (e.g., in transformation logic, not API errors)
        console.error("Unexpected error fetching music program:", e);
        setError("An unexpected error occurred.");
        // Optionally, clear programData here if it's safer:
        // setProgramData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const openPopup = (artist: Artist): void => {
    setSelectedArtist(artist);
  };

  const closePopup = (): void => {
    setSelectedArtist(null);
  };

  return (
    <div className="space-y-0 relative">
      <PageTitle title="Musik" baseFontSize={210} />
      {isLoading && <div className="text-center py-10">Loading music program...</div>}
      {error && <div className="text-center py-10 text-red-500">{error}</div>}
      {!isLoading && !error && programData.length === 0 && <div className="text-center py-10">No music program available at the moment.</div>}
      {!isLoading && !error && programData.map((dayData: DayData) => (
        <DayProgramSection key={dayData.day} dayData={dayData} onArtistClick={openPopup} />
      ))}
      {selectedArtist && <ArtistPopup artist={selectedArtist} onClose={closePopup} bgColor={programData.find((day) => day.artists.some((art) => art.id === selectedArtist.id))?.bgColor || "bg-gray-500"} textColor={programData.find((day) => day.artists.some((art) => art.id === selectedArtist.id))?.textColor || "text-white"} />}
      <div className="w-full h-[66px] bg-[#D9D9D9] border border-black border-b-0 flex items-center justify-center">
        <a href="/tidligereaar" className="font-['Helvetica_Neue'] font-bold text-center">
          SE TIDLIGERE ÅRS PROGRAM
        </a>
      </div>
    </div>
  );
}
