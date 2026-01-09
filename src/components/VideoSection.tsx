import { useEffect, useRef, useState } from 'react';

interface VideoSectionProps {
  videoUrl: string;
  title: string;
  description: string;
  videoPosition?: 'left' | 'right';
}

export function VideoSection({ videoUrl, title, description, videoPosition = 'left' }: VideoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Check if text contains Thai characters
  const isTitleThai = /[\u0E00-\u0E7F]/.test(title);
  const isDescThai = /[\u0E00-\u0E7F]/.test(description);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[500px] flex items-center bg-black overflow-hidden"
    >
      {/* Background Video with Fade-in */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <video 
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content with Fade-in Animation */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 w-full">
        <div className={`max-w-lg ${videoPosition === 'right' ? 'ml-auto text-right' : ''}`}>
          <h2 
            className={`text-white mb-6 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              fontFamily: isTitleThai ? "'IBM Plex Sans Thai', sans-serif" : "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '2rem'
            }}
          >
            {title}
          </h2>
          <p 
            className={`text-white/90 mb-8 transition-all duration-1000 delay-300 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              fontFamily: isDescThai ? "'IBM Plex Sans Thai', sans-serif" : "'Poppins', sans-serif",
              fontSize: '1.125rem',
              lineHeight: 1.75
            }}
          >
            {description}
          </p>
          <div 
            className={`w-16 h-1 transition-all duration-1000 delay-500 ease-out ${videoPosition === 'right' ? 'ml-auto' : ''} ${
              isVisible 
                ? 'opacity-100 scale-x-100' 
                : 'opacity-0 scale-x-0'
            }`} 
            style={{ 
              backgroundColor: 'var(--color-primary-red)',
              transformOrigin: videoPosition === 'right' ? 'right' : 'left'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
