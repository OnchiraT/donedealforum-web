import { useEffect, useRef, useState } from 'react';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  index?: number;
  backgroundImage?: string;
}

export function FeatureCard({ number, title, description, index = 0, backgroundImage }: FeatureCardProps) {
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

  const isDescThai = /[\u0E00-\u0E7F]/.test(description);

  if (backgroundImage) {
    return (
      <div
        ref={cardRef}
        className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: `${index * 150}ms`,
          aspectRatio: '3/4',
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 transition-all duration-500 group-hover:bg-black/60"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
        />

        {/* Blur overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backdropFilter: 'blur(2px)' }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end" style={{ padding: '28px' }}>
          {/* Number */}
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '3.5rem',
              lineHeight: 1,
              color: 'rgba(255, 255, 255, 0.2)',
              position: 'absolute',
              top: '24px',
              left: '28px',
            }}
          >
            {number}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '1.3rem',
              color: '#ffffff',
              marginBottom: '12px',
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: isDescThai ? "'IBM Plex Sans Thai', sans-serif" : "'Poppins', sans-serif",
              fontWeight: 300,
              fontSize: '0.875rem',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
            }}
          >
            {description}
          </p>

          {/* Accent line */}
          <div
            className="group-hover:w-16 transition-all duration-500"
            style={{
              marginTop: '16px',
              width: '32px',
              height: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
            }}
          />
        </div>
      </div>
    );
  }

  // Default card style (without background image)
  const isTitleThai = /[\u0E00-\u0E7F]/.test(title);

  return (
    <div
      ref={cardRef}
      className={`group relative p-8 border border-gray-100 hover:border-black/20 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className="text-5xl mb-4 opacity-20 group-hover:opacity-30 transition-opacity"
        style={{ color: 'var(--color-primary-red)', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
      >
        {number}
      </div>
      <h3
        className="mb-4"
        style={{ fontFamily: isTitleThai ? "'IBM Plex Sans Thai', sans-serif" : "'Poppins', sans-serif", fontWeight: 600, fontSize: '1.25rem' }}
      >
        {title}
      </h3>
      <p
        className="text-gray-600 text-base"
        style={{ fontFamily: isDescThai ? "'IBM Plex Sans Thai', sans-serif" : "'Poppins', sans-serif", lineHeight: 1.75 }}
      >
        {description}
      </p>
      <div className="mt-6 w-12 h-0.5 bg-black group-hover:w-20 transition-all duration-300"></div>
    </div>
  );
}
