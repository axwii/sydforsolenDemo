"use client";

import { useEffect, useState } from "react";
import PageTitle from "@/app/components/ui/PageTitle";
import { Accordion } from "@/app/components/ui/accordion";
import { EarlierYearAccordion } from "@/app/components/ui/earlier-year-accordion";
import { getFestivalLineupsByYear } from "@/lib/lib";
import { Tables } from '@/types/supabase';

type LineupData = {
  [key: string]: Tables<'festival_lineups'>[];
};

export default function TidligereAar() {
  const [lineups, setLineups] = useState<LineupData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLineups() {
      const years = [2024, 2023, 2022];
      const lineupData: LineupData = {};

      for (const year of years) {
        const response = await getFestivalLineupsByYear(year);
        if (response?.data) {
          lineupData[year] = response.data;
        }
      }

      setLineups(lineupData);
      setLoading(false);
    }

    fetchLineups();
  }, []);

  if (loading) {
    return (
      <main className="md:min-h-screen">
        <PageTitle title="Tidligere År" baseFontSize={100} />
        <div className="container mx-auto px-4 py-8">
          <div className="mt-8">Loading...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="md:min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <PageTitle title="Tidligere År" />

        <div className="space-y-4 mt-8">
          <Accordion type="single" collapsible className="space-y-4">
            {Object.entries(lineups).map(([year, lineupData]) => (
              <EarlierYearAccordion 
                key={year}
                year={year} 
                lineupData={lineupData}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}
