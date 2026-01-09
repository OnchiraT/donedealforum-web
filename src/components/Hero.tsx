import { useState, useEffect } from 'react';

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after a short delay for smooth animation
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '700px' }}
    >
      {/* Video Poster as fallback background */}
      <img 
        src="/video-poster.jpg" 
        alt="Done Deal Academy" 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      />
      
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video-poster.jpg"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 2 }}
        onCanPlay={() => setVideoLoaded(true)}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="https://files.manuscdn.com/user_upload_by_module/session_file/110801028/vEMGyMiWVWIKgjvl.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-black/30"
        style={{ zIndex: 3 }}
      ></div>
      
      {/* Bottom Content Area with White Fade Background */}
      <div 
        className="absolute bottom-0 left-0 right-0"
        style={{ zIndex: 4 }}
      >
        {/* White Fade Gradient Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent"
          style={{ height: '100%' }}
        ></div>
        
        {/* Content */}
        <div 
          className={`relative px-6 pb-12 pt-24 transition-all duration-1000 ease-out ${
            showContent 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              style={{ 
                textShadow: '0 2px 4px rgba(255,255,255,0.5)',
                animationDelay: '0.2s'
              }}
            >
              Closing Deals is Just the Beginning!
            </h1>
            
            {/* Subheadline */}
            <p 
              className={`text-lg md:text-xl text-gray-700 mb-8 transition-all duration-1000 delay-300 ${
                showContent 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Thailand's First Digital-Driven Commercial Leadership Academy
            </p>
            
            {/* Scroll Indicator - Simple and Elegant */}
            <div 
              className={`flex flex-col items-center transition-all duration-1000 delay-500 ${
                showContent 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-sm text-gray-500 mb-3">เลื่อนลงเพื่อดูเพิ่มเติม</span>
              <div className="animate-bounce">
                <svg 
                  className="w-5 h-5 text-red-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
