"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  className?: string;
}

export default function Pagination({
  totalPages = 5,
  className = "",
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) ?? 1;
  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => router.replace(`/characters?page=${i}`)}
            aria-current={i === currentPage ? "page" : undefined}
            className={`w-10 cursor-pointer h-10 rounded-lg flex items-center justify-center font-medium transition-all duration-200
              ${i === currentPage
                ? "!bg-yellow-400 text-purple-900 font-extrabold border-4 border-yellow-500 scale-110 z-10"
                : "bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-yellow-400/50 text-white"}
            `}
          >
            {i}
          </button>
        );
      }
      return pages;
    }

    const pageList: (number | string)[] = [];
    pageList.push(1);
    if (currentPage > 4) pageList.push("...");
    for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
      pageList.push(i);
    }
    if (currentPage < totalPages - 3) pageList.push("...");
    pageList.push(totalPages);

    for (const p of pageList) {
      if (typeof p === "string") {
        pages.push(<span key={p + Math.random()} className="text-gray-400 px-2">{p}</span>);
      } else {
        pages.push(
          <button
            key={p}
            onClick={() => router.replace(`/characters?page=${p}`)}
            aria-current={p === currentPage ? "page" : undefined}
            className={`w-10 cursor-pointer h-10 rounded-lg flex items-center justify-center font-medium transition-all duration-200
              ${p === currentPage
                ? "!bg-yellow-400 text-purple-900 font-extrabold border-4 border-yellow-500 scale-110 z-10"
                : "bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-yellow-400/50 text-white"}
            `}
          >
            {p}
          </button>
        );
      }
    }
    return pages;
  };

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <button
        className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          currentPage === 1
            ? "bg-white/5 border border-purple-500/20 text-gray-500 cursor-not-allowed"
            : "bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-yellow-400/50 text-white hover:shadow-lg hover:shadow-purple-500/25"
        }`}
        disabled={currentPage === 1}
        onClick={() => router.replace(`/characters?page=${currentPage - 1}`)}
      >
        <span className="text-lg">←</span>
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-2 align-middle">
        {renderPageNumbers()}
      </div>

      <button
        className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          currentPage === totalPages
            ? "bg-white/5 border border-purple-500/20 text-gray-500 cursor-not-allowed"
            : "bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-yellow-400/50 text-white hover:shadow-lg hover:shadow-purple-500/25"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => router.replace(`/characters?page=${currentPage + 1}`)}
      >
        <span className="hidden sm:inline">Next</span>
        <span className="text-lg">→</span>
      </button>
    </div>
  );
}
