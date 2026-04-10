import { Phone } from "lucide-react";

const phone = import.meta.env.VITE_BUSINESS_PHONE || "+919715334907";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`tel:${phone}`}
        className="flex items-center justify-center w-[56px] h-[56px] rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone size={22} />
      </a>
    </div>
  );
};

export default FloatingActions;