"use client";

import { useEffect, useState } from "react";
import { Partnere } from "@/types/contentful";
import Link from "next/link";
import { InteractiveHoverButton } from "@/app/components/ui/interactive-hover-button";
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";
import { getPartners } from "@/app/actions/partnere";
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partnere[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPartners() {
      try {
        const data = await getPartners();
        setPartners(data);
        setLoading(false);
      } catch (err) {
        console.error("Error loading partners:", err);
        setLoading(false);
      }
    }

    loadPartners();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  // Get the first partner entry for the header content
const headerContent = partners[0];

  return (
    <div>
      
        <div >
          <div className="container mx-auto px-4 py-5">
            <h1 className="text-lg sm:text-2xl md:text-6xl font-bold mb-12 md:mb-10 font-exposure">{headerContent.pageTitle || "Vi samarbejder med dem, der gør en forskel"}</h1>
            {partners.map((partner) => (
            <div key={partner.id} className="my-4 flex flex-col max-w-3xl">
              <div  className="flex flex-col items-center py-2 md:items-start">
                <h6 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{partner.textHeader}</h6>
                <p className="text-sm sm:text-base lg:text-lg">
                  {partner.paragraph && typeof partner.paragraph === 'object'
                    ? documentToReactComponents(partner.paragraph)
                    : partner.paragraph}
                </p>
              </div>
            </div>
             ))}
          </div>
        </div>
    
      
      <div className="container mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center md:items-start pt-10">
              <Link href={partner.linkurl || ""} target="_blank" rel="noopener noreferrer" className="w-1/2 md:w-2/3 aspect-square mb-4 flex items-center mx-auto justify-center hover:scale-105 transition-all duration-300 relative group">
                <img src={partner.partnerImage} alt={partner.partnerName} className="w-full object-contain" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <InteractiveHoverButton variant="light">Gå til side</InteractiveHoverButton>
                </div>
              </Link>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{partner.partnerName}</h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                {partner.partnerText && typeof partner.partnerText === 'object'
                  ? documentToPlainTextString(partner.partnerText)
                  : partner.partnerText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
