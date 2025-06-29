import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      
      {/* Navigation Bar */}
      <nav className="border-b border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-center">
            <Link 
              href="/characters"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-yellow-400/50 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span>🚀</span>
              <span>Browse Characters</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="text-6xl mb-4">🌌</div>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              Welcome to the Galaxy
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Explore the rich universe of Star Wars characters from across the galaxy. 
              Discover heroes, villains, droids, and creatures from every corner of this epic saga.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mb-12">
            <Link 
              href="/characters"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-purple-900 font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25"
            >
              <span className="text-2xl">🚀</span>
              <span>Explore Characters</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white/10 backdrop-blur-md border border-purple-500/20 rounded-xl hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">82+ Characters</h3>
            <p className="text-gray-300 text-sm">
              Browse through dozens of iconic characters from the Star Wars universe
            </p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-md border border-purple-500/20 rounded-xl hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Film Details</h3>
            <p className="text-gray-300 text-sm">
              Discover which movies, species, starships, and vehicles each character is connected to
            </p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-md border border-purple-500/20 rounded-xl hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Easy Search</h3>
            <p className="text-gray-300 text-sm">
              Find your favorite characters quickly with our intuitive search and navigation
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center py-12 border-t border-purple-500/20">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic mb-4">
            &ldquo;Do or do not, there is no try.&rdquo;
          </blockquote>
          <cite className="text-yellow-400 font-medium">— Yoda</cite>
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Ready to begin your journey through the stars?
          </p>
          <Link 
            href="/characters"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-yellow-400/50 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <span>Start Exploring</span>
            <span className="text-yellow-400">✨</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
