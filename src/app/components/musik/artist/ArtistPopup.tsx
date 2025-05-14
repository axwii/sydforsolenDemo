'use client';

import Image from 'next/image';
import { XIcon } from 'lucide-react';
import { useEffect } from 'react'; // Import useEffect
import type { Artist } from '../../../../lib/musicData'; // Updated import path

interface ArtistPopupProps {
  artist: Artist | null;
  onClose: () => void;
  bgColor?: string; // Optional bgColor prop
  textColor?: string; // Optional textColor prop
}

const ArtistPopup: React.FC<ArtistPopupProps> = ({ artist, onClose, bgColor, textColor }) => {
  // Optional: Add keyboard support for closing the popup
  useEffect(() => {
    if (artist) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when component unmounts or artist changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [artist]); // Re-run effect if artist changes

  if (!artist) return null;

  // Determine background and text colors for the popup
  const popupBgColor = bgColor ? bgColor.replace('bg-', '') : 'white'; // Extract color name
  const popupTextColor = textColor ? textColor.replace('text-', '') : 'black'; // Extract color name

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4 overflow-y-auto`}>
      <div className={`bg-${popupBgColor} text-${popupTextColor} rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 text-${popupTextColor} hover:text-gray-700 z-10 bg-${popupBgColor} rounded-full p-1`}
          aria-label="Close popup"
        >
          <XIcon size={24} />
        </button>

        {/* Hero Section with Main Image and Artist Name */}
        <div className="relative h-72 md:h-96">
          <Image src={artist.image} alt={artist.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <h2 className={`absolute bottom-4 left-4 text-3xl md:text-5xl font-bold text-white font-exposure`}>
            {artist.name}
          </h2>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Description Part 1 */}
          <p className={`text-base md:text-lg leading-relaxed`}>{artist.description1}</p>

          {/* Video Embed Section (Conditional) */}
          {artist.videoEmbedUrl && artist.videoEmbedUrl !== "placeholder" && (
            <div className="aspect-video">
              {/* Basic iframe embed, consider a more robust solution for production */}
              <iframe
                width="100%"
                height="100%"
                src={artist.videoEmbedUrl.replace("watch?v=", "embed/")} // Basic conversion for YouTube links
                title={`Video of ${artist.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md"
              ></iframe>
            </div>
          )}
          {artist.videoEmbedUrl === "placeholder" && (
            <div className="aspect-video bg-gray-200 flex items-center justify-center rounded-md">
              <p className={`text-gray-500`}>Video placeholder</p>
            </div>
          )}


          {/* Description Part 2 */}
          <p className={`text-base md:text-lg leading-relaxed`}>{artist.description2}</p>

          {/* Secondary Image */}
          <div className="relative w-full aspect-video md:aspect-[16/9] rounded-md overflow-hidden">
            <Image src={artist.secondaryImage} alt={`More of ${artist.name}`} layout="fill" objectFit="cover" />
          </div>

          {/* Description Part 3 */}
          <p className={`text-base md:text-lg leading-relaxed`}>{artist.description3}</p>

          {/* Placeholder for more content if needed */}
          {/* <div className="pt-4">
            <h3 className="text-xl font-semibold mb-2">More about {artist.name}</h3>
            <p>Additional details or links could go here.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArtistPopup;
