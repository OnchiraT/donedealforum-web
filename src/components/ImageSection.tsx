interface ImageSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
}

export function ImageSection({ imageUrl, title, description, imagePosition = 'left' }: ImageSectionProps) {
  return (
    <section className="relative min-h-[500px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 w-full">
        <div className={`max-w-lg ${imagePosition === 'right' ? 'ml-auto text-right' : ''}`}>
          <h2 className="text-white mb-6">{title}</h2>
          <p className="text-white/90 mb-8">{description}</p>
          <div className={`w-16 h-1 ${imagePosition === 'right' ? 'ml-auto' : ''}`} style={{ backgroundColor: 'var(--color-primary-red)' }}></div>
        </div>
      </div>
    </section>
  );
}