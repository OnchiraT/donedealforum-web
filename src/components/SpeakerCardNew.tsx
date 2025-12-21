interface SpeakerCardNewProps {
  name: string;
  title: string;
  company: string;
  topic: string;
  imageUrl: string;
}

export function SpeakerCardNew({ name, title, company, topic, imageUrl }: SpeakerCardNewProps) {
  return (
    <div className="bg-[#2d2d2d] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
