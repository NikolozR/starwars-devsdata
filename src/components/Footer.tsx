interface FooterProps {
  message?: string;
  className?: string;
}

export default function Footer({ 
  message = "May the Force be with you 🌟",
  className = "text-center py-8 px-4 border-t border-purple-500/20"
}: FooterProps) {
  return (
    <footer className={className}>
      <p className="text-gray-400 text-sm">
        {message}
      </p>
    </footer>
  );
} 