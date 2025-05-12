
'use client';

import type { FaqCategoryData } from '../../lib/faqData';
import FaqItem from './FaqItem';

interface FaqCategoryProps {
  category: FaqCategoryData;
}

export default function FaqCategory({ category }: FaqCategoryProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 font-exposure">{category.title}</h2>
      <div>
        {category.questions.map((item) => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
