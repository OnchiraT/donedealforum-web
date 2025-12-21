interface VideoSectionProps {
  videoUrl: string;
  title: string;
  description: string;
  videoPosition?: 'left' | 'right';
}

export function VideoSection({ videoUrl, title, description, videoPosition = 'left' }: VideoSectionProps) {
  return (
    <section className="relative min-h-[500px] flex items-center bg-black overflow-hidden">
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
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 w-full">
        <div className={`max-w-lg ${videoPosition === 'right' ? 'ml-auto text-right' : ''}`}>
          <h2 className="text-white mb-6">{title}</h2>
          <p className="text-white/90 mb-8">{description}</p>
          <div className={`w-16 h-1 ${videoPosition === 'right' ? 'ml-auto' : ''}`} style={{ backgroundColor: 'var(--color-primary-red)' }}></div>
        </div>
      </div>
    </section>
  );
}
