export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* White fade background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <img 
          src="/donedeal-academy-logo.jpg" 
          alt="Done Deal Academy" 
          className="h-10 md:h-14 w-auto rounded-md shadow-sm"
        />
        
        {/* Optional: Navigation or CTA */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">เกี่ยวกับเรา</a>
          <a href="#courses" className="text-gray-700 hover:text-red-600 transition-colors font-medium">หลักสูตร</a>
          <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">ติดต่อ</a>
        </nav>
      </div>
    </header>
  );
}
