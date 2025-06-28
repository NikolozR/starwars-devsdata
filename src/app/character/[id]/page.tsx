import Link from "next/link";
import CharacterHeader from "@/components/CharacterHeader";
import CharacterHero from "@/components/CharacterHero";
import CharacterInfoCards from "@/components/CharacterInfoCards";
import ExpandableSection from "@/components/ExpandableSection";
import Footer from "@/components/Footer";
import { getPeopleById } from "@/lib/api/fetchPeople";
import { extractId } from "@/lib/utils/extractId";
import { getPlanetById } from "@/lib/api/fetchPlanet";
import { getSpecieById } from "@/lib/api/fetchSpecies";
import { getFilmById } from "@/lib/api/fetchFilms";
import { getStarshipById } from "@/lib/api/fetchStarships";
import { getVehicleById } from "@/lib/api/fetchVehicles";

export default async function CharacterDetails({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const character = await getPeopleById(extractId(id));
  const planet = await getPlanetById(extractId(character.homeworld));
  const species = await Promise.all(
    character.species.map((link) => getSpecieById(extractId(link)))
  );
  const films = await Promise.all(
    character.films.map((link) => getFilmById(extractId(link)))
  );
  const starships = await Promise.all(
    character.starships.map((link) => getStarshipById(extractId(link)))
  );
  const vehicles = await Promise.all(
    character.vehicles.map((link) => getVehicleById(extractId(link)))
  );
  return (
    <div className="min-h-screen text-white">
      <CharacterHeader />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <CharacterHero 
          name={character.name}
          description="A character from the Star Wars universe with their own unique story and adventures."
        />

        <CharacterInfoCards
          birthYear={character.birth_year}
          gender={character.gender}
          homeworld={planet.name}
        />

        <div className="space-y-4">
          <ExpandableSection
            title="Films"
            icon="🎬"
            elements={films}
            cardType="film"
            itemColor="bg-purple-600/20 hover:bg-purple-600/30"
            itemIcon="⭐"
            emptyIcon="🌌"
            emptyMessage="No films associated with this character"
          />

          <ExpandableSection
            title="Species"
            icon="🧬"
            elements={species}
            cardType="species"
            itemColor="bg-green-600/20 hover:bg-green-600/30"
            itemIcon="🌿"
            emptyIcon="🌌"
            emptyMessage="No species information available"
          />

          <ExpandableSection
            title="Starships"
            icon="🚀"
            elements={starships}
            cardType="starship"
            itemColor="bg-blue-600/20 hover:bg-blue-600/30"
            itemIcon="🛸"
            emptyIcon="🌌"
            emptyMessage="No starships associated with this character"
          />

          <ExpandableSection
            title="Vehicles"
            icon="🏎️"
            elements={vehicles}
            cardType="vehicle"
            itemColor="bg-orange-600/20 hover:bg-orange-600/30"
            itemIcon="🛻"
            emptyIcon="🏜️"
            emptyMessage="No vehicles associated with this character"
          />
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <span>🌟</span>
            <span>Explore More Characters</span>
          </Link>
        </div>
      </main>

      <Footer className="text-center py-8 px-4 border-t border-purple-500/20 mt-16" />
    </div>
  );
} 