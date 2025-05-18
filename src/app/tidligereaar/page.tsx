"use client";

import PageTitle from "@/app/components/ui/PageTitle";
import { Accordion } from "@/app/components/ui/accordion";
import { EarlierYearAccordion } from "@/app/components/ui/earlier-year-accordion";
import { lineup2024, lineup2023, lineup2022 } from "@/app/tidligereaar/data/lineups";

export default function TidligereAar() {
  return (
    <main className="md:min-h-screen">
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
