import FaqCategory from '../components/FaqCategory';
import { faqData } from '../../lib/faqData';
import Image from 'next/image';
import PageTitle from '../components/PageTitle';

export default function FrivilligPage() {
  const frivilligFaq = faqData.find(category => category.id === 'praktisk-frivillig');

  return (
    <div>
      <PageTitle title="Frivillig" /> {/* Added PageTitle component */}
      {/* Section 1: Title, intro text, buttons - with container */}
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 font-exposure">Bliv frivillig på Syd For Solen</h1> {/* Changed H1 text */}
          <p className="mb-6 text-lg max-w-2xl ">
            Vi glæder os til - sammen med dig – at skabe en helt fantastisk festival i Valbyparken, for såvel publikum, artister, medarbejdere, og selvfølgelig også for dig som frivillig. Udover at være del af et stærkt fællesskab, får du en gratis billet til en af festival-dagene for hver vagt, du tager. Du får også en t-shirt, en drikkedunk og selvfølgelig forplejning under vagten.
          </p>
          <div className="space-x-4">
            <button className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors">
              TILMELD DIG SOM FRIVILLIG
            </button>
            <button className="border border-black text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors">
              PRAKTISK OM AT VÆRE FRIVILLIG
            </button>
          </div>
        </section>
      </div>

      {/* Section 2: Image - full width */}
      <section className="mb-12 w-full"> {/* Ensured this section is full-width */}
        <div className="relative w-full h-96">
          <Image
            src="/images/JoakimZuger_Sydforsolen2024_Fredag-60-scaled.webp"
            alt="Frivillige på Syd For Solen"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Section 3: FAQ - with container */}
      <div className="container mx-auto px-4 py-8">
        <section>
          {frivilligFaq ? (
            <FaqCategory category={frivilligFaq} /> // This renders "Praktisk om at være frivillig" as H2
          ) : (
            <p>Information om at være frivillig kommer snart.</p>
          )}
        </section>
      </div>
    </div>
  );
}




