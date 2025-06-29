import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CharacterCard from "@/components/CharacterCard";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import { getPeople, searchPeople } from "@/lib/api/fetchPeople";
import { PeopleResponse } from "@/lib/types/swapiResponses";

export default async function CharactersPage({searchParams}: {searchParams: Promise<{page: number, search: string}>}) {
  const {page, search} = await searchParams;
  const pageNumber = page ?? 1;
  const people: PeopleResponse = search ? await searchPeople(search, pageNumber) : await getPeople(pageNumber); 
  const showingNumber = people.results.length;
  const totalPages = Math.ceil(people.count / 10);
  
  return (
    <div className="min-h-screen text-white">
      <Header 
        title="CHARACTERS"
        subtitle="Browse the Galaxy"
        description="✨ Discover heroes, villains, and everyone in between ✨"
      />
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

        <div className="mt-12 mb-8">
          <Pagination 
            totalPages={totalPages}
            className="mb-4"
          />
          
          <div className="text-center text-gray-400 text-sm">
            Showing {1 + (pageNumber - 1) * 10} - {showingNumber + (pageNumber - 1) * 10} of {people.count} characters
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 