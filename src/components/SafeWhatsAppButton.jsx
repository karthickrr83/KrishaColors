const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919715334907';
const whatsappMessage = encodeURIComponent('Hello Krisha Colors! I would like a quote for painting services.');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const SafeWhatsAppButton = ({ className, ariaLabel, children, ...props }) => {
  const openWhatsApp = (event) => {
    event.preventDefault();
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      type="button"
      onClick={openWhatsApp}
      className={className}
      aria-label={ariaLabel || 'Chat with us on WhatsApp'}
      {...props}
    >
      {children}
    </button>
  );
};

export default SafeWhatsAppButton;
