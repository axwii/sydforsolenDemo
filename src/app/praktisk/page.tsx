'use client';

import { useState } from 'react';
import { faqData } from '../../lib/faqData';
import FaqCategory from '../components/ui/FaqCategory';
import FilterButtons from '../components/FilterButtons';
import PageTitle from '../components/ui/PageTitle';

export default function PraktiskPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter);
  };

  const filteredData = activeFilter
    ? faqData.filter((category) => category.id === activeFilter)
    : faqData;

  return (
    <div>
      <PageTitle title="Praktisk Information" />
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* <h1 className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 font-exposure text-center md:text-left">
          PRAKTISK INFORMATION
          </h1> */}
        <div className="flex flex-col md:flex-row">
          {/* Filter Buttons for Mobile - Placed on top */} 
          <div className="w-full md:hidden mb-8"> {/* MODIFIED: Added w-full */}
            <FilterButtons categories={faqData} activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          </div>
          {/* Filter Buttons for Desktop - Placed on the side */} 
          <div className="hidden md:block md:w-1/4 md:mr-8">
            <FilterButtons categories={faqData} activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          </div>
          <div className="md:w-3/4">
            {filteredData.map((category) => (
              <FaqCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}