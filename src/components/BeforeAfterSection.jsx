import { beforeAfter } from '../data/content';

const BeforeAfterSection = () => (
  <section className="container-base py-14">
    <h2 className="section-heading">Before & After Transformations</h2>
    <p className="section-subheading">Visible quality difference from preparation to final coat.</p>

    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {beforeAfter.map((item) => (
        <article key={item.id} className="grid gap-3 rounded-2xl bg-white p-4 shadow-soft sm:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium text-gray-500">Before</p>
            <img src={item.before} alt="Before painting" className="h-48 w-full rounded-xl object-cover" loading="lazy" />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-500">After</p>
            <img src={item.after} alt="After painting" className="h-48 w-full rounded-xl object-cover" loading="lazy" />
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default BeforeAfterSection;
