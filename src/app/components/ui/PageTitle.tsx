import { div } from "framer-motion/client";

interface PageTitleProps {
  title: string;
  /** Base font size in pixels, default is 100 */
  baseFontSize?: number;
}

export default function PageTitle({ title, baseFontSize = 100 }: PageTitleProps) {
  return (
    <div>
      <div className="container mx-auto px-4 py-16 md:py-24">
      <svg
        viewBox="0 0 1000 140"
        preserveAspectRatio="xMinYMid meet"
        overflow="visible"
        className="w-full h-auto max-h-[140px] md:max-h-[210px] overflow-visible"
        aria-label={title}
      >
        <text
          x="0"
          y="50%"
          dominantBaseline="middle"
          textAnchor="start"
          className="font-exposure uppercase fill-current"
          style={{ fontSize: `${baseFontSize}px` }} // Base font size in px, scaled by SVG
          textLength="900" // Adjusts text to fill 90% of the SVG width
          lengthAdjust="spacingAndGlyphs"
        >
          {title}
        </text>
      </svg>

      </div>
    </div>
  );
}
