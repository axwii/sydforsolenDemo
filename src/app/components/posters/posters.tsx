import { posterData } from './posterData';

export default function Posters() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-auto overflow-hidden">
            {posterData.map((poster) => (
                <div key={poster.id} className="w-full h-auto">
                    <img 
                        src={poster.src}
                        alt={poster.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
}
