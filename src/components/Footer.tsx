import { useEffect, useRef, useState } from 'react';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`luxury-texture bg-white border-t border-gray-100 py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div className={`transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center mb-4" style={{ gap: '12px' }}>
              <img src="/deal-master-logo.png" alt="Deal Master Academy" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span 
                  style={{ 
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#8B1A1A',
                    letterSpacing: '0.02em',
                    lineHeight: 1.2
                  }}
                >
                  Deal Master
                </span>
                <span 
                  style={{ 
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: '10px',
                    color: '#666',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase' as const,
                    lineHeight: 1.2
                  }}
                >
                  Academy
                </span>
              </div>
            </div>
            <p 
              className="text-sm text-gray-600 mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Closing Deals is Just the Beginning!
            </p>
            <p 
              className="text-sm text-gray-500"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Thailand's First Digital-Driven Commercial Leadership Academy
            </p>
          </div>
          
          {/* Contact */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h3 
              className="text-lg mb-4 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <a 
                href="mailto:missdonedeal.dda@gmail.com" 
                className="hover:text-red-600 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                missdonedeal.dda@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-600">
              <a 
                href="tel:0613104694" 
                className="hover:text-red-600 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                061 310 4694
              </a>
            </p>
          </div>
          
          {/* Social Media */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h3 
              className="text-lg mb-4 font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Follow Us
            </h3>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.facebook.com/donedealacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Facebook: Deal Master Academy
              </a>
              <a 
                href="https://www.instagram.com/donedealacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Instagram: @dealmasteracademy
              </a>
              <a 
                href="https://www.tiktok.com/@done.deal.academy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-black transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                TikTok: @deal.master.academy
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className={`pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p 
            className="text-sm text-gray-500"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            © 2025 Deal Master Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span 
              className="text-sm text-gray-500"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              #DealMasterAcademy
            </span>
            <span 
              className="text-sm text-gray-500"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              #WhereDealsHappen
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
