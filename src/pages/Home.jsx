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
        title="Krisha Colours | Wall Painting & Home Painting in Coimbatore"
        description="Krisha Colours offers expert wall painting, home painting, interior painting and exterior painting services in Coimbatore with reliable painters and premium finishes."
        keywords="wall painting Coimbatore, home painting Coimbatore, painters in Coimbatore, interior painting Coimbatore, exterior painting Coimbatore"
      />

      <HeroSection />

      <section className="container-base py-14">
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
            Trusted Wall Painting and Home Painting in Coimbatore
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            Krisha Colours is your local team of painters in Coimbatore, delivering clean, timely and beautiful interior painting, exterior painting and wall painting solutions for homes and businesses.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We use premium paints, modern colour consulting and careful surface preparation so every Coimbatore project looks fresh, polished and long lasting.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy">Interior Painting Coimbatore</h3>
              <p className="mt-3 text-gray-600">Low-odor home painting for bedrooms, living rooms, kitchens and interiors with smooth, durable finishes.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy">Exterior Painting Coimbatore</h3>
              <p className="mt-3 text-gray-600">Weatherproof exterior painting and facade renovation built to withstand Tamil Nadu heat and monsoon seasons.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy">Wall Painting Coimbatore</h3>
              <p className="mt-3 text-gray-600">Accent walls, feature walls and texture wall finishes for vivid, modern interiors and branded exteriors.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy">Residential & Commercial</h3>
              <p className="mt-3 text-gray-600">From individual homes to shops and offices, our painters in Coimbatore deliver quality with minimal disruption.</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesCards />
      <BeforeAfterSection />
      <GalleryGrid />
      <Testimonials />
    </div>

  </div>
);

export default Home;