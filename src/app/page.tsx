import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CharacterCard from "@/components/CharacterCard";
import Footer from "@/components/Footer";

export default function CharactersPage() {
  const mockCharacters = [
    { id: "1", name: "Luke Skywalker" },
    { id: "2", name: "Princess Leia" },
    { id: "3", name: "Han Solo" },
    { id: "4", name: "Darth Vader" },
    { id: "5", name: "Obi-Wan Kenobi" },
    { id: "6", name: "Yoda" },
    { id: "7", name: "C-3PO" },
    { id: "8", name: "R2-D2" },
    { id: "9", name: "Chewbacca" },
    { id: "10", name: "Lando Calrissian" },
    { id: "11", name: "Padmé Amidala" },
    { id: "12", name: "Anakin Skywalker" },
  ];

  return (
    <div className="min-h-screen text-white">
      <Header />
      <SearchBar />

      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
