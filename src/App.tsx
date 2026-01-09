import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { ImageSection } from './components/ImageSection';
import { VideoSection } from './components/VideoSection';
import { WhiteSection } from './components/WhiteSection';
import { FeatureCard } from './components/FeatureCard';
import { Footer } from './components/Footer';

export default function App() {
  const features = [
    {
      number: "01",
      title: "Sales Mastery",
      description: "เรียนรู้เทคนิคการขายระดับสูงที่ปฏิวัติวงการ Sales ด้วยแนวคิดใหม่ที่ผสมผสาน Data และ Empathy"
    },
    {
      number: "02",
      title: "Deal Closing",
      description: "พัฒนาทักษะการปิดดีลระดับมืออาชีพ สร้างความสำเร็จในทุกการเจรจาต่อรอง"
    },
    {
      number: "03",
      title: "Leadership Development",
      description: "สร้างภาวะผู้นำด้านการขายและการพาณิชย์ที่พร้อมนำทีมสู่ความสำเร็จ"
    },
    {
      number: "04",
      title: "Business Networking",
      description: "เชื่อมต่อกับชุมชน Real Deal Maker และสร้างเครือข่ายธุรกิจระดับ CEO"
    }
  ];

  const programs = [
    {
      number: "01",
      title: "Executive Sales Program",
      description: "หลักสูตรพัฒนาทักษะการขายสำหรับผู้บริหารระดับสูง เน้นการสร้างกลยุทธ์และการตัดสินใจ"
    },
    {
      number: "02",
      title: "High-Value Deal Making",
      description: "เรียนรู้ศิลปะการปิดดีลมูลค่าสูง จากผู้เชี่ยวชาญที่มีประสบการณ์จริง"
    },
    {
      number: "03",
      title: "Digital Sales Transformation",
      description: "เปลี่ยนผ่านสู่ยุคดิจิทัลด้วยเครื่องมือและเทคนิคการขายสมัยใหม่"
    },
    {
      number: "04",
      title: "Personal Branding for Leaders",
      description: "สร้างแบรนด์ส่วนตัวที่แข็งแกร่งเพื่อเพิ่มความน่าเชื่อถือและโอกาสทางธุรกิจ"
    }
  ];

 return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
      <Header />
      <Hero />

      {/* About Section */}
      <WhiteSection id="about" title="About Done Deal Academy" centered={false}>
        <div className="max-w-3xl">
          <p 
            className="text-xl mb-6 text-gray-700"
            style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", lineHeight: 1.8 }}
          >
            <strong>Done Deal Academy</strong> คือสถาบันพัฒนาทักษะด้านการขายและการเจรจาต่อรองระดับพรีเมียมแห่งแรกของประเทศไทย ที่ขับเคลื่อนด้วยแนวคิด Digital-Driven Commercial Leadership
          </p>
          <p 
            className="text-gray-600 mb-6"
            style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", lineHeight: 1.8 }}
          >
            เราเชื่อว่า <em style={{ fontFamily: "'Poppins', sans-serif" }}>"Closing Deals is Just the Beginning!"</em> การปิดดีลเป็นเพียงจุดเริ่มต้นของความสำเร็จ เราพร้อมพาคุณไปสู่ระดับถัดไปของเกมธุรกิจ ด้วยหลักสูตรที่ออกแบบมาเฉพาะสำหรับ Entrepreneurs, CEOs และ Sales Professionals
          </p>
          <p 
            className="text-gray-600 mb-8"
            style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", lineHeight: 1.8 }}
          >
            ด้วยแนวคิด <strong style={{ fontFamily: "'Poppins', sans-serif" }}>"AI gives you data, but Empathy gives you deals"</strong> เราผสมผสานเทคโนโลยีและความเข้าใจมนุษย์เพื่อสร้างนักขายยุคใหม่ที่พร้อมพิชิตทุกดีล
          </p>
        </div>
      </WhiteSection>

      {/* Image Section - Real Deal Makers */}
      <ImageSection
        imageUrl="/real-world-clean.png"
        title="Real Deal Maker Community"
        description="เข้าร่วมชุมชนนักปิดดีลตัวจริง แลกเปลี่ยนประสบการณ์และสร้างเครือข่ายธุรกิจกับผู้นำจากหลากหลายอุตสาหกรรม"
        imagePosition="right"
      />

      {/* Why Choose Us Section */}
      <WhiteSection title="ทำไมต้อง Done Deal Academy" centered={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              number={feature.number}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </WhiteSection>

      {/* Image Section - Expert Insights */}
      <ImageSection
        imageUrl="/expert-insights-clean.png"
        title="Expert-Led Training"
        description="เรียนรู้จากผู้เชี่ยวชาญที่มีประสบการณ์ปิดดีลมูลค่าหลายพันล้านบาท จากหลากหลายอุตสาหกรรมชั้นนำ"
        imagePosition="left"
      />

      {/* Programs Section */}
      <WhiteSection id="courses" title="หลักสูตรของเรา" centered={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <FeatureCard
              key={index}
              number={program.number}
              title={program.title}
              description={program.description}
              index={index}
            />
          ))}
        </div>
      </WhiteSection>

      {/* Image Section - Network & Connect */}
      <ImageSection
        imageUrl="/network-connect-clean.png"
        title="Exclusive Business Network"
        description="สร้างความสัมพันธ์ทางธุรกิจที่มีคุณค่ากับผู้นำองค์กรและนักธุรกิจชั้นนำในบรรยากาศที่เป็นกันเอง"
        imagePosition="right"
      />

      {/* Video Section - Vision */}
      <VideoSection
        videoUrl="https://files.manuscdn.com/user_upload_by_module/session_file/110801028/vEMGyMiWVWIKgjvl.mp4"
        title="Ready to Level Up Your Deal Game?"
        description="เตรียมพร้อมสำหรับการเปลี่ยนแปลงครั้งใหญ่ในวงการ Sales และ Business Negotiation ประเทศไทย"
        videoPosition="left"
      />

      {/* Contact Section */}
      <WhiteSection id="contact" title="ติดต่อเรา" centered={true}>
        <div className="max-w-2xl mx-auto text-center">
          <p 
            className="text-xl mb-8 text-gray-700"
            style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", lineHeight: 1.8 }}
          >
            พร้อมที่จะยกระดับทักษะการขายและการเจรจาต่อรองของคุณหรือยัง? ติดต่อเราวันนี้!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">📧</div>
              <h3 
                className="font-semibold mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Email
              </h3>
              <a 
                href="mailto:missdonedeal.dda@gmail.com" 
                className="text-red-600 hover:underline"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                missdonedeal.dda@gmail.com
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">📱</div>
              <h3 
                className="font-semibold mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Phone
              </h3>
              <a 
                href="tel:0613104694" 
                className="text-red-600 hover:underline"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                061 310 4694
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.facebook.com/donedealacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            
            <a 
              href="https://www.instagram.com/donedealacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            
            <a 
              href="https://www.tiktok.com/@done.deal.academy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </WhiteSection>

      {/* Footer */}
      <Footer />
    </div>
  );
}
