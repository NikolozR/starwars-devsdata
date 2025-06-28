interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ 
  placeholder = "Search for characters from a galaxy far, far away..." 
}: SearchBarProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 mb-12">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="text-gray-400 text-xl">🔍</span>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-12 pr-6 py-4 bg-white/10 border border-purple-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <span className="text-gray-400 text-sm">Press Enter</span>
        </div>
      </div>
    </div>
  );
} 