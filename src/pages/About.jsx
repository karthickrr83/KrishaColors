import Seo from '../components/Seo';
import Testimonials from '../components/Testimonials';

const About = () => (
  <main>
    <Seo
      title="About Us | Painting Contractor in Tamil Nadu"
      description="Learn how Krisha Colors became a trusted painting contractor in Tamil Nadu for quality, safety, and timely completion."
    />
    <section className="container-base py-14">
      <h1 className="section-heading">About Krisha Colors</h1>
      <p className="section-subheading">
        We are a customer-first painting contractor in Tamil Nadu focused on quality materials, skilled painters,
        and transparent project coordination.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-brand-navy">8+ Years Experience</h2>
          <p className="mt-2 text-sm text-gray-600">Successfully completed residential and commercial painting projects.</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-brand-navy">Premium Materials</h2>
          <p className="mt-2 text-sm text-gray-600">We use branded paints and application processes for long-lasting outcomes.</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-brand-navy">On-Time Delivery</h2>
          <p className="mt-2 text-sm text-gray-600">Clear schedules with minimal disruption and post-project cleanup included.</p>
        </article>
      </div>
    </section>
    <Testimonials />
  </main>
);

export default About;
