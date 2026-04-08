import Seo from '../components/Seo';
import ServicesCards from '../components/ServicesCards';
import BeforeAfterSection from '../components/BeforeAfterSection';

const Services = () => (
  <main>
    <Seo
      title="Services | Painters in Coimbatore for Interior & Exterior Painting"
      description="Explore Krisha Colours painting services in Coimbatore for wall painting, home painting, interior painting and exterior painting with trusted workmanship."
      keywords="wall painting Coimbatore, home painting Coimbatore, painters in Coimbatore, interior painting Coimbatore, exterior painting Coimbatore"
    />

    <section className="container-base py-14">
      <h1 className="section-heading">Painting Services in Coimbatore</h1>
      <p className="section-subheading">
        Krisha Colours delivers full-service painting for homes, apartments, villas and commercial spaces in Coimbatore. Our team manages every detail from surface preparation to finish coating so you receive a flawless result.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-brand-navy">Interior Painting</h2>
          <p className="mt-3 text-gray-600">Stylish, low-odor interior painting for living rooms, bedrooms, kitchens and offices. We help choose the right palette to refresh your home with precision and care.</p>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-gray-600">
            <li>Ceiling and wall painting</li>
            <li>Texture wall finishes</li>
            <li>Low VOC, premium paint brands</li>
          </ul>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-brand-navy">Exterior Painting</h2>
          <p className="mt-3 text-gray-600">Exterior painting that protects and beautifies your home facade, boundary walls and commercial storefronts against the Coimbatore climate.</p>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-gray-600">
            <li>Weather-resistant coatings</li>
            <li>Crack repair and sealing</li>
            <li>Facade painting and boundary wall services</li>
          </ul>
        </article>
      </div>
    </section>

    <section className="container-base py-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Why Choose Krisha Colours?</h2>
      <p className="mt-4 text-gray-600 leading-relaxed">
        We are proud to be among the most reliable painters in Coimbatore, delivering high-quality wall painting and home painting with clear communication, expert workmanship, and finished spaces that stand the test of time.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 list-disc pl-5 text-gray-600">
        <li>Experienced painting crews in Coimbatore</li>
        <li>Fast, clean and neighbor-friendly work</li>
        <li>Detailed prep work with premium paint systems</li>
        <li>Transparent pricing and on-time delivery</li>
      </ul>
    </section>

    <ServicesCards />
    <BeforeAfterSection />
  </main>
);

export default Services;
