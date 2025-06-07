"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { FaqQuestion } from "@/types/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface FaqItemProps {
  item: FaqQuestion;
}

export default function FaqItem({ item }: FaqItemProps): React.JSX.Element {
  return (
    <details className="group mb-2">
      <summary className="flex border border-black justify-between items-center w-full text-left cursor-pointer list-none bg-grey">
        <h3 className="text-lg font-medium p-4">{item.question}</h3>
        <div className="ml-2">
          <ChevronDown className="block group-open:hidden" size={20} />
          <ChevronUp className="hidden group-open:block" size={20} />
        </div>
      </summary>
      <div className="text-black bg-gray-100 p-4 border border-black">
        <div className="text-[1rem] font-helvetica-normal">
          {documentToReactComponents(item.answer)}
        </div>
      </div>
    </details>
  );
}
