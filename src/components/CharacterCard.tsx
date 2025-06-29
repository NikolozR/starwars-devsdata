import { extractId } from "@/lib/utils/extractId";
import Link from "next/link";

interface CharacterCardProps {
  id: string;
  name: string;
}

export default function CharacterCard({ id, name }: CharacterCardProps) {
  return (
    <Link 
      href={`/character/${extractId(id)}`}
      className="block group cursor-pointer bg-white/10 border border-purple-500/20 rounded-xl p-6 hover:bg-white/15 hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      tabIndex={0}
    >
      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold text-purple-900 group-hover:scale-110 transition-transform duration-300">
        {name.split(' ').map((n: string) => n[0]).join('')}
      </div>
      
      <h3 className="text-xl font-semibold text-center mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
        {name}
      </h3>
      <button
        className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
        tabIndex={-1}
        aria-label={`View details for ${name}`}
        type="button"
      >
        View Details ✨
      </button>
    </Link>
  );
} 