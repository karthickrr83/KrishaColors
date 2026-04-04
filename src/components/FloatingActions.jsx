import { Phone, MessageCircle } from 'lucide-react';

const phone = import.meta.env.VITE_BUSINESS_PHONE || '+919715334907';
const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER || '919715334907';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

      {/* 💬 WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center bg-emerald-500 text-white rounded-full shadow-lg overflow-hidden transition-all duration-300 w-[50px] hover:w-[150px] h-[50px]"
      >
        <div className="flex items-center justify-center w-[50px] h-[50px] shrink-0">
          <MessageCircle size={22} />
        </div>

        <span className="ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pr-4">
          WhatsApp
        </span>
      </a>

      {/* 📞 Call */}
      <a
        href={`tel:${phone}`}
        className="group flex items-center bg-brand-navy text-white rounded-full shadow-lg overflow-hidden transition-all duration-300 w-[50px] hover:w-[130px] h-[50px]"
      >
        <div className="flex items-center justify-center w-[50px] h-[50px] shrink-0">
          <Phone size={22} />
        </div>

        <span className="ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pr-4">
          Call
        </span>
      </a>

    </div>
  );
};

export default FloatingActions;