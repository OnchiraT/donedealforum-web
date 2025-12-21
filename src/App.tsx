import { Hero } from './components/Hero';
import { ImageSection } from './components/ImageSection';
import { VideoSection } from './components/VideoSection';
import { WhiteSection } from './components/WhiteSection';
import { FeatureCard } from './components/FeatureCard';
import { SpeakerCardNew } from './components/SpeakerCardNew';
import { Footer } from './components/Footer';

export default function App() {
  const features = [
    {
      number: "01",
      title: "Strategic Negotiation",
      description: "Learn proven techniques to navigate complex business negotiations and close deals effectively."
    },
    {
      number: "02",
      title: "Deal Structuring",
      description: "Master the art of creating win-win scenarios that benefit all parties involved."
    },
    {
      number: "03",
      title: "Communication Skills",
      description: "Develop persuasive communication strategies that build trust and rapport."
    },
    {
      number: "04",
      title: "Crisis Management",
      description: "Handle challenging situations and turn potential failures into successful outcomes."
    }
  ];

  const speakers = [
    {
      name: "Apichat Leenutaphong",
      title: "Founder and CEO",
      company: "Sharich Holding (Lamborghini Bangkok)",
      topic: "Commercial Mindset: Deal or Die",
      imageUrl: "/speaker1.png"
    },
    {
      name: "Siradej Donavanik",
      title: "VP Development Global",
      company: "Dusit International",
      topic: "Service is the New Era of Sales",
      imageUrl: "/speaker2.png"
    },
    {
      name: "Nantamalee Phirombhakdi",
      title: "Managing Director",
      company: "Cavallino Motors Co., Ltd. (Ferrari Thailand)",
      topic: "Connection to Conversion",
      imageUrl: "/speaker3.png"
    },
    {
      name: "Korn Narongdej",
      title: "Chairman of the Executive Committee & Director",
      company: "Raimon Land",
      topic: "Mastering the Luxury Sales Pitch",
      imageUrl: "/speaker4.png"
    },
    {
      name: "CK Cheong",
      title: "CEO & Founder",
      company: "Fastwork",
      topic: "Building a Powerful Personal Brand for CEOs",
      imageUrl: "/speaker5.png"
    },
    {
      name: "Dr. Saengsuk Pitayanukul",
      title: "Managing Director",
      company: "Siam Health Group Co., Ltd.",
      topic: "Navigating the Challenges of Global Sales Expansion",
      imageUrl: "/speaker6.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Video Section 1 - Introduction */}
      <VideoSection
        videoUrl="/video.mp4"
        title="The Art of Agreement"
        description="Where successful partnerships begin. Join industry leaders in mastering the fundamentals of high-stakes negotiation."
        videoPosition="left"
      />

      {/* White Section - About */}
      <WhiteSection title="About the Forum" centered={false}>
        <div className="max-w-3xl">
          <p className="text-xl mb-6 text-gray-700">
            Done Deal Forum brings together the world's leading negotiators, dealmakers, and business strategists for an intensive day of learning and networking.
          </p>
          <p className="text-gray-600 mb-8">
            This exclusive event features workshops, panel discussions, and real-world case studies that will transform the way you approach negotiations. Whether you're closing multi-million dollar deals or navigating everyday business challenges, you'll gain practical insights that deliver immediate results.
          </p>
          <div className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors cursor-pointer rounded-lg">
            Register Now
          </div>
        </div>
      </WhiteSection>

      {/* Image Section 1 - Real-World Scenarios */}
      <ImageSection
        imageUrl="/real-world-clean.png"
        title="Real-World Scenarios"
        description="Practice negotiation strategies in interactive sessions designed to simulate actual business environments."
        imagePosition="right"
      />

      {/* White Section - Key Features */}
      <WhiteSection title="What You'll Learn" centered={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </WhiteSection>

      {/* Image Section 2 - Expert Insights */}
      <ImageSection
        imageUrl="/expert-insights-clean.png"
        title="Expert Insights"
        description="Learn from negotiators who have closed billions in deals across diverse industries and markets."
        imagePosition="left"
      />

      {/* White Section - Speakers */}
      <WhiteSection title="Featured Speakers" centered={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCardNew
              key={index}
              name={speaker.name}
              title={speaker.title}
              company={speaker.company}
              topic={speaker.topic}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </WhiteSection>

      {/* Image Section 3 - Network & Connect */}
      <ImageSection
        imageUrl="/network-connect-clean.png"
        title="Network & Connect"
        description="Build valuable relationships with fellow attendees, speakers, and industry leaders in an intimate setting."
        imagePosition="right"
      />

      {/* White Section - Event Details */}
      <WhiteSection title="Event Details" centered={true}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-4" style={{ color: 'var(--color-primary-red)' }}>📅</div>
            <h3 className="mb-3">Date</h3>
            <p className="text-gray-600">25 February 2025</p>
            <p className="text-sm text-gray-500">9:00 AM - 6:00 PM</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4" style={{ color: 'var(--color-primary-red)' }}>📍</div>
            <h3 className="mb-3">Location</h3>
            <p className="text-gray-600">Grand Ballroom</p>
            <p className="text-sm text-gray-500">Bangkok, Thailand</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4" style={{ color: 'var(--color-primary-red)' }}>💼</div>
            <h3 className="mb-3">Format</h3>
            <p className="text-gray-600">Hybrid Event</p>
            <p className="text-sm text-gray-500">In-Person & Virtual</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="mb-6">Ready to Master Negotiation?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors rounded-lg">
              Register Now
            </button>
            <button className="px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-colors rounded-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </WhiteSection>

      {/* Video Section 2 - Final CTA */}
      <VideoSection
        videoUrl="/video.mp4"
        title="Join Us"
        description="Be part of the most anticipated business negotiation event of the year. Secure your spot today."
        videoPosition="left"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
