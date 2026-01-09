import { useState, useEffect } from 'react';

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Fade in video after a short delay
    const timer = setTimeout(() => setShowVideo(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Video Poster as fallback background with fade-in */}
      <img 
        src="/video-poster.jpg" 
        alt="Done Deal Academy" 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          showVideo ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 1 }}
      />
      
      {/* Video Background with fade-in */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video-poster.jpg"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && showVideo ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 2 }}
        onCanPlay={() => setVideoLoaded(true)}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="https://files.manuscdn.com/user_upload_by_module/session_file/110801028/vEMGyMiWVWIKgjvl.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
