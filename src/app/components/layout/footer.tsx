export default function Footer() {
  return (
    <footer className="w-full min-h-[515px] bg-[#D9D9D9] border-t border-black px-4 sm:px-8 md:px-[3.75rem] pt-20 md:pt-40 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
      <h2 className="font-exposure text-2xl sm:text-3xl md:text-[3.125rem] font-extrabold max-w-[600px]">
        Vi ses i Valbyparken.
      </h2>

      <div className="flex flex-col justify-between pb-10 md:pb-20">
        <div className="flex flex-col items-start md:items-end">
          <p className="font-['Helvetica_Neue'] -mb-5 uppercase">Hosted by</p>
          <img src="/images/sbplogo.svg" alt="SBP Logo" className="w-32 md:w-auto" />
        </div>
        <img 
          src="/images/sydforsolenlogo.png" 
          alt="Syd For Solen Logo" 
          className="w-32 md:w-auto h-16 md:h-20 object-contain mt-5 md:mt-0" 
        />
      </div>
    </footer>
  );
}
