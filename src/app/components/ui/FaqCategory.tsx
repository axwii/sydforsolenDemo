"use client";

import FaqItem from "./FaqItem";
import { FaqCategoryWithQuestions } from "@/types/contentful";


interface FaqCategoryProps {
  category: FaqCategoryWithQuestions;
}

export default function FaqCategory({ category }: FaqCategoryProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 font-exposure">{category.title}</h2>
      <div>
        {category.questions.map((item) => (
          <FaqItem
            key={item.id}
            item={{
              id: item.id,
              question: item.question,
              answer: item.answer,
              categories: item.categories,
              order: item.order,
            }}
          />
        ))}
      </div>
    </div>
  );
}
