import { Vehicle } from "@/lib/types/vehicle";

interface VehicleCardProps {
  vehicle: Vehicle;
  className?: string;
}

export default function VehicleCard({ vehicle, className = "" }: VehicleCardProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="font-semibold text-lg text-orange-100">{vehicle.name}</div>
      <div className="space-y-1">
        <div className="text-sm text-orange-200 font-medium">{vehicle.model}</div>
        {vehicle.manufacturer && (
          <div className="text-xs text-gray-400">by {vehicle.manufacturer}</div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {vehicle.vehicle_class && (
          <span className="bg-orange-400/20 px-2 py-1 rounded-full text-orange-300 text-xs font-medium">
            {vehicle.vehicle_class}
          </span>
        )}
        {vehicle.max_atmosphering_speed && (
          <span className="bg-orange-400/10 px-2 py-1 rounded-full text-orange-400 text-xs">
            {vehicle.max_atmosphering_speed} km/h
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
        {vehicle.crew && (
          <div>Crew: <span className="text-orange-300">{vehicle.crew}</span></div>
        )}
        {vehicle.passengers && (
          <div>Passengers: <span className="text-orange-300">{vehicle.passengers}</span></div>
        )}
        {vehicle.length && (
          <div className="col-span-2">Length: <span className="text-orange-300">{vehicle.length}</span></div>
        )}
      </div>
    </div>
  );
} 