import Link from 'next/link';
import { posterData } from './posterData';


export default function Posters() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-auto overflow-hidden">
            {posterData.map((poster) => (
                <Link key={poster.id} href="../music" className="w-full h-auto">
                    <img 
                        src={poster.src}
                        alt={poster.alt}
                        className="w-full h-full object-cover"
                    />
                </Link>
            ))}
        </div>
    );
}
