import { Starship } from "../types/starship";
import { SingleStarship } from "../utils/generateUrls";

export async function getStarshipById(id: string): Promise<Starship> {
    const response = await fetch(SingleStarship(id), {
        cache: "force-cache",
    });
    if (!response.ok) {
        throw new Error("Failed to fetch starship");
    }
    return await response.json();
}   