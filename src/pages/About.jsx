import Seo from '../components/Seo';
import Testimonials from '../components/Testimonials';

const About = () => (
  <main>
    <Seo
      title="About Krisha Colours | Painters in Coimbatore"
      description="Learn how Krisha Colours became a trusted team of painters in Coimbatore for home painting, wall painting, interior painting and exterior painting."
      keywords="wall painting Coimbatore, home painting Coimbatore, painters in Coimbatore, interior painting Coimbatore, exterior painting Coimbatore"
    />

    <section className="container-base py-14">
      <h1 className="section-heading">About Krisha Colours</h1>
      <p className="section-subheading">
        Krisha Colours is a Coimbatore-based painting company offering professional wall painting, home painting and interior painting services for homeowners and businesses across Tamil Nadu.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-brand-navy">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We aim to deliver reliable, premium painting services that improve the look and longevity of your property. Every project is guided by local expertise, attention to detail and a strong commitment to customer satisfaction.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-brand-navy">Local Coimbatore Expertise</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our team understands the Coimbatore climate and uses the right paints, primers and application methods for interior painting, exterior painting and wall painting that lasts.
          </p>
        </div>
      </div>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-brand-navy">Trusted Painters in Coimbatore</h3>
          <p className="mt-2 text-gray-600">Skilled professionals with proven experience in home painting and commercial projects.</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-brand-navy">Quality & Safety</h3>
          <p className="mt-2 text-gray-600">Safe painting practices, clean work areas and premium materials for hassle-free delivery.</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-brand-navy">Customer-Focused Service</h3>
          <p className="mt-2 text-gray-600">Clear timelines, responsive coordination and a polished finish that reflects your style.</p>
        </article>
      </section>

      <section className="mt-12 rounded-2xl bg-brand-sky/10 p-8">
        <h2 className="text-2xl font-semibold text-brand-navy">Why Homeowners Choose Us</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-gray-600">
          <li>Dedicated Coimbatore painting crew for fast project completion</li>
          <li>Detailed surface prep and wall painting with premium coatings</li>
          <li>Interior and exterior painting packages tailored to your budget</li>
          <li>Responsive communication and follow-up support after completion</li>
        </ul>
      </section>
    </section>

    <Testimonials />
  </main>
);

export default About;
