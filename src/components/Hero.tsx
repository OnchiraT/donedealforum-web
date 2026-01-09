import { useState, useEffect } from 'react';

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after a short delay for smooth animation
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Video Poster as fallback background - using img tag for better compatibility */}
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
        className="absolute inset-0 bg-black/40"
        style={{ zIndex: 3 }}
      ></div>
      
      {/* Bottom Fade Gradient - White fade to indicate content below */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/90 to-transparent"
        style={{ zIndex: 4, height: '14rem' }}
      ></div>
      
      {/* Content at Bottom */}
      <div 
        className={`absolute bottom-0 left-0 right-0 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ zIndex: 5 }}
      >
        <div className="max-w-6xl mx-auto px-6 pb-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 drop-shadow-sm">
            Closing Deals is Just the Beginning!
          </h1>
          <p className="text-base md:text-xl text-gray-700 mb-8">
            Thailand's First Digital-Driven Commercial Leadership Academy
          </p>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-600 mb-2">เลื่อนลงเพื่อดูเพิ่มเติม</span>
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
