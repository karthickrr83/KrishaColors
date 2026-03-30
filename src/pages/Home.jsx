import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import ServicesCards from '../components/ServicesCards';
import GalleryGrid from '../components/GalleryGrid';
import BeforeAfterSection from '../components/BeforeAfterSection';
import Testimonials from '../components/Testimonials';

const Home = () => (
  <>
    <Seo
      title="Painting Contractor in Tamil Nadu | Premium Home & Commercial Painting"
      description="Professional painting contractor in Tamil Nadu for interior, exterior, texture wall finishes and waterproofing services."
    />
    <HeroSection />
    <ServicesCards />
    <BeforeAfterSection />
    <GalleryGrid />
    <Testimonials />
  </>
);

export default Home;
