export const FooterContent = () => {
  return (
    <footer className="max-w-[1300px] mx-auto min-h-[515px] px-3 sm:px-6 md:px-8 pt-20 md:pt-40 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
      <h2 className="font-exposure text-2xl sm:text-3xl md:text-[3.125rem] font-extrabold max-w-[600px]">Vi ses i Valbyparken.</h2>

      <div className="flex flex-col justify-between pb-10 md:pb-20">
        <div className="flex flex-col items-start md:items-end">
          <p className="font-['Helvetica_Neue'] -mb-5 uppercase text-sm">Hosted by</p>
          <img src="/images/sbplogo.svg" alt="SBP Logo" className="w-32 md:w-auto" />
        </div>
        <img src="/images/sydforsolenlogo.png" alt="Syd For Solen Logo" className="w-32 md:w-auto h-16 md:h-20 object-contain mt-5 md:mt-0" />
      </div>
    </footer>
  );
};
