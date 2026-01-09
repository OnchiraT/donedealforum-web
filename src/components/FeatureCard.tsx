import { useEffect, useRef, useState } from 'react';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({ number, title, description, index = 0 }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
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
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Check if text contains Thai characters
  const isTitleThai = /[\u0E00-\u0E7F]/.test(title);
  const isDescThai = /[\u0E00-\u0E7F]/.test(description);

  return (
    <div 
      ref={cardRef}
      className={`group relative p-8 border border-gray-100 hover:border-black/20 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`
      }}
    >
      {/* Number */}
      <div 
        className="text-5xl mb-4 opacity-20 group-hover:opacity-30 transition-opacity" 
        style={{ 
          color: 'var(--color-primary-red)',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700
        }}
      >
        {number}
      </div>
      
      {/* Title */}
      <h3 
        className="mb-4"
        style={{ 
          fontFamily: isTitleThai ? "'IBM Plex Sans Thai', sans-serif" : "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: '1.25rem'
        }}
      >
        {title}
      </h3>
      
      {/* Description */}
      <p 
        className="text-gray-600 text-base"
        style={{ 
          fontFamily: isDescThai ? "'IBM Plex Sans Thai', sans-serif" : "'Poppins', sans-serif",
          lineHeight: 1.75
        }}
      >
        {description}
      </p>
      
      {/* Accent line */}
      <div className="mt-6 w-12 h-0.5 bg-black group-hover:w-20 transition-all duration-300"></div>
    </div>
  );
}
