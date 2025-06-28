import Link from "next/link";
import CharacterHeader from "@/components/CharacterHeader";
import CharacterHero from "@/components/CharacterHero";
import CharacterInfoCards from "@/components/CharacterInfoCards";
import ExpandableSection from "@/components/ExpandableSection";
import Footer from "@/components/Footer";


export default function CharacterDetails() {
  const getCharacterData = (id: string) => {
    const characters = {
      "1": {
        name: "Luke Skywalker",
        description: "A legendary Jedi Knight who helped restore freedom to the galaxy and destroy the Galactic Empire.",
        birth_year: "19BBY",
        gender: "Male",
        homeworld: "Tatooine",
        films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "Revenge of the Sith"],
        species: ["Human"],
        starships: ["X-wing", "Imperial Shuttle"],
        vehicles: ["Snowspeeder", "Imperial Speeder Bike"]
      },
      "2": {
        name: "Princess Leia",
        description: "A leader of the Rebel Alliance and princess of the planet Alderaan.",
        birth_year: "19BBY",
        gender: "Female",
        homeworld: "Alderaan",
        films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "Revenge of the Sith"],
        species: ["Human"],
        starships: [],
        vehicles: ["Speeder Bike"]
      },
      "3": {
        name: "Han Solo",
        description: "A smuggler turned Rebel Alliance general who captained the Millennium Falcon.",
        birth_year: "29BBY",
        gender: "Male",
        homeworld: "Corellia",
        films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"],
        species: ["Human"],
        starships: ["Millennium Falcon", "Imperial Shuttle"],
        vehicles: []
      }
    };
    
    return characters[id as keyof typeof characters] || {
      name: "Unknown Character",
      description: "A mysterious being from the Star Wars universe.",
      birth_year: "Unknown",
      gender: "Unknown",
      homeworld: "Unknown",
      films: ["Various Star Wars films"],
      species: ["Unknown"],
      starships: ["Unknown"],
      vehicles: ["Unknown"]
    };
  };

  const character = getCharacterData("1");

  return (
    <div className="min-h-screen text-white">
      <CharacterHeader />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <CharacterHero 
          name={character.name}
          description={character.description}
        />

        <CharacterInfoCards
          birthYear={character.birth_year}
          gender={character.gender}
          homeworld={character.homeworld}
        />

        <div className="space-y-4">
          <ExpandableSection
            title="Films"
            icon="🎬"
            items={character.films}
            itemColor="bg-purple-600/20 hover:bg-purple-600/30"
            itemIcon="⭐"
            emptyIcon="🌌"
            emptyMessage="No films associated with this character"
            renderAsGrid={true}
          />

          <ExpandableSection
            title="Species"
            icon="🧬"
            items={character.species}
            itemColor="bg-green-600/20 hover:bg-green-600/30"
            itemIcon="🌿"
            emptyIcon="🌌"
            emptyMessage="No species information available"
            renderAsGrid={false}
          />

          <ExpandableSection
            title="Starships"
            icon="🚀"
            items={character.starships}
            itemColor="bg-blue-600/20 hover:bg-blue-600/30"
            itemIcon="🛸"
            emptyIcon="🌌"
            emptyMessage="No starships associated with this character"
            renderAsGrid={true}
          />

          <ExpandableSection
            title="Vehicles"
            icon="🏎️"
            items={character.vehicles}
            itemColor="bg-orange-600/20 hover:bg-orange-600/30"
            itemIcon="🛻"
            emptyIcon="🏜️"
            emptyMessage="No vehicles associated with this character"
            renderAsGrid={true}
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