import { SWAPI_BASE_URL } from "../constants";

export const SingleCharacter = (id: string) => `${SWAPI_BASE_URL}/people/${id}`;
export const SearchCharacter = (query: string, page: number = 1) => `${SWAPI_BASE_URL}/people/?search=${query}&page=${page}`;
export const People = (page: number) => `${SWAPI_BASE_URL}/people/?page=${page}`;
export const Planets = (page: number) => `${SWAPI_BASE_URL}/planets/?page=${page}`;
export const SinglePlanet = (id: string) => `${SWAPI_BASE_URL}/planets/${id}`;
export const Starships = (page: number) => `${SWAPI_BASE_URL}/starships/?page=${page}`;
export const SingleStarship = (id: string) => `${SWAPI_BASE_URL}/starships/${id}`;
export const Vehicles = (page: number) => `${SWAPI_BASE_URL}/vehicles/?page=${page}`;
export const SingleVehicle = (id: string) => `${SWAPI_BASE_URL}/vehicles/${id}`;
export const Species = (page: number) => `${SWAPI_BASE_URL}/species/?page=${page}`;
export const SingleSpecie = (id: string) => `${SWAPI_BASE_URL}/species/${id}`
export const Films = () => `${SWAPI_BASE_URL}/films`;
export const SingleFilm = (id: string) => `${SWAPI_BASE_URL}/films/${id}`;