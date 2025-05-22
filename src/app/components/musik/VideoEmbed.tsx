import React from 'react';

const getYouTubeEmbedUrl = (url: string | null): string | null => {
  if (!url) return null;

  // If it's already a YouTube embed URL, return it
  if (url.match(/youtube\.com\/embed\//)) {
    return url;
  }

  let videoId: string | null = null;
  // Standard YouTube watch URL: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch && watchMatch[1]) {
    videoId = watchMatch[1];
  } else {
    // Shortened YouTube URL: https://youtu.be/VIDEO_ID
    const shortMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortMatch && shortMatch[1]) {
      videoId = shortMatch[1];
    }
  }

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // If it's not a YouTube URL we can transform, or from another platform, return as is.
  // The user should ensure URLs from other platforms are embeddable.
  return url;
};

interface VideoEmbedProps {
  videoUrl: string | null;
  artistName?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoUrl, artistName }) => {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  if (!embedUrl) {
    return null;
  }

  return (
    <div className="my-8 md:my-12 bg-red-600 py-10 md:py-16">
      <div className="max-w-3xl mx-auto bg-gray-300 aspect-video">
        <iframe
          src={embedUrl}
          title={`${artistName || 'Artist'} video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoEmbed;
