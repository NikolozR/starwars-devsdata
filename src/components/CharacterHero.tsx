interface CharacterHeroProps {
  name: string;
  description: string;
}

export default function CharacterHero({ name, description }: CharacterHeroProps) {
  return (
    <div className="text-center mb-12">
      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-4xl font-bold text-purple-900 shadow-2xl shadow-yellow-400/25">
        {name.split(' ').map((n: string) => n[0]).join('')}
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
        {name}
      </h1>
      
      <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
} 