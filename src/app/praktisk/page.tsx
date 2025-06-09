"use client";

import { useState, useEffect } from "react";
import FaqCategory from "../components/ui/FaqCategory";
import FilterButtons from "../components/ui/FilterButtons";
import PageTitle from "../components/ui/PageTitle";
import { FaqCategoryWithQuestions } from "@/types/contentful";
import ChatBot from "../components/ui/ChatBot";

export default function PraktiskPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [categories, setCategories] = useState<FaqCategoryWithQuestions[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('/api/faqs');
        if (!response.ok) throw new Error('Failed to fetch FAQs');
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError('Failed to load FAQ categories');
        console.error('Error fetching categories:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter);
  };

  const filteredData = activeFilter ? categories.filter((category) => category.id === activeFilter) : categories;

  if (isLoading) {
    return <div className="container mx-auto px-4 py-10">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-10 text-red-500">{error}</div>;
  }

  return (
    <div>
      <PageTitle title="Praktisk" baseFontSize={150} />
      <ChatBot />
      <div className="container mx-auto px-4 md:py-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:hidden mb-8">
            <FilterButtons categories={categories} activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          </div>
          <div className="hidden md:block md:w-1/4 md:mr-8">
            <FilterButtons categories={categories} activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          </div>
          <div className="md:w-3/4">
            {filteredData
              .filter((category) => category.id !== "praktisk-frivillig")
              .map((category) => (
                <FaqCategory key={category.id} category={category} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
