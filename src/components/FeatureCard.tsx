interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

export function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <div className="group relative p-8 border border-gray-100 hover:border-black/20 transition-all duration-300">
      {/* Number */}
      <div className="text-5xl mb-4 opacity-20 group-hover:opacity-30 transition-opacity" style={{ color: 'var(--color-primary-red)' }}>
        {number}
      </div>
      
      {/* Title */}
      <h3 className="mb-4">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-600 text-base">{description}</p>
      
      {/* Accent line */}
      <div className="mt-6 w-12 h-0.5 bg-black group-hover:w-20 transition-all duration-300"></div>
    </div>
  );
}
