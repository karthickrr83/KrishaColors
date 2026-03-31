const phone = import.meta.env.VITE_BUSINESS_PHONE || '+919715334907';
const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER || '919715334907';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg"
      >
        WhatsApp
      </a>
      <a href={`tel:${phone}`} className="rounded-full bg-brand-navy px-4 py-3 text-sm font-semibold text-white shadow-lg">
        Call
      </a>
    </div>
  );
};

export default FloatingActions;
