import { Film } from "../types/film";
import { SingleFilm } from "../utils/generateUrls";

export async function getFilmById(id: string): Promise<Film> {
    const response = await fetch(SingleFilm(id), {
        cache: "force-cache",
    });
    if (!response.ok) {
        throw new Error("Failed to fetch film");
    }
    return await response.json();
}