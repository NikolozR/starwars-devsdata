"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";


interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ 
  placeholder = "Search for characters from a galaxy far, far away..." 
}: SearchBarProps) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      if (value.length > 0) {
        router.replace(`/characters?search=${value}&page=1`);
      } else {
        router.replace(`/characters?page=1`);
      }
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mb-12">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="text-gray-400 text-xl">🔍</span>
        </div>
        <input
          type="text"
          onChange={handleChange}
          placeholder={placeholder}
          value={search}
          className="w-full pl-12 pr-6 py-4 bg-white/10 border border-purple-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:bg-white/15"
        />
      </div>
    </div>
  );
} 