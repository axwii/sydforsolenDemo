import React from 'react';

interface DynamicBackgroundSectionProps {
  bgColor: string;
  textColor?: string;
  children: React.ReactNode;
}

const DynamicBackgroundSection: React.FC<DynamicBackgroundSectionProps> = ({ bgColor, textColor, children }) => {
  // Construct className, conditionally adding textColor if provided
  const sectionClassName = `w-full ${bgColor} ${textColor || ''}`;

  return (
    <div className={sectionClassName.trim()}> {/* Use trim to remove extra space if textColor is not present */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default DynamicBackgroundSection;
