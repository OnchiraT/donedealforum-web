import { useEffect, useRef, useState } from 'react';

interface ImageSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
}

export function ImageSection({ imageUrl, title, description, imagePosition = 'left' }: ImageSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setScrollY(Math.max(0, Math.min(1, scrollProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[500px] flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 30}px) scale(1.1)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content with Fade-in Animation */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 w-full">
        <div className={`max-w-lg ${imagePosition === 'right' ? 'ml-auto text-right' : ''}`}>
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
            className={`w-16 h-1 transition-all duration-700 delay-400 ease-out ${imagePosition === 'right' ? 'ml-auto' : ''} ${
              isVisible 
                ? 'opacity-100 scale-x-100' 
                : 'opacity-0 scale-x-0'
            }`} 
            style={{ 
              backgroundColor: 'var(--color-primary-red)',
              transformOrigin: imagePosition === 'right' ? 'right' : 'left'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
