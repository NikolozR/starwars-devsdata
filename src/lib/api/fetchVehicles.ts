import { Vehicle } from "../types/vehicle";
import { SingleVehicle } from "../utils/generateUrls";

export async function getVehicleById(id: string): Promise<Vehicle> {
    const response = await fetch(SingleVehicle(id), {
        cache: "force-cache",
    });
    if (!response.ok) {
        throw new Error("Failed to fetch vehicle");
    }
    return await response.json();
}