import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Database } from '@/types/supabase';
import { getArtistBySlug } from '@/lib/lib';
import VideoEmbed from '@/app/components/musik/VideoEmbed'; // Import the new component

export default async function ArtistPage({ params }: { params: { slug: string } }) {
  // Address Next.js error: "params should be awaited before using its properties"
  // by explicitly resolving params before accessing slug.
  const resolvedParams = await Promise.resolve(params);

  if (!resolvedParams.slug) {
    notFound();
  }

  const { data: artist, error } = await getArtistBySlug(resolvedParams.slug);

  if (error || !artist) {
    console.error('Error fetching artist:', error?.message);
    notFound();
  }

  const heroImageUrl = artist.image && (artist.image.startsWith('http') || artist.image.startsWith('/')) ? artist.image : `/images/artistfolder/${artist.image}`;
  const secondaryImageUrl = artist.secondary_image && (artist.secondary_image.startsWith('http') || artist.secondary_image.startsWith('/')) ? artist.secondary_image : `/images/artistfolder/${artist.secondary_image}`;

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Image */}
      {heroImageUrl && (
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
          <Image
            src={heroImageUrl}
            alt={artist.name || 'Artist image'}
            layout="fill"
            objectFit="cover"
            priority
            unoptimized={heroImageUrl.startsWith('http')} 
          />
        </div>
      )}

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Artist Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center my-6 md:my-10">
          {artist.name}
        </h1>

        {/* Description 1 */}
        {artist.description1 && (
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto text-gray-700">
            {artist.description1}
          </p>
        )}

        {/* Video Embed */}
        {artist.video_embed_url && (
          <VideoEmbed videoUrl={artist.video_embed_url} artistName={artist.name || undefined} />
        )}

        {/* Description 2 */}
        {artist.description2 && (
          <p className="text-base md:text-lg leading-relaxed my-8 max-w-3xl mx-auto text-gray-700">
            {artist.description2}
          </p>
        )}

        {/* Secondary Image */}
        {secondaryImageUrl && (
          <div className="my-8 md:my-12 max-w-3xl mx-auto">
            <div className="relative w-full h-[40vh] md:h-[60vh] shadow-lg">
              <Image
                src={secondaryImageUrl}
                alt={`${artist.name || 'Artist'} - secondary image`}
                layout="fill"
                objectFit="cover"
                unoptimized={secondaryImageUrl.startsWith('http')} 
              />
            </div>
          </div>
        )}

        {/* Description 3 */}
        {artist.description3 && (
          <p className="text-base md:text-lg leading-relaxed my-8 max-w-3xl mx-auto text-gray-700">
            {artist.description3}
          </p>
        )}
      </div>
    </div>
  );
}
