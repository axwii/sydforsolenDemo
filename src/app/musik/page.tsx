'use client';

import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Placeholder data structure - replace with actual artist data
const musicProgram = [
  {
    day: "Torsdag",
    bgColor: "bg-red",
    textColor: "text-white",
    sectionClass: "music-section-thursday", // Added class for specific styling
    artists: [
      { id: 1, name: "Artist T1", image: "/images/placeholder.webp" },
      { id: 2, name: "Artist T2", image: "/images/placeholder.webp" },
      { id: 3, name: "Artist T3", image: "/images/placeholder.webp" },
      { id: 4, name: "Artist T4", image: "/images/placeholder.webp" },
      { id: 5, name: "Artist T5", image: "/images/placeholder.webp" },
    ],
  },
  {
    day: "Fredag",
    bgColor: "bg-yellow",
    textColor: "text-red",
    sectionClass: "music-section-friday", // Added class for specific styling
    artists: [
      { id: 6, name: "Artist F1", image: "/images/placeholder.webp" },
      { id: 7, name: "Artist F2", image: "/images/placeholder.webp" },
      { id: 8, name: "Artist F3", image: "/images/placeholder.webp" },
      { id: 9, name: "Artist F4", image: "/images/placeholder.webp" },
    ],
  },
  {
    day: "Lørdag",
    bgColor: "bg-cream",
    textColor: "text-blue",
    sectionClass: "music-section-saturday", // Added class for specific styling
    artists: [
      { id: 10, name: "Artist L1", image: "/images/placeholder.webp" },
      { id: 11, name: "Artist L2", image: "/images/placeholder.webp" },
      { id: 12, name: "Artist L3", image: "/images/placeholder.webp" },
      { id: 13, name: "Artist L4", image: "/images/placeholder.webp" },
      { id: 14, name: "Artist L5", image: "/images/placeholder.webp" },
      { id: 15, name: "Artist L6", image: "/images/placeholder.webp" },
    ],
  },
];

export default function Music() {
  return (
    <div className="space-y-0">
      {musicProgram.map((dayData) => (
        <section key={dayData.day} className={`${dayData.bgColor} ${dayData.textColor} ${dayData.sectionClass} py-12 md:py-16 px-4 md:px-8`}>
          <div className="container mx-auto">
            {/* Flex container for heading and arrow */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold font-exposure">
                {dayData.day}
              </h2>
              {/* Simple arrow - consider replacing with an SVG icon if needed */}
              <span className={`text-3xl ${dayData.textColor}`}>→</span>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30} // Adjust spacing between slides
              slidesPerView={1.5} // Show 1.5 slides on smallest screens
              navigation // Enable navigation arrows
              pagination={{ clickable: true }} // Enable pagination
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3.5,
                  spaceBetween: 30,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4.5,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper pb-10" // Add bottom padding to Swiper container for pagination space
            >
              {dayData.artists.map((artist) => (
                <SwiperSlide key={artist.id}>
                  {/* Add bottom margin to this container to space out from pagination */}
                  <div className="flex flex-col mb-8"> 
                    <div className="w-full aspect-square bg-neutral-200 mb-4 overflow-hidden">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        width={400} // Adjust as needed
                        height={400} // Adjust as needed
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Apply the section's text color to the artist name */}
                    <h3 className={`font-exposure text-lg font-bold ${dayData.textColor}`}>{artist.name}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      ))}
    </div>
  );
}


