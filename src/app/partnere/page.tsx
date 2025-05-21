'use client';

import { useEffect, useState } from 'react';
import { getDataSamarbejde, getPartners } from '@/lib/lib';
import { Tables } from '@/types/supabase';
import PageTitle from "../components/ui/PageTitle"; // Added import

type Partner = Tables<'partners'>;
type DataSamarbejde = Tables<'data_samarbejde'>;

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataSamarbejde, setDataSamarbejde] = useState<DataSamarbejde[]>([]);

useEffect(() => {
  async function loadDataSamarbejde() {
    try {
      const { data, error } = await getDataSamarbejde();
      console.log('Data samarbejde response:', { data, error });
      
      if (error) {
        console.error('Error loading data samarbejde:', error);
        return;
      }
      
      if (!data || data.length === 0) {
        console.log('No data found in data_samarbejde table');
      }
      
      setDataSamarbejde(data || []);
      setLoading(false);
    } catch (err) {
      console.error('Unexpected error loading data samarbejde:', err);
      setLoading(false);
    }
  }
  loadDataSamarbejde();
}, []);

  useEffect(() => {
    async function loadPartners() {
      const { data, error } = await getPartners();
      if (error) {
        console.error('Error loading partners:', error);
        return;
      }
      setPartners(data || []);
      setLoading(false);
    }

    loadPartners();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-lg sm:text-2xl md:text-6xl font-bold mb-12 md:mb-10 font-exposure">
          Vi samarbejder med dem, der gør en forskel
        </h1>
        <div className="py-6 gap-4 flex flex-col max-w-3xl">
          {dataSamarbejde.map((data) => (
            <div key={data.id}>
              <h6 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                {data.headers}
              </h6>
          <p className="text-sm sm:text-base md:text-lg">
                {data.paragraph}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center md:items-start ">
              <div className="w-full aspect-square bg-neutral-200 mb-4 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-32 object-contain"
                />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{partner.name}</h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}