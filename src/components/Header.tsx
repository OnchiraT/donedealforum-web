export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white via-white/90 to-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <img 
          src="/donedeal-academy-logo.jpg" 
          alt="Done Deal Academy" 
          className="h-12 md:h-16 w-auto rounded"
        />
      </div>
    </header>
  );
}
