import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import ServicesCards from '../components/ServicesCards';
import GalleryGrid from '../components/GalleryGrid';
import BeforeAfterSection from '../components/BeforeAfterSection';
import Testimonials from '../components/Testimonials';

const Home = () => (
  <div
    style={{
      background:
        'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 45%, #FFFBEB 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >

    {/* 🔵 Global blobs */}
    <div style={{
      position:'absolute', top:-180, right:-180,
      width:600, height:600, borderRadius:'50%',
      background:'rgba(59,130,246,0.07)',
      pointerEvents:'none',
    }} />

    <div style={{
      position:'absolute', bottom:-120, left:-100,
      width:440, height:440, borderRadius:'50%',
      background:'rgba(245,158,11,0.07)',
      pointerEvents:'none',
    }} />

    {/* 🔹 Dot pattern */}
    <div style={{
      position:'absolute', inset:0,
      pointerEvents:'none',
      backgroundImage:
        'radial-gradient(circle, rgba(27,79,216,0.05) 1px, transparent 1px)',
      backgroundSize:'30px 30px',
    }} />

    {/* 🔥 Content */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Seo
        title="Painting Contractor in Tamil Nadu | Premium Home & Commercial Painting"
        description="Professional painting contractor in Tamil Nadu for interior, exterior, texture wall finishes and waterproofing services."
      />

      <HeroSection />
      <ServicesCards />
      <BeforeAfterSection />
      <GalleryGrid />
      <Testimonials />
    </div>

  </div>
);

export default Home;