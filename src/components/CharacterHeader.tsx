import Link from "next/link";

interface CharacterHeaderProps {
  title?: string;
}

export default function CharacterHeader({ 
  title = "Character Details"
}: CharacterHeaderProps) {
  return (
    <header className="px-4 py-6 border-b border-purple-500/20">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-purple-500/30 rounded-lg transition-all duration-300 hover:border-yellow-400/50"
        >
          <span className="text-xl">←</span>
          <span>Back to Characters</span>
        </Link>
        <div className="text-gray-400">
          <span className="text-yellow-400">✨</span> {title}
        </div>
      </div>
    </header>
  );
} 