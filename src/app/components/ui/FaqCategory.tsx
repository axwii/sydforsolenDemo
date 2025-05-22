"use client";

import { Tables } from "@/types/supabase";
import FaqItem from "./FaqItem";

type FaqCategory = Tables<"faq_categories"> & {
  faq_questions: Tables<"faq_questions">[];
};

interface FaqCategoryProps {
  category: FaqCategory;
}

export default function FaqCategory({ category }: FaqCategoryProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 font-exposure">{category.title}</h2>
      <div>
        {category.faq_questions.map((item) => (
          <FaqItem
            key={item.id}
            item={{
              id: item.id,
              question: item.question,
              answer: item.answer,
              category_id: item.category_id,
              created_at: item.created_at,
              updated_at: item.updated_at,
            }}
          />
        ))}
      </div>
    </div>
  );
}
