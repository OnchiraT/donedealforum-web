import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // Fade in header after a short delay
    const timer = setTimeout(() => setShowHeader(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 transition-all duration-700 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      } ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Single Row: Logo + Name on left, Nav on right */}
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-3'
        }`}>
          {/* Left: Logo + Academy Name */}
          <a href="#" className="flex items-center" style={{ gap: '14px', textDecoration: 'none' }}>
            <img 
              src="/deal-master-logo.png" 
              alt="Deal Master Academy" 
              className="transition-all duration-500"
              style={{ 
                height: scrolled ? '36px' : '44px',
                width: 'auto'
              }}
            />
            <div className="flex flex-col" style={{ gap: '0px' }}>
              <span 
                className="transition-all duration-500"
                style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: scrolled ? '15px' : '17px',
                  color: '#8B1A1A',
                  letterSpacing: '0.02em',
                  lineHeight: 1.2
                }}
              >
                Deal Master
              </span>
              <span 
                className="transition-all duration-500"
                style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: scrolled ? '10px' : '11px',
                  color: '#666',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase' as const,
                  lineHeight: 1.2
                }}
              >
                Academy
              </span>
            </div>
          </a>

          {/* Right: Navigation */}
          <nav className="hidden md:flex items-center" style={{ gap: '48px' }}>
            <a 
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-sm font-medium tracking-wide transition-colors duration-300 hover:text-red-700 text-gray-700 cursor-pointer"
              style={{ letterSpacing: '0.08em', fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: '13px' }}
            >
              เกี่ยวกับเรา
            </a>
            <a 
              href="#courses"
              onClick={(e) => scrollToSection(e, 'courses')}
              className="text-sm font-medium tracking-wide transition-colors duration-300 hover:text-red-700 text-gray-700 cursor-pointer"
              style={{ letterSpacing: '0.08em', fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: '13px' }}
            >
              หลักสูตร
            </a>
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-sm font-medium tracking-wide transition-colors duration-300 hover:text-red-700 text-gray-700 cursor-pointer"
              style={{ letterSpacing: '0.08em', fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: '13px' }}
            >
              ติดต่อ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
