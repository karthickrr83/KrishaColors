import { testimonials } from '../data/content';

const Testimonials = () => (
  <section className="container-base py-14">
    <h2 className="section-heading">What Clients Say</h2>
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {testimonials.map((item) => (
        <article key={item.name} className="rounded-2xl border border-blue-50 bg-white p-6 shadow-soft">
          <p className="text-gray-700">“{item.quote}”</p>
          <p className="mt-4 font-semibold text-brand-navy">{item.name}</p>
          <p className="text-sm text-gray-500">{item.role}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Testimonials;
