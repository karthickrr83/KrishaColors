const phone = import.meta.env.VITE_BUSINESS_PHONE || '+919999999999';
const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER || '919999999999';

const HeroSection = () => {
  return (
    <section className="container-base grid gap-10 py-14 md:grid-cols-2 md:py-24">
      <div>
        <p className="mb-3 inline-block rounded-full bg-brand-sky px-3 py-1 text-sm font-semibold text-brand-navy">
          Trusted Painting Contractor in Tamil Nadu
        </p>
        <h1 className="text-4xl font-extrabold leading-tight text-brand-slate md:text-5xl">
          Premium Painting Services That Transform Spaces & Build Trust
        </h1>
        <p className="mt-5 max-w-xl text-lg text-gray-600">
          Krisha Colors delivers interior, exterior, and designer painting with expert workmanship,
          transparent pricing, and on-time completion.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${phone}`}
            className="rounded-lg bg-brand-navy px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Call Now
          </a>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
          <a
            href="/contact"
            className="rounded-lg border border-brand-navy px-5 py-3 font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
          >
            Enquiry
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl shadow-soft">
        <img
          src="https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=80"
          alt="Professional painters at work"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
