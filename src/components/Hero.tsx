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
      
      {/* Content Container - Positioned at bottom center */}
      <div 
        className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end"
        style={{ zIndex: 10, paddingBottom: '60px' }}
      >
        {/* White Fade Background - Behind text */}
        <div 
          className={`absolute inset-x-0 bottom-0 transition-opacity duration-1000 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            height: '350px',
            background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0) 100%)'
          }}
        ></div>
        
        {/* Text Content */}
        <div 
          className={`relative text-center px-6 transition-all duration-1000 ease-out ${
            showContent 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Headline */}
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
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
          
          {/* Scroll Indicator */}
          <div 
            className={`flex flex-col items-center transition-all duration-1000 delay-500 ${
              showContent 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-sm text-gray-500 mb-2">เลื่อนลงเพื่อดูเพิ่มเติม</span>
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
    </section>
  );
}
