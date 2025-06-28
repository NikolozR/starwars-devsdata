import { Planets, SinglePlanet } from "../utils/generateUrls";
import { PlanetsResponse } from "../types/swapiResponses";
import { Planet } from "../types/planet";

export async function getPlanets(page: number = 1): Promise<PlanetsResponse> {
    const response = await fetch(Planets(page), {
        cache: "force-cache",
    });
    if (!response.ok) {
        throw new Error("Failed to fetch planets");
    }
    return await response.json();
}

export async function getPlanetById(id: string): Promise<Planet> {
    const response = await fetch(SinglePlanet(id), {
        cache: "force-cache",
    });
    if (!response.ok) {
        throw new Error("Failed to fetch planet");
    }
    return await response.json();
}