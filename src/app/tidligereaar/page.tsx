"use client";

import PageTitle from "@/app/components/ui/PageTitle";
import { Accordion } from "@/app/components/ui/accordion";
import { EarlierYearAccordion } from "@/app/components/ui/earlier-year-accordion";

export default function TidligereAar() {
  const lineup2024 = {
    thursday: {
      day: "Torsdag d. 8/8",
      artists: ["Fred again..", "Sampha", "Kenya Grace", "Charlotte Day Wilson", "JOY (Anonymous)", "AV AV AV", "Ilma", "Jersey", "Laura4evigt", "Bless You"],
    },
    friday: {
      day: "Fredag d. 9/8",
      artists: ["Jorja Smith", "Michael Kiwanuka", "André 3000: New Blue Sun LIVE", "eee gee", "Yussef Dayes", "Guldimund", "Mona Moroni", "Bette", "MRCY", "Dos Santos", "Helena Gao"],
    },
    saturday: {
      day: "Lørdag d. 10/8",
      artists: ["Jack White", "AIR", "Big Thief", "Viagra Boys", "The Kills", "Arc de Soleil", "Dina Ögon", "The Raveonettes", "NewDad", "Karoline Funder", "First Flush"],
    },
  };

  const lineup2023 = {
    thursday: {
      day: "Torsdag",
      artists: ["Bon Iver", "Unknown Mortal Orchestra", "Bonny Light Horseman", "Arooj Aftab", "Lowly", "Melody's Echo Chamber", "Bremer/McCoy"],
    },
    friday: {
      day: "Fredag",
      artists: ["Aphex Twin", "Peggy Gou", "Confidence Man", "Benny Sings", "Julie Pavon", "USSEL", "Svaneborg Kardyb", "August Høyen"],
    },
    saturday: {
      day: "Lørdag",
      artists: ["The War on Drugs", "Iggy Pop", "Warpaint", "The Walkmen", "Katinka Band", "Brimheim", "Gretel Hänlyn", "luksus"],
    },
  };

  const lineup2022 = {
    thursday: {
      day: "Torsdag",
      artists: ["Fred again..", "Sampha", "Kenya Grace", "Charlotte Day Wilson", "JOY (Anonymous)", "AV AV AV", "Ilma", "Jersey", "Laura4evigt", "Bless You"],
    },
    friday: {
      day: "Fredag",
      artists: ["Jorja Smith", "Michael Kiwanuka", "André 3000: New Blue Sun LIVE", "eee gee", "Yussef Dayes", "Guldimund", "Mona Moroni", "Bette", "MRCY", "Dos Santos", "Helena Gao"],
    },
    saturday: {
      day: "Lørdag",
      artists: ["Jack White", "AIR", "Big Thief", "Viagra Boys", "The Kills", "Arc de Soleil", "Dina Ögon", "The Raveonettes", "NewDad", "Karoline Funder", "First Flush"],
    },
  };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <PageTitle title="Tidligere År" />

        <div className="space-y-4 mt-8">
          <Accordion type="single" collapsible className="space-y-4">
            <EarlierYearAccordion year="2024" {...lineup2024} />
            <EarlierYearAccordion year="2023" {...lineup2023} />
            <EarlierYearAccordion year="2022" {...lineup2022} />
          </Accordion>
        </div>
      </div>
    </main>
  );
}
