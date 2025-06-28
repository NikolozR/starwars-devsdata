import { Species } from "../types/species";
import { SingleSpecie } from "../utils/generateUrls";

export async function getSpecieById(id: string): Promise<Species> {
    const response = await fetch(SingleSpecie(id), {
        cache: "force-cache"
    })
    if (!response.ok) {
        throw new Error("Failed to fetch specie")
    }
    return await response.json()
}