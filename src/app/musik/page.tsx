"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DayProgramSection from "../components/musik/DayProgramSection";
import { getDaysWithArtists } from "../../lib/lib";
import { Tables } from "@/types/supabase"; // Import Supabase table types

// Define types based on your Supabase schema
type Artist = Tables<"artists">;
type DayData = Tables<"music_days"> & { artists: Artist[] };

export default function Music() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [daysWithArtists, setDaysWithArtists] = useState<DayData[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, error } = await getDaysWithArtists();
        if (error) {
          console.error("Error fetching days with artists:", error);
          return;
        }
        if (data) {
          setDaysWithArtists(data as DayData[]);
        }
      } catch (err) {
        console.error("Client-side error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && daysWithArtists.length > 0) {
      const dayId = searchParams.get('day');
      if (dayId) {
        const dayIndex = daysWithArtists.findIndex(day => day.id === parseInt(dayId));
        if (dayIndex !== -1) {
          const element = document.getElementById(`day-${dayId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  }, [loading, daysWithArtists, searchParams]);

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
    router.push(`/musik/${artist.slug}`);
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
        <div key={dayData.id} id={`day-${dayData.id}`}>
          <DayProgramSection dayData={dayData} onArtistClick={handleArtistClick} />
        </div>
      ))}
      <div className="w-full h-[66px] bg-[#D9D9D9] border border-black border-b-0 flex items-center justify-center">
        <a href="/tidligereaar" className="font-['Helvetica_Neue'] font-bold text-center">
          SE TIDLIGERE ÅRS PROGRAM
        </a>
      </div>
    </div>
  );
}
