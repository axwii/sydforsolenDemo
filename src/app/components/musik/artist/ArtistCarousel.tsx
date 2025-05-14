"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import type { Artist, DayData } from '../../../../lib/musicData'; // Updated import path

interface ArtistCarouselProps {
  dayData: DayData;
  onArtistClick: (artist: Artist) => void;
}

export default function ArtistCarousel({ dayData, onArtistClick }: ArtistCarouselProps): React.JSX.Element {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1.5}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2.5, spaceBetween: 20 },
        768: { slidesPerView: 3.5, spaceBetween: 30 },
        1024: { slidesPerView: 4.5, spaceBetween: 40 },
      }}
      className="mySwiper pb-10"
    >
      {dayData.artists.map((artist: Artist) => (
        <SwiperSlide key={artist.id} onClick={() => onArtistClick(artist)} className="cursor-pointer">
          <div className="flex flex-col mb-8">
            <div className="w-full aspect-square bg-neutral-200 mb-4 overflow-hidden">
              <Image
                src={artist.image}
                alt={artist.name}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className={`font-exposure text-lg font-bold ${dayData.textColor}`}>{artist.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
