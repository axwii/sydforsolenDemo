"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { Tables } from "@/types/supabase";

type FaqQuestion = Tables<"faq_questions">;

interface FaqItemProps {
  item: FaqQuestion;
}

export default function FaqItem({ item }: FaqItemProps): React.JSX.Element {
  return (
    <details className="group border-b border-gray-300 py-4">
      <summary className="flex justify-between items-center w-full text-left cursor-pointer list-none">
        <h3 className="text-lg font-medium">{item.question}</h3>
        <div className="ml-2">
          <ChevronDown className="block group-open:hidden" size={20} />
          <ChevronUp className="hidden group-open:block" size={20} />
        </div>
      </summary>
      <div className="mt-2 text-black">
        <p className="text-[1rem] font-helvetica-normal">{item.answer}</p>
      </div>
    </details>
  );
}
