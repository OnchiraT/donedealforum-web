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
    <header 
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Header Row - Cartier Style */}
        <div className={`flex items-center justify-center transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}>
          {/* Center Logo - Large and Prominent */}
          <a href="#" className="block">
            <img 
              src="/donedeal-academy-logo.jpg" 
              alt="Done Deal Academy" 
              className={`transition-all duration-500 ${
                scrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'
              }`}
              style={{ 
                width: 'auto',
                maxWidth: scrolled ? '180px' : '240px'
              }}
            />
          </a>
        </div>
        
        {/* Navigation Row - Separate line like Cartier */}
        <nav className={`flex items-center justify-center border-t transition-all duration-500 ${
          scrolled 
            ? 'border-gray-200 py-2' 
            : 'border-gray-100 py-3'
        }`}>
          <div 
            className="flex items-center justify-center"
            style={{ gap: '60px' }}
          >
            <a 
              href="#about" 
              className="text-sm md:text-base font-medium tracking-wide uppercase transition-colors duration-300 hover:text-red-600 text-gray-800"
              style={{ letterSpacing: '0.1em' }}
            >
              เกี่ยวกับเรา
            </a>
            <a 
              href="#courses" 
              className="text-sm md:text-base font-medium tracking-wide uppercase transition-colors duration-300 hover:text-red-600 text-gray-800"
              style={{ letterSpacing: '0.1em' }}
            >
              หลักสูตร
            </a>
            <a 
              href="#contact" 
              className="text-sm md:text-base font-medium tracking-wide uppercase transition-colors duration-300 hover:text-red-600 text-gray-800"
              style={{ letterSpacing: '0.1em' }}
            >
              ติดต่อ
            </a>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu Button - Only visible on mobile */}
      <button 
        className="md:hidden absolute top-4 right-4 p-2 text-gray-800"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
