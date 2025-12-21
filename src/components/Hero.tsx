import worldMap from "figma:asset/c980c3d05e5dad193ddcf4db7a27f998ada70cd9.png";

export function Hero() {
  return (
    <section className="luxury-texture relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={worldMap}
          alt="World Map"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(10px)' }}
        />
      </div>
      
      {/* Subtle geometric shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-gray-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 border border-gray-100 opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img src="/logo.png" alt="Done Deal Forum" className="w-96 h-auto" style={{ mixBlendMode: 'darken' }} />
        </div>
        
        {/* Subtitle */}
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
          Master the Art of Negotiation
        </p>
        
        {/* Date */}
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-lg">
          <span className="text-lg">25 February 2025</span>
        </div>
        
        {/* Red accent line */}
        <div className="mt-16 w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--color-primary-red)' }}></div>
      </div>
    </section>
  );
}
