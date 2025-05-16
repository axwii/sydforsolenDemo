import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export default function Subscribe() {
  return (
    <div className="w-full h-screen bg-grey font-helvetica-roman">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold max-w-[700px] text-center font-exposure">Tilmeld dig vores nyhedsbrev og modtag nyheder om Syd For Solen 2025.</h1>

        <form className="flex flex-col items-center justify-center gap-6 pt-14">
          <input className="w-[350px] border-b border-black bg-transparent text-black placeholder:text-black" type="name" placeholder="NAVN" />
          <input className="w-[350px] border-b border-black bg-transparent text-black placeholder:text-black" type="email" placeholder="E-MAIL" />

          <InteractiveHoverButton variant="dark" className="w-[350px] mt-4">
            SKRIV MIG PÅ LISTEN, TAK!
          </InteractiveHoverButton>
        </form>
      </div>
    </div>
  );
}
