import { People, SearchCharacter, SingleCharacter } from "../utils/generateUrls";
import { Character } from "../types/character";
import { PeopleResponse } from "../types/swapiResponses";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function getPeople(page: number = 1): Promise<PeopleResponse> {
    const response = await fetch(People(page), {
        cache: "force-cache",
    });
    if (!response.ok) {
        throw new Error("Failed to fetch people");
    }
    return await response.json();
}

export async function getPeopleById(id: string): Promise<Character> {
    const response = await fetch(SingleCharacter(id), {
        cache: "force-cache",
    });
    if (!response.ok) {
        throw new Error("Failed to fetch person");
    }
    return await response.json();
}

export async function searchPeople(query: string): Promise<PeopleResponse> {
    const response = await fetch(SearchCharacter(query), {
        cache: "force-cache",
    });
    if (!response.ok) {
        throw new Error("Failed to search people");
    }
    return await response.json();
}