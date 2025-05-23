import React from 'react';

interface DynamicBackgroundSectionProps {
  bgColor: string;
  textColor?: string;
  children: React.ReactNode;
  applyCurvedEdges?: boolean;
}

const DynamicBackgroundSection: React.FC<DynamicBackgroundSectionProps> = ({ bgColor, textColor, children, applyCurvedEdges }) => {
  // Construct className, conditionally adding textColor if provided
  const sectionClassName = `w-full ${bgColor} ${textColor || ''}`;

  const styles: React.CSSProperties = {};
  if (applyCurvedEdges) {
    styles.clipPath = 'ellipse(145% 100% at 50% 100%)'; // Convex top
    styles.mask = 'radial-gradient(60% 70px at 50% 100%, transparent 100%, black)'; // Concave bottom
    styles.WebkitMask = 'radial-gradient(60% 70px at 50% 107%, transparent 100%, black)'; // Concave bottom for Webkit
  }

  return (
    <div
      className={sectionClassName.trim()}
      style={styles} // Apply conditional styles
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default DynamicBackgroundSection;
