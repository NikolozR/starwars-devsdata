interface HeaderProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Header({ 
  title = "STAR WARS", 
  subtitle = "Character Browser",
  description = "✨ Explore the galaxy's greatest heroes and villains ✨"
}: HeaderProps) {
  return (
    <header className="text-center py-12 px-4">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
        {subtitle}
      </p>
      <div className="mt-6 text-gray-400 text-sm">
        {description}
      </div>
    </header>
  );
} 