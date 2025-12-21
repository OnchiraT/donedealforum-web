interface WhiteSectionProps {
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}

export function WhiteSection({ title, children, centered = false }: WhiteSectionProps) {
  return (
    <section className="luxury-texture bg-white py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`mb-16 ${centered ? 'text-center' : ''}`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
