import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <div className="mb-12">
          <div className="text-6xl mb-6">🌌</div>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Welcome to the Galaxy
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Explore the Star Wars universe. Discover heroes, villains, droids, and creatures from a galaxy far, far away.
          </p>
          <Link 
            href="/characters"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-purple-900 font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25"
          >
            <span className="text-2xl">🚀</span>
            <span>Browse Characters</span>
            <span className="text-xl">→</span>
          </Link>
        </div>
        <div className="text-center py-12 border-t border-purple-500/20 w-full">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic mb-4">
            &ldquo;Do or do not, there is no try.&rdquo;
          </blockquote>
          <cite className="text-yellow-400 font-medium">— Yoda</cite>
        </div>
      </main>
      <Footer />
    </div>
  );
}
