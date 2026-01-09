import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* White fade background - more solid when scrolled */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-gradient-to-b from-white via-white/95 to-transparent'
      }`}></div>
      
      <div className={`relative max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3 md:py-4'
      }`}>
        <a href="#">
          <img 
            src="/donedeal-academy-logo.jpg" 
            alt="Done Deal Academy" 
            className={`w-auto rounded-md shadow-sm transition-all duration-300 ${
              scrolled ? 'h-8 md:h-10' : 'h-10 md:h-14'
            }`}
          />
        </a>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">เกี่ยวกับเรา</a>
          <a href="#courses" className="text-gray-700 hover:text-red-600 transition-colors font-medium">หลักสูตร</a>
          <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">ติดต่อ</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
