import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArtistBySlug } from '@/lib/lib';
import VideoEmbed from '@/app/components/musik/VideoEmbed';
import DynamicBackgroundSection from '@/app/components/musik/DynamicBackgroundSection'; // Import the new component
import Container from '@/app/components/Container'; // Import the Container component
import BackButton from '@/app/components/ui/BackButton'; // Import the BackButton component

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ArtistPage({ params }: Props) {
  if (!params.slug) {
    notFound();
  }

  const { data: artist, error } = await getArtistBySlug(params.slug);

  if (error || !artist) {
    console.error('Error fetching artist:', error?.message);
    notFound();
  }

  const musicDayBgColor = artist.music_days?.bg_color || 'bg-gray-100';
  const musicDayTextColor = artist.music_days?.text_color; // Get text color

  const heroImageUrl = artist.image && (artist.image.startsWith('http') || artist.image.startsWith('/')) ? artist.image : `/images/artistfolder/${artist.image}`;
  const secondaryImageUrl = artist.secondary_image && (artist.secondary_image.startsWith('http') || artist.secondary_image.startsWith('/')) ? artist.secondary_image : `/images/artistfolder/${artist.secondary_image}`;

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Image */}
      {heroImageUrl && (
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
          <BackButton alignment="left" containerClassName="absolute top-3 left-0 right-0 container mx-auto px-5 z-20" />
          <Image
            src={heroImageUrl}
            alt={artist.name || 'Artist image'}
            fill
            className="object-cover"
            priority
            unoptimized={heroImageUrl.startsWith('http')} 
          />
        </div>
      )}

      {/* Content Section Wrapper */}
      <div className="py-8 md:py-12">

        {/* Artist Name */}
        <Container>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center my-6 md:my-10">
            {artist.name}
          </h1>
        </Container>

        {/* Description 1 */}
        {artist.description1 && (
          <Container>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto text-gray-700">
              {artist.description1}
            </p>
          </Container>
        )}

        {/* Video Embed */}
        {artist.video_embed_url && (
          <DynamicBackgroundSection bgColor={musicDayBgColor} textColor={musicDayTextColor} applyCurvedEdges={true}>
            <VideoEmbed videoUrl={artist.video_embed_url} artistName={artist.name || undefined} />
          </DynamicBackgroundSection>
        )}

        {/* Description 2 */}
        {artist.description2 && (
          <Container>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              {artist.description2}
            </p>
          </Container>
        )}

        {/* Secondary Image */}
        {secondaryImageUrl && (
          <Container>
            <div className="my-8 md:my-12 max-w-3xl mx-auto">
              <div className="relative w-full h-[40vh] md:h-[60vh]">
                <Image
                  src={secondaryImageUrl}
                  alt={`${artist.name || 'Artist'} - secondary image`}
                  fill
                  className="object-cover"
                  unoptimized={secondaryImageUrl.startsWith('http')} 
                />
              </div>
            </div>
          </Container>
        )}

        {/* Description 3 */}
        {artist.description3 && (
          <Container>
            <p className="text-base md:text-lg leading-relaxed my-8 max-w-3xl mx-auto text-gray-700">
              {artist.description3}
            </p>
          </Container>
        )}
      </div>
    </div>
  );
}
