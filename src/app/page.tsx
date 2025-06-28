import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CharacterCard from "@/components/CharacterCard";
import Footer from "@/components/Footer";
import { getPeople } from "@/lib/api/fetchPeople";
import { PeopleResponse } from "@/lib/types/swapiResponses";

export default async function CharactersPage() {
  const people: PeopleResponse = await getPeople();

  return (
    <div className="min-h-screen text-white">
      <Header />
      <SearchBar />

      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {people.results.map((character) => (
            <CharacterCard
              key={character.url}
              id={character.url}
              name={character.name}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
