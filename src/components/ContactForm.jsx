import { useState } from 'react';
import emailjs from '@emailjs/browser';

const initialData = { name: '', phone: '', message: '' };

const ContactForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });

  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus({ type: 'success', text: 'Enquiry sent successfully. We will contact you shortly.' });
      setFormData(initialData);
    } catch (error) {
      setStatus({
        type: 'error',
        text: 'Unable to send enquiry now. Please call or WhatsApp us directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-soft">
      <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={onChange}
        className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2"
      />

      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
        Phone
      </label>
      <input
        id="phone"
        name="phone"
        required
        value={formData.phone}
        onChange={onChange}
        className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2"
      />

      <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={4}
        value={formData.message}
        onChange={onChange}
        className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-brand-navy px-4 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Enquiry'}
      </button>

      {status.text ? (
        <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>
          {status.text}
        </p>
      ) : null}
    </form>
  );
};

export default ContactForm;
