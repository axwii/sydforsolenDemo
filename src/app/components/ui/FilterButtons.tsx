'use client';

import { Tables } from '@/types/supabase';

type FaqCategory = Tables<'faq_categories'> & {
  faq_questions: Tables<'faq_questions'>[];
};

interface FilterButtonsProps {
  categories: FaqCategory[];
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

export default function FilterButtons({ categories, activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    // MODIFIED: Added w-full to ensure the div takes the full width of its parent,
    // which helps overflow-x-auto to work correctly on mobile/resized desktop.
    <div className="w-full flex flex-row overflow-x-auto space-x-2 pb-1 md:flex-col md:space-x-0 md:space-y-2">
      <button
        onClick={() => onFilterChange(null)}
        // MODIFIED: Styles for horizontal scroll items on mobile, full-width on desktop
        className={`flex-shrink-0 whitespace-nowrap px-4 py-3 text-center rounded-md border md:w-full ${
          activeFilter === null
            ? 'bg-black text-white'
            : 'bg-gray-200 text-black hover:bg-gray-300'
        }`}
      >
        VIS ALLE
      </button>
      {categories
      .filter(category => category.id !== "praktisk-frivillig")
      .map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          // MODIFIED: Styles for horizontal scroll items on mobile, full-width on desktop
          className={`flex-shrink-0 whitespace-nowrap px-4 py-3 text-center rounded-md border md:w-full ${
            activeFilter === category.id
              ? 'bg-black text-white'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}
