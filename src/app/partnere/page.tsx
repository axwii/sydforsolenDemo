import Image from "next/image";
import PageTitle from "../components/PageTitle"; // Added import

// Placeholder data for partners - replace with actual data later
const partners = [
  { id: 1, name: "Partner 1", logo: "/images/placeholder.webp", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, name: "Partner 2", logo: "/images/placeholder.webp", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 3, name: "Partner 3", logo: "/images/placeholder.webp", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
  { id: 4, name: "Partner 4", logo: "/images/placeholder.webp", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
  { id: 5, name: "Partner 5", logo: "/images/placeholder.webp", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa." },
  { id: 6, name: "Partner 6", logo: "/images/placeholder.webp", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit." },
];

export default function Partners() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <PageTitle title="Partnere" /> {/* Added PageTitle component */}
      <h1 className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 font-exposure">
        Vi samarbejder med dem, der gør en forskel
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {partners.map((partner) => (
          <div key={partner.id} className="flex flex-col items-center md:items-start ">
            <div className="w-full aspect-square bg-neutral-200 mb-4 flex items-center justify-center">
              {/* Placeholder for logo */}
              <span className="text-neutral-500">LOGO</span>
              {/* 
                // When actual logos are available, replace the span above with:
                // <Image
                //   src={partner.logo} // Make sure partner.logo points to the correct path
                //   alt={`${partner.name} logo`}
                //   width={200} // Adjust width as needed
                //   height={200} // Adjust height as needed
                //   className="object-contain w-3/4 h-3/4" // Adjust styling as needed
                // /> 
              */}
            </div>
            <p className="text-sm text-neutral-600 mt-2">{partner.description}</p> 
          </div>
        ))}
      </div>
    </div>
  );
}