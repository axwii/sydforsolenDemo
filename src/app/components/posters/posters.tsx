import Link from 'next/link';
import { posterData } from './posterData';


export default function Posters() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-auto overflow-hidden">
            {posterData.map((poster) => (
                <Link key={poster.id} href="../music" className="w-full h-auto relative ">
                    <img 
                        src={poster.src}
                        alt={poster.alt}
                        className="w-full h-full object-cover transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/85 opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <button className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 border border-white px-[25px] py-[7px]">
                            <span className="text-white text-md font-helvetica-roman">
                                SE PROGRAM
                            </span>
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
}
