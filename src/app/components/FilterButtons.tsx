
'use client';

import type { FaqCategoryData } from '../../lib/faqData';

interface FilterButtonsProps {
  categories: FaqCategoryData[];
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

export default function FilterButtons({ categories, activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-col space-y-2 mb-8 md:mb-0 md:mr-8 md:w-1/4">
      <button
        onClick={() => onFilterChange(null)}
        className={`px-4 py-2 text-left rounded-md border ${activeFilter === null ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
      >
        VIS ALLE
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`px-4 py-2 text-left rounded-md border ${activeFilter === category.id ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}
