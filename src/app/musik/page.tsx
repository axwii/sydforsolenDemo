"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArtistPopup from "../components/musik/artist/ArtistPopup";
import DayProgramSection from "../components/musik/DayProgramSection";
import type { Artist, DayData } from "../../lib/musicData";
import { musicProgram as initialMusicProgram } from "../../lib/musicData";
import PageTitle from "../components/ui/PageTitle";

export default function Music() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [programData, setProgramData] = useState<DayData[]>([]); // State for program data

  useEffect(() => {
    // Simulate fetching data from a database
    // In a real application, you would fetch data here:
    // const fetchData = async () => {
    //   const response = await fetch('/api/music-program'); // Example API endpoint
    //   const data = await response.json();
    //   setProgramData(data);
    // };
    // fetchData();

    // For now, using the imported placeholder data
    setProgramData(initialMusicProgram);
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
      {programData.map((dayData: DayData) => (
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
