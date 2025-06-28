import { Starship } from "@/lib/types/starship";

interface StarshipCardProps {
  starship: Starship;
  className?: string;
}

export default function StarshipCard({ starship, className = "" }: StarshipCardProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="font-semibold text-lg text-blue-100">{starship.name}</div>
      <div className="space-y-1">
        <div className="text-sm text-blue-200 font-medium">{starship.model}</div>
        <div className="text-xs text-gray-400">by {starship.manufacturer}</div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {starship.starship_class && (
          <span className="bg-blue-400/20 px-2 py-1 rounded-full text-blue-300 text-xs font-medium">
            {starship.starship_class}
          </span>
        )}
        {starship.length && (
          <span className="bg-blue-400/10 px-2 py-1 rounded-full text-blue-400 text-xs">
            {starship.length}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
        {starship.crew && (
          <div>Crew: <span className="text-blue-300">{starship.crew}</span></div>
        )}
        {starship.passengers && (
          <div>Passengers: <span className="text-blue-300">{starship.passengers}</span></div>
        )}
      </div>
    </div>
  );
} 