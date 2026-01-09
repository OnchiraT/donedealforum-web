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

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[500px] flex items-center bg-black overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
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
            className={`text-white mb-6 transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {title}
          </h2>
          <p 
            className={`text-white/90 mb-8 transition-all duration-700 delay-200 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {description}
          </p>
          <div 
            className={`w-16 h-1 transition-all duration-700 delay-400 ease-out ${videoPosition === 'right' ? 'ml-auto' : ''} ${
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
