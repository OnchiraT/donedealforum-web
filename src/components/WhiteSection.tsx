import { useEffect, useRef, useState } from 'react';

interface WhiteSectionProps {
  title: string;
  children: React.ReactNode;
  centered?: boolean;
  id?: string;
}

export function WhiteSection({ title, children, centered = false, id }: WhiteSectionProps) {
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
      id={id} 
      className="luxury-texture bg-white py-24 relative scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className={`mb-16 transition-all duration-700 ease-out ${centered ? 'text-center' : ''} ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {title}
        </h2>
        <div 
          className={`transition-all duration-700 delay-200 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
