import React from "react";
import { FilmCard, SpeciesCard, StarshipCard, VehicleCard } from "./ExpandableCards";
import { Film } from "@/lib/types/film";
import { Species } from "@/lib/types/species";
import { Vehicle } from "@/lib/types/vehicle";
import { Starship } from "@/lib/types/starship";

type CardType = "film" | "species" | "starship" | "vehicle" | "default";

interface ExpandableSectionProps {
  title: string;
  icon: string;
  elements: Film[] | Species[] | Starship[] | Vehicle[];
  itemColor: string;
  itemIcon: string;
  emptyIcon: string;
  emptyMessage: string;
  cardType?: CardType;
}

export default function ExpandableSection({
  title,
  icon,
  elements,
  itemColor,
  itemIcon,
  emptyIcon,
  emptyMessage,
  cardType = "default",
}: ExpandableSectionProps) {
  const hasData = elements.length > 0;

  const renderCard = (item: Film | Species | Starship | Vehicle): React.ReactNode => {

    switch (cardType) {
      case "film":
        return <FilmCard film={item as Film} />;
      case "species":
        return <SpeciesCard species={item as Species} />;
      case "starship":
        return <StarshipCard starship={item as Starship} />;
      case "vehicle":
        return <VehicleCard vehicle={item as Vehicle} />;
      default:
        return (
          <div className="font-medium">
            {"Something went wrong"}
          </div>
        );
    }
  };

  return (
    <details className="group bg-white/10 backdrop-blur-md border border-purple-500/20 rounded-xl overflow-hidden">
      <summary className="px-6 py-4 cursor-pointer hover:bg-white/5 transition-colors duration-300 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-sm text-gray-400">({elements.length})</span>
        </div>
        <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300">▼</span>
      </summary>
      <div className="px-6 pb-4 border-t border-purple-500/20">
        {hasData ? (
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4`}>
              {elements.map((item: Film | Species | Starship | Vehicle) => {
              const key = String(item.url)
              
              return (
                <div 
                  key={key}
                  className={`${itemColor} rounded-lg p-4 hover:opacity-90 hover:scale-[1.02] transition-all duration-300 border border-white/10 hover:border-white/20`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-current text-xl mt-0.5 flex-shrink-0">{itemIcon}</span>
                    <div className="flex-1 min-w-0">
                      {renderCard(item)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-4 text-gray-400 text-center py-12">
            <span className="text-5xl mb-3 block">{emptyIcon}</span>
            <p className="text-lg font-medium mb-1">No data available</p>
            <p className="text-sm opacity-75">{emptyMessage}</p>
          </div>
        )}
      </div>
    </details>
  );
} 