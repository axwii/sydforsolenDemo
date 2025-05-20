'use client';

import { useState, useEffect } from 'react';
import { getCategoriesWithQuestions } from '@/lib/lib';
import FaqCategory from '../components/ui/FaqCategory';
import FilterButtons from '../components/ui/FilterButtons';
import PageTitle from '../components/ui/PageTitle';
import { Tables } from '@/types/supabase';

type FaqCategory = Tables<'faq_categories'> & {
  faq_questions: Tables<'faq_questions'>[];
};

export default function PraktiskPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [categories, setCategories] = useState<FaqCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await getCategoriesWithQuestions();
        if (error) return;
        if (data) setCategories(data);
      } catch (err) {
        // Handle error silently
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter);
  };

  const filteredData = activeFilter
    ? categories.filter((category) => category.id === activeFilter)
    : categories;

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <PageTitle title="Praktisk Information" />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:hidden mb-8">
            <FilterButtons categories={categories} activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          </div>
          <div className="hidden md:block md:w-1/4 md:mr-8">
            <FilterButtons categories={categories} activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          </div>
          <div className="md:w-3/4">
            {filteredData
            .filter(category => category.id !== "praktisk-frivillig")
            .map((category) => (
              <FaqCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}