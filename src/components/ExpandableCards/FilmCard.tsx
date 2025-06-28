import { Film } from "@/lib/types/film";

interface FilmCardProps {
  film: Film;
  className?: string;
}

export default function FilmCard({ film, className = "" }: FilmCardProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="font-semibold text-lg text-yellow-100">{film.title}</div>
      <div className="flex items-center gap-2 text-sm opacity-75">
        <span className="bg-yellow-400/20 px-2 py-1 rounded-full text-yellow-300 font-medium">
          Episode {film.episode_id}
        </span>
        <span className="text-gray-300">{film.release_date}</span>
      </div>
      {film.director && (
        <div className="text-xs opacity-60 text-gray-400">
          Directed by {film.director}
        </div>
      )}
    </div>
  );
} 