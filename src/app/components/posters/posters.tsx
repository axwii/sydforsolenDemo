import Link from "next/link";
import { posterData } from "./posterData";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function Posters() {
  return (
    <div className="flex flex-row justify-center items-center w-full h-auto overflow-hidden">
      {posterData.map((poster) => (
        <Link key={poster.id} href="/musik" className="w-full h-auto relative ">
          <img src={poster.src} alt={poster.alt} className="w-full h-full object-cover transition-all duration-300" />
          <div className="absolute inset-0 bg-black/85 opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
              <InteractiveHoverButton variant="light">SE PROGRAM</InteractiveHoverButton>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
