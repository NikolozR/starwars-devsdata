import { SWAPI_BASE_URL } from "./constants";

export const SingleCharacter = (id: string) => `${SWAPI_BASE_URL}/people/${id}`;
export const People = (page: number) => `${SWAPI_BASE_URL}/people/?page=${page}`;
export const Planets = (page: number) => `${SWAPI_BASE_URL}/planets/?page=${page}`;
export const Starships = (page: number) => `${SWAPI_BASE_URL}/starships/?page=${page}`;
export const Vehicles = (page: number) => `${SWAPI_BASE_URL}/vehicles/?page=${page}`;
export const Species = (page: number) => `${SWAPI_BASE_URL}/species/?page=${page}`;
export const Films = () => `${SWAPI_BASE_URL}/films`;