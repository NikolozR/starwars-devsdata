import { Species } from "@/lib/types/species";

interface SpeciesCardProps {
  species: Species;
  className?: string;
}

export default function SpeciesCard({ species, className = "" }: SpeciesCardProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="font-semibold text-lg text-green-100">{species.name}</div>
      <div className="flex flex-wrap gap-2">
        <span className="bg-green-400/20 px-2 py-1 rounded-full text-green-300 text-sm font-medium capitalize">
          {species.classification}
        </span>
        {species.designation && (
          <span className="bg-green-400/10 px-2 py-1 rounded-full text-green-400 text-sm capitalize">
            {species.designation}
          </span>
        )}
      </div>
      <div className="space-y-1 text-xs text-gray-400">
        {species.language && (
          <div>Language: <span className="text-green-300">{species.language}</span></div>
        )}
        {species.average_height && (
          <div>Height: <span className="text-green-300">{species.average_height}</span></div>
        )}
        {species.average_lifespan && (
          <div>Lifespan: <span className="text-green-300">{species.average_lifespan}</span></div>
        )}
      </div>
    </div>
  );
} 