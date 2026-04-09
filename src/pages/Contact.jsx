import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import SafeWhatsAppButton from '../components/SafeWhatsAppButton';

const Contact = () => (
  <main>
    <Seo
      title="Contact Krisha Colours | Painters in Coimbatore"
      description="Contact Krisha Colours for a fast quote on wall painting, home painting, interior painting and exterior painting in Coimbatore."
      keywords="wall painting Coimbatore, home painting Coimbatore, painters in Coimbatore, interior painting Coimbatore, exterior painting Coimbatore"
    />

    <section className="container-base py-14">
      <h1 className="section-heading">Get a Free Painting Quote in Coimbatore</h1>
      <p className="section-subheading">
        Reach out today and our local painting experts will help you plan the best solution for your home or commercial space.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <aside className="rounded-2xl bg-brand-sky p-6">
          <h2 className="text-2xl font-bold text-brand-navy">Contact Us</h2>

          {/* WhatsApp Button (SAFE) */}
          <div className="mt-6">
            <SafeWhatsAppButton
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition"
            >
              Chat with us on WhatsApp
            </SafeWhatsAppButton>
          </div>

          {/* Email */}
          <p className="mt-6 text-gray-700">
            Email:{' '}
            <a
              href="mailto:crazykarthi83@gmail.com"
              className="text-brand-navy font-semibold"
            >
              crazykarthi83@gmail.com
            </a>
          </p>

          {/* Business Hours */}
          <p className="mt-4 text-sm text-gray-600">
            Business Hours: Mon–Sat, 8:30 AM to 7:00 PM
          </p>

          {/* Service Info */}
          <div className="mt-8 rounded-2xl bg-white p-5 shadow-soft">
            <h3 className="text-lg font-semibold text-brand-navy">Serving</h3>
            <p className="mt-3 text-gray-600">
              Coimbatore and surrounding areas.
            </p>

            <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
              <li>Residential painting</li>
              <li>Commercial painting</li>
              <li>Interior and exterior painting</li>
            </ul>
          </div>
        </aside>

      </div>
    </section>
  </main>
);

export default Contact;