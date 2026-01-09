interface WhiteSectionProps {
  title: string;
  children: React.ReactNode;
  centered?: boolean;
  id?: string;
}

export function WhiteSection({ title, children, centered = false, id }: WhiteSectionProps) {
  return (
    <section id={id} className="luxury-texture bg-white py-24 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`mb-16 ${centered ? 'text-center' : ''}`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
