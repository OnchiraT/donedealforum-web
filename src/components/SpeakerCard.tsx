interface SpeakerCardProps {
  name: string;
  title: string;
  company: string;
}

export function SpeakerCard({ name, title, company }: SpeakerCardProps) {
  return (
    <div className="group">
      {/* Avatar placeholder */}
      <div className="aspect-square bg-gray-100 mb-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl" style={{ color: 'var(--color-primary-red)' }}>
          {name.charAt(0)}
        </div>
      </div>
      
      {/* Info */}
      <h3 className="mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className="text-sm" style={{ color: 'var(--color-primary-red)' }}>{company}</p>
    </div>
  );
}
