'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface BackButtonProps {
  alignment?: 'left' | 'right';
  containerClassName?: string;
  buttonClassName?: string;
  buttonText?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  alignment = 'left',
  containerClassName = '',
  buttonClassName = '',
  buttonText = '← Tilbage',
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  let flexAlignmentClass = 'justify-start'; // Default to left
  if (alignment === 'right') {
    flexAlignmentClass = 'justify-end';
  }

  return (
    <div className={`flex ${flexAlignmentClass} ${containerClassName} relative z-10`}>
      <button
        onClick={handleClick}
        className={`px-5 py-2.5 text-sm font-medium text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 transition-colors ${buttonClassName}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BackButton;
