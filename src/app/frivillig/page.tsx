"use client";

import { useState, useEffect } from "react";
import FaqCategory from "../components/ui/FaqCategory";
import { FaqCategoryWithQuestions } from "@/types/contentful";
import Image from "next/image";
import PageTitle from "../components/ui/PageTitle";
import { InteractiveHoverButton, InteractiveHoverLink } from "../components/ui/interactive-hover-button";
import VolunteerSignupModal from "../components/VolunteerSignupModal";
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";

export default function FrivilligPage() {
  const [categories, setCategories] = useState<FaqCategoryWithQuestions[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/faqs");
        if (!response.ok) throw new Error("Failed to fetch FAQs");
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError("Failed to load FAQ categories");
        console.error("Error fetching categories:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-10 text-red-500">{error}</div>;
  }

  return (
    <div>
      <PageTitle title="Frivillig" baseFontSize={150} />
      {/* Section 1: Title, intro text, buttons - with container */}
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 font-exposure">Bliv frivillig på Syd For Solen</h1>
          <p className="mb-6 text-lg max-w-2xl ">Vi glæder os til - sammen med dig – at skabe en helt fantastisk festival i Valbyparken, for såvel publikum, artister, medarbejdere, og selvfølgelig også for dig som frivillig. Udover at være del af et stærkt fællesskab, får du en gratis billet til en af festival-dagene for hver vagt, du tager. Du får også en t-shirt, en drikkedunk og selvfølgelig forplejning under vagten.</p>
          <div className="flex-wrap flex gap-2">
            <InteractiveHoverButton variant="dark" onClick={() => setIsModalOpen(true)}>
              TILMELD DIG SOM FRIVILLIG
            </InteractiveHoverButton>
            <InteractiveHoverLink variant="dark" href="#faq-section">
              PRAKTISK OM AT VÆRE FRIVILLIG
            </InteractiveHoverLink>
          </div>
        </section>
      </div>
      {/* Section 2: Image - full width */}
      <section className="mb-12 w-full">
        {" "}
        {/* Ensured this section is full-width */}
        <div className="relative w-full h-96">
          <Image src="/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp" alt="Frivillige på Syd For Solen" layout="fill" objectFit="cover" />
        </div>
      </section>
      {/* Section 3: FAQ - with container */}
      <div className="container mx-auto px-4 py-8">
        <section id="faq-section">
          {categories
            .filter((category) => category.id === "praktisk-frivillig")
            .map((category) => (
              <FaqCategory key={category.id} category={category} />
            ))}
        </section>
      </div>

      <VolunteerSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
