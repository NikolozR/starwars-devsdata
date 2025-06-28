interface CharacterInfoCardsProps {
  birthYear: string;
  gender: string;
  homeworld: string;
}

export default function CharacterInfoCards({ birthYear, gender, homeworld }: CharacterInfoCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white/10 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 text-center">
        <div className="text-3xl mb-2">🎂</div>
        <div className="text-sm text-gray-400 mb-1">Birth Year</div>
        <div className="text-xl font-semibold">{birthYear}</div>
      </div>
      <div className="bg-white/10 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 text-center">
        <div className="text-3xl mb-2">👤</div>
        <div className="text-sm text-gray-400 mb-1">Gender</div>
        <div className="text-xl font-semibold">{gender}</div>
      </div>
      <div className="bg-white/10 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 text-center">
        <div className="text-3xl mb-2">🌍</div>
        <div className="text-sm text-gray-400 mb-1">Homeworld</div>
        <div className="text-xl font-semibold">{homeworld}</div>
      </div>
    </div>
  );
} 