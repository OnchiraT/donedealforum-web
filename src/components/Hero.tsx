import { useState, useEffect } from 'react';

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video-poster.jpg"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="https://files.manuscdn.com/user_upload_by_module/session_file/110801028/vEMGyMiWVWIKgjvl.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback background while video loads */}
      <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Bottom Fade Gradient - White fade to indicate content below */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      
      {/* Content at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto px-6 pb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow-sm">
            Closing Deals is Just the Beginning!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Thailand's First Digital-Driven Commercial Leadership Academy
          </p>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-600 mb-2">เลื่อนลงเพื่อดูเพิ่มเติม</span>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
