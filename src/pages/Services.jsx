import Seo from '../components/Seo';
import ServicesCards from '../components/ServicesCards';
import BeforeAfterSection from '../components/BeforeAfterSection';

const Services = () => (
  <main>
    <Seo
      title="Services | Painting Contractor in Tamil Nadu"
      description="Explore interior, exterior, texture wall and waterproofing solutions by a trusted painting contractor in Tamil Nadu."
    />
    <section className="container-base py-14">
      <h1 className="section-heading">Painting Services</h1>
      <p className="section-subheading">Complete painting execution from consultation and color planning to delivery and cleanup.</p>
    </section>
    <ServicesCards />
    <BeforeAfterSection />
  </main>
);

export default Services;
