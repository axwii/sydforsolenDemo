interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="w-full py-8 md:py-12 text-center">
      <svg viewBox="0 0 1000 100" className="w-full h-auto max-h-[100px] md:max-h-[150px]" aria-label={title}>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="font-exposure uppercase fill-current"
          style={{ fontSize: '100px' }} // This base size is scaled by the SVG's responsive sizing
          textLength="950" // Adjusts text to fill 95% of the SVG width
          lengthAdjust="spacingAndGlyphs"
        >
          {title}
        </text>
      </svg>
    </div>
  );
}
