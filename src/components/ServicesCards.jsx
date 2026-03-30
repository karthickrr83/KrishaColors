import { services } from '../data/content';

const ServicesCards = () => (
  <section className="container-base py-14">
    <h2 className="section-heading">Our Core Services</h2>
    <p className="section-subheading">End-to-end painting solutions for homes, apartments, villas, and commercial spaces.</p>
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <article
          key={service.title}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition hover:-translate-y-1"
        >
          <div className="mb-3 text-3xl">{service.icon}</div>
          <h3 className="text-lg font-semibold text-brand-navy">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{service.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default ServicesCards;
