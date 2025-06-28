import { Character } from "../types/character";
import { Planet } from "./planet";
import { Species } from "./species";
import { Starship } from "./starship";
import { Vehicle } from "./vehicle";

export interface DefaultResponse {
    count: number;
    next: string | null;
    previous: string | null;
}

export interface PeopleResponse extends DefaultResponse {
    results: Character[];
}

export interface PlanetsResponse extends DefaultResponse {
    results: Planet[];
}

export interface StarshipsResponse extends DefaultResponse {
    results: Starship[];
}

export interface VehiclesResponse extends DefaultResponse {
    results: Vehicle[];
}

export interface SpeciesResponse extends DefaultResponse {
    results: Species[];
}
