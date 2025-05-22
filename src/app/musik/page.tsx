"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import DayProgramSection from "../components/musik/DayProgramSection";
import { getDaysWithArtists } from "../../lib/lib";
import { Tables } from "@/types/supabase"; // Import Supabase table types

// Define types based on your Supabase schema
type Artist = Tables<"artists">;
type DayData = Tables<"music_days"> & { artists: Artist[] };

export default function Music() {
  const router = useRouter(); // Initialize useRouter
  const [daysWithArtists, setDaysWithArtists] = useState<DayData[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null); // State for selected artist
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const { data, error } = await getDaysWithArtists();
        if (error) {
          console.error("Error fetching days with artists:", error);
          return;
        }
        if (data) {
          setDaysWithArtists(data as DayData[]); // Set fetched data
        }
      } catch (err) {
        console.error("Client-side error fetching data:", err);
        // Handle error silently or show a message
      } finally {
        setLoading(false); // Set loading to false once fetching is complete
      }
    };

    fetchData();
  }, []);

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
    // You can add logic here to display artist details, e.g., open a modal or navigate
    console.log("Selected artist:", artist.name);
    router.push(`/musik/${artist.slug}`); // Navigate to artist's slug page
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>Loading...</div> {/* Or a more sophisticated loader component */}
      </div>
    );
  }

  return (
    <div className="space-y-0 relative">
      {daysWithArtists.map((dayData) => (
        <DayProgramSection key={dayData.id} dayData={dayData} onArtistClick={handleArtistClick} />
      ))}
      <div className="w-full h-[66px] bg-[#D9D9D9] border border-black border-b-0 flex items-center justify-center">
        <a href="/tidligereaar" className="font-['Helvetica_Neue'] font-bold text-center">
          SE TIDLIGERE ÅRS PROGRAM
        </a>
      </div>
    </div>
  );
}
