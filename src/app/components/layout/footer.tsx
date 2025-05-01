export default function Footer() {
  return (
    <footer className="w-full h-[515px] bg-[#D9D9D9] border-t border-black px-[3.75rem] pt-40 flex justify-between">
      <h2 className="font-exposure text-[3.125rem] font-extrabold">Vi ses i Valbyparken.</h2>

      <div className="flex flex-col justify-between pb-20">
        <div className="flex flex-col items-end">
          <p className="font-['Helvetica_Neue'] -mb-5 uppercase">Hosted by</p>
          <img src="/images/sbplogo.svg" alt="SBP Logo" className="" />
        </div>
        <img src="/images/sydforsolenlogo.png" alt="Syd For Solen Logo" className="w-auto h-20 object-contain" />
      </div>
    </footer>
  );
}
