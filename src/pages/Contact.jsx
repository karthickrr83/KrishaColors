import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <main>
    <Seo
      title="Contact | Painting Contractor in Tamil Nadu"
      description="Get a quick quote from Krisha Colors, your reliable painting contractor in Tamil Nadu."
    />
    <section className="container-base py-14">
      <h1 className="section-heading">Get a Free Painting Quote</h1>
      <p className="section-subheading">Share your requirement and our team will call you with the right package and timeline.</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <ContactForm />
        <aside className="rounded-2xl bg-brand-sky p-6">
          <h2 className="text-2xl font-bold text-brand-navy">Contact Details</h2>
          <p className="mt-4 text-gray-700">Phone: +91 97153 34907</p>
          <p className="text-gray-700">WhatsApp: +91 97153 34907</p>
          <p className="text-gray-700">Email: crazykarthi83@gmail.com</p>
          <p className="mt-4 text-sm text-gray-600">Business Hours: Mon–Sat, 8:30 AM to 7:00 PM</p>
        </aside>
      </div>
    </section>
  </main>
);

export default Contact;
