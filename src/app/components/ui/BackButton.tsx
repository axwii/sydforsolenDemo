'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { InteractiveHoverButton } from './interactive-hover-button'; // Added import

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
    <div className={`flex ${flexAlignmentClass} ${containerClassName} relative z-10 `}>
      <InteractiveHoverButton
        onClick={handleClick}
        variant="alternative"
        className={buttonClassName} // Pass through buttonClassName
      >
        {buttonText}
      </InteractiveHoverButton>
    </div>
  );
};

export default BackButton;
