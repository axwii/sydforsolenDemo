import FrivilligFAQ from "../components/FrivilligFAQ"
import { Accordion } from "../components/ui/accordion"

export default function Frivillig() {
  return (
    <div className="min-h-screen py-20">
      <div className="p-[3vw]">
        <h1 className="text-4xl md:text-9xl font-bold mb-12 md:mb-16 font-exposure">FRIVILLIG</h1>
      </div>
      <div className="frivillig-text flex flex-col gap-4 ml-[3vw]">
        <h3 className="text-2xl md:text-4xl font-bold mb-5 font-exposure">Bliv Frivillig på Syd For Solen</h3>
        <p className="text-md md:text-[24px] max-w-[75vw] font-helvetica-roman">
          Vi glæder os til – sammen med dig – at skabe en helt fantastisk festival i Valbyparken, for såvel publikum, artister, medarbejdere, og selvfølgelig også for dig som frivillig.
          Udover at være del af et stærkt fællesskab, får du en gratis billet til en af festival-dagene for hver vagt, du tager. Du får også en t-shirt, en drikkedunk og selvfølgelig forplejning under vagten.
        </p>
      </div>
      <div className="frivillig-button flex gap-4 pb-10 pt-5 px-10 font-helvetica-roman">
        <button className="bg-red-500 text-black border border-black px-10 py-2">TILDMELD DIG SOM FRIVILLIG</button>
        <button className="bg-red-500 text-black bg-grey px-10 py-2">PRAKTISK OM AT VÆRE FRIVILLIG</button>
      </div>
      <div className="frivillig-image w-screen max-h-[623px]">
        <img src="/images/image10.png" alt="Frivillig" className="w-full" />
      </div>
      <FrivilligFAQ />
    </div>
  );
}




