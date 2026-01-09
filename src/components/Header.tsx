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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Compact Header Row */}
        <div className={`flex items-center justify-center transition-all duration-500 ${
          scrolled ? 'py-1' : 'py-2'
        }`}>
          {/* Center Logo */}
          <a href="#" className="block">
            <img 
              src="/donedeal-academy-logo.jpg" 
              alt="Done Deal Academy" 
              className={`transition-all duration-500 ${
                scrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'
              }`}
              style={{ 
                width: 'auto',
                maxWidth: scrolled ? '140px' : '180px'
              }}
            />
          </a>
        </div>
        
        {/* Navigation Row */}
        <nav className={`flex items-center justify-center border-t transition-all duration-500 ${
          scrolled 
            ? 'border-gray-200 py-1' 
            : 'border-gray-100 py-1.5'
        }`}>
          <div 
            className="flex items-center justify-center"
            style={{ gap: '60px' }}
          >
            <a 
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-red-600 text-gray-800 cursor-pointer"
              style={{ letterSpacing: '0.1em' }}
            >
              เกี่ยวกับเรา
            </a>
            <a 
              href="#courses"
              onClick={(e) => scrollToSection(e, 'courses')}
              className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-red-600 text-gray-800 cursor-pointer"
              style={{ letterSpacing: '0.1em' }}
            >
              หลักสูตร
            </a>
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-red-600 text-gray-800 cursor-pointer"
              style={{ letterSpacing: '0.1em' }}
            >
              ติดต่อ
            </a>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden absolute top-2 right-4 p-2 text-gray-800"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
